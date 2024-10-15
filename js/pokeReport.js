//クッキー用
const mask_template     = 0b00000000000000000000000000000000;
const mask_backGround   = 0b11110000000000000000000000000000;
const mask_lv           = 0b00001111111000000000000000000000;
const mask_food_A       = 0b00000000000110000000000000000000;
const mask_food_B       = 0b00000000000001100000000000000000;
const mask_food_C       = 0b00000000000000011000000000000000;
const mask_char_all     = 0b00000000000000000111111000000000;
const mask_char_up      = 0b00000000000000000111000000000000;
const mask_char_down    = 0b00000000000000000000111000000000;
const mask_sub_berryS   = 0b00000000000000000000000100000000;
const mask_sub_speedS   = 0b00000000000000000000000010000000;
const mask_sub_speedM   = 0b00000000000000000000000001000000;
const mask_sub_foodS    = 0b00000000000000000000000000100000;
const mask_sub_foodM    = 0b00000000000000000000000000010000;
const mask_sub_skillS   = 0b00000000000000000000000000001000;
const mask_sub_skillM   = 0b00000000000000000000000000000100;
const mask_sub_otebonus = 0b00000000000000000000000000000010;

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


class PokeReport{


    constructor(pokedex){
        this.pokedex = pokedex;
        this.combinationsInitialized = false;
    }

    initialize(){
        this.pokedex.pokemons.forEach(p => p.setFoodCombinations());
        this.combinationsInitialized = true;
    }


    createReport(foodName, min = 0, onlyFullyEvolved = false, showLv30 = true, showLv60 = true){
        if (!this.combinationsInitialized){
            alert("食べ物組み合わせが生成されていません。初期化をしてから実行してください。")
            return null;
        }

        let targetPokemons = this.pokedex.pokemons.filter(p => (!onlyFullyEvolved || p.fullyEvolved) && p.containsFood(foodName));

        let tbody = document.createElement("tbody");
        tbody.id = "report_result";

        let pokeAndComb = [];
        for (let i = 0; i < targetPokemons.length; i++){
            let p = targetPokemons[i]
            p.foodCombinations.forEach(c => {
                if (c.contains(foodName, min) && (c.lv != 30 || showLv30) && (c.lv != 60 || showLv60)){
                    pokeAndComb.push({poke: p, comb: c});
                }                
            });
        }
        
        pokeAndComb.sort((a, b) => b.comb.getExpectionOf(foodName) - a.comb.getExpectionOf(foodName))
                    .forEach(x => tbody.appendChild(this.createPokemonInfoRow(x.poke, x.comb, foodName)));
        return tbody;
    }



    //tbのresult_tableはsetResultOfされた時に追加されるので、ない時もあるかも
    insertMyPokeListInto(tbody, jsonList, foodName, foodMin, showPotential30, showPotential60){
        for (let i = 0; i < jsonList.length; i++){
            let json = jsonList[i];
            let poke = this.pokedex.getPokemonByName(json.name);

            if (!poke.containsFood(foodName)) continue;//そもそも食材含んでなかったら処理いらない
           
            this.insertMyPokeRowInto(tbody, poke, json, json.lv, foodName, foodMin);

            if (json.lv < 30 && showPotential30){
                this.setSubSkillsEnabled(json, 30, true);
                this.insertMyPokeRowInto(tbody, poke, json, 30, foodName, foodMin, this.getColorCodeOf(4));
            }

            if (json.lv < 60 && showPotential60){
                this.setSubSkillsEnabled(json, 60, true);
                this.insertMyPokeRowInto(tbody, poke, json, 60, foodName, foodMin, this.getColorCodeOf(5));
            }
        }
        
    }

    insertMyPokeRowInto(tbody, poke, json, lv, foodName, foodMin, backgroundColor = null){//自分で登録したものは背景色がjsonに含まれているのでわざわざ指定しない
        let comb = poke.createFoodCombination(json, lv);
        if (!comb.contains(foodName, foodMin)) return;

        let tr = this.createPokemonInfoRow(poke, comb, foodName);
        tr.style.backgroundColor = backgroundColor ?? this.getColorCodeOf(json.backgroundColor);

        let rows = tbody.children;
        let target = comb.getExpectionOf(foodName);

        for (let i = 0; i < rows.length; i++){
            let value = rows[i].children[1].getAttribute('value');
            if (value <= target){
                tbody.insertBefore(tr, rows[i]);
                return;
            }
        }
        tbody.appendChild(tr);
    }

    


