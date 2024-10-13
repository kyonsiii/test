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
const mask_sub_subBerryS= 0b00000000000000000000000100000000;
const mask_sub_speedS   = 0b00000000000000000000000010000000;
const mask_sub_speedM   = 0b00000000000000000000000001000000;
const mask_sub_foodS    = 0b00000000000000000000000000100000;
const mask_sub_foodM    = 0b00000000000000000000000000010000;
const mask_sub_skillS   = 0b00000000000000000000000000001000;
const mask_sub_skillM   = 0b00000000000000000000000000000100;

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
        
        let sorted = pokeAndComb.sort((a, b) => b.comb.getExpectionOf(foodName) - a.comb.getExpectionOf(foodName));
        sorted.forEach(x => {
            let r = document.createElement("tr");
            x.comb.insertResultTo(r, foodName, x.poke)
            tbody.appendChild(r);
        });
        return tbody;
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
        j.no = no;
        j.name = this.pokedex.getPokemonByNo(j.no).name;
        j.backgroundColor = bitToNum(x, mask_backGround);
        j.lv = bitToNum(x, mask_lv);
        j.foodCode = this.getFoodCodeOf(bitToNum(x, mask_food_A)) + this.getFoodCodeOf(bitToNum(x, mask_food_B)) + this.getFoodCodeOf(bitToNum(x, mask_food_C));
        j.char = this.getCharacteristic(bitToNum(x, mask_char_up), bitToNum(x, mask_char_down));

        j.subBerryS = bitMatch(x, mask_sub_subBerryS);
        j.subSpeedS = bitMatch(x, mask_sub_speedS);
        j.subSpeedM = bitMatch(x, mask_sub_speedM);
        j.subFoodS = bitMatch(x, mask_sub_foodS);
        j.subFoodM = bitMatch(x, mask_sub_foodM);
        j.subSkillS = bitMatch(x, mask_sub_skillS);
        j.subSkillM = bitMatch(x, mask_sub_skillM);
        this.setAdjustValues(j);

        return j;
    }

    

    createCookieValueFromJson(j){
        let n = 0;
        n += numToBit(j.backgroundColor, mask_backGround);//一番左のbitを1にしてしまうと、マイナスの整数になり狂うので注意
        n += numToBit(j.lv, mask_lv);
        n += numToBit(this.getFoodNumOf(j.foodCode[0]), mask_food_A);
        n += numToBit(this.getFoodNumOf(j.foodCode[1]), mask_food_B);
        n += numToBit(this.getFoodNumOf(j.foodCode[2]), mask_food_C);
        n += numToBit(this.getCharacteristicNumOf(j.char), mask_char_all);
        n += numToBit(j.subBerryS ? 1 : 0, mask_sub_subBerryS);
        n += numToBit(j.subSpeedS ? 1 : 0, mask_sub_speedS);
        n += numToBit(j.subSpeedM? 1 : 0, mask_sub_speedM);
        n += numToBit(j.subFoodS ? 1 : 0, mask_sub_foodS);
        n += numToBit(j.subFoodM ? 1 : 0, mask_sub_foodM);
        n += numToBit(j.subSkillS ? 1 : 0, mask_sub_skillS);
        n += numToBit(j.subSkillM ? 1: 0, mask_sub_skillM);
        return n.toString(16);
    }

    
    setAdjustValues(json){
        let charBit = this.getCharacteristicNumOf(json.char);
        json.speedCharAdj = this.getCharacteristicSpeedAdjustOf(charBit);
        json.genkiCharAdj = this.getCharacteristicGenkiAdjustOf(charBit);
        json.foodCharAdj = this.getCharacteristicFoodAdjustOf(charBit);
        json.skillCharAdj = this.getCharacteristicSkillAdjustOf(charBit);
        json.expCharAdj = this.getCharacteristicExpAdjustOf(charBit);
        

        json.speedSubAdj = json.subSpeedS ? 0.07 : 0;
        json.speedSubAdj += json.subSpeedM ? 0.14 : 0;
        json.foodSubAdj = json.subFoodS ? 0.18 : 0;
        json.foodSubAdj += json.subFoodM ? 0.36 : 0;
        json.skillSubAdj = json.subSkillS ? 0.18 : 0;
        json.skillSubAdj += json.subSkillM ? 0.36 : 0;

        json.speedSubAdj = Math.round(json.speedSubAdj * 100) / 100;
        json.foodSubAdj = Math.round(json.foodSubAdj * 100) / 100;
        json.skillSubAdj = Math.round(json.skillSubAdj * 100) / 100;

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

    getCharacteristicSpeedAdjustOf(n){
        return (bitToNum(n, 0b111000) == 0b001) ? +0.11
              : (bitToNum(n, 0b000111) == 0b001) ? -0.09 : 0;
    }

    getCharacteristicGenkiAdjustOf(n){
        return (bitToNum(n, 0b111000) == 0b010) ? +0.2
              : (bitToNum(n, 0b000111) == 0b010) ? -0.12 : 0;
    }

    getCharacteristicFoodAdjustOf(n){
        return (bitToNum(n, 0b111000) == 0b011) ? +0.2
              : (bitToNum(n, 0b000111) == 0b011) ? -0.2 : 0;
    }

    getCharacteristicSkillAdjustOf(n){
        return (bitToNum(n, 0b111000) == 0b100) ? +0.2
              : (bitToNum(n, 0b000111) == 0b100) ? -0.2 : 0;
    }

    getCharacteristicExpAdjustOf(n){
        return (bitToNum(n, 0b111000) == 0b101) ? +0.18
              : (bitToNum(n, 0b000111) == 0b101) ? -0.18 : 0;
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