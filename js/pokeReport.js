//クッキー用
const mask32a_nodp       = 0b00001111000000000000000000000000;
const mask32a_no         = 0b00000000111111111110000000000000;
const mask32a_lv         = 0b00000000000000000001111111000000;    
const mask32a_food1      = 0b00000000000000000000000000110000;
const mask32a_food2      = 0b00000000000000000000000000001100;
const mask32a_food3      = 0b00000000000000000000000000000011;

const mask32b_charUp     = 0b00000000000000000111000000000000;
const mask32b_charDown   = 0b00000000000000000000111000000000;
const mask32b_charAll    = 0b00000000000000000111111000000000;
const mask32b_ribbonEv   = 0b00000000000000000000000110000000;          
const mask32b_ribbonLv   = 0b00000000000000000000000001110000;
const mask32b_backGround = 0b00000000000000000000000000001111; 

const mask32c_sub1       = 0b00000001111100000000000000000000;
const mask32c_sub2       = 0b00000000000011111000000000000000;
const mask32c_sub3       = 0b00000000000000000111110000000000;
const mask32c_sub4       = 0b00000000000000000000001111100000;
const mask32c_sub5       = 0b00000000000000000000000000011111;
                           
const sub_num_oteBonus      = 0b00001;
const sub_num_speedS        = 0b00010;
const sub_num_speedM        = 0b00011;
const sub_num_foodS         = 0b00100;
const sub_num_foodM         = 0b00101;
const sub_num_skillS        = 0b00110;
const sub_num_skillM        = 0b00111;
const sub_num_skillLvUpS    = 0b01000;
const sub_num_skillLvUpM    = 0b01001;
const sub_num_berryS        = 0b01010;
const sub_num_inventoryS    = 0b01011;
const sub_num_inventoryM    = 0b01100;
const sub_num_inventoryL    = 0b01101;
const sub_num_expBonus      = 0b01110;
const sub_num_genkiBonus    = 0b01111;
const sub_num_yumeBonus     = 0b10000;
const sub_num_researchBonus = 0b10001;
const sub_num_ult           = 0b10010;

const mask_op_recipe_list_min_index       = 0b011110000000000000000000000000;
const mask_op_recipe_category_index       = 0b000001110000000000000000000000;
const mask_op_recipe_name_index           = 0b000000001111111100000000000000; 
const mask_result_op_visible_Lv30         = 0b000000000000000010000000000000;
const mask_result_op_visible_Lv60         = 0b000000000000000001000000000000;
const mask_result_op_visible_MyPoke       = 0b000000000000000000100000000000;
const mask_result_op_visible_MyPokeLv30ft = 0b000000000000000000010000000000;
const mask_result_op_visible_MyPokeLv50ft = 0b000000000000000000001000000000;
const mask_result_op_visible_MyPokeLv60ft = 0b000000000000000000000100000000;
const mask_result_op_visible_FullyEvolved = 0b000000000000000000000010000000;
const mask_result_op_visible_minNum       = 0b000000000000000000000001111000;
const mask_mypoke_op_food_ranking_skyBlue = 0b000000000000000000000000000100;
//const mask_mypoke_op_listup_over_Lv60     = 0b000000000000000000000000000010;
const mask16_nodp_plan       = 0b0111100000000000;
const mask16_no_plan         = 0b0000011111111111;    

class PokeReport{
    constructor(pokedex, recipedb){
        this.pokedex = pokedex;
        this.recipedb = recipedb;
        this.combinationsInitialized = false;
        this.mypokeInfoList = [];
    }

    initialize(){
        this.pokedex.pokemons.forEach(p => p.setFoodCombinations());
        this.combinationsInitialized = true;

        this.pokeFoodMap = {};
        //食べ物ごと
        recipedb.foods.forEach(f => {
            let cands = this.pokedex.pokemons.filter(p => p.fullyEvolved && p.existAnyInFoodList(f.name))
                         .map(p => ({pokemon: p.name, name: p.name, expection: Math.max(...p.foodCombinations.map(fc => fc.getExpectionOf(f.name)))}));
            let p = cands.reduce((prev, cur) => (cur.expection > prev.expection ? cur: prev));
            this.pokeFoodMap[f.name] = {NoAdjust: {no: this.pokedex.getPokemonByName(p.pokemon).no, name: p.pokemon, expection: p.expection}};
        });
    }


  
    createReport(foods, reportCountMax, min = 0, onlyFullyEvolved = false, showLv30 = true, showLv60 = true){
        if (!this.combinationsInitialized){
            alert("食べ物組み合わせが生成されていません。初期化をしてから実行してください。")
            return null;
        }

        let targPokemons = (onlyFullyEvolved) ? this.pokedex.fullyEvolvedPokemons : this.pokedex.pokemons;

        let targetPokemons = targPokemons.filter(p => (!onlyFullyEvolved || p.fullyEvolved) && p.existAnyInFoodList(foods));
        let tbody = document.createElement("tbody");
        tbody.id = "report_result";

        let pokeAndComb = [];   //マイポケではない
        let foodName = foods[0];

        for (let i = 0; i < targetPokemons.length; i++){
            let p = targetPokemons[i];
            p.foodCombinations.forEach(c => {
                if (c.containsFoodsAtLeast(foods, min) && (c.lv != 30 || showLv30) && (c.lv != 60 || showLv60)){
                    pokeAndComb.push({poke: p, comb: c});         
                }      
            });
        }
        pokeAndComb.sort((a, b) => b.comb.totalExpectionFinally - a.comb.totalExpectionFinally).slice(0, reportCountMax)
                    .forEach(x => tbody.appendChild(this.createPokemonInfoRow(x.poke, x.comb, foodName)));
        this.setCurrentOptionsToCookie();
        return tbody;
    }


    setMyPokeListToCookie(){
        let options = document.getElementById("input_mypoke_registered").children;
        let sorted = Array.from(options).sort((a, b) => a.textContent > b.textContent ? 1 : -1);
        let values = [];
        for (let i = 0; i < sorted.length; i++){
            values.push(sorted[i].value);
        }
        console.log("mylist saved.");
        setCookie("rmpl", values.join("/"), 30)
    }

    setCurrentOptionsToCookie(){
        let n = 0;
        n += numToBit(document.getElementById("option_ingredient_min_count").selectedIndex, mask_op_recipe_list_min_index );
        n += numToBit(document.getElementById("select_recipe_category").selectedIndex, mask_op_recipe_category_index);
        n += numToBit(document.getElementById("select_recipe").selectedIndex, mask_op_recipe_name_index);
        n += numToBit(document.getElementById("option_poke_30").checked, mask_result_op_visible_Lv30);    
        n += numToBit(document.getElementById("option_poke_60").checked, mask_result_op_visible_Lv60);  

        n += numToBit(document.getElementById("option_mypoke_visible").checked, mask_result_op_visible_MyPoke); 
        n += numToBit(document.getElementById("option_potential_30").checked, mask_result_op_visible_MyPokeLv30ft); 
        n += numToBit(document.getElementById("option_potential_50").checked, mask_result_op_visible_MyPokeLv50ft); 
        n += numToBit(document.getElementById("option_potential_60").checked, mask_result_op_visible_MyPokeLv60ft);
        n += numToBit(document.getElementById("only_fully_evolved").checked, mask_result_op_visible_FullyEvolved);
        n += numToBit(document.getElementById("food_min").selectedIndex, mask_result_op_visible_minNum);
        n += numToBit(document.getElementById("option_mypoke_listup_backcolor").checked, mask_mypoke_op_food_ranking_skyBlue);
        n += numToBit(0, 0b000000000000000000000000000010);  //option_mypoke_quick_minを廃止
        setCookie("ropt", n.toString(32), 30);
    }