    createPokemonInfoRow(poke, comb, food){
        let r = document.createElement("tr");
        comb.insertResultTo(r, food, poke);
        return r;
    }
 

    selectIcon(el){
        Array.from(document.getElementById('food_buttons').children).forEach(c => this.changeIconStyle(c, false));
        if (el.style.margin == "" || el.style.margin == "4px"){
            el.style.margin = "0px";
            el.style.border = "4px solid blue";
            el.value = "ON";
        }
        else{
            el.style.margin = "4px";
            el.style.border = "";
            el.value = "";
        }
    }


    changeIconStyle(el, turnOn){
        if (turnOn){
            el.style.margin = "0px";
            el.style.border = "4px solid blue";
            el.value = "ON";
        }
        else{
            el.style.margin = "4px";
            el.style.border = "";
            el.value = "";
        }
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
        サンプル:  71:278c9420    //コロンの後ろは16進数
        ウツボットLv60 ABA 寂しがり サブスキル 食材M
        テンプレート: 0000111111122334455566678899aaxx 
                nn.n:0000 1111111 22 33 44 555 666 7 88 99 aa xx                 
                    0010 0111100 01 10 01 001 010 0 00 01 00 00
                    0010 0111100 01 10 01 001 010 0 00 00 00 00
                    ^^^^ ------- .. ** @@ ### +++ % ^^ -- .. xx
                    背景BL Lv60   A  B  A    寂*1 *2*3 *4 *5  *6

                    *1 △おてスピ補正 ▽元気補正
                    *2 きのみSなし
                    *3 おてスピ補正なし
                    *4 食材補正 M補正のみあり
                    *5 スキル補正なし
                    *6 未使用ビット
    */
    createJsonFromCookieValue(c){
        let a = c.split(":");    
        let no = Number(a[0]);
        let x = parseInt(a[1], 16);
                
        let j = {};
        j.src = c;
        j.no = no;
        j.name = this.pokedex.getPokemonByNo(j.no).name;
        j.backgroundColor = bitToNum(x, mask_backGround);
        j.lv = bitToNum(x, mask_lv);
        j.foodCode = this.getFoodCodeOf(bitToNum(x, mask_food_A)) + this.getFoodCodeOf(bitToNum(x, mask_food_B)) + this.getFoodCodeOf(bitToNum(x, mask_food_C));
        j.char = this.getCharacteristic(bitToNum(x, mask_char_up), bitToNum(x, mask_char_down));

        j.subBerryS = bitMatch(x, mask_sub_berryS);
        j.subSpeedS = bitMatch(x, mask_sub_speedS);
        j.subSpeedM = bitMatch(x, mask_sub_speedM);
        j.subFoodS = bitMatch(x, mask_sub_foodS);
        j.subFoodM = bitMatch(x, mask_sub_foodM);
        j.subSkillS = bitMatch(x, mask_sub_skillS);
        j.subSkillM = bitMatch(x, mask_sub_skillM);
        j.subOteBonus = bitMatch(x, mask_sub_otebonus);
        this.setAdjustValues(j);

        return j;
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
        //ck = "hrop-50g-dc592";      //あとでc = ""を消す  constに移動してからmask32a を mask32aに変える
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


    createCookieValueFromJson(j){
        let n = 0;
        n += numToBit(j.backgroundColor, mask_backGround);//一番左のbitを1にしてしまうと、マイナスの整数になり狂うので注意
        n += numToBit(j.lv, mask_lv);
        n += numToBit(this.getFoodNumOf(j.foodCode[0]), mask_food_A);
        n += numToBit(this.getFoodNumOf(j.foodCode[1]), mask_food_B);
        n += numToBit(this.getFoodNumOf(j.foodCode[2]), mask_food_C);
        n += numToBit(this.getCharacteristicNumOf(j.char), mask_char_all);
        n += numToBit(j.subBerryS ? 1 : 0, mask_sub_berryS);
        n += numToBit(j.subSpeedS ? 1 : 0, mask_sub_speedS);
        n += numToBit(j.subSpeedM? 1 : 0, mask_sub_speedM);
        n += numToBit(j.subFoodS ? 1 : 0, mask_sub_foodS);
        n += numToBit(j.subFoodM ? 1 : 0, mask_sub_foodM);
        n += numToBit(j.subSkillS ? 1 : 0, mask_sub_skillS);
        n += numToBit(j.subSkillM ? 1: 0, mask_sub_skillM);
        n += numToBit(j.subOteBonus ? 1 : 0, mask_sub_otebonus);

        return n.toString(16);
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
            case 4: return "#FFBB77"; break;                    
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