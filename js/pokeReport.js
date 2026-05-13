//クッキー用

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
            let cands = this.pokedex.pokemons.filter(p => p.fullyEvolved && p.existAnyInFoodList([f.name]))
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
            const p = targetPokemons[i];
            const isFoodGainPoke = p.skillIsFoodGainer();

            p.foodCombinations.forEach(c => {
                if (c.containsFoodsAtLeast(foods, min) && (c.lv != 30 || showLv30) && (c.lv != 60 || showLv60)){
                    pokeAndComb.push({poke: p, comb: c});     

                    //this.createPokemonInfoRow(tr, pac.comb, food, pacjson, PokemonInfo.createIdentifierOf(pac.json));
                    if (isFoodGainPoke){
                        const copiedComb = p.createFoodCombination(null, c.lv, c.code, p.skillLv);
                        if (copiedComb.containsFoodsAtLeast(foods, min)) pokeAndComb.push({poke: p, comb: copiedComb});   
                    }    
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




    setMyPokeFoodListInfo(tbody, infoList, onlySkyBlueGold = false){

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
                this.insertCombinationResultTo(tr, pac.poke, pac.comb, food, PokemonInfo.createIdentifierOf(pac.json), false)
                
                tr.querySelectorAll(selector).forEach(el => {
                    //this.setColorClassTo(el, pac.json.backgroundColor);
                    el.classList.add(PokemonInfo.getColorClassNameFromNum(pac.json.backgroundColor));
                });
                foodImgCell.rowSpan = rank;
            };            
        
            for (let i = 0; i < (sorted.length <= 3 ? sorted.length : 3); i++){
                insertInfo(sorted[i], i + 1, (i == 0) ? tr1 : null);
            }    
        };

        this.initializeMyPokeInfo(infoList, onlySkyBlueGold);
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
    initializeMyPokeInfo(infoList, onlySkyBlueGold = false){
        let pokeAndComb = [];
        infoList.forEach(info => {
            const j = info.LvRaw;
            if (onlySkyBlueGold && (j.backgroundColor == 0 || j.backgroundColor == 7)){
                pokeAndComb.push({poke: info.pokemon, json: j, comb:info.pokemon.createFoodCombination(j, j.lv, j.foodCode)});
            }            
        });
        this.mypokeInfoList = pokeAndComb;
    }


    setMypokeToPokeFoodMap(){
        const mil = this.mypokeInfoList;
        Object.keys(this.pokeFoodMap).forEach(f => {
            let sortedCands = mil.map(m => ({info: m, expection: m.comb.getExpectionOf(f)})).sort((a, b) => b.expection - a.expection).filter(x => x.expection > 0);
            let max = (sortedCands.length == 0) ? null : sortedCands[0];
    
            this.pokeFoodMap[f].MyPoke = (max == null) ? null : 
                { no: max.info.json.no,
                  name: max.info.json.name +  PokemonInfo.createIdentifierOf(max.info.json) + " Lv" + max.info.json.lv, 
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


                //this.insertMypokeRecipeEfficiency(container, r.name);

                
                return;
            });

        };

        setRecipes('mypoke_quick_check_curry', this.recipedb.curryRecipes.sort((a, b) => b.energy - a.energy));
        setRecipes('mypoke_quick_check_salad', this.recipedb.saladRecipes.sort((a, b) => b.energy - a.energy));
        setRecipes('mypoke_quick_check_sweet', this.recipedb.sweetRecipes.sort((a, b) => b.energy - a.energy));
        
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

        const createDiv = (classname, text = "", foodImageObj = undefined) =>{
            const el = document.createElement("div");
            el.className = classname;
            
            if (foodImageObj != undefined){
                el.innerHTML = `<img src=\"img/${foodImageObj.folder}/${foodImageObj.name}.png\" style=\"width:1.75em;\"> <span>${text}</span>`; 
            }
            else{
                el.textContent = text;
            }
            return el
        };   

        const getCellColor = (min) => {
            return (min <= 240) ? "Honeydew"
                    : (min <= 360) ? "white"
                        : (min <= 540) ? "lightyellow" : "mistyrose"; 
        };
        
        const getTotalCellColor = (min) => {
            return (min <= 480) ? "Honeydew"
                    : (min <= 720) ? "white"
                        : (min <= 1440) ? "lightyellow" : "mistyrose"; 
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
        const candsTop20 = this.mypokeInfoList.map(x => ({info: x, expection: x.comb.getExpectionOf(r.ingredients.map(x => x.name))}))
                            .filter(x => x.expection > 0).sort((a, b) => b.expection - a.expection).slice(0, 20);
        const tmpCombsExpectionRateMap = getCombinations(candsTop20, 4).map(combs => {
            let x = {};
            let totalRate = 0;
            r.ingredients.forEach(f => {
                const sum = combs.reduce((accum, obj) => accum + obj.info.comb.getExpectionOf(f.name), 0);
                const tmpRate = (sum == 0) ? 0 : (sum / (f.num * 3));
                const rate = (tmpRate == 0) ? 0
                            : (tmpRate <= 1) ? tmpRate**0.5 : 0.9 + (tmpRate / 10);                   
                x[f.name] = {food: f.name, rate: (rate > 1.5) ? 1.5 + ((rate - 1.5) / 10) : rate, expection: sum};
                totalRate += x[f.name].rate;
            });
            return {combs: combs, totalRate: totalRate, rateMap: x};
        }).sort((a, b) => b.totalRate - a.totalRate).slice(0, 200);                
        const topRateMap = {};
        topRateMap["Most Efficient Members"] = [{combs: tmpCombsExpectionRateMap[0].combs, rateMap: tmpCombsExpectionRateMap[0].rateMap, totalRate: tmpCombsExpectionRateMap[0].totalRate}];
        
        //ここで食材ごとのレート確認をしているはず
        const sliceCount = 5;
        const foods = r.ingredients.map(f => f.name);
        const getRateFilteredTopN = (rateMin, food) =>{
            const tmpTopN = tmpCombsExpectionRateMap.filter(x => x.rateMap[food].rate >= rateMin);
            const passedSimilarItems = [];
            for (const tmp of tmpTopN) {
                //すでに追加済みの組み合わせに対して、各食材がレートを超えているかを確認
                //超えている場合はそのまま追加でOK
                //超えていない場合は、超えているやつと比べてポケモンの種族が違う時だけ追加する
                const dame = passedSimilarItems.some(passed =>{
                    if (foods.some(f => tmp.rateMap[f].rate > passed.rateMap[f].rate)) return false;
                    //ここむずすぎる
                    const diffPokes = tmp.combs.filter(x => !passed.combs.some(p => p.info.poke.groupName == x.info.poke.groupName));
                    if (diffPokes.length > 0) return false;

                    return true;
                });
                if (!dame) passedSimilarItems.push(tmp);
                if (passedSimilarItems.length >= sliceCount) break;
            };
            return passedSimilarItems;            
        };

        r.ingredients.forEach(f => {                                
            let passedItems;
            for (let i = 0; i < 5; i++){
                passedItems = getRateFilteredTopN(1 - (i * 0.25), f.name);
                if (passedItems.length > 0) break;
            }
            topRateMap[f.name] = passedItems;
        });



        const keys = Object.keys(topRateMap);
        
        for (let i = 0; i < keys.length; i++){
            const key = keys[i];
            const topN = topRateMap[key];
            //中身
            for (let topNo = 0; topNo <= (i == 0 ? 0 : topN.length - 1); topNo++){                
                const header = createDiv("recipe_efficiency_header");
                const table = document.createElement("table");
                const thead = document.createElement("thead");
                const tbody = document.createElement("tbody"); 
                const pokeArgs = topN[topNo].combs.map(comb => ({text: comb.info.poke.no.toString().padStart(3, "0"), folder: "poke", withImage:true}));     
                table.className = "recipe_efficiency_table_topRate";
                table.appendChild(thead);
                table.appendChild(tbody);
                container.appendChild(header);
                container.appendChild(table);
                header.appendChild(createDiv("recipe_efficiency_header_item", (i == 0) ? "オススメ" : "【" + key + "】の組み合わせ - " + (topNo + 1), (i == 0) ? undefined: {folder: "food", name: key}));
                header.appendChild(createDiv("recipe_efficiency_header_item", topN[topNo].totalRate.toFixed(3)));
                thead.appendChild(createTrHeader(["", ...pokeArgs, "合計", ""]));   
                r.ingredients.forEach(food => {
                    const foodExpections = topN[topNo].combs.map(c => c.info.comb.getExpectionOf(food.name));
                    const totalExpection = foodExpections.reduce((accum, cur) => accum + cur, 0);
                    const timeObj = (totalExpection == 0) ? this.minutesToTime(0) : this.minutesToTime(food.num /  totalExpection * 60 * 24);
                    tbody.appendChild(createTr([
                        {withImage: true, folder: "food", text: food.name},
                        ...foodExpections.map(y => y == 0 ? "" : y),
                        {text: timeObj.timeStr, color: ((timeObj.rawMin == 0) ? "white" : getTotalCellColor(timeObj.rawMin))},
                        ""
                    ]));
                });
            }
        }

        container.removeChild(span);                
    }

    minutesToTime(min){
        const result = {};
        result.rawMin = min;
        result.hour = Math.floor(min / 60);
        result.minute = Math.ceil(min % 60);
        if (result.minute == 60){
            result.hour++;
            result.minute = 0;
        }
        result.timeStr = result.rawMin == 0 ? "----" : result.hour.toString().padStart(2, "0") + ":" + result.minute.toString().padStart(2, "0");
        return result;
    }




    //tbのresult_tableはsetResultOfされた時に追加されるので、ない時もあるかも
    insertMyPokeListInto(tbody, infoList, foods, foodMin, showPotential30, showPotential50, showPotential60){
        for (const info of infoList) {
            const poke = info.pokemon; 
            if (!poke.existAnyInFoodList(foods)) continue;
            const json = info.LvRaw;

            this.insertMyPokeRowInto(tbody, poke, json, json.lv, foods, foodMin, json.backgroundColor);
            if (json.lv < 30 && showPotential30){
                info.setSubSkillsEnabled(json, 30);
                this.insertMyPokeRowInto(tbody, poke, json, 30, foods, foodMin, 3);
            }

            if (json.lv < 50 && showPotential50){
                info.setSubSkillsEnabled(json, 50);
                this.insertMyPokeRowInto(tbody, poke, json, 50, foods, foodMin, 4);
            }

            if (json.lv < 60 && showPotential60){
                info.setSubSkillsEnabled(json, 60);
                this.insertMyPokeRowInto(tbody, poke, json, 60, foods, foodMin, 5);
            }
        }
    }


    insertMyPokeRowInto(tbody, poke, json, lv, foods, foodMin, backgroundColorIndex = -1){//自分で登録したものは背景色がjsonに含まれているのでわざわざ指定しない
        let comb = poke.createFoodCombination(json, lv);
        if (!comb.containsFoodsAtLeast(foods, foodMin)) return;

        let tr = this.createMyPokemonInfoRow(poke, comb, foods[0], json);
        backgroundColorIndex = (backgroundColorIndex == -1) ? 0 : backgroundColorIndex;
        //this.setColorClassTo(tr, backgroundColorIndex)
        tr.classList.add(PokemonInfo.getColorClassNameFromNum(backgroundColorIndex));

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
        this.insertCombinationResultTo(tr, poke, comb, food, null, false);
       
        return tr;
    }

    createMyPokemonInfoRow(poke, comb, food, json){
        let tr = document.createElement("tr");
        //comb.insertResultTo(r, food, poke, PokemonInfo.createIdentifierOf(json));昔のやりかた
        //this.createPokemonInfoRow(poke, comb, food, json, PokemonInfo.createIdentifierOf(json));
        this.insertCombinationResultTo(tr, poke, comb, food, PokemonInfo.createIdentifierOf(json));
        return tr;
    }

    insertCombinationResultTo(tr, poke, comb, food, identifier = null, noSetCombinationResult = false){
        tr.setAttribute("expection_total", comb.totalExpectionFinally);

        let cell = tr.insertCell();
        cell.classList.add("mypoke_outline");
        let img = document.createElement("img");
        img.src = "img/poke/" + String(poke.no).padStart(3, '0') + ".png"
        img.classList.add("tiny");

        if (poke.skillIsFoodGainer()){
            let star = document.createElement("span");
            star.classList.add((poke.skillLvIsMax(comb.skillLv)) ? "mypoke_skill_max" : "mypoke_skill_nomax");
            star.textContent = "★";
            cell.appendChild(star);

            let starText = document.createElement("span");
            starText.classList.add((poke.skillLvIsMax(comb.skillLv)) ? "mypoke_skill_max" : "mypoke_skill_nomax");
            starText.textContent = comb.skillLv ?? poke.skillLv;
            cell.appendChild(starText);
        }
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
            fImg.src = "img/food/" + poke.getFoodByCode(c).name + ".png";
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
            //PokeNoDecimalChangeTag:
            //let n = numToBit(Math.round(no % 1 * 10), mask16_nodp_plan);
            
            let n = numToBit(PokemonInfo.getPokeNoDecimalOf(no, true), mask16_nodp_plan);
            n += numToBit(Math.trunc(no), mask16_no_plan);
            cookieList.push(n.toString(32));
        }
        setCookie("pktg", cookieList.join("-"), 30)
    }


    loadPlanPokeFromCookie(c, area, foodList = []){
        if (c == "" || c == "null") return;
        area.innerHTML = "";
        let noList = c.split('-');
        for (let i = 0; i < noList.length; i++){
            let raw = parseInt(noList[i], 32);
            let foodFlag = (raw & mask16_nodp_plan) == mask16_nodp_plan;
            let n = foodFlag ? (raw & mask16_no_plan) : raw;
            //PokeNoDecimalChangeTag:
            //let no = Math.round((bitToNum(n, mask16_no_plan) * 10) + bitToNum(n, mask16_nodp_plan))/ 10;

            let no = bitToNum(n, mask16_no_plan) + PokemonInfo.convertNumToPokeNoDecimal(bitToNum(n, mask16_nodp_plan));
            let poke = (foodFlag) ? new Pokemon(undefined, {no: raw, name: foodList[raw & mask16_no_plan], flagForPlan: true}) 
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
    










}