    setOptionsFromCookie(c){
        if (c == null || c == "") return;
        
        let n = parseInt(c, 32);

        document.getElementById("option_poke_30").checked = bitToNum(n, mask_result_op_visible_Lv30);    
        document.getElementById("option_poke_60").checked = bitToNum(n, mask_result_op_visible_Lv60);  

        document.getElementById("option_mypoke_visible").checked = bitToNum(n, mask_result_op_visible_MyPoke); 
        document.getElementById("option_potential_30").checked = bitToNum(n, mask_result_op_visible_MyPokeLv30ft); 
        document.getElementById("option_potential_50").checked = bitToNum(n, mask_result_op_visible_MyPokeLv50ft); 
        document.getElementById("option_potential_60").checked = bitToNum(n, mask_result_op_visible_MyPokeLv60ft);
        document.getElementById("only_fully_evolved").checked = bitToNum(n, mask_result_op_visible_FullyEvolved);
        document.getElementById("food_min").selectedIndex = bitToNum(n, mask_result_op_visible_minNum);
        document.getElementById("option_mypoke_listup_backcolor").checked = bitToNum(n, mask_mypoke_op_food_ranking_skyBlue);
        //廃止
        //document.getElementById("option_mypoke_quick_min").checked = bitToNum(n, mask_mypoke_op_listup_over_Lv60);
        let sb_recipe_min = document.getElementById("option_ingredient_min_count");
        sb_recipe_min.selectedIndex = bitToNum(n, mask_op_recipe_list_min_index);
            
        let sb_cat = document.getElementById("select_recipe_category");        
        sb_cat.selectedIndex = bitToNum(n, mask_op_recipe_category_index);        
        selectRecipeCategory(sb_cat);

        //いったんいらない気がするからやめる
        //let sb_recipe = document.getElementById("select_recipe");
        //sb_recipe.selectedIndex = bitToNum(n, mask_op_recipe_name_index);
        //selectFoodsByRecipe(sb_recipe);
    }




    setMyPokeFoodListInfo(tbody, jsonList, onlySkyBlueGold = false){
        let createRow = (food, pacList) => {
            let sorted = pacList.sort((a, b) => b.comb.getExpectionOf(food) - a.comb.getExpectionOf(food));            
            let tr1 = tbody.insertRow();
            tr1.classList.add("first-row");
            let fImg = document.createElement("img");
            fImg.src = "img/food/" + food + ".png";
            fImg.classList.add("ex-tiny");
            let foodImgCell = tr1.insertCell();
            foodImgCell.appendChild(fImg);
            if (sorted.length == 0){
                tr1.insertCell();
                tr1.insertCell();
                tr1.insertCell();
                tr1.insertCell();
                return;
            }
           
            let selector = "td.mypoke_outline, td.mypoke_outline~td";            
            let insertInfo = (pac, rank, tr = null) => {
                tr = tr ?? tbody.insertRow();
                //pac.comb.insertResultTo(tr, food, pac.poke, this.createIdentifierOf(pac.json));
                //this.createPokemonInfoRow(tr, pac.comb, food, pacjson, this.createIdentifierOf(pac.json));
                this.insertCombinationResultTo(tr, pac.poke, pac.comb, food, this.createIdentifierOf(pac.json))
                
                tr.querySelectorAll(selector).forEach(el => {
                    this.setColorClassTo(el, pac.json.backgroundColor);
                });
                foodImgCell.rowSpan = rank;
            };            
        
            for (let i = 0; i < (sorted.length <= 3 ? sorted.length : 3); i++){
                insertInfo(sorted[i], i + 1, (i == 0) ? tr1 : null);
            }    
        };

        this.initializeMyPokeInfo(jsonList, onlySkyBlueGold);
        const mil = this.mypokeInfoList;

        //MyPokeを食材ごとに割り振る（重複あり）
        this.recipedb.foods.sort((a, b) => a.power - b.power).map(f => f.name).forEach(f =>{
            let x = [];
            for (let i = 0; i < mil.length; i++){
                let pac = mil[i];
                if (pac.comb.foods.some(x => x.name == f)) x.push(pac);
            }
            createRow(f, x);
        });

        this.setMypokeToPokeFoodMap();
        this.setFoodRecipeEfficiencyResults();
    }


    //mypokeのjsonファイルを保持しておく
    initializeMyPokeInfo(jsonList, onlySkyBlueGold = false){
        let pokeAndComb = [];
        for (let i = 0; i < jsonList.length; i++){
            let j = jsonList[i];
            let p = this.pokedex.getPokemonByNo(j.no);
            if (onlySkyBlueGold && (j.backgroundColor != 0 && j.backgroundColor != 7)) continue;
            pokeAndComb.push({poke: p, json: j, comb:p.createFoodCombination(j, j.lv, j.foodCode)});        
        }
        this.mypokeInfoList = pokeAndComb;
    }


    setMypokeToPokeFoodMap(){
        const mil = this.mypokeInfoList;
        Object.keys(this.pokeFoodMap).forEach(f => {
            let sortedCands = mil.map(m => ({info: m, expection: m.comb.getExpectionOf(f)})).sort((a, b) => b.expection - a.expection).filter(x => x.expection > 0);
            let max = (sortedCands.length == 0) ? null : sortedCands[0];
    
            this.pokeFoodMap[f].MyPoke = (max == null) ? null : 
                { no: max.info.json.no,
                  name: max.info.json.name +  this.createIdentifierOf(max.info.json) + " Lv" + max.info.json.lv, 
                  expection: max.expection,
                  cands: sortedCands
                }
        });
    }


