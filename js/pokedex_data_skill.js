//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//スキルのデータ
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const SKILL_DATA = {
            "いやしのはどう(げんきエールS)"     : (() => {
                const skillTable = [];
                return {
                        getMaxLv: () => 6,
                        foodGainFunc  : undefined,
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(),
            "りゅうせいぐん(きのみバースト)"     : (() => {
                const skillTable = [];
                return {
                        getMaxLv: () => 6,
                        foodGainFunc  : undefined,
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(),
            "おてつだいサポートS"               : (() => {
                const skillTable = [];
                return {
                        getMaxLv: () => 7,
                        foodGainFunc  : undefined,
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(),
            "おてつだいブースト(でんき)"        : (() => {
                const skillTable = [];
                return {
                        getMaxLv: () => 6,
                        foodGainFunc  : undefined,
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(),
            "おてつだいブースト(ほのお)"        : (() => {
                const skillTable = [];
                return {
                        getMaxLv: () => 6,
                        foodGainFunc  : undefined,
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(),
            "おてつだいブースト(みず)"          : (() => {
                const skillTable = [];
                return {
                        getMaxLv: () => 6,
                        foodGainFunc  : undefined,
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(),
            "かいりきバサミ(食材セレクトS)"     : (() => {
                const skillTable = [5,6,8,11,13,16,18];
                return {
                    getMaxLv: () => skillTable.length,
                        foodGainFunc  : (poke, expectionDay, option1 = 1) => {
                        //そのうち、スキルレベル対応させよう
                        // 大成功16%で、 18 * 0.84 + 36 * 0.16 = 22.88 で計算       
                        const index = (option1 > skillTable.length) ? skillTable.length - 1 : option1 - 1; 
                        const normalExpection = skillTable[index];
                        const expectionPerFood = ((normalExpection * 0.84) + (normalExpection * 2 * 0.16)) / 4;             
                        return [
                            {food: "ピュアなオイル", num: expectionPerFood * expectionDay},
                            {food: "ワカクサコーン", num: expectionPerFood * expectionDay},
                            {food: "あんみんトマト", num: expectionPerFood * expectionDay},
                            {food: "ほっこりポテト", num: expectionPerFood * expectionDay}
                        ];
                    },
                    energyGainFunc:  (poke, expectionDay, option1) => undefined
                    }
                })(),
            "きのみジュース(げんきオールS)"     : (() => {
                const skillTable = [];
                return {
                        getMaxLv: () => 6,
                        foodGainFunc  : undefined,
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(), 
            "きのみバースト"                    : (() => {
                const skillTable = [];
                return {
                        getMaxLv: () => 6,
                        foodGainFunc  : undefined,
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(), 
            "きょううん(食材セレクトS)"         : (() => {
                const skillTable = [5,6,8,11,13,16,18];
                return {
                    getMaxLv: () => skillTable.length,
                        foodGainFunc  : (poke, expectionDay, option1 = 1) => {
                        //そのうち、スキルレベル対応させよう
                        // 大成功16%で、 18 * 0.84 + 36 * 0.16 = 22.88 で計算       
                        const index = (option1 > skillTable.length) ? skillTable.length - 1 : option1 - 1; 
                        const normalExpection = skillTable[index];
                        const expectionPerFood = (normalExpection * 0.84) / 4;             
                        return [
                            {food: "あじわいキノコ", num: expectionPerFood * expectionDay},
                            {food: "マメミート", num: expectionPerFood * expectionDay},
                            {food: "ワカクサ大豆", num: expectionPerFood * expectionDay},
                            {food: "めざましコーヒー", num: expectionPerFood * expectionDay}
                        ];
                    },
                    energyGainFunc:  (poke, expectionDay, option1) => undefined
                    }
                })(),
            "げんきエールS"                     : (() => {
                const skillTable = [];
                return {
                        getMaxLv: () => 6,
                        foodGainFunc  : undefined,
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(), 
            "げんきオールS"                     : (() => {
                const skillTable = [];
                return {
                        getMaxLv: () => 6,
                        foodGainFunc  : undefined,
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(), 
            "げんきチャージS"                   : (() => {
                const skillTable = [];
                return {
                        getMaxLv: () => 6,
                        foodGainFunc  : undefined,
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(), 
            "たくわえる(エナジーチャージS)"     : (() => {
                const skillTable = [];
                return {
                        getMaxLv: () => 7,
                        foodGainFunc  : undefined,
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(), 
            "つきのひかり"                      : (() => {
                const skillTable = [];
                return {
                        getMaxLv: () => 6,
                        foodGainFunc  : undefined,
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(), 
            "ばけのかわ(きのみバースト)"        : (() => {
                const skillTable = [];
                return {
                        getMaxLv: () => 6,
                        foodGainFunc  : undefined,
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(), 
            "へんしん(スキルコピー)"            : (() => {
                const skillTable = [];
                return {
                        getMaxLv: () => 7,
                        foodGainFunc  : undefined,
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(), 
            "ほっぺすりすり(げんきエールS)"     : (() => {
                const skillTable = [];
                return {
                        getMaxLv: () => 6,
                        foodGainFunc  : undefined,
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(), 
            "みかづきのいのり(げんきオールS)"   : (() => {
                const skillTable = [];
                return {
                        getMaxLv: () => 6,
                        foodGainFunc  : undefined,
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(), 
            "ゆびをふる"                        : (() => {
                const skillTable = [];
                return {
                        getMaxLv: () => 7,
                        foodGainFunc  : undefined,
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(), 
            "ゆめのかけらゲットS"               : (() => {
                const skillTable = [];
                return {
                        getMaxLv: () => 8,
                        foodGainFunc  : undefined,
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(),
            "はどうだん(ゆめのかけらゲットS)"   : (() => {
                const skillTable = [];
                return {
                        getMaxLv: () => 8,
                        foodGainFunc  : undefined,
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(), 
            "ゆめのかけらゲットS(ランダム)"     : (() => {
                const skillTable = [];
                return {
                        getMaxLv: () => 8,
                        foodGainFunc  : undefined,
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(), 
            "エナジーチャージS"                 : (() => {
                const skillTable = [];
                return {
                        getMaxLv: () => 7,
                        foodGainFunc  : undefined,
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(), 
            "エナジーチャージM"                 : (() => {
                const skillTable = [];
                return {
                        getMaxLv: () => 7,
                        foodGainFunc  : undefined,
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(),
            "エナジーチャージS(ランダム)"       : (() => {
                const skillTable = [];
                return {
                        getMaxLv: () => 7,
                        foodGainFunc  : undefined,
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(), 
            "オールマイティー"                  : (() => {
                const skillTable = [];
                return {
                        getMaxLv: () => 8,
                        foodGainFunc  : undefined,
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(), 
            "ナイトメア(エナジーチャージM)"     : (() => {
                const skillTable = [];
                return {
                        getMaxLv: () => 7,
                        foodGainFunc  : undefined,
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(), 
            "ビルドアップ(料理アシストS)"       : (() => {
                const skillTable = [6, 8, 11, 14, 17, 21, 24];
                return {
                        getMaxLv: () => skillTable.length,
                        foodGainFunc  : (poke, expectionDay, option1 = 1) => {
                            //そのうち、スキルレベル対応させよう！     
                            const index = (option1 > skillTable.length) ? skillTable.length - 1 : option1 - 1; 
                            return [{food: "その他", num: skillTable[index] * expectionDay}];
                        },
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(), 
            "プラス(食材ゲットS)"               : (() => {
                const skillTableCommon = [5,7,9,11,13,16,18];
                const skillTable1 =      [6,7,8,9,10,11,12];
                const skillTable2 =      [6,7,9,10,12,13,14];
                return {
                    getMaxLv: () => skillTable1.length,
                    foodGainFunc  : (poke, expectionDay, option1 = 1) => { 
                        const food = poke.foods[0].name;
                        const index = (option1 > skillTable1.length) ? skillTable1.length - 1 : option1 - 1; 
                        const num  = (food == "めざましコーヒー") ? skillTable1[index] 
                                    : (food == "モーモーミルク") ? skillTable2[index]  : 999;                   
                        return [{food: food, num: num * expectionDay}, {food:"その他", num: skillTableCommon[index] * expectionDay}];
                    },
                    energyGainFunc:  (poke, expectionDay, option1) => undefined
                }
            })(),
            "プレゼント(食材ゲットS)"           : (() => {
                const skillTable = [4, 6, 8, 10, 12, 15, 17];
                return {
                        getMaxLv: () => skillTable.length,
                        foodGainFunc  : (poke, expectionDay, option1 = 1) => {
                            //そのうち、スキルレベル対応させよう！     
                            const index = (option1 > skillTable.length) ? skillTable.length - 1 : option1 - 1; 
                            return [{food: "その他", num: skillTable[index] * expectionDay}];
                        },
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(), 
            "マイナス(料理パワーアップS)"       : (() => {
                const skillTable = [];
                return {
                        getMaxLv: () => 7,
                        foodGainFunc  : undefined,
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(), 
            "料理チャンスS"                     : (() => {
                const skillTable = [];
                return {
                        getMaxLv: () => 6,
                        foodGainFunc  : undefined,
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(), 
            "料理パワーアップS"                 : (() => {
                const skillTable = [];
                return {
                        getMaxLv: () => 7,
                        foodGainFunc  : undefined,
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(), 
            "食材ゲットS"                       : (() => {
                const skillTable = [6, 8, 11, 14, 17, 21, 24];
                return {
                        getMaxLv: () => skillTable.length,
                        foodGainFunc  : (poke, expectionDay, option1 = 1) => {
                            //そのうち、スキルレベル対応させよう！     
                            const index = (option1 > skillTable.length) ? skillTable.length - 1 : option1 - 1; 
                            return [{food: "その他", num: skillTable[index] * expectionDay}];
                        },
                        energyGainFunc:  (poke, expectionDay, option1) => 0
                    }
                })(), 
            "食材セレクトS"                     : (() =>{
                const skillTable = [5,6,8,11,13,16,18];
                return {
                    getMaxLv: () => skillTable.length,
                    foodGainFunc  : (poke, expectionDay, option1 = 1) => {
                        //そのうち、スキルレベル対応させよう！     
                        const index = (option1 > skillTable.length) ? skillTable.length - 1 : option1 - 1;                
                        const expectionPerFood = skillTable[index] / poke.foods.length;
                        return poke.foods.map(f => ({food: f.name, num: expectionPerFood * expectionDay}));
                    },
                    energyGainFunc:  (poke, expectionDay, option1) => undefined
                }
            })(), 
        };