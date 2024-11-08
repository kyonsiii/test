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

const mask_op_recipe_category_index       = 0b000001110000000000000000000000;
const mask_op_recipe_name_index           = 0b000000001111111100000000000000; 
                                                  //'10000000111111010000000'
const mask_result_op_visible_Lv30         = 0b000000000000000010000000000000;
const mask_result_op_visible_Lv60         = 0b000000000000000001000000000000;
const mask_result_op_visible_MyPoke       = 0b000000000000000000100000000000;
const mask_result_op_visible_MyPokeLv30ft = 0b000000000000000000010000000000;
const mask_result_op_visible_MyPokeLv50ft = 0b000000000000000000001000000000;
const mask_result_op_visible_MyPokeLv60ft = 0b000000000000000000000100000000;
const mask_result_op_visible_FullyEvolved = 0b000000000000000000000010000000;
const mask_result_op_visible_minNum       = 0b000000000000000000000001111000;


                        

class PokeReport{
    constructor(pokedex, recipedb){
        this.pokedex = pokedex;
        this.recipedb = recipedb;
        this.combinationsInitialized = false;
    }

    initialize(){
        this.pokedex.pokemons.forEach(p => p.setFoodCombinations());
        this.combinationsInitialized = true;
    }


    createReport(foods, reportCountMax, min = 0, onlyFullyEvolved = false, showLv30 = true, showLv60 = true){
        if (!this.combinationsInitialized){
            alert("食べ物組み合わせが生成されていません。初期化をしてから実行してください。")
            return null;
        }

        let targetPokemons = this.pokedex.pokemons.filter(p => (!onlyFullyEvolved || p.fullyEvolved) && p.existAnyInFoodList(foods));
        let tbody = document.createElement("tbody");
        tbody.id = "report_result";

        let pokeAndComb = [];
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


    setCurrentOptionsToCookie(){
        let n = 0;
        //n += numToBit(document.getElementById("select_recipe_category").selectedIndex, mask_op_recipe_category_index);
        //n += numToBit(document.getElementById("select_recipe").selectedIndex, mask_op_recipe_name_index);
        n += numToBit(document.getElementById("option_poke_30").checked, mask_result_op_visible_Lv30);    
        n += numToBit(document.getElementById("option_poke_60").checked, mask_result_op_visible_Lv60);  

        n += numToBit(document.getElementById("option_mypoke_visible").checked, mask_result_op_visible_MyPoke); 
        n += numToBit(document.getElementById("option_potential_30").checked, mask_result_op_visible_MyPokeLv30ft); 
        n += numToBit(document.getElementById("option_potential_50").checked, mask_result_op_visible_MyPokeLv50ft); 
        n += numToBit(document.getElementById("option_potential_60").checked, mask_result_op_visible_MyPokeLv60ft);
        n += numToBit(document.getElementById("only_fully_evolved").checked, mask_result_op_visible_FullyEvolved);
        n += numToBit(document.getElementById("food_min").selectedIndex, mask_result_op_visible_minNum);
        setCookie("ropt", n.toString(32), 30);
    }


    setOptionsFromCookie(c){
        let n = parseInt(c, 32);

        document.getElementById("option_poke_30").checked = bitToNum(n, mask_result_op_visible_Lv30);    
        document.getElementById("option_poke_60").checked = bitToNum(n, mask_result_op_visible_Lv60);  

        document.getElementById("option_mypoke_visible").checked = bitToNum(n, mask_result_op_visible_MyPoke); 
        document.getElementById("option_potential_30").checked = bitToNum(n, mask_result_op_visible_MyPokeLv30ft); 
        document.getElementById("option_potential_50").checked = bitToNum(n, mask_result_op_visible_MyPokeLv50ft); 
        document.getElementById("option_potential_60").checked = bitToNum(n, mask_result_op_visible_MyPokeLv60ft);
        document.getElementById("only_fully_evolved").checked = bitToNum(n, mask_result_op_visible_FullyEvolved);
        document.getElementById("food_min").selectedIndex = bitToNum(n, mask_result_op_visible_minNum);

        return;
        let sb_cat = document.getElementById("select_recipe_category");        
        sb_cat.selectedIndex = bitToNum(n, mask_op_recipe_category_index);        
        selectRecipeCategory(sb_cat);

        let sb_recipe = document.getElementById("select_recipe");
        sb_recipe.selectedIndex = bitToNum(n, mask_op_recipe_name_index);
        selectFoodsByRecipe(sb_recipe);
    }



    setMyPokeFoodListInfo(tbody, jsonList){
        let pokeAndComb = [];
        for (let i = 0; i < jsonList.length; i++){
            let j = jsonList[i];
            let p = this.pokedex.getPokemonByNo(j.no);
            pokeAndComb.push({poke: p, json: j, comb:p.createFoodCombination(j, j.lv, j.foodCode)});            
        }
        
        let tmp = [];
        tmp.push({とくせんリンゴ: []});
        tmp.push({モーモーミルク: []});
        tmp.push({ワカクサ大豆: []});
        tmp.push({あまいミツ: []});
        tmp.push({マメミート: []});
        tmp.push({あったかジンジャー: []});
        tmp.push({あんみんトマト: []});
        tmp.push({とくせんエッグ: []});
        tmp.push({ピュアなオイル: []});
        tmp.push({ほっこりポテト: []});
        tmp.push({げきからハーブ: []});
        tmp.push({リラックスカカオ: []});
        tmp.push({あじわいキノコ: []});
        tmp.push({ふといながねぎ: []});
        tmp.push({おいしいシッポ: []});
        tmp.push({ワカクサコーン: []});
        tmp.push({めざましコーヒー: []});
      

        //MyPokeを食材ごとに割り振る（重複あり）
        tmp.forEach(f => {
            let foodName = Object.keys(f)[0];
            for (let i = 0; i < pokeAndComb.length; i++){
                let pac = pokeAndComb[i];
                if (pac.comb.foods.some(x => x.name == foodName)) f[foodName].push(pac);
            }
        });


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
                pac.comb.insertResultTo(tr, food, pac.poke, this.createIdentifierOf(pac.json));
                tr.querySelectorAll(selector).forEach(el => {
                    el.style.backgroundColor = this.getColorCodeOf(pac.json.backgroundColor);
                });
                foodImgCell.rowSpan = rank;
            };            
        
            for (let i = 0; i < (sorted.length <= 3 ? sorted.length : 3); i++){
                insertInfo(sorted[i], i + 1, (i == 0) ? tr1 : null);
                //insertInfo(sorted[i], i + 1,  null);
            }    
        };