    setFoodRecipeEfficiencyResults(){
        const min = Number(document.getElementById("option_ingredient_min_count").value);

        const setRecipes = (id, recipes) => {
            const createDiv = (classname, text = "") =>{
                const el = document.createElement("div");
                el.className = classname;
                el.textContent = text;
                return el
            };            
            const createInfoRow = (caption, text, backcolor, backcolorTarget = 0) => {//backcolorTargetは0でrow,1～3はセル
                const row = createDiv("recipe_efficiency_info1_row");
                row.appendChild(createDiv("recipe_efficiency_info1_cell"));
                row.appendChild(createDiv("recipe_efficiency_info1_cell", caption));
                row.appendChild(createDiv("recipe_efficiency_info1_cell", text));

                if (backcolor != undefined){
                    ((backcolorTarget == 0) ? row : row.children[backcolorTarget - 1]).style.backgroundColor = backcolor;
                }
                return row;
            };
            const createTr = (items) => {
                const tr = document.createElement("tr");
                items.forEach(item => {
                    const c = tr.insertCell();
                    if (typeof item == "object"){
                        if (item.withImage){
                            c.innerHTML = `<img src=\"img/food/${item.text}.png\" style=\"height:1em;\"> ${item.text}`;
                        }
                        else{
                            c.textContent = item.text;
                        }
                        
                        c.style.backgroundColor = item.color;
                    }
                    else{
                        c.textContent = item;           
                    }                    
                });
                return tr;
            };
            const getCellColor = (min) => {
                return (min <= 240) ? "Honeydew"
                        : (min <= 360) ? "white"
                         : (min <= 540) ? "lightyellow" : "mistyrose"; 
            };
            const getTotalCellColor = (min) => {
                return (min <= 960) ? "Honeydew"
                        : (min <= 1440) ? "white"
                         : (min <= 2160) ? "lightyellow" : "mistyrose"; 
            };
            
            const parent = document.getElementById(id);

            /*やばいことになった*/
            recipes.forEach(r => {
                if (r.totalFoodsCount < min) return;
                //tableの準備
                const table = document.createElement("table");
                const thead = document.createElement("thead");
                const tbody = document.createElement("tbody");                
                table.className = "recipe_efficiency_table_outline";
                table.appendChild(thead);
                table.appendChild(tbody);
                thead.appendChild(createTr(["食材名", "個数", "標準時間", "Myポケ"]));

                let totalMinNa = 0;
                let totalMinMp = 0;
                r.ingredients.forEach(x => {
                    const na = this.pokeFoodMap[x.name].NoAdjust;
                    na.tmpRawMin = (x.num / na.expection) * 60 * 24;
                    na.tmpHour = Math.floor(na.tmpRawMin / 60);
                    na.tmpMin = Math.ceil(na.tmpRawMin % 60);
                    na.tmpTimeStr = na.tmpHour.toString().padStart(2, "0") + ":" + na.tmpMin.toString().padStart(2, "0");
                    totalMinNa += na.tmpRawMin;

                    let mp = this.pokeFoodMap[x.name].MyPoke;
                    if (mp != null){
                        mp.tmpRawMin = (x.num / mp.expection) * 60 * 24;
                        mp.tmpHour = Math.floor(mp.tmpRawMin / 60);
                        mp.tmpMin = Math.ceil(mp.tmpRawMin % 60);
                        mp.tmpTimeStr = mp.tmpHour.toString().padStart(2, "0") + ":" + mp.tmpMin.toString().padStart(2, "0");
                        mp.Success = true;
                        totalMinMp += mp.tmpRawMin;
                    }
                    else{
                        mp = {tmpTimeStr: "----", Success: false};
                        totalMinMp = -1;
                    }
                    
                    //2体で3回料理できる基準 4h: 240m, 3体で3回料理できる基準 6h: 360m, 3体で2回料理できる基準: 9h: 540m
                    tbody.appendChild(createTr([{text: x.name, withImage: true}, x.num, {text: na.tmpTimeStr, color: getCellColor(na.tmpRawMin)}, {text: mp.tmpTimeStr, color: getCellColor(mp.tmpRawMin)}]));
                });

                const totalTimeStrNa = Math.floor(totalMinNa / 60).toString().padStart(2, "0") + ":" + Math.floor(totalMinNa % 60).toString().padStart(2, "0");
                const totalTimeStrMp = (totalMinMp == -1) ? "----" : Math.floor(totalMinMp / 60).toString().padStart(2, "0") + ":" + Math.floor(totalMinMp % 60).toString().padStart(2, "0");
                tbody.appendChild(createTr(["合計:", r.totalFoodsCount, {text: totalTimeStrNa, color: getTotalCellColor(totalMinNa)}, {text: totalTimeStrMp, color: getTotalCellColor(totalMinMp)}]));

                //コンテナーを作り順番に追加
                const container = createDiv("recipe_efficiency_container");
                const header = createDiv("recipe_efficiency_header");
                header.appendChild(createDiv("recipe_efficiency_header_item", r.name));
                header.appendChild(createDiv("recipe_efficiency_header_item", r.energy.toLocaleString()));
                container.appendChild(header);

                const infoContainer = createDiv("recipe_efficiency_info1_container");
                const imgContainer = createDiv("recipe_efficiency_image_container");
                const imgEl = document.createElement("img");
                imgEl.src = "img/recipe/" + r.name + ".png";
                imgContainer.appendChild(imgEl);
                infoContainer.appendChild(imgContainer);

                const infoArea = createDiv("recipe_efficiency_info1_area");
                const requiredExpansion = Math.ceil(Math.max((r.totalFoodsCount - 81), 0) / 32);
                infoArea.appendChild(createInfoRow("食材数合計:", r.totalFoodsCount));
                infoArea.appendChild(createInfoRow("なべ拡張:", requiredExpansion, (requiredExpansion > 1) ? "MistyRose" : (requiredExpansion > 0) ? "LightYellow" : "", 3));
                infoArea.appendChild(createInfoRow("標準効率:", Math.floor(r.energy / totalMinNa * 60).toLocaleString() + " /h"));
                infoArea.appendChild(createInfoRow("Myポケ:"  , (totalMinMp == -1) ? "----" : Math.floor(r.energy / totalMinMp * 60).toLocaleString() + " /h"));
                infoContainer.appendChild(infoArea);
                container.appendChild(infoContainer);
                container.appendChild(table);
                parent.appendChild(container);

                const btn = document.createElement("div");
                btn.textContent = "詳細を計算";
                btn.style.backgroundColor = "aliceBlue";
                container.appendChild(btn);
                btn.addEventListener("click", () => this.insertMypokeRecipeEfficiency(btn, r.name));
                //console.log(arr);
                //return;


                //this.insertMypokeRecipeEfficiency(container, r.name);

                
                return;
            });

        };

        setRecipes('mypoke_quick_check_curry', this.recipedb.getAllCurryRecipes().sort((a, b) => b.energy - a.energy));
        setRecipes('mypoke_quick_check_salad', this.recipedb.getAllSaladRecipes().sort((a, b) => b.energy - a.energy));
        setRecipes('mypoke_quick_check_sweet', this.recipedb.getAllSweetRecipes().sort((a, b) => b.energy - a.energy));
    }

