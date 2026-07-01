const mask32a_nodp       = 0b00001111000000000000000000000000;
const mask32a_no         = 0b00000000111111111110000000000000;
const mask32a_lv         = 0b00000000000000000001111111000000;    
const mask32a_food1      = 0b00000000000000000000000000110000;
const mask32a_food2      = 0b00000000000000000000000000001100;
const mask32a_food3      = 0b00000000000000000000000000000011;

const mask32b_charUp     = 0b00000000000000000111000000000000;
const mask32b_charDown   = 0b00000000000000000000111000000000;
const mask32b_charAll    = 0b00000000000000000111111000000000;

//const mask32b_ribbonEv   = 0b00000000000000000000000110000000;          とりあえず使ってないのでslv突っ込む
//const mask32b_ribbonLv   = 0b00000000000000000000000001110000;
const mask32b_skillLv    = 0b00000000000000000000000111110000;
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

class PokemonInfo{
    constructor(pokedex, src = undefined, initOtetsudaiInfo = false){
        this.pokedex = pokedex;
        this.maxLv = Pokedex.pokeMaxLv;
        this.otherFoodPower = Pokedex.otherFoodPower;
        if (src != undefined){
            this.src = src;
            this.initializeFromCookie(src);
            if (initOtetsudaiInfo) this.initializeOtetsudaiInfo();
        }
    }


    static create(pokedex, src = undefined, initOtetsudaiInfo = false){
        return new PokemonInfo(pokedex, src, initOtetsudaiInfo);
    }



    initializeFromCookie(ck){
        //Characteristic を Nature に変える？
        if (ck == null){
            console.log("Cookie is Null.")
            return;
        }
        let valueArr = ck.split("-");
        let n = 0; //parseInt(valueArr[], 32)で使いまわす       
        let j = {};
        j.src = ck;
        
        n = parseInt(valueArr[0], 32);     
        j.no = bitToNum(n, mask32a_no) + PokemonInfo.convertNumToPokeNoDecimal(bitToNum(n, mask32a_nodp));
        this.pokemon = this.pokedex.getPokemonByNo(j.no);
        j.name = this.pokemon.name;
        j.lv = bitToNum(n, mask32a_lv);
        
        j.foodCode = this.getFoodCodeOf(bitToNum(n, mask32a_food1)) + this.getFoodCodeOf(bitToNum(n, mask32a_food2)) + this.getFoodCodeOf(bitToNum(n, mask32a_food3));

        n = parseInt(valueArr[1], 32);   
        j.char = this.getCharacteristic(bitToNum(n, mask32b_charUp), bitToNum(n, mask32b_charDown));
        j.skillLv = bitToNum(n, mask32b_skillLv);
        if (j.skillLv == 0) j.skillLv = 1;
        //j.ribbonEv = bitToNum(n, mask32b_ribbonEv);
        //j.ribbonLv = bitToNum(n, mask32b_ribbonLv);
        j.backgroundColor = bitToNum(n, mask32b_backGround);

        n = parseInt(valueArr[2], 32);
        j.subSkillList = this.getSubSkillListByNum(bitToNum(n, mask32c_sub1),
                                                   bitToNum(n, mask32c_sub2),
                                                   bitToNum(n, mask32c_sub3),
                                                   bitToNum(n, mask32c_sub4),
                                                   bitToNum(n, mask32c_sub5));
        this.LvRaw = j;
        this.setSubSkillsEnabled();
        return j;
    }

    static createBlank(pokedex){
        const info = PokemonInfo.create(pokedex, "d02l-g-0");//ニャース、フシギダネは食材ゲットで狂った
        info.LvRaw.isBlankPokemon = true;
        info.LvRaw.no = 0;
        info.LvRaw.name = "(空き枠)";
        
        info.initializeOtetsudaiInfo();
        return info;
    }