        tmp.forEach(f => {
            let foodName = Object.keys(f)[0];
            createRow(foodName, f[foodName]);
        });
    }







    //tbのresult_tableはsetResultOfされた時に追加されるので、ない時もあるかも
    insertMyPokeListInto(tbody, jsonList, foods, foodMin, showPotential30, showPotential50, showPotential60){
        for (let i = 0; i < jsonList.length; i++){
            let json = jsonList[i];
            let poke = this.pokedex.getPokemonByName(json.name);

     
            if (!poke.existAnyInFoodList(foods)) continue;//そもそも食材含んでなかったら処理いらない

            this.insertMyPokeRowInto(tbody, poke, json, json.lv, foods, foodMin);

            if (json.lv < 30 && showPotential30){
                this.setSubSkillsEnabled(json, 30, true);
                this.insertMyPokeRowInto(tbody, poke, json, 30, foods, foodMin, this.getColorCodeOf(4));
            }

            if (json.lv < 50 && showPotential50){
                this.setSubSkillsEnabled(json, 50, true);
                this.insertMyPokeRowInto(tbody, poke, json, 50, foods, foodMin, this.getColorCodeOf(3));
            }

            if (json.lv < 60 && showPotential60){
                this.setSubSkillsEnabled(json, 60, true);
                this.insertMyPokeRowInto(tbody, poke, json, 60, foods, foodMin, this.getColorCodeOf(5));
            }
        }
        
    }

    insertMyPokeRowInto(tbody, poke, json, lv, foods, foodMin, backgroundColor = null){//自分で登録したものは背景色がjsonに含まれているのでわざわざ指定しない
        let comb = poke.createFoodCombination(json, lv);
        if (!comb.containsFoodsAtLeast(foods, foodMin)) return;

        let tr = this.createMyPokemonInfoRow(poke, comb, foods[0], json);
        tr.style.backgroundColor = backgroundColor ?? this.getColorCodeOf(json.backgroundColor);

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

    


    createPokemonInfoRow(poke, comb, food, json = null){
        let r = document.createElement("tr");
        comb.insertResultTo(r, food, poke);
        return r;
    }

    createMyPokemonInfoRow(poke, comb, food, json){
        let r = document.createElement("tr");
        comb.insertResultTo(r, food, poke, this.createIdentifierOf(json));
        return r;
    }
 

    createIdentifierOf(j){
        let x = j.char;
        let arr = Object.entries(j.subSkillList).map(([k, v]) => v);
        for (let i = 0; i < arr.length; i++){
            x += this.getSubSkillIdentifierOf(arr[i].value);
        }
        return x;
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
        let valueArr = ck.split("-");
        let n = 0; //parseInt(valueArr[], 32)で使いまわす
       
        let j = {};
        j.src = ck;
        
        n = parseInt(valueArr[0], 32);        
        j.no = Math.round((bitToNum(n, mask32a_no) * 10) + bitToNum(n,mask32a_nodp)) / 10;
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



        this.setSubSkillsEnabled(j, -1, true);
        return j;
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


    setSubSkillsEnabled(j, lv = -1, setAdjustValueImmediately = false){
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

        if (setAdjustValueImmediately) this.setAdjustValues(j);
    }




    createCookieValueFromJson32(j){
        let abc = [];
        let n = 0;
        
        n += numToBit(Math.round(j.no % 1 * 10), mask32a_nodp);
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
                 : (bitToNum(n, 0b000111) == 0b001) ? -0.09 : 0,
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

        /*

        json.speedCharAdj = (bitToNum(n, 0b111000) == 0b001) ? +0.11
                          : (bitToNum(n, 0b000111) == 0b001) ? -0.09 : 0;
        json.genkiCharAdj = (bitToNum(n, 0b111000) == 0b010) ? +0.2
                          : (bitToNum(n, 0b000111) == 0b010) ? -0.12 : 0;
        json.foodCharAdj  = (bitToNum(n, 0b111000) == 0b011) ? +0.2
                          : (bitToNum(n, 0b000111) == 0b011) ? -0.2 : 0;
        json.skillCharAdj = (bitToNum(n, 0b111000) == 0b100) ? +0.2
                          : (bitToNum(n, 0b000111) == 0b100) ? -0.2 : 0;
        json.expCharAdj   = (bitToNum(n, 0b111000) == 0b101) ? +0.18
                          : (bitToNum(n, 0b000111) == 0b101) ? -0.18 : 0;
        
        json.speedSubAdj = json.subOteBonus ? 0.05 : 0;
        json.speedSubAdj += json.subSpeedS ? 0.07 : 0;
        json.speedSubAdj += json.subSpeedM ? 0.14 : 0;
        json.foodSubAdj = json.subFoodS ? 0.18 : 0;
        json.foodSubAdj += json.subFoodM ? 0.36 : 0;
        json.skillSubAdj = json.subSkillS ? 0.18 : 0;
        json.skillSubAdj += json.subSkillM ? 0.36 : 0;

        json.speedSubAdj = Math.round(json.speedSubAdj * 100) / 100;
        json.foodSubAdj = Math.round(json.foodSubAdj * 100) / 100;
        json.skillSubAdj = Math.round(json.skillSubAdj * 100) / 100;

        */
    }




    
    getColorCodeOf(n){
        switch(n){
            case 0: return "#CCDDFF"; break;
            case 1: return "#77AAFF"; break;
            case 2: return "#DDDDDD"; break;
            case 3: return "#FFDDDD"; break;                    
            case 4: return "#FFDD55"; break;                    
            case 5: return "#FFA0A0"; break;
            case 6: return "#BBFFBB"; break;
            case 7: return "#FFFFCC"; break;                    
            default: return "#FF4444"
        }
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