    insertMypokeRecipeEfficiency(span, recipeName){
        const container = span.parentNode;
        const getCombinations = (arr, n) => {
            let results = [{items: [], nextIndex: 0}];
            for (let i = 0; i < n; i++){
                let res = [];
                for (let comb of results){
                    for (let k = comb.nextIndex; k < arr.length; k++){                          
                        res.push({items: [...comb.items, arr[k]], nextIndex: k + 1});
                    }
                }
                results = res;
            }
            return results.map(x => x.items);
        };

        const createDiv = (classname, text = "") =>{
            const el = document.createElement("div");
            el.className = classname;
            el.textContent = text;
            return el
        };     

        const createTr = (items) => {
                const tr = document.createElement("tr");
                items.forEach(item => {
                    const c = tr.insertCell();
                    if (typeof item == "object"){
                        if (item.withImage){
                            c.innerHTML = `<img src=\"img/${item.folder}/${item.text}.png\"${item.disabled ? " class=\"disabled\" style=\"width:1.75em;\"" : ""}>`;
                        }
                        else{
                            c.textContent = item.text;
                        }
                        
                        c.style.backgroundColor = item.color;
                    }
                    else{
                        c.textContent = item;           
                    }                    
                });
                return tr;
        };

        const createTrHeader = (items) => {
                const tr = document.createElement("tr");
                items.forEach(item => {
                    const c = document.createElement("th");
                    if (typeof item == "object"){
                        if (item.withImage){
                            c.innerHTML = `<img src=\"img/${item.folder}/${item.text}.png\">`;
                        }
                        else{
                            c.textContent = item.text;
                        }
                        
                        c.style.backgroundColor = item.color;
                    }
                    else{
                        c.textContent = item;           
                    }
                    tr.appendChild(c);                    
                });
                return tr;
        }

        console.log("◆" + recipeName);
        const r = this.recipedb.getRecipeOf(recipeName);
        const candsTop20 = this.mypokeInfoList.map(x => ({info: x, expection: x.comb.getExpectionOf(r.ingredients.map(x => x.name))})).filter(x => x.expection > 0).sort((a, b) => b.expection - a.expection).slice(0, 20);
        const tmpCombsExpectionRateMap = getCombinations(candsTop20, 4).map(combs => {
            let x = {};
            let totalRate = 0;
            r.ingredients.forEach(f => {
                const sum = combs.reduce((accum, obj) => accum + obj.info.comb.getExpectionOf(f.name), 0);
                const rate = (sum == 0) ? 0 : (sum / (f.num * 3));                        
                x[f.name] = {food: f.name, rate: (rate > 1.5) ? 1.5 + ((rate - 1.5) / 10) : Math.round(rate * 100) / 100, expection: sum};
                totalRate += x[f.name].rate;
            });
            return {combs: combs, totalRate: Math.round(totalRate * 100) / 100, rateMap: x};
        }).sort((a, b) => b.totalRate - a.totalRate).slice(0, 400);                
        const topRateMap = {};
        topRateMap["Most Efficient 3 Members"] = {combs: tmpCombsExpectionRateMap[0].combs, rateMap: tmpCombsExpectionRateMap[0].rateMap, totalRate: tmpCombsExpectionRateMap[0].totalRate};
        r.ingredients.forEach(f => {                    
            tmpCombsExpectionRateMap.forEach(x => {
                x.totalRate = Object.keys(x.rateMap).reduce((accum, key) => accum + ((key == f.name) ? 0 : (x.rateMap[key]?.rate ?? 0)), 0);
            });
            const top = tmpCombsExpectionRateMap.sort((a, b) => (b.totalRate - a.totalRate))[0];
            topRateMap[f.name] = {combs: top.combs, rateMap: top.rateMap, totalRate: Math.round(top.totalRate * 100) / 100};
        });

        const keys = Object.keys(topRateMap);
        for (let i = 0; i < keys.length; i++){
            const key = keys[i];
            const header = createDiv("recipe_efficiency_header");
            const table = document.createElement("table");
            const thead = document.createElement("thead");
            const tbody = document.createElement("tbody");                
            table.className = "recipe_efficiency_table_topRate";
            table.appendChild(thead);
            table.appendChild(tbody);

            const m = topRateMap[key];
            const pokeArgs = m.combs.map(comb => ({text: comb.info.poke.no.toString().padStart(3, "0"), folder: "poke", withImage:true}));
            thead.appendChild(createTrHeader(["", ...pokeArgs, "合計", ""]));   
            
            //中身
            r.ingredients.forEach(x => {
                const foodExpections = m.combs.map(c => c.info.comb.getExpectionOf(x.name));
                const totalExpection = foodExpections.reduce((accum, cur) => accum + cur, 0);
                const timeObj = totalExpection == 0 ? this.minutesToTime(0) : this.minutesToTime(x.num /  totalExpection * 60 * 24);
                tbody.appendChild(createTr([
                    {withImage: true, folder: "food", text: x.name, disabled: key == x.name},
                     ...foodExpections.map(y => y == 0 ? "" : y),
                     timeObj.timeStr,
                     ""
                ]));
            });

            
            container.appendChild(header);
            container.appendChild(table);
            header.appendChild(createDiv("recipe_efficiency_header_item", (i == 0) ? key : key + " を除く食材"));
            header.appendChild(createDiv("recipe_efficiency_header_item", m.totalRate));
            
        }
        container.removeChild(span);                
    }

    minutesToTime(min){
        const result = {};
        result.rawMin = min;
        result.hour = Math.floor(min / 60);
        result.minute = Math.ceil(min % 60);
        result.timeStr = result.rawMin == 0 ? "----" : result.hour.toString().padStart(2, "0") + ":" + result.minute.toString().padStart(2, "0");
        return result;
    }




    //tbのresult_tableはsetResultOfされた時に追加されるので、ない時もあるかも
    insertMyPokeListInto(tbody, jsonList, foods, foodMin, showPotential30, showPotential50, showPotential60){
        for (let i = 0; i < jsonList.length; i++){
            let json = jsonList[i];
            let poke = this.pokedex.getPokemonByName(json.name);
     
            if (!poke.existAnyInFoodList(foods)) continue;//そもそも食材含んでなかったら処理いらない

            this.insertMyPokeRowInto(tbody, poke, json, json.lv, foods, foodMin, json.backgroundColor);

            if (json.lv < 30 && showPotential30){
                this.setSubSkillsEnabled(json, 30);
                this.insertMyPokeRowInto(tbody, poke, json, 30, foods, foodMin, 3);
            }

            if (json.lv < 50 && showPotential50){
                this.setSubSkillsEnabled(json, 50);
                this.insertMyPokeRowInto(tbody, poke, json, 50, foods, foodMin, 4);
            }

            if (json.lv < 60 && showPotential60){
                this.setSubSkillsEnabled(json, 60);
                this.insertMyPokeRowInto(tbody, poke, json, 60, foods, foodMin, 5);
            }
        }        
    }


    insertMyPokeRowInto(tbody, poke, json, lv, foods, foodMin, backgroundColorIndex = -1){//自分で登録したものは背景色がjsonに含まれているのでわざわざ指定しない
        let comb = poke.createFoodCombination(json, lv);
        if (!comb.containsFoodsAtLeast(foods, foodMin)) return;

        let tr = this.createMyPokemonInfoRow(poke, comb, foods[0], json);
        backgroundColorIndex = (backgroundColorIndex == -1) ? 0 : backgroundColorIndex;
        this.setColorClassTo(tr, backgroundColorIndex)

        let rows = tbody.children;
        let target = comb.getExpectionOf(foods);

        for (let i = 0; i < rows.length; i++){
            let value = rows[i].getAttribute('expection_total');
            if (value <= target){
                tbody.insertBefore(tr, rows[i]);
                return;
            }
        }
        tbody.appendChild(tr);
    }

    


    createPokemonInfoRow(poke, comb, food, json = null, identifier = null){
        let tr = document.createElement("tr");

        //comb.insertResultTo(r, food, poke);昔のやりかた
        this.insertCombinationResultTo(tr, poke, comb, food);
       
        return tr;
    }

    createMyPokemonInfoRow(poke, comb, food, json){
        let tr = document.createElement("tr");
        //comb.insertResultTo(r, food, poke, this.createIdentifierOf(json));昔のやりかた
        //this.createPokemonInfoRow(poke, comb, food, json, this.createIdentifierOf(json));
        this.insertCombinationResultTo(tr, poke, comb, food, this.createIdentifierOf(json));
        return tr;
    }

    insertCombinationResultTo(tr, poke, comb, food, identifier = null, noSetCombinationResult = false){
        tr.setAttribute("expection_total", comb.totalExpectionFinally);
        let cell = tr.insertCell();
        cell.classList.add("mypoke_outline");
        let img = document.createElement("img");
        img.src = "img/poke/" + String(poke.no).padStart(3, '0') + ".png"
        img.classList.add("tiny");
        cell.appendChild(img);

        if (identifier != null){
            let id = document.createElement("span");
            id.classList.add("mypoke_identifier");
            id.textContent = identifier;
            cell.appendChild(id);
        }

        let lv = document.createElement("span");
        lv.textContent = "Lv" + comb.lv;
        cell.appendChild(lv);

        for (let i = 0; i < comb.code.length; i++){
            let c = comb.code[i];
            let fImg = document.createElement("img");
            let food = (c == "A") ? poke.food1
                      : (c == "B") ? poke.food2 : poke.food3;
            fImg.src = "img/food/" + food + ".png";
            fImg.classList.add("ex-tiny");
            if (i == 1 && comb.lv < 30) fImg.classList.add("disabled");
            if (i == 2 && comb.lv < 60) fImg.classList.add("disabled");
            cell.appendChild(fImg);
        }

        if (noSetCombinationResult) return;
        this.setCombinationResultTo(tr, comb, food);
    } 