    //jsonに情報付与
    initializeOtetsudaiInfo(){
        const poke = this.pokemon;
        const setInfo = (j, initLv, withoutNoBonus = true) => {
            const rawData = {}
            const poke = this.pokemon;
            j.lv = initLv;
            this.setSubSkillsEnabled(j);
            if (j.isBlankPokemon){
                j.charAdjusts.food = -1;
            }

            this.berry = poke.berry;
            rawData.berryPower  = this.pokedex.getBerryPowerOf(this.berry, j.lv);
            const berryPower = rawData.berryPower;

            rawData.otetsudaiCountDay = poke.getOtetsudaiCountDay(j.lv, j.charAdjusts.speed, j.subAdjusts.speed);
            rawData.otetsudaiCountFoodDay = rawData.otetsudaiCountDay * (poke.foodRate * (1 + j.charAdjusts.food + j.subAdjusts.food));
            rawData.otetsudaiCountBerryDay = rawData.otetsudaiCountDay - rawData.otetsudaiCountFoodDay;
        
            rawData.berryPowerDay               = Math.round(berryPower * poke.getBerryNum(j.subBerryS) * rawData.otetsudaiCountBerryDay);
            rawData.berryPowerDayBerryS         = Math.round(berryPower * poke.getBerryNum(true) * rawData.otetsudaiCountBerryDay);
            rawData.berryPowerDayNoBerryS       = Math.round(berryPower * poke.getBerryNum(false) * rawData.otetsudaiCountBerryDay);            
            rawData.berryPowerDayNoPicking      = Math.round(berryPower * poke.getBerryNum(j.subBerryS) * rawData.otetsudaiCountDay);
            rawData.skillRateWithGuaranteed = poke.getGuaranteedSkillRateWithOtetsudaiCount(rawData.otetsudaiCountDay, j.charAdjusts.skill, j.subAdjusts.skill);
            rawData.skillPopDay             = rawData.otetsudaiCountDay * rawData.skillRateWithGuaranteed;
            
            rawData.totalFoodPowerKari = this.pokemon.createFoodCombination(j).foods.reduce((accum, f) => (f.expection * this.pokedex.getFoodPowerKariFromName(f.name)) + accum, 0);
            rawData.totalPowerKari = rawData.berryPowerDay + rawData.totalFoodPowerKari;


            j.rawResult = rawData;
        };

        this.Lv60 = structuredClone(this.LvRaw);
        this.LvMax = structuredClone(this.LvRaw);
        this.LvRawNoBonus = structuredClone(this.LvRaw);

        this.LvRawNoBonus.char = this.getCharacteristic(0, 0);       
        this.LvRawNoBonus.subSkillList = this.getSubSkillListByNum(0, 0, 0, 0, 0);

        setInfo(this.LvRaw, this.LvRaw.lv);
        setInfo(this.Lv60, 60);
        setInfo(this.LvMax, this.maxLv);
        setInfo(this.LvRawNoBonus, this.LvRawNoBonus.lv);

        let berryDiff = this.LvRaw.rawResult.berryPowerDay / this.LvRawNoBonus.rawResult.berryPowerDayBerryS  - 1;
        this.berryPowerDayDiff = (berryDiff == 0) ? "±0%"
                                : (berryDiff > 0)  ? `(+${Math.round(berryDiff * 100).toFixed(0)}%)`
                                 : `(-${Math.round(Math.abs(berryDiff * 100)).toFixed(0)}%)`;

        let skillDiff = this.LvRaw.rawResult.skillPopDay / this.LvRawNoBonus.rawResult.skillPopDay - 1;
        this.skillPopDayDiff  = (skillDiff == 0) ? "±0%"
                               : (skillDiff >= 0) ? `(+${Math.round(skillDiff * 100).toFixed(0)}%)`
                                : `(-${Math.round(Math.abs(skillDiff) * 100).toFixed(0)}%)`;

        let foodDiff = this.LvRaw.rawResult.otetsudaiCountFoodDay / this.LvRawNoBonus.rawResult.otetsudaiCountFoodDay - 1;
        this.foodPowerDayDiff = (foodDiff == 0) ? "(±0%)"
                               : (foodDiff >  0) ? `(+${Math.round(foodDiff * 100).toFixed(0)}%)`
                                : `(-${Math.round(Math.abs(foodDiff * 100)).toFixed(0)}%)`;

    }


