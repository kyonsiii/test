class Pokedex{
    static pokeMaxLv = 70;
    /*
    
    static recipeMaxLv = 70;
    static fieldBonusMax = 0.85;
    */
    static otherFoodPower = 350;
    static dakutenMap = {
        'ガ': 'カ', 'ギ': 'キ', 'グ': 'ク', 'ゲ': 'ケ', 'ゴ': 'コ',
        'ザ': 'サ', 'ジ': 'シ', 'ズ': 'ス', 'ゼ': 'セ', 'ゾ': 'ソ',
        'ダ': 'タ', 'ヂ': 'チ', 'ヅ': 'ツ', 'デ': 'テ', 'ド': 'ト',
        'バ': 'ハ', 'ビ': 'ヒ', 'ブ': 'フ', 'ベ': 'ヘ', 'ボ': 'ホ',
        'パ': 'ハ', 'ピ': 'ヒ', 'プ': 'フ', 'ペ': 'ヘ', 'ポ': 'ホ'
    };

    constructor(pokemons){

        //foodDBシートにもあるので値を変えたときはそちらも変えること
        this.foodPowerKariMap = FOOD_EVAL_DATA;
        this.berryList = BERRY_DATA;
        this.skillList = Object.fromEntries(Object.keys(SKILL_DATA).map(x => [x, SKILL_DATA[x]]));

        this.pokemons = POKE_DATA_RAW.map(data => new Pokemon(this, data));        
        this.fullyEvolvedPokemons = this.pokemons.filter(p => p.fullyEvolved);


        //食材の並び順を調整するため indexで使用、reportもここから使うかも？
        this.foodList = FOOD_DATA.sort((a, b) => a.displayOrder - b.displayOrder);

        const foodSet = new Set(this.pokemons.map(p => p.foods.map(f => f.name).flat()).flat());
        const diff = Array.from(foodSet).filter(fs => this.foodList.every(f => f.name != fs));
        if (diff.length != 0) alert(`foodListに追加していない食材があります。\r\n\r\n${diff.join("\r\n")}`);



        //たぶん伸ばし棒とかをうまいこと処理してかなを振ってる
        this.pokeKanaDic = {
            "ア": [],"カ": [],"サ": [],"タ": [],"ナ": [],
            "ハ": [],"マ": [],"ヤ": [],"ラ": [],"ワ": []
        };        
        let kanaSortedPokemonNames = this.pokemons.map(p => ({name: p.name, kana: this.getNobasibouConvertedName(p.name.normalize("NFD").replace(/[\u3099\u309A]/g, '').normalize("NFC"))}))
                                      .sort((p1, p2) => (p1.kana > p2.kana) ? 1 : -1);
        kanaSortedPokemonNames.map(p =>( {kanaChar: this.getInitialKanaOf(p.kana[0]), name: p.name})).forEach(p => {
            this.pokeKanaDic[p.kanaChar].push(p.name);
        });
        this.pokemonsSortedByKana = kanaSortedPokemonNames.map(p => p.name);



        const makeGeneralCalc = (option) => (poke, expectionDay) => this.calcSkillGeneral(poke, expectionDay, option);
    }



    getSkillPowerOf(poke, expectionDay){
        console.log(poke.skill);
        alert("NO");
    }
    calcSkillGeneral(poke, expectionDay, num){
        return expectionDay * num;
    }

    
    getNobasibouConvertedName(s){
        if (s.indexOf("ー") == -1) return s;
        let getNobasibouKanaOf = (c) => {
            return ("アカサタナハマヤラワガザダバパァャ".includes(c)) ? "ア"
                 : ("イキシチニヒミ　リ　ギジヂビピィ　".includes(c)) ? "イ"
                 : ("ウクスツヌフムユルングズヅブプゥュ".includes(c)) ? "ウ"
                 : ("エケセテネヘメ　レ　ゲゼデベペェ　".includes(c)) ? "エ"
                 : ("オコソトノホモヨロヲゴゾドボポォョ".includes(c)) ? "オ" : "？";
                 //"ッ"などの小さい文字は伸ばし棒の前に来ないので無視
        }
        let kanaList = s.split('');
        for (let i = 0; i < kanaList.length; i++){
            if (kanaList[i] == 'ー') kanaList[i] = getNobasibouKanaOf(kanaList[i - 1]);
        }
        return kanaList.join('');
    }
    

    getInitialKanaOf(s){
        let targ = s in Pokedex.dakutenMap ? Pokedex.dakutenMap[s] : s;
        return ("アイウエオ".includes(targ)) ? "ア"
             : ("カキクケコ".includes(targ)) ? "カ"
             : ("サシスセソ".includes(targ)) ? "サ"
             : ("タチツテト".includes(targ)) ? "タ"
             : ("ナニヌネノ".includes(targ)) ? "ナ"
             : ("ハヒフヘホ".includes(targ)) ? "ハ"
             : ("マミムメモ".includes(targ)) ? "マ"
             : ("ヤユヨ".includes(targ)) ? "ヤ"
             : ("ラリルレロ".includes(targ)) ? "ラ"
             : ("ワオン".includes(targ)) ? "ワ"
             : "×";
    }



    getPokemonByName(name){
        for (let i = 0; i < this.pokemons.length; i++){
            if (this.pokemons[i].name == name) return this.pokemons[i];
        }
        return null;
    }

    getNoByName(name){
        let p = this.getPokemonByName(name);
        return (p == null) ? -1 : p.no;
    }

    getPokemonByNo(no){
        for (let i = 0; i < this.pokemons.length; i++){
            if (this.pokemons[i].no == no) return this.pokemons[i];
        }
        return null;
    }

    getBerryPowerDayNoBonus(poke, lv){
        let ote = poke.getOtetsudaiCountDay(lv);
        let berryOte = ote * (1 - poke.foodRate);
        let berryNum = poke.getBerryNum(true);
        let berryPow = this.getBerryPowerOf(poke.berry, lv);
        
        return Math.round(berryNum * berryPow * berryOte);
    }
    

    getBerryPowerBaseOf(name){
        for (let i = 0; i < this.berryList.length; i++){
            if (this.berryList[i].name == name) return this.berryList[i].power;
        }
        return -1;
    }

    getBerryPowerOf(berryName, lv){
        let powerBase = this.getBerryPowerBaseOf(berryName);
        if (powerBase == -1) return -1;
        return Math.max(powerBase + (lv - 1), powerBase * Math.pow(1.025, lv - 1));
    }


    getFoodPowerKariFromName(foodName){
        return this.foodPowerKariMap[foodName] ?? Pokedex.otherFoodPower;
    }


    getFoodPowerKariOf(poke, foodCode, ABCIndex){
        const food = poke.getFoodByCode(foodCode);        
        
        const foodPow = this.foodPowerKariMap[food.name] ?? Pokedex.otherFoodPower;
        const foodCount = food.nums[ABCIndex];
        return foodPow * foodCount;              
    }
}