    setCombinationResultTo(row, comb, targetFoodName){
        if (comb.containsFoodsAtLeast(targetFoodName, 1)){
            for (let i = 0; i < 3; i++){    //多分これはクリックした食材を一番左にしたいんだと思う
                if (comb.foods[i].name == targetFoodName){
                    row.appendChild(this.createFoodNumCell(comb, i));
                    break;
                }
            }
    
            for (let i = 0; i < 3; i++){            //i=0かつfoods[0].name==targetの場合はどうすんの？ と思ったら最低でもi=1からじゃないと通らない
                if (i >= comb.foods.length) {       //targetは最初に載せているので、それ以外だったら追加する
                    row.appendChild(this.createFoodNumCell(comb, i));
                } else if (comb.foods[i].name != targetFoodName){
                    row.appendChild(this.createFoodNumCell(comb, i));
                }
            }
        } else {        //食材ターゲットを複数選択した際にターゲットが含まれないポケモンも登場する
            for (let i = 0; i < 3; i++){                
                row.appendChild(this.createFoodNumCell(comb, i));
            }
        }
    }

    createFoodNumCell(comb, index){
        let c = document.createElement("td");
        if (index >= comb.foods.length){
            c.setAttribute('value', 0);
            return c;
        }

        let img = document.createElement('img');
        img.classList.add("tiny");
        img.src = "img/food/" + comb.foods[index].name + ".png";        
        c.appendChild(img);

        let num = comb.foods[index].expection;
        let numEl = document.createElement('strong');
        numEl.style.zIndex = 1;
        numEl.textContent = num;
        c.appendChild(numEl);
        c.setAttribute('name', comb.foods[index].name);
        c.setAttribute('value', num);
        c.classList.add('food_num');
        let dig = (num < 10) ? "digit1"
                 : (num < 100) ? "digit2" : "digit3";
                 c.classList.add(dig);
        return c;
    }



    createIdentifierOf(j){
        let x = j.char;
        let arr = Object.entries(j.subSkillList).map(([k, v]) => v);
        for (let i = 0; i < arr.length; i++){
            x += this.getSubSkillIdentifierOf(arr[i].value);
        }
        return x;
    }
 

    insertPokeToPlanArea(poke, area, withoutSaving = false){
        if (area.children.length == 0){
            var h3 = document.createElement("strong");
            h3.textContent = "獲得予定: "
            h3.style.display = "inline-block"
            h3.style.verticalAlign = "top";
            area.appendChild(h3);
        }

        let img = document.createElement("img");
        img.classList.add("tiny");

        //flagForPlanは食材を獲得予定に載せるときに作った仮のポケモンクラス
        if (poke.flagForPlan != undefined || poke.flagForPlan != null){
            img.dataset.no = String(poke.no).padStart(3, '0');
            img.dataset.name = poke.name;
            img.src = "img/food/" + img.dataset.name  + ".png";
        }
        else{
            img.dataset.no = String(poke.no).padStart(3, '0');
            img.src = "img/poke/" + img.dataset.no  + ".png";
        }

        
        img.addEventListener("click", function (e){
            if (this.dataset.next){
                this.remove();
                pokeReport.savePlanPokeCookie(area);
            }
            else {
                this.style.opacity = 0.3;
                this.dataset.next = true;
            }
            
        });
        area.appendChild(img);
        if (!withoutSaving) this.savePlanPokeCookie(area);
        return img;
    }


//クッキー用

    savePlanPokeCookie(area){
        let list = area.getElementsByTagName("img");
      
        var cookieList = [];
        for (let i = 0; i < list.length; i++){
            let no = Number(list[i].dataset.no);
            //console.log(no >= mask16_nodp_plan);
            //PokeNoDecimalChangeTag:
            //let n = numToBit(Math.round(no % 1 * 10), mask16_nodp_plan);
            
            let n = numToBit(this.getPokeNoDecimalOf(no, true), mask16_nodp_plan);
            n += numToBit(Math.trunc(no), mask16_no_plan);
            cookieList.push(n.toString(32));
        }
        setCookie("pktg", cookieList.join("-"), 30)
    }


    loadPlanPokeFromCookie(c, area, foodList = []){
        if (c == "") return;

        area.innerHTML = "";
        let noList = c.split('-');
        for (let i = 0; i < noList.length; i++){
            let raw = parseInt(noList[i], 32);
            let foodFlag = (raw & mask16_nodp_plan) == mask16_nodp_plan;
            let n = foodFlag ? (raw & mask16_no_plan) : raw;
            //PokeNoDecimalChangeTag:
            //let no = Math.round((bitToNum(n, mask16_no_plan) * 10) + bitToNum(n, mask16_nodp_plan))/ 10;

            let no = bitToNum(n, mask16_no_plan) + this.convertNumToPokeNoDecimal(bitToNum(n, mask16_nodp_plan));
            let poke = (foodFlag) ? new Pokemon({no: raw, name: foodList[raw & mask16_no_plan], flagForPlan: true}) 
                                  : pokedex.getPokemonByNo(no);
            this.insertPokeToPlanArea(poke, area, i != noList.length - 1);
        }
    }

    /*
    ※32進数は54bit以降が失われるらしい
    |基本情報(4Byte)                       |補助情報(4Byte)                        |サブスキル情報(4Byte)
    |      2Byte*1             2Byte       |        2Byte      |        2Byte      |       2Byte       |        2Byte      |
    |------------------|-------------------|-------------------|-------------------|-------------------|-------------------|
    **** 0000 1111 1111 1112 2222 2266 7788/**** **** **** **** *999 aaa4 4555 3333/**** ***1 1111 2222 2333 3344 4445 5555
    ※各情報の最初のbitは使用しないこと！ ＝96 - 3 = 93bitのみ使用可能

     基本情報(4Byte)
        0:	小数点           4bit	一応4bit使ってるけど1010以上にしたら整数に+1されてNo狂う
        1:	ポケNo          11bit	～2047
        2:	Lv               7bit	～127
        678:食材	         6bit	01:A 10:B 11:C 00:X
        合計: 28bit (+4bit 空き)

    補助情報(4Byte)
        9:  性格の上昇     	 3bit	001:おてスピなど
        a:  性格の下降       3bit	〃
        4:	あとn回？        2bit   00:最終進化 01: あと1回 10: あと2回 11:？？
        5:  リボンLv         3bit   00:なし 01:500時間
        3:	backGround       4bit	0～15
        合計: 15bit (+17bit空き)

    サブスキル情報側 
        1:      Lv1  0のサブスキル	5bit * 5	～31 0:なし 1:おてスピ など
        2:      Lv25  〃
        3:      Lv50  〃
        4:      Lv75  〃
        5:      Lv100 〃
        合計: 25bit (+7bit空き)

    実例:
        ウツボット Lv60 さみしがり ABA *”FU.
        bit : **** 0000 1111 1111 1112 2222 2266 7788 **** **** **** **** *999 aaa4 4555 3333 **** ***1 1111 2222 2333 3344 4445 5555
        exp : 0000 0000 0000 1000 1110 1111 0001 1001 0000 0000 0000 0000 0001 0100 0001 0000 0000 0000 1101 0110 0001 0101 0010 0010
        => 585497,5136,14030114
        => hrop-50g-dc592
    */
    


    createJsonFromCookieValue32(ck){
        if (ck == null){
            console.log("Cookie is Null.")
            return;
        }

        let valueArr = ck.split("-");
        let n = 0; //parseInt(valueArr[], 32)で使いまわす
       
        let j = {};
        j.src = ck;
        
        n = parseInt(valueArr[0], 32);     
        //PokeNoDecimalChangeTag:
        //j.no = Math.round((bitToNum(n, mask32a_no) * 10) + bitToNum(n,mask32a_nodp)) / 10;
        j.no = bitToNum(n, mask32a_no) + this.convertNumToPokeNoDecimal(bitToNum(n, mask32a_nodp));
        //console.log(j.no);
        j.name = pokedex.getPokemonByNo(j.no).name;
        j.lv = bitToNum(n, mask32a_lv);
        j.foodCode = this.getFoodCodeOf(bitToNum(n, mask32a_food1)) + this.getFoodCodeOf(bitToNum(n, mask32a_food2)) + this.getFoodCodeOf(bitToNum(n, mask32a_food3));

        n = parseInt(valueArr[1], 32);   
        j.char = this.getCharacteristic(bitToNum(n, mask32b_charUp), bitToNum(n, mask32b_charDown));
        j.ribbonEv = bitToNum(n, mask32b_ribbonEv);
        j.ribbonLv = bitToNum(n, mask32b_ribbonLv);
        j.backgroundColor = bitToNum(n, mask32b_backGround);

        n = parseInt(valueArr[2], 32);
        j.subSkillList = this.getSubSkillListByNum(bitToNum(n, mask32c_sub1),
                                                   bitToNum(n, mask32c_sub2),
                                                   bitToNum(n, mask32c_sub3),
                                                   bitToNum(n, mask32c_sub4),
                                                   bitToNum(n, mask32c_sub5));
        this.setSubSkillsEnabled(j, -1);

       
        this.setOtetsudaiInfoToJson(j);
        return j;
    }

    //jsonに情報を付与する
    setOtetsudaiInfoToJson(j, maxLv = 65){
        j.LvMax = maxLv;
        let poke = pokedex.getPokemonByNo(j.no);

        let jMax = structuredClone(j);
        jMax.lv = (j.lv < maxLv) ? maxLv : j.lv;
        this.setSubSkillsEnabled(jMax, jMax.lv);

        let j60 = structuredClone(j);
        j60.lv = (j.lv < 60) ? 60 : j.lv;
        this.setSubSkillsEnabled(j60, 60);
        
        //console.log(j);
        //console.log(jMax);

        let raw_otetsudaiCountDay = poke.getOtetsudaiCountDay(j.lv, j.charAdjusts.speed, j.subAdjusts.speed);
        let raw_otetsudaiCountFoodDay = raw_otetsudaiCountDay * (poke.foodRate * (1 + j.charAdjusts.food + j.subAdjusts.food));
        let raw_otetsudaiCountBerryDay = raw_otetsudaiCountDay - raw_otetsudaiCountFoodDay;

        let raw_otetsudaiCountDayNoBonus     = poke.getOtetsudaiCountDay(j.lv);
        let raw_otetsudaiCountFoodDayNoBonus = raw_otetsudaiCountDayNoBonus * poke.foodRate;
        let raw_otetsudaiCountBerryNoBonus   = raw_otetsudaiCountDayNoBonus - raw_otetsudaiCountFoodDayNoBonus;

        //このへんがっつり直そう j => jMax
        let raw_otetsudaiCountDayMax      = poke.getOtetsudaiCountDay(jMax.lv, jMax.charAdjusts.speed, jMax.subAdjusts.speed);
        let raw_otetsudaiCountFoodDayMax  = raw_otetsudaiCountDayMax * (poke.foodRate * (1 + jMax.charAdjusts.food + jMax.subAdjusts.food));
        let raw_otetsudaiCountBerryDayMax = raw_otetsudaiCountDayMax - raw_otetsudaiCountFoodDayMax;

        let raw_otetsudaiCountDay60      = poke.getOtetsudaiCountDay(j60.lv, j60.charAdjusts.speed, j60.subAdjusts.speed);
        let raw_otetsudaiCountFoodDay60  = raw_otetsudaiCountDay60 * (poke.foodRate * (1 + j60.charAdjusts.food + j60.subAdjusts.food));
        
        j.otetsudaiCountDay             = Math.round(raw_otetsudaiCountDay);
        j.otetsudaiCountFoodDay         = Math.round(raw_otetsudaiCountFoodDay);
        j.otetsudaiCountBerryDay        = j.otetsudaiCountDay - j.otetsudaiCountFoodDay;

        j.otetsudaiCountDayNoBonus     = Math.round(raw_otetsudaiCountDayNoBonus);
        j.otetsudaiCountFoodDayNoBonus = Math.round(raw_otetsudaiCountFoodDayNoBonus);
        j.otetsudaiCountBerryNoBonus   = j.otetsudaiCountDayNoBonus - j.otetsudaiCountFoodDayNoBonus;

        j.berryPower                  = Math.round(pokedex.getBerryPowerOf(poke.berry, j.lv) * 100) / 100;
        j.berryPowerDay               = Math.round(j.berryPower * poke.getBerryNum(j.subBerryS) * raw_otetsudaiCountBerryDay);
        j.berryPowerDayNoPicking      = Math.round(j.berryPower * poke.getBerryNum(j.subBerryS) * raw_otetsudaiCountDay);
        j.berryPowerDayNoBonusBerryS = Math.round(j.berryPower * poke.getBerryNum(true) * raw_otetsudaiCountBerryNoBonus);

        let maxBerryPower             = Math.round(pokedex.getBerryPowerOf(poke.berry, maxLv) * 100) / 100;
        j.berryPowerLvMax             = Math.round(maxBerryPower * poke.getBerryNum(jMax.subBerryS) * raw_otetsudaiCountBerryDayMax);
        j.berryPowerLvMaxNoPicking    = Math.round(maxBerryPower * poke.getBerryNum(jMax.subBerryS) * raw_otetsudaiCountDayMax);

        j.skillPopRate                = Math.round(((poke.skillRate * (1 + j.charAdjusts.skill + j.subAdjusts.skill))) * 100000) / 100000;
        j.skillPopRateLvMax           = Math.round(((poke.skillRate * (1 + jMax.charAdjusts.skill + jMax.subAdjusts.skill))) * 100000) / 100000;

        //最低保証を考慮した回数に変更
        let minGuaranteedCount = 144000 / poke.sec;
        let minIncludedPopRate = (minGuaranteedCount * j.skillPopRate + (1 - j.skillPopRate)**minGuaranteedCount) / minGuaranteedCount;
        let minIncludedPopRateNoBonus = (minGuaranteedCount * poke.skillRate + (1 - poke.skillRate)**minGuaranteedCount) / minGuaranteedCount;
        let minIncludedPopRateLvMax = (minGuaranteedCount * j.skillPopRateLvMax + (1 - j.skillPopRateLvMax)**minGuaranteedCount) / minGuaranteedCount;
        
        j.skillPopDay                 = Math.round((raw_otetsudaiCountDay * minIncludedPopRate) * 10) / 10;
        j.skillPopDayNoBonus         = Math.round((raw_otetsudaiCountDayNoBonus * minIncludedPopRateNoBonus) * 10) / 10;        
        j.skillPopDayLvMax            = Math.round((raw_otetsudaiCountDayMax * minIncludedPopRateLvMax) * 10) / 10;

        let berryDiff = (Math.round((j.berryPowerDay / j.berryPowerDayNoBonusBerryS) * 100) / 100) - 1;
        j.berryPowerDayDiff = (berryDiff == 0) ? "±" + Math.round(berryDiff * 100).toFixed(0) + "%"
                               : (berryDiff > 0)  ? "+" + Math.round(berryDiff * 100).toFixed(0) + "%"
                               : "-" + Math.round((Math.abs(berryDiff) * 100)).toFixed(0) + "%";

        let foodDiff = ((Math.round((raw_otetsudaiCountFoodDay / raw_otetsudaiCountFoodDayNoBonus) * 100)) - 100);

        let skillDiff = (Math.round((j.skillPopDay / j.skillPopDayNoBonus) * 100) / 100) - 1;
        j.skillPopDayDiff  = (skillDiff == 0) ? "±" + Math.round(skillDiff * 100).toFixed(0) + "%"
                           : (skillDiff >= 0) ? "+" + Math.round(skillDiff * 100).toFixed(0) + "%"
                           : "-" + Math.round(Math.abs(skillDiff) * 100).toFixed(0) + "%";
        
        
        let cnt = raw_otetsudaiCountFoodDay;
        let otherFoodPower = 350;
        let powFoodA = this.pokedex.getFoodPowerKariOf(poke, j.foodCode[0], 0, otherFoodPower);
        let powFoodB = this.pokedex.getFoodPowerKariOf(poke, j.foodCode[1], 1, otherFoodPower);
        let powFoodC = this.pokedex.getFoodPowerKariOf(poke, j.foodCode[2], 2, otherFoodPower);

        let total = 0;
        let totalLv60 = (powFoodA + powFoodB + powFoodC) * raw_otetsudaiCountFoodDay60 / 3;
        if (j.lv >= 60) {
            total = (powFoodA + powFoodB + powFoodC) * (cnt / 3);
        }
        else if (j.lv >= 30) {
            total = (powFoodA + powFoodB) * (cnt / 2);
        }
        else {
            total = (powFoodA) * (cnt);
        }

        j.foodPowerKariDay = Math.round(total);
        j.foodPowerKariDayDiff  = j.foodPowerKariDay;
        j.foodPowerKariDayDiff += (foodDiff == 0) ? "(±0%)"
                                : (foodDiff >  0) ? "(+" + foodDiff.toFixed(0) + "%)"
                                : "(" + foodDiff.toFixed(0) + "%)";
        j.foodPowerKariDayLv60 = Math.round(totalLv60);
        //console.log(j);
        //let pow_foodA = poke.getFoodByCode()
    }