    setSubSkillsEnabled(json, lv = -1){
        const j = json ?? this.LvRaw;
        lv = (lv == -1) ? j.lv : lv;

        
        j.subSkillList.lv10.enabled = j.subSkillList.lv10.lv <= lv;
        j.subSkillList.lv25.enabled = j.subSkillList.lv25.lv <= lv;
        j.subSkillList.lv50.enabled = j.subSkillList.lv50.lv <= lv;
        j.subSkillList.lv70.enabled = j.subSkillList.lv70.lv <= lv;
        j.subSkillList.lv80.enabled = j.subSkillList.lv80.lv <= lv;

        let exists = (n) => Object.entries(j.subSkillList).some(([k, v]) => v.value == n && v.lv <= lv);
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
    
    setAdjustValues(json){
        let n = PokemonInfo.getCharacteristicNumOf(json.char);
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


    static getColorClassNameFromNum(n){
        switch(n){
            case 0: return "def_color_SB"; 
            case 1: return "def_color_BL"; 
            case 2: return "def_color_SL"; 
            case 3: return "def_color_OR";                     
            case 4: return "def_color_PK";                     
            case 5: return "def_color_RD"; 
            case 6: return "def_color_GR"; 
            case 7: return "def_color_GD";                     
            default: return "def_color_XX"
        }
    }

    
    //Cookie作成 (復元はinitializeFromCookie、あるいはPokemonInfo.createから)
    static createCookieValueFromJson32(j){
        let abc = [];
        let n = 0;
        
        //PokeNoDecimalChangeTag:
        //n += numToBit(Math.round(j.no % 1 * 10), mask32a_nodp);
        n += numToBit(PokemonInfo.getPokeNoDecimalOf(j.no, true), mask32a_nodp);
        n += numToBit(Math.trunc(j.no), mask32a_no);
        n += numToBit(j.lv, mask32a_lv);
        n += numToBit(PokemonInfo.getFoodNumOf(j.foodCode[0]), mask32a_food1);
        n += numToBit(PokemonInfo.getFoodNumOf(j.foodCode[1]), mask32a_food2);
        n += numToBit(PokemonInfo.getFoodNumOf(j.foodCode[2]), mask32a_food3);
        abc.push(n.toString(32));
        
        n = 0;
        n += numToBit(PokemonInfo.getCharacteristicNumOf(j.char), mask32b_charAll);
        //n += numToBit(j.ribbonEv, mask32b_ribbonEv);
        //n += numToBit(j.ribbonLv, mask32b_ribbonLv);
        n += numToBit(j.skillLv, mask32b_skillLv);
        n += numToBit(j.backgroundColor, mask32b_backGround);
        abc.push(n.toString(32));

        n = 0;
        n += numToBit(j.subSkillList.lv10.value, mask32c_sub1);
        n += numToBit(j.subSkillList.lv25.value, mask32c_sub2);
        n += numToBit(j.subSkillList.lv50.value, mask32c_sub3);
        n += numToBit(j.subSkillList.lv70.value, mask32c_sub4);
        n += numToBit(j.subSkillList.lv80.value, mask32c_sub5);
        abc.push(n.toString(32));

        return abc.join("-");
    }


    //関係者
    static convertNumToPokeNoDecimal(n){
        if (n == 0) return 0;
        if (!Number.isInteger(n)) throw Error("小数点に対応していません。");
        if (n >= 16) throw Error("16以上の数値に対応していません。" + "\r\n\r\n" + n);
        
        let div = (n >= 10) ? 100 : 10;
        return n / div;
    }

    //小数点以下をポケモンのバージョン違いにし4bitで管理しているが、10～15(0110～1111)までは/10で処理できないため作成
    //なお、1と10は区別がつかないため10は使用禁止（エラー処理もできないよ！設計ダメだね！！）
    static getPokeNoDecimalOf(n, multiply10 = false){        
        let decRaw = Math.round(n % 1 * 100);
        if (decRaw == 0) return 0;
        if (decRaw < 10) throw new Error("小数点第一位が0の数値は対応していません。.1 .2 .3… と .11～.15に対応しています。");

        decRaw = (decRaw % 10 == 0) ? decRaw / 10 : decRaw;
        if (decRaw >= 16) throw new Error("小数点部分を整形後、15を超えました。");

        let div = (decRaw >= 10) ? 100 : 10;
        return decRaw / div * (multiply10 ? 10 : 1);
    }


    static createIdentifierOf(j){
        let x = j.char;
        let arr = Object.entries(j.subSkillList).map(([k, v]) => v);
        for (let i = 0; i < arr.length; i++){
            x += PokemonInfo.getSubSkillIdentifierOf(arr[i].value);
        }
        return x;
    }
 

    getCharacteristicNumOf = (c) => PokemonInfo.getCharacteristicNumOf(c);
    static getCharacteristicNumOf(c){
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

    getFoodNumOf = (food) => PokemonInfo.getFoodNumOf(food);
    static getFoodNumOf(food){
        return (food == "A") ? 0b0001
              : (food == "B") ? 0b0010
               : (food == "C") ? 0b0011 : 0b0000;
    }


    getFoodCodeOf = (n) => PokemonInfo.getFoodCodeOf(n);
    static getFoodCodeOf(n){
        return (n == 0b01) ? "A"
            : (n == 0b10) ? "B"
            : (n == 0b11) ? "C" : "X"
    }

    getCharacteristic = (up, down) => PokemonInfo.getCharacteristic(up, down);
    static getCharacteristic(up, down){
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

    getSubSkillIdentifierOf = (n) => PokemonInfo.getSubSkillIdentifierOf(n);
    static getSubSkillIdentifierOf(n){
        switch(n){
            case 0b00000 : return "";
            case 0b00001 : return "o";
            case 0b00010 : return ".";
            case 0b00011 : return ":";
            case 0b00100 : return "f";
            case 0b00101 : return "F";
            case 0b00110 : return "-";
            case 0b00111 : return "+";
            case 0b01000 : return "u";
            case 0b01001 : return "U";
            case 0b01010 : return "s";
            case 0b01011 : return "'";
            case 0b01100 : return '"';
            case 0b01101 : return "*";
            case 0b01110 : return "e";
            case 0b01111 : return "g";
            case 0b10000: return "y";
            case 0b10001 : return "r";
            default : return "x";
        }
    }
    
    getSubSkillListByNum = (lv10skill, lv25skill, lv50skill, lv70skill, lv80skill) => PokemonInfo.getSubSkillListByNum(lv10skill, lv25skill, lv50skill, lv70skill, lv80skill);

    static getSubSkillListByNum(lv10skill, lv25skill, lv50skill, lv70skill, lv80skill){
        return{
            lv10: {value: lv10skill, name: PokemonInfo.getSubSkillNameFromNum(lv10skill), lv: 10, enabled: false},
            lv25: {value: lv25skill, name: PokemonInfo.getSubSkillNameFromNum(lv25skill), lv: 25, enabled: false},
            lv50: {value: lv50skill, name: PokemonInfo.getSubSkillNameFromNum(lv50skill), lv: 50, enabled: false},
            lv70: {value: lv70skill, name: PokemonInfo.getSubSkillNameFromNum(lv70skill), lv: 70, enabled: false},
            lv80: {value: lv80skill, name: PokemonInfo.getSubSkillNameFromNum(lv80skill), lv: 80, enabled: false}
        };
    }
    

    getSubSkillListByName = (lv10skill, lv25skill, lv50skill, lv70skill, lv80skill) => PokemonInfo.getSubSkillListByName(lv10skill, lv25skill, lv50skill, lv70skill, lv80skill);
    static getSubSkillListByName(lv10skill, lv25skill, lv50skill, lv70skill, lv80skill){
        return{
            lv10: {value: PokemonInfo.getSubSkillNumOf(lv10skill), name: lv10skill, lv: 10, enabled: false},
            lv25: {value: PokemonInfo.getSubSkillNumOf(lv25skill), name: lv25skill, lv: 25, enabled: false},
            lv50: {value: PokemonInfo.getSubSkillNumOf(lv50skill), name: lv50skill, lv: 50, enabled: false},
            lv70: {value: PokemonInfo.getSubSkillNumOf(lv70skill), name: lv70skill, lv: 70, enabled: false},
            lv80: {value: PokemonInfo.getSubSkillNumOf(lv80skill), name: lv80skill, lv: 80, enabled: false}
        };
    }
    

    getSubSkillNameFromNum = (n) => PokemonInfo.getSubSkillNameFromNum(n);
    static getSubSkillNameFromNum(n){
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


    getSubSkillNumOf = (name) => PokemonInfo.getSubSkillNumOf(name);
    static getSubSkillNumOf(name){
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

}