class Pokemon{
    static createBlank(pokedex){
        const poke = new Pokemon(pokedex, {}, true);
        return poke;
    }

    constructor(pokedex, json, passInitFoods = false){
        this.pokedex = pokedex;
        Object.assign(this, json);
        this.indicatorChar = "|";
        this.isBerrySpecialty = (this.specialty == "きのみ" || this.specialty == "オール");
        this.isFoodSpecialty = (this.specialty == "食材" || this.specialty == "オール");
        this.isSkillSpecialty = (this.specialty == "スキル" || this.specialty == "オール");
        this.groupName = POKEMON_SAME_GROUP[this.name] ?? this.name;
        this.searchName = POKEMON_SEARCH_NAME_REPLACE[this.name] ?? this.name;

        if (pokedex != null && this.skill != null && !Object.hasOwn(this.pokedex.skillList, this.skill)){
            alert("未登録のスキル: " + this.skill);
        }

        if (passInitFoods){

        }
        else{
            this.addFood(this.food1, this.food1Num, "A");
            if (this.food2 != "") this.addFood(this.food2, this.food2Num, "B");
            if (this.food3 != "") this.addFood(this.food3, this.food3Num, "C");
        }

        ["food1", "food1Num", "food2", "food2Num", "food3", "food3Num"].forEach(x => delete this[x]);
    }



    addFood(name, nums, code = ""){
        if (this.foods == undefined) this.foods = [];
        this.foods.push({
            code: (code == "") ? String.fromCharCode(65 + this.foods.length) : code,
            name: name,
            nums: nums
        })
    }

    skillIsFoodGainer(){
        const func = this.pokedex.skillList[this.skill];
        if (func == undefined) return false;
        return (func.foodGainFunc == undefined) ? false : true;
    }

    skillLvIsMax(num){
        const func = this.pokedex.skillList[this.skill];
        if (func == undefined) return false;
        const getFunc = func.getMaxLv;
        return (getFunc == undefined) ? false : num >= getFunc();
    }

    getMaxSkillLv(){
        const func = this.pokedex.skillList[this.skill];
        if (func == undefined) return 0;
        const getFunc = func.getMaxLv;
        return (getFunc == undefined) ? 0 : getFunc();
    }

    getFoodByCode(code){
        const index = code.charCodeAt(0) - 65;
        return this.foods[index];
    }

    setFoodCombinations(){
        this.foodCombinations = [];
        let code = "A";

        for (let ib = 0; ib < 2; ib++){         //2つ目の食材はAかB
            code = 'A' + String.fromCharCode(65 + ib);
            this.foodCombinations.push(this.createFoodCombination(null, 30, code));
            for (let ic = 0; ic < 3; ic++){      //3つ目の食材はAかBかC なお、Cがない場合もある
                if (this.foods.length == 2 && ic == 2) continue;
                this.foodCombinations.push(this.createFoodCombination(null, 60, code + String.fromCharCode(65 + ic)));
            }
        }
    }


    createFoodCombination(json = null, lv = -1, code = undefined, skillLv = undefined){   //json=nullは無補正の一覧表示の時を想定。 lvとcodeは上書きできるように
        const isVanilla = (json == null);   //比較用の無補正個体
        if (json == null){
            json = {
                charAdjusts: {speed: 0, food: 0, skill: 0},
                subAdjusts:  {speed: 0, food: 0, skill: 0},
                isVanilla: isVanilla
            };
        }                
        lv = (lv == -1) ? json.lv : lv; //lvの入力がなかったらjsonの情報を見る
        
        code = code ?? json.foodCode;   //foodCodeの入力がなかったらjsonの情報を見る        
        const comb = new FoodCombination(this, lv, this.getOtetsudaiCountDay(lv, json.charAdjusts.speed, json.subAdjusts.speed), code, json.charAdjusts.food + json.subAdjusts.food);        
        const foodGainFunc = this.pokedex.skillList[this.skill].foodGainFunc;
        if (foodGainFunc != undefined){
            const skillCount = (json.isVanilla) ? this.skillExpectionDay 
                              : this.getSkillPopCountWithGuaranteed(lv, json.charAdjusts.speed, json.subAdjusts.speed, json.charAdjusts.skill, json.subAdjusts.skill);
            comb.skillLv = (skillLv != undefined) ? skillLv
                          : (json.isVanilla) ? this.skillLv
                           : json.skillLv;

            for (const res of foodGainFunc(this, skillCount, comb.skillLv)){
                comb.addFood(res.food, res.num);
            }
        }
        return comb;
    }

  

    existAnyInFoodList(targetFoods){
        return Array.isArray(targetFoods) ? this.foods.some(f => targetFoods.some(tf => f.name == tf))
                                           : this.foods.some(f => targetFoods == f.name);
    }

    existAllInFoodList(targetFoods){
        return Array.isArray(targetFoods) ? targetFoods.every(tf => this.foods.some(f => f.name == tf))
                                           : this.foods.some(f => targetFoods == f.name);
    }

    getAllFoodNames(){
        return this.foods.map(f => f.name);
    }


    getIndicatorBarOf(num){
        num = (num < 0) ? 0 : num;
        let left = (num >= 10) ? "" + num + " " : "<font color='white'>_</font>" + num + " ";
        return left + this.indicatorChar.repeat(num);
    }

    getOtetsudaiCountDay(lv, spdAdj = 0.0, subAdj = 0.0, genkiAdj = 0.52, foodCountMode = false){//speedAdjはプラスのほうが○
        let lvAdj  = 1 - ((lv - 1) * 0.002);
        spdAdj = 1 - spdAdj;
        subAdj = 1 - subAdj;
        subAdj = (subAdj < 0.65) ? 0.65 : subAdj;

        let adjSec = this.sec * lvAdj * spdAdj * subAdj * genkiAdj;
        let oteCount = 86400 / adjSec
        if (foodCountMode){
            alert("NG!!!")
        }
        return oteCount;
    }

    getBerryNum(subBerryS = false){
        return (this.isBerrySpecialty ? 2 : 1) + (subBerryS ? 1 : 0);
    }

    getSkillRate(skillNatureAdj = 0.0, skillSubAdj = 0.0){
        return this.skillRate * (1 + skillNatureAdj) * (1 + skillSubAdj);
    }

    /*getGuaranteedSkillRate(lv, spdNatureAdj = 0.0, spdSubAdj = 0.0, skillNatureAdj = 0.0, skillSubAdj = 0.0, genkiAdj = 0.52){
        console.log(this);
        const oteCount = this.getOtetsudaiCountDay(lv, spdNatureAdj, spdSubAdj, genkiAdj);
        const skillPopRate = this.getSkillRate(skillNatureAdj, skillSubAdj);
        const minGuaranteedCount = 144000 / this.sec;
        const neverPopProb = (1 - skillPopRate)**oteCount;
        return (oteCount * skillPopRate + neverPopProb) / oteCount
    }
    */

    getGuaranteedSkillRateWithOtetsudaiCount(oteCount, skillNatureAdj = 0.0, skillSubAdj = 0.0){
        const skillPopRate = this.getSkillRate(skillNatureAdj, skillSubAdj);
        const minGuaranteedCount = (this.specialty == "スキル") ? 144000 / this.sec : 78;
        const neverPopProb = (1 - skillPopRate)**oteCount;
        return (oteCount * skillPopRate + neverPopProb) / oteCount
    }

    getSkillPopCountWithGuaranteed(lv, spdNatureAdj = 0.0, spdSubAdj = 0.0, skillNatureAdj = 0.0, skillSubAdj = 0.0, genkiAdj = 0.52){
        const oteCount = this.getOtetsudaiCountDay(lv, spdNatureAdj, spdSubAdj, genkiAdj);
        return oteCount * this.getGuaranteedSkillRateWithOtetsudaiCount(oteCount, skillNatureAdj, skillSubAdj);
    }
}


class FoodCombination{
    constructor(poke, lv, otetudaiCount, code, foodRateAdjust = 0){
        this.code = code;
        this.lv = lv;
        this.skillLv = 1;
        this.foods = [];
        const codeForCalc = (lv < 30) ? code.substring(0, 1)
                           : (lv < 60) ? code.substring(0, 2) : code; //lvが60未満の時は3つ目の食材は取れない
        let foodName;
        let foodNum = -1;
        let foodExpection = -1;
        const otetudaiPerItem = otetudaiCount / codeForCalc.length;        

        for (let i = 0; i < codeForCalc.length; i++){
            const food = poke.getFoodByCode(codeForCalc[i]);
            if (food == undefined) continue; //ニャースとかグレッグルとか食材3個未満のやつ対策

            foodExpection = food.nums[i] * otetudaiPerItem * (poke.foodRate * (1 + foodRateAdjust))

            let f = this.foods.find(x => x.name == food.name);
            if (f === undefined){
                this.foods.push({name: food.name, expection: foodExpection});
            }
            else{
                f.expection += foodExpection;
            }
        }

        for (let i = 0; i < this.foods.length; i++){
            this.foods[i].expection = Math.round(this.foods[i].expection);
        }
    }


    addFood(foodName, count){
        if (this.foods == undefined) this.foods = [];

        const food = this.foods.filter(f => f.name == foodName);

        if (food.length > 0){
            food[0].expection = Math.round(food[0].expection + count);
        }
        else{
            this.foods.push({name: foodName, expection: Math.round(count)});
        }        
    }

    containsFoodsAny(foodNames){
        return this.foods.some(f => foodNames.some(fn => fn == f.name));
    }

    containsFoodsAtLeast(foodNames, min = 0){
        return this.getExpectionOf(foodNames) >= min;
    }

    getExpectionOf(foodNames){
        this.totalExpectionFinally = this.foods.filter(f => foodNames.includes(f.name)).map(f => f.expection).reduce((p, c) => p + c, 0);
        return this.totalExpectionFinally;
    }
    
    getExpectionExcept(foodNames){
        this.totalExpectionFinally = this.foods.filter(f => foodNames.every(targ => targ != f.name)).map(f => f.expection).reduce((p, c) => p + c, 0);
        return this.totalExpectionFinally;
    }

}