    getSubSkillListByNum(lv10skill, lv25skill, lv50skill, lv75skill, lv100skill){
        return{
            lv10:  {value:  lv10skill, name: this.getSubSkillNameFromNum(lv10skill),  lv:  10, enabled: false},
            lv25:  {value:  lv25skill, name: this.getSubSkillNameFromNum(lv25skill),  lv:  25, enabled: false},
            lv50:  {value:  lv50skill, name: this.getSubSkillNameFromNum(lv50skill),  lv:  50, enabled: false},
            lv75:  {value:  lv75skill, name: this.getSubSkillNameFromNum(lv75skill),  lv:  75, enabled: false},
            lv100: {value: lv100skill, name: this.getSubSkillNameFromNum(lv100skill), lv: 100, enabled: false}
        };
    }


    getSubSkillList(lv10skill, lv25skill, lv50skill, lv75skill, lv100skill){
        return{
            lv10:  {value: this.getSubSkillNumOf(lv10skill),  name:  lv10skill, lv:  10, enabled: false},
            lv25:  {value: this.getSubSkillNumOf(lv25skill),  name:  lv25skill, lv:  25, enabled: false},
            lv50:  {value: this.getSubSkillNumOf(lv50skill),  name:  lv50skill, lv:  50, enabled: false},
            lv75:  {value: this.getSubSkillNumOf(lv75skill),  name:  lv75skill, lv:  75, enabled: false},
            lv100: {value: this.getSubSkillNumOf(lv100skill), name: lv100skill, lv: 100, enabled: false}
        };
    }


    setSubSkillsEnabled(j, lv = -1){
        lv = (lv == -1) ? j.lv : lv;
        j.subSkillList.lv10.enabled = j.subSkillList.lv10.lv <= lv;
        j.subSkillList.lv25.enabled = j.subSkillList.lv25.lv <= lv;
        j.subSkillList.lv50.enabled = j.subSkillList.lv50.lv <= lv;
        j.subSkillList.lv75.enabled = j.subSkillList.lv75.lv <= lv;
        j.subSkillList.lv100.enabled = j.subSkillList.lv100.lv <= lv;

        let exists = (n) =>{
            return Object.entries(j.subSkillList).some(([k, v]) => v.value == n && v.lv <= lv);
        }
        j.subOteBonus      = exists(sub_num_oteBonus);
        j.subSpeedS        = exists(sub_num_speedS);
        j.subSpeedM        = exists(sub_num_speedM);
        j.subFoodS         = exists(sub_num_foodS);
        j.subFoodM         = exists(sub_num_foodM);
        j.subSkillS        = exists(sub_num_skillS);
        j.subSkillM        = exists(sub_num_skillM);
        j.subSkillLvUpS    = exists(sub_num_skillLvUpS);
        j.subSkillLvUpM    = exists(sub_num_skillLvUpM);
        j.subBerryS        = exists(sub_num_berryS);
        j.subInventoryS    = exists(sub_num_inventoryS);
        j.subInventoryM    = exists(sub_num_inventoryM);
        j.subInventoryL    = exists(sub_num_inventoryL);
        j.subExpBonus      = exists(sub_num_expBonus);
        j.subGenkiBonus    = exists(sub_num_genkiBonus);
        j.subYumeBonus     = exists(sub_num_yumeBonus);
        j.subResearchBonus = exists(sub_num_researchBonus);

        this.setAdjustValues(j);
    }

    //小数点以下をポケモンのバージョン違いにし4bitで管理しているが、10～15(0110～1111)までは/10で処理できないため作成
    //なお、1と10は区別がつかないため10は使用禁止（エラー処理もできないよ！設計ダメだね！！）
    getPokeNoDecimalOf(n, multiply10 = false){        
        let decRaw = Math.round(n % 1 * 100);
        if (decRaw == 0) return 0;
        if (decRaw < 10) throw new Error("小数点第一位が0の数値は対応していません。.1 .2 .3… と .11～.15に対応しています。");

        decRaw = (decRaw % 10 == 0) ? decRaw / 10 : decRaw;
        if (decRaw >= 16) throw new Error("小数点部分を整形後、15を超えました。");

        let div = (decRaw >= 10) ? 100 : 10;
        return decRaw / div * (multiply10 ? 10 : 1);
    }

    convertNumToPokeNoDecimal(n){
        if (n == 0) return 0;
        if (!Number.isInteger(n)) throw Error("小数点に対応していません。");
        if (n >= 16) throw Error("16以上の数値に対応していません。" + "\r\n\r\n" + n);
        
        let div = (n >= 10) ? 100 : 10;
        return n / div;
    }


    createCookieValueFromJson32(j){
        let abc = [];
        let n = 0;
        
        //PokeNoDecimalChangeTag:
        //n += numToBit(Math.round(j.no % 1 * 10), mask32a_nodp);
        n += numToBit(this.getPokeNoDecimalOf(j.no, true), mask32a_nodp);
        n += numToBit(Math.trunc(j.no), mask32a_no);
        n += numToBit(j.lv, mask32a_lv);
        n += numToBit(this.getFoodNumOf(j.foodCode[0]), mask32a_food1);
        n += numToBit(this.getFoodNumOf(j.foodCode[1]), mask32a_food2);
        n += numToBit(this.getFoodNumOf(j.foodCode[2]), mask32a_food3);
        abc.push(n.toString(32));
        
        n = 0;
        n += numToBit(this.getCharacteristicNumOf(j.char), mask32b_charAll);
        n += numToBit(j.ribbonEv, mask32b_ribbonEv);
        n += numToBit(j.ribbonLv, mask32b_ribbonLv);
        n += numToBit(j.backgroundColor, mask32b_backGround);
        abc.push(n.toString(32));

        n = 0;
        n += numToBit(j.subSkillList.lv10.value, mask32c_sub1);
        n += numToBit(j.subSkillList.lv25.value, mask32c_sub2);
        n += numToBit(j.subSkillList.lv50.value, mask32c_sub3);
        n += numToBit(j.subSkillList.lv75.value, mask32c_sub4);
        n += numToBit(j.subSkillList.lv100.value, mask32c_sub5);
        abc.push(n.toString(32));

        return abc.join("-");
    }

    
    setAdjustValues(json){
        let n = this.getCharacteristicNumOf(json.char);

        json.charAdjusts = {
            speed: (bitToNum(n, 0b111000) == 0b001) ? +0.11
                 : (bitToNum(n, 0b000111) == 0b001) ? -0.07 : 0,
            genki: (bitToNum(n, 0b111000) == 0b010) ? +0.2
                 : (bitToNum(n, 0b000111) == 0b010) ? -0.12 : 0,
            food : (bitToNum(n, 0b111000) == 0b011) ? +0.2
                 : (bitToNum(n, 0b000111) == 0b011) ? -0.2 : 0,
            skill: (bitToNum(n, 0b111000) == 0b100) ? +0.2
                 : (bitToNum(n, 0b000111) == 0b100) ? -0.2 : 0,
            exp  : (bitToNum(n, 0b111000) == 0b101) ? +0.18
                 : (bitToNum(n, 0b000111) == 0b101) ? -0.18 : 0,
        };

        json.subAdjusts = {
            speed: Math.round(((json.subOteBonus ? 0.05 : 0) + (json.subSpeedS ? 0.07 : 0) + (json.subSpeedM ? 0.14 : 0)) * 100) / 100,
            food: Math.round(((json.subFoodS ? 0.18 : 0) + (json.subFoodM ? 0.36 : 0)) * 100) / 100,
            skill: Math.round(((json.subSkillS ? 0.18 : 0) +  (json.subSkillM ? 0.36 : 0)) * 100) / 100
        };
    }


    setColorClassTo(el, n){
        let className = "";
        switch(n){
            case 0: className = "def_color_SB"; break;
            case 1: className = "def_color_BL"; break;
            case 2: className = "def_color_SL"; break;
            case 3: className = "def_color_OR"; break;                    
            case 4: className = "def_color_PK"; break;                    
            case 5: className = "def_color_RD"; break;
            case 6: className = "def_color_GR"; break;
            case 7: className = "def_color_GD"; break;                    
            default: className = "def_color_XX"
        }

        el.classList.add(className);
    }



    getCharacteristic(up, down){
        //000/111:無補正   "001 001"の場合、無補正と同じになる。なお、上昇補正がある場合は必ず下降補正もある
        //001:おてスピ補正
        //010:元気補正
        //011:食材補正
        //100:スキル補正
        //101:EXP補正。

        switch (up){
            case 0b001:
                switch (down){
                    case 0b001: return "×";
                    case 0b010: return "寂";
                    case 0b011: return "い";
                    case 0b100: return "や";
                    case 0b101: return "勇";
                    default: return "×";
                }
            case 0b010:
                switch (down){
                    case 0b001: return "ず";
                    case 0b010: return "×";
                    case 0b011: return "わ";
                    case 0b100: return "能";
                    case 0b101: return "の";
                    default: return "×";
                }
            case 0b011:
                switch (down){
                    case 0b001: return "ひ";
                    case 0b010: return "お";
                    case 0b011: return "×";
                    case 0b100: return "う";
                    case 0b101: return "冷";
                    default: return "×";
                }
            case 0b100:
                switch (down){
                    case 0b001: return "穏";
                    case 0b010: return "大";
                    case 0b011: return "慎";
                    case 0b100: return "×";
                    case 0b101: return "な";
                    default: return "×";
                }
            case 0b101:
                switch (down){
                    case 0b001: return "臆";
                    case 0b010: return "せ";
                    case 0b011: return "陽";
                    case 0b100: return "む";
                    case 0b101: return "×";
                    default: return "×";
                }
            default: return "□";
        }
    }


    getCharacteristicNumOf(c){
        //n: 000000の6bit 
        switch(c){
            case "寂": return 0b001010;
            case "い": return 0b001011;
            case "や": return 0b001100;
            case "勇": return 0b001101;
            case "ず": return 0b010001;
            case "太": return 0b010001;//しばらくおいておく
            case "わ": return 0b010011;
            case "能": return 0b010100;
            case "の": return 0b010101;
            case "ひ": return 0b011001;
            case "お": return 0b011010;
            case "う": return 0b011100;
            case "冷": return 0b011101;
            case "穏": return 0b100001;
            case "大": return 0b100010;
            case "慎": return 0b100011;
            case "な": return 0b100101;
            case "臆": return 0b101001;
            case "せ": return 0b101010;
            case "陽": return 0b101011;
            case "む": return 0b101100;
            default : return 0b000000;      
        }
    }


    getSubSkillNumOf(name){
        switch(name){
            case "oteBonus"     : return sub_num_oteBonus;
            case "speedS"       : return sub_num_speedS;
            case "speedM"       : return sub_num_speedM;
            case "foodS"        : return sub_num_foodS;
            case "foodM"        : return sub_num_foodM;
            case "skillS"       : return sub_num_skillS;
            case "skillM"       : return sub_num_skillM;
            case "skillLvUpS"   : return sub_num_skillLvUpS;
            case "skillLvUpM"   : return sub_num_skillLvUpM;
            case "berryS"       : return sub_num_berryS;
            case "inventoryS"   : return sub_num_inventoryS;
            case "inventoryM"   : return sub_num_inventoryM;
            case "inventoryL"   : return sub_num_inventoryL;
            case "expBonus"     : return sub_num_expBonus;
            case "genkiBonus"   : return sub_num_genkiBonus;
            case "yumeBonus"    : return sub_num_yumeBonus;
            case "researchBonus": return sub_num_researchBonus;
            default             : return 0b0;
            
        }
    }


    getSubSkillNameFromNum(n){
        switch(n){
            case sub_num_oteBonus       : return "oteBonus";
            case sub_num_speedS         : return "speedS";
            case sub_num_speedM         : return "speedM";
            case sub_num_foodS          : return "foodS";
            case sub_num_foodM          : return "foodM";
            case sub_num_skillS         : return "skillS";
            case sub_num_skillM         : return "skillM";
            case sub_num_skillLvUpS     : return "skillLvUpS";
            case sub_num_skillLvUpM     : return "skillLvUpM";
            case sub_num_berryS         : return "berryS";
            case sub_num_inventoryS     : return "inventoryS";
            case sub_num_inventoryM     : return "inventoryM";
            case sub_num_inventoryL     : return "inventoryL";
            case sub_num_expBonus       : return "expBonus";
            case sub_num_genkiBonus     : return "genkiBonus";
            case sub_num_yumeBonus      : return "yumeBonus";
            case sub_num_researchBonus  : return "researchBonus";
            default                     : return null;
        }
    }


    getSubSkillIdentifierOf(n){
        switch(n){
            case 0  : return "";
            case 1  : return "o";
            case 2  : return ".";
            case 3  : return ":";
            case 4  : return "f";
            case 5  : return "F";
            case 6  : return "-";
            case 7  : return "+";
            case 8  : return "u";
            case 9  : return "U";
            case 10 : return "s";
            case 11 : return "'";
            case 12 : return '"';
            case 13 : return "*";
            case 14 : return "e";
            case 15 : return "g";
            case 16 : return "y";
            case 17 : return "r";
            default : return "x";
        }
    }

 
    getFoodCodeOf(n){
        return (n == 0b01) ? "A"
            : (n == 0b10) ? "B"
            : (n == 0b11) ? "C" : "X"
    }

    getFoodNumOf(food){
        return (food == "A") ? 0b0001
              : (food == "B") ? 0b0010
               : (food == "C") ? 0b0011 : 0b0000;
    }

}