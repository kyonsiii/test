class Pokedex{
    dakutenMap = {
        'ガ': 'カ', 'ギ': 'キ', 'グ': 'ク', 'ゲ': 'ケ', 'ゴ': 'コ',
        'ザ': 'サ', 'ジ': 'シ', 'ズ': 'ス', 'ゼ': 'セ', 'ゾ': 'ソ',
        'ダ': 'タ', 'ヂ': 'チ', 'ヅ': 'ツ', 'デ': 'テ', 'ド': 'ト',
        'バ': 'ハ', 'ビ': 'ヒ', 'ブ': 'フ', 'ベ': 'ヘ', 'ボ': 'ホ',
        'パ': 'ハ', 'ピ': 'ヒ', 'プ': 'フ', 'ペ': 'ヘ', 'ポ': 'ホ'
    };
    

    constructor(pokemons){
        this.pokemons =
        [
new Pokemon({no:1,name:"フシギダネ",sleepType:"うとうと",specialty:"食材",berry:"ドリのみ",food1:"あまいミツ",food1Num:[2,5,7],food2:"あんみんトマト",food2Num:[0,4,7],food3:"ほっこりポテト",food3Num:[0,0,6],skill:"食材ゲットS",fp:5,sec:4400,fullyEvolved:false,expType:600,foodRate:0.257,foodOtetsudaiCountDay:11.1,skillRate:0.019,skillExpectionDay:1.33,berryEnergy:30,berrySEnergyLvMaxDay:9376,foodEnergyLvMaxDay:18178,rankOfBerry:1,rankOfFood:4,rankOfSkill:3}),
new Pokemon({no:2,name:"フシギソウ",sleepType:"うとうと",specialty:"食材",berry:"ドリのみ",food1:"あまいミツ",food1Num:[2,5,7],food2:"あんみんトマト",food2Num:[0,4,7],food3:"ほっこりポテト",food3Num:[0,0,6],skill:"食材ゲットS",fp:12,sec:3300,fullyEvolved:false,expType:600,foodRate:0.255,foodOtetsudaiCountDay:14.7,skillRate:0.019,skillExpectionDay:1.46,berryEnergy:30,berrySEnergyLvMaxDay:12535,foodEnergyLvMaxDay:24049,rankOfBerry:3,rankOfFood:6,rankOfSkill:3}),
new Pokemon({no:3,name:"フシギバナ",sleepType:"うとうと",specialty:"食材",berry:"ドリのみ",food1:"あまいミツ",food1Num:[2,5,7],food2:"あんみんトマト",food2Num:[0,4,7],food3:"ほっこりポテト",food3Num:[0,0,6],skill:"食材ゲットS",fp:20,sec:2800,fullyEvolved:true,expType:600,foodRate:0.266,foodOtetsudaiCountDay:18.1,skillRate:0.021,skillExpectionDay:1.63,berryEnergy:30,berrySEnergyLvMaxDay:14555,foodEnergyLvMaxDay:29566,rankOfBerry:5,rankOfFood:9,rankOfSkill:4}),
new Pokemon({no:4,name:"ヒトカゲ",sleepType:"すやすや",specialty:"食材",berry:"ヒメリのみ",food1:"マメミート",food1Num:[2,5,7],food2:"あったかジンジャー",food2Num:[0,4,7],food3:"げきからハーブ",food3Num:[0,0,6],skill:"食材ゲットS",fp:5,sec:3500,fullyEvolved:false,expType:600,foodRate:0.201,foodOtetsudaiCountDay:10.9,skillRate:0.011,skillExpectionDay:1.25,berryEnergy:27,berrySEnergyLvMaxDay:11408,foodEnergyLvMaxDay:17873,rankOfBerry:2,rankOfFood:3,rankOfSkill:3}),
new Pokemon({no:5,name:"リザード",sleepType:"すやすや",specialty:"食材",berry:"ヒメリのみ",food1:"マメミート",food1Num:[2,5,7],food2:"あったかジンジャー",food2Num:[0,4,7],food3:"げきからハーブ",food3Num:[0,0,6],skill:"食材ゲットS",fp:12,sec:3000,fullyEvolved:false,expType:600,foodRate:0.227,foodOtetsudaiCountDay:14.4,skillRate:0.016,skillExpectionDay:1.42,berryEnergy:27,berrySEnergyLvMaxDay:12876,foodEnergyLvMaxDay:23549,rankOfBerry:3,rankOfFood:6,rankOfSkill:3}),
new Pokemon({no:6,name:"リザードン",sleepType:"すやすや",specialty:"食材",berry:"ヒメリのみ",food1:"マメミート",food1Num:[2,5,7],food2:"あったかジンジャー",food2Num:[0,4,7],food3:"げきからハーブ",food3Num:[0,0,6],skill:"食材ゲットS",fp:20,sec:2400,fullyEvolved:true,expType:600,foodRate:0.224,foodOtetsudaiCountDay:17.8,skillRate:0.016,skillExpectionDay:1.54,berryEnergy:27,berrySEnergyLvMaxDay:16157,foodEnergyLvMaxDay:29047,rankOfBerry:6,rankOfFood:9,rankOfSkill:3}),
new Pokemon({no:7,name:"ゼニガメ",sleepType:"ぐっすり",specialty:"食材",berry:"オレンのみ",food1:"モーモーミルク",food1Num:[2,5,7],food2:"リラックスカカオ",food2Num:[0,3,5],food3:"マメミート",food3Num:[0,0,7],skill:"食材ゲットS",fp:5,sec:4500,fullyEvolved:false,expType:600,foodRate:0.271,foodOtetsudaiCountDay:11.5,skillRate:0.02,skillExpectionDay:1.34,berryEnergy:31,berrySEnergyLvMaxDay:9295,foodEnergyLvMaxDay:20119,rankOfBerry:1,rankOfFood:5,rankOfSkill:3}),
new Pokemon({no:8,name:"カメール",sleepType:"ぐっすり",specialty:"食材",berry:"オレンのみ",food1:"モーモーミルク",food1Num:[2,5,7],food2:"リラックスカカオ",food2Num:[0,3,5],food3:"マメミート",food3Num:[0,0,7],skill:"食材ゲットS",fp:12,sec:3400,fullyEvolved:false,expType:600,foodRate:0.271,foodOtetsudaiCountDay:15.2,skillRate:0.02,skillExpectionDay:1.47,berryEnergy:31,berrySEnergyLvMaxDay:12302,foodEnergyLvMaxDay:26629,rankOfBerry:3,rankOfFood:8,rankOfSkill:3}),
new Pokemon({no:9,name:"カメックス",sleepType:"ぐっすり",specialty:"食材",berry:"オレンのみ",food1:"モーモーミルク",food1Num:[2,5,7],food2:"リラックスカカオ",food2Num:[0,3,5],food3:"マメミート",food3Num:[0,0,7],skill:"食材ゲットS",fp:20,sec:2800,fullyEvolved:true,expType:600,foodRate:0.275,foodOtetsudaiCountDay:18.7,skillRate:0.021,skillExpectionDay:1.63,berryEnergy:31,berrySEnergyLvMaxDay:14856,foodEnergyLvMaxDay:32812,rankOfBerry:5,rankOfFood:10,rankOfSkill:4}),
new Pokemon({no:10,name:"キャタピー",sleepType:"うとうと",specialty:"きのみ",berry:"ラムのみ",food1:"あまいミツ",food1Num:[1,2,4],food2:"あんみんトマト",food2Num:[0,2,3],food3:"ワカクサ大豆",food3Num:[0,0,4],skill:"食材ゲットS",fp:5,sec:4400,fullyEvolved:false,expType:600,foodRate:0.179,foodOtetsudaiCountDay:7.8,skillRate:0.008,skillExpectionDay:1.19,berryEnergy:24,berrySEnergyLvMaxDay:12432,foodEnergyLvMaxDay:6331,rankOfBerry:3,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:11,name:"トランセル",sleepType:"うとうと",specialty:"きのみ",berry:"ラムのみ",food1:"あまいミツ",food1Num:[1,2,4],food2:"あんみんトマト",food2Num:[0,2,3],food3:"ワカクサ大豆",food3Num:[0,0,4],skill:"食材ゲットS",fp:7,sec:4200,fullyEvolved:false,expType:600,foodRate:0.208,foodOtetsudaiCountDay:9.4,skillRate:0.018,skillExpectionDay:1.33,berryEnergy:24,berrySEnergyLvMaxDay:12564,foodEnergyLvMaxDay:7706,rankOfBerry:3,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:12,name:"バタフリー",sleepType:"うとうと",specialty:"きのみ",berry:"ラムのみ",food1:"あまいミツ",food1Num:[1,2,4],food2:"あんみんトマト",food2Num:[0,2,3],food3:"ワカクサ大豆",food3Num:[0,0,4],skill:"食材ゲットS",fp:15,sec:2500,fullyEvolved:true,expType:600,foodRate:0.197,foodOtetsudaiCountDay:15,skillRate:0.014,skillExpectionDay:1.44,berryEnergy:24,berrySEnergyLvMaxDay:21401,foodEnergyLvMaxDay:12262,rankOfBerry:9,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:19,name:"コラッタ",sleepType:"すやすや",specialty:"きのみ",berry:"キーのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"ワカクサ大豆",food2Num:[0,2,3],food3:"マメミート",food3Num:[0,0,3],skill:"げんきチャージS",fp:5,sec:4900,fullyEvolved:false,expType:600,foodRate:0.237,foodOtetsudaiCountDay:9.2,skillRate:0.03,skillExpectionDay:1.49,berryEnergy:28,berrySEnergyLvMaxDay:12104,foodEnergyLvMaxDay:7526,rankOfBerry:3,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:20,name:"ラッタ",sleepType:"すやすや",specialty:"きのみ",berry:"キーのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"ワカクサ大豆",food2Num:[0,2,3],food3:"マメミート",food3Num:[0,0,3],skill:"げんきチャージS",fp:12,sec:2950,fullyEvolved:true,expType:600,foodRate:0.237,foodOtetsudaiCountDay:15.3,skillRate:0.03,skillExpectionDay:1.95,berryEnergy:28,berrySEnergyLvMaxDay:20105,foodEnergyLvMaxDay:12502,rankOfBerry:8,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:23,name:"アーボ",sleepType:"うとうと",specialty:"きのみ",berry:"カゴのみ",food1:"マメミート",food1Num:[1,2,4],food2:"とくせんエッグ",food2Num:[0,2,3],food3:"げきからハーブ",food3Num:[0,0,3],skill:"げんきチャージS",fp:5,sec:5000,fullyEvolved:false,expType:600,foodRate:0.235,foodOtetsudaiCountDay:9,skillRate:0.033,skillExpectionDay:1.54,berryEnergy:32,berrySEnergyLvMaxDay:13592,foodEnergyLvMaxDay:7761,rankOfBerry:4,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:24,name:"アーボック",sleepType:"うとうと",specialty:"きのみ",berry:"カゴのみ",food1:"マメミート",food1Num:[1,2,4],food2:"とくせんエッグ",food2Num:[0,2,3],food3:"げきからハーブ",food3Num:[0,0,3],skill:"げんきチャージS",fp:12,sec:3400,fullyEvolved:true,expType:600,foodRate:0.264,foodOtetsudaiCountDay:14.8,skillRate:0.057,skillExpectionDay:2.88,berryEnergy:32,berrySEnergyLvMaxDay:19231,foodEnergyLvMaxDay:12822,rankOfBerry:8,rankOfFood:1,rankOfSkill:7}),
new Pokemon({no:25,name:"ピカチュウ",sleepType:"すやすや",specialty:"きのみ",berry:"ウブのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,2,3],food3:"とくせんエッグ",food3Num:[0,0,3],skill:"エナジーチャージS",fp:7,sec:2700,fullyEvolved:false,expType:600,foodRate:0.207,foodOtetsudaiCountDay:14.6,skillRate:0.021,skillExpectionDay:1.66,berryEnergy:25,berrySEnergyLvMaxDay:20384,foodEnergyLvMaxDay:11930,rankOfBerry:9,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:25.1,name:"ピカチュウ(ハロウィン)",sleepType:"すやすや",specialty:"きのみ",berry:"ウブのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,2,3],food3:"とくせんエッグ",food3Num:[0,0,3],skill:"エナジーチャージS(ランダム)",fp:7,sec:2500,fullyEvolved:true,expType:600,foodRate:0.218,foodOtetsudaiCountDay:16.6,skillRate:0.028,skillExpectionDay:2.09,berryEnergy:25,berrySEnergyLvMaxDay:21709,foodEnergyLvMaxDay:13569,rankOfBerry:9,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:25.2,name:"ピカチュウ(ホリデー)",sleepType:"すやすや",specialty:"スキル",berry:"ウブのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,2,3],food3:"とくせんエッグ",food3Num:[0,0,3],skill:"ゆめのかけらゲットS",fp:7,sec:2500,fullyEvolved:true,expType:600,foodRate:0.131,foodOtetsudaiCountDay:10,skillRate:0.042,skillExpectionDay:2.89,berryEnergy:25,berrySEnergyLvMaxDay:16083,foodEnergyLvMaxDay:8154,rankOfBerry:6,rankOfFood:1,rankOfSkill:7}),
new Pokemon({no:26,name:"ライチュウ",sleepType:"すやすや",specialty:"きのみ",berry:"ウブのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,2,3],food3:"とくせんエッグ",food3Num:[0,0,3],skill:"エナジーチャージS",fp:18,sec:2200,fullyEvolved:true,expType:600,foodRate:0.224,foodOtetsudaiCountDay:19.4,skillRate:0.032,skillExpectionDay:2.55,berryEnergy:25,berrySEnergyLvMaxDay:24481,foodEnergyLvMaxDay:15844,rankOfBerry:11,rankOfFood:2,rankOfSkill:6}),
new Pokemon({no:35,name:"ピッピ",sleepType:"すやすや",specialty:"きのみ",berry:"モモンのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"あまいミツ",food2Num:[0,2,3],food3:"ワカクサ大豆",food3Num:[0,0,3],skill:"ゆびをふる",fp:7,sec:4000,fullyEvolved:false,expType:600,foodRate:0.168,foodOtetsudaiCountDay:8,skillRate:0.036,skillExpectionDay:1.8,berryEnergy:26,berrySEnergyLvMaxDay:15013,foodEnergyLvMaxDay:6536,rankOfBerry:5,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:36,name:"ピクシー",sleepType:"すやすや",specialty:"きのみ",berry:"モモンのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"あまいミツ",food2Num:[0,2,3],food3:"ワカクサ大豆",food3Num:[0,0,3],skill:"ゆびをふる",fp:20,sec:2800,fullyEvolved:true,expType:600,foodRate:0.168,foodOtetsudaiCountDay:11.4,skillRate:0.036,skillExpectionDay:2.31,berryEnergy:26,berrySEnergyLvMaxDay:21448,foodEnergyLvMaxDay:9337,rankOfBerry:9,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:37,name:"ロコン",sleepType:"すやすや",specialty:"きのみ",berry:"ヒメリのみ",food1:"ワカクサ大豆",food1Num:[1,2,4],food2:"ワカクサコーン",food2Num:[0,2,3],food3:"ほっこりポテト",food3Num:[0,0,3],skill:"げんきエールS",fp:5,sec:4700,fullyEvolved:false,expType:600,foodRate:0.168,foodOtetsudaiCountDay:6.8,skillRate:0.032,skillExpectionDay:1.56,berryEnergy:27,berrySEnergyLvMaxDay:13269,foodEnergyLvMaxDay:5903,rankOfBerry:4,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:37.1,name:"ロコン(アローラ)",sleepType:"ぐっすり",specialty:"きのみ",berry:"チーゴのみ",food1:"ワカクサ大豆",food1Num:[1,2,4],food2:"ワカクサコーン",food2Num:[0,2,3],food3:"ほっこりポテト",food3Num:[0,0,3],skill:"おてつだいサポートS",fp:5,sec:5600,fullyEvolved:false,expType:600,foodRate:0.23,foodOtetsudaiCountDay:7.8,skillRate:0.028,skillExpectionDay:1.39,berryEnergy:32,berrySEnergyLvMaxDay:12215,foodEnergyLvMaxDay:6782,rankOfBerry:3,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:38,name:"キュウコン",sleepType:"すやすや",specialty:"きのみ",berry:"ヒメリのみ",food1:"ワカクサ大豆",food1Num:[1,2,4],food2:"ワカクサコーン",food2Num:[0,2,3],food3:"ほっこりポテト",food3Num:[0,0,3],skill:"げんきエールS",fp:20,sec:2600,fullyEvolved:true,expType:600,foodRate:0.164,foodOtetsudaiCountDay:12,skillRate:0.029,skillExpectionDay:2.08,berryEnergy:27,berrySEnergyLvMaxDay:24101,foodEnergyLvMaxDay:10416,rankOfBerry:11,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:38.1,name:"キュウコン(アローラ)",sleepType:"ぐっすり",specialty:"きのみ",berry:"チーゴのみ",food1:"ワカクサ大豆",food1Num:[1,2,4],food2:"ワカクサコーン",food2Num:[0,2,3],food3:"ほっこりポテト",food3Num:[0,0,3],skill:"おてつだいサポートS",fp:20,sec:2900,fullyEvolved:true,expType:600,foodRate:0.232,foodOtetsudaiCountDay:15.2,skillRate:0.028,skillExpectionDay:1.88,berryEnergy:32,berrySEnergyLvMaxDay:23526,foodEnergyLvMaxDay:13211,rankOfBerry:11,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:39,name:"プリン",sleepType:"すやすや",specialty:"スキル",berry:"モモンのみ",food1:"あまいミツ",food1Num:[1,2,4],food2:"ピュアなオイル",food2Num:[0,2,3],food3:"リラックスカカオ",food3Num:[0,0,2],skill:"げんきオールS",fp:7,sec:3900,fullyEvolved:false,expType:600,foodRate:0.182,foodOtetsudaiCountDay:8.9,skillRate:0.043,skillExpectionDay:2.06,berryEnergy:26,berrySEnergyLvMaxDay:10093,foodEnergyLvMaxDay:7706,rankOfBerry:1,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:40,name:"プクリン",sleepType:"すやすや",specialty:"スキル",berry:"モモンのみ",food1:"あまいミツ",food1Num:[1,2,4],food2:"ピュアなオイル",food2Num:[0,2,3],food3:"リラックスカカオ",food3Num:[0,0,2],skill:"げんきオールS",fp:16,sec:2900,fullyEvolved:true,expType:600,foodRate:0.174,foodOtetsudaiCountDay:11.4,skillRate:0.04,skillExpectionDay:2.45,berryEnergy:26,berrySEnergyLvMaxDay:13706,foodEnergyLvMaxDay:9908,rankOfBerry:4,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:50,name:"ディグダ",sleepType:"すやすや",specialty:"食材",berry:"フィラのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"ふといながねぎ",food2Num:[0,3,4],food3:"ワカクサ大豆",food3Num:[0,0,8],skill:"エナジーチャージS",fp:5,sec:4300,fullyEvolved:false,expType:600,foodRate:0.192,foodOtetsudaiCountDay:8.5,skillRate:0.021,skillExpectionDay:1.38,berryEnergy:29,berrySEnergyLvMaxDay:10085,foodEnergyLvMaxDay:15882,rankOfBerry:1,rankOfFood:2,rankOfSkill:3}),
new Pokemon({no:51,name:"ダグトリオ",sleepType:"すやすや",specialty:"食材",berry:"フィラのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"ふといながねぎ",food2Num:[0,3,4],food3:"ワカクサ大豆",food3Num:[0,0,8],skill:"エナジーチャージS",fp:12,sec:2650,fullyEvolved:true,expType:600,foodRate:0.19,foodOtetsudaiCountDay:13.7,skillRate:0.02,skillExpectionDay:1.64,berryEnergy:29,berrySEnergyLvMaxDay:16405,foodEnergyLvMaxDay:25502,rankOfBerry:6,rankOfFood:7,rankOfSkill:4}),
new Pokemon({no:52,name:"ニャース",sleepType:"すやすや",specialty:"スキル",berry:"キーのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"マメミート",food2Num:[0,2,3],food3:"",food3Num:[],skill:"ゆめのかけらゲットS",fp:5,sec:4400,fullyEvolved:false,expType:600,foodRate:0.163,foodOtetsudaiCountDay:7.1,skillRate:0.042,skillExpectionDay:1.87,berryEnergy:28,berrySEnergyLvMaxDay:9858,foodEnergyLvMaxDay:5765,rankOfBerry:1,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:53,name:"ペルシアン",sleepType:"すやすや",specialty:"スキル",berry:"キーのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"マメミート",food2Num:[0,2,3],food3:"",food3Num:[],skill:"ゆめのかけらゲットS",fp:12,sec:2800,fullyEvolved:true,expType:600,foodRate:0.169,foodOtetsudaiCountDay:11.5,skillRate:0.044,skillExpectionDay:2.72,berryEnergy:28,berrySEnergyLvMaxDay:15380,foodEnergyLvMaxDay:9392,rankOfBerry:5,rankOfFood:1,rankOfSkill:7}),
new Pokemon({no:54,name:"コダック",sleepType:"うとうと",specialty:"スキル",berry:"オレンのみ",food1:"リラックスカカオ",food1Num:[1,2,4],food2:"とくせんリンゴ",food2Num:[0,4,6],food3:"マメミート",food3Num:[0,0,5],skill:"エナジーチャージS(ランダム)",fp:5,sec:5400,fullyEvolved:false,expType:600,foodRate:0.136,foodOtetsudaiCountDay:4.8,skillRate:0.126,skillExpectionDay:3.91,berryEnergy:31,berrySEnergyLvMaxDay:9180,foodEnergyLvMaxDay:6510,rankOfBerry:1,rankOfFood:1,rankOfSkill:10}),
new Pokemon({no:55,name:"ゴルダック",sleepType:"ぐっすり",specialty:"スキル",berry:"オレンのみ",food1:"リラックスカカオ",food1Num:[1,2,4],food2:"とくせんリンゴ",food2Num:[0,4,6],food3:"マメミート",food3Num:[0,0,5],skill:"エナジーチャージS(ランダム)",fp:12,sec:3400,fullyEvolved:true,expType:600,foodRate:0.162,foodOtetsudaiCountDay:9.1,skillRate:0.125,skillExpectionDay:6.11,berryEnergy:31,berrySEnergyLvMaxDay:14141,foodEnergyLvMaxDay:12317,rankOfBerry:4,rankOfFood:1,rankOfSkill:12}),
new Pokemon({no:56,name:"マンキー",sleepType:"うとうと",specialty:"きのみ",berry:"クラボのみ",food1:"マメミート",food1Num:[1,2,4],food2:"あじわいキノコ",food2Num:[0,1,2],food3:"あまいミツ",food3Num:[0,0,4],skill:"エナジーチャージS(ランダム)",fp:5,sec:4200,fullyEvolved:false,expType:600,foodRate:0.197,foodOtetsudaiCountDay:8.9,skillRate:0.022,skillExpectionDay:1.41,berryEnergy:27,berrySEnergyLvMaxDay:14331,foodEnergyLvMaxDay:7299,rankOfBerry:4,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:57,name:"オコリザル",sleepType:"うとうと",specialty:"きのみ",berry:"クラボのみ",food1:"マメミート",food1Num:[1,2,4],food2:"あじわいキノコ",food2Num:[0,1,2],food3:"あまいミツ",food3Num:[0,0,4],skill:"エナジーチャージS(ランダム)",fp:12,sec:2800,fullyEvolved:true,expType:600,foodRate:0.2,foodOtetsudaiCountDay:13.6,skillRate:0.024,skillExpectionDay:1.76,berryEnergy:27,berrySEnergyLvMaxDay:21416,foodEnergyLvMaxDay:11115,rankOfBerry:9,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:58,name:"ガーディ",sleepType:"すやすや",specialty:"スキル",berry:"ヒメリのみ",food1:"げきからハーブ",food1Num:[1,2,4],food2:"マメミート",food2Num:[0,3,5],food3:"モーモーミルク",food3Num:[0,0,5],skill:"おてつだいサポートS",fp:5,sec:4300,fullyEvolved:false,expType:600,foodRate:0.138,foodOtetsudaiCountDay:6.1,skillRate:0.05,skillExpectionDay:2.14,berryEnergy:27,berrySEnergyLvMaxDay:10017,foodEnergyLvMaxDay:6625,rankOfBerry:1,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:59,name:"ウインディ",sleepType:"すやすや",specialty:"スキル",berry:"ヒメリのみ",food1:"げきからハーブ",food1Num:[1,2,4],food2:"マメミート",food2Num:[0,3,5],food3:"モーモーミルク",food3Num:[0,0,5],skill:"おてつだいサポートS",fp:20,sec:2500,fullyEvolved:true,expType:600,foodRate:0.136,foodOtetsudaiCountDay:10.4,skillRate:0.049,skillExpectionDay:3.32,berryEnergy:27,berrySEnergyLvMaxDay:17270,foodEnergyLvMaxDay:11229,rankOfBerry:7,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:69,name:"マダツボミ",sleepType:"うとうと",specialty:"食材",berry:"ドリのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,6],food3:"ふといながねぎ",food3Num:[0,0,4],skill:"げんきチャージS",fp:5,sec:5200,fullyEvolved:false,expType:600,foodRate:0.233,foodOtetsudaiCountDay:8.5,skillRate:0.039,skillExpectionDay:1.63,berryEnergy:30,berrySEnergyLvMaxDay:8190,foodEnergyLvMaxDay:14799,rankOfBerry:1,rankOfFood:2,rankOfSkill:4}),
new Pokemon({no:70,name:"ウツドン",sleepType:"うとうと",specialty:"食材",berry:"ドリのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,6],food3:"ふといながねぎ",food3Num:[0,0,4],skill:"げんきチャージS",fp:12,sec:3800,fullyEvolved:false,expType:600,foodRate:0.235,foodOtetsudaiCountDay:11.8,skillRate:0.04,skillExpectionDay:1.99,berryEnergy:30,berrySEnergyLvMaxDay:11178,foodEnergyLvMaxDay:20425,rankOfBerry:2,rankOfFood:5,rankOfSkill:5}),
new Pokemon({no:71,name:"ウツボット",sleepType:"うとうと",specialty:"食材",berry:"ドリのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,6],food3:"ふといながねぎ",food3Num:[0,0,4],skill:"げんきチャージS",fp:20,sec:2800,fullyEvolved:true,expType:600,foodRate:0.233,foodOtetsudaiCountDay:15.9,skillRate:0.039,skillExpectionDay:2.46,berryEnergy:30,berrySEnergyLvMaxDay:15209,foodEnergyLvMaxDay:27484,rankOfBerry:5,rankOfFood:8,rankOfSkill:6}),
new Pokemon({no:74,name:"イシツブテ",sleepType:"ぐっすり",specialty:"食材",berry:"オボンのみ",food1:"ワカクサ大豆",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,6],food3:"あじわいキノコ",food3Num:[0,0,4],skill:"エナジーチャージS(ランダム)",fp:5,sec:5700,fullyEvolved:false,expType:600,foodRate:0.281,foodOtetsudaiCountDay:9.4,skillRate:0.052,skillExpectionDay:1.82,berryEnergy:30,berrySEnergyLvMaxDay:7004,foodEnergyLvMaxDay:16282,rankOfBerry:1,rankOfFood:3,rankOfSkill:4}),
new Pokemon({no:75,name:"ゴローン",sleepType:"ぐっすり",specialty:"食材",berry:"オボンのみ",food1:"ワカクサ大豆",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,6],food3:"あじわいキノコ",food3Num:[0,0,4],skill:"エナジーチャージS(ランダム)",fp:12,sec:4000,fullyEvolved:false,expType:600,foodRate:0.272,foodOtetsudaiCountDay:13,skillRate:0.048,skillExpectionDay:2.19,berryEnergy:30,berrySEnergyLvMaxDay:10105,foodEnergyLvMaxDay:22459,rankOfBerry:1,rankOfFood:6,rankOfSkill:5}),
new Pokemon({no:76,name:"ゴローニャ",sleepType:"ぐっすり",specialty:"食材",berry:"オボンのみ",food1:"ワカクサ大豆",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,6],food3:"あじわいキノコ",food3Num:[0,0,4],skill:"エナジーチャージS(ランダム)",fp:22,sec:3100,fullyEvolved:true,expType:600,foodRate:0.28,foodOtetsudaiCountDay:17.2,skillRate:0.052,skillExpectionDay:2.88,berryEnergy:30,berrySEnergyLvMaxDay:12896,foodEnergyLvMaxDay:29831,rankOfBerry:3,rankOfFood:9,rankOfSkill:7}),
new Pokemon({no:79,name:"ヤドン",sleepType:"すやすや",specialty:"スキル",berry:"オレンのみ",food1:"リラックスカカオ",food1Num:[1,2,4],food2:"おいしいシッポ",food2Num:[0,1,2],food3:"あんみんトマト",food3Num:[0,0,5],skill:"げんきエールS",fp:5,sec:5700,fullyEvolved:false,expType:600,foodRate:0.151,foodOtetsudaiCountDay:5,skillRate:0.078,skillExpectionDay:2.42,berryEnergy:31,berrySEnergyLvMaxDay:8546,foodEnergyLvMaxDay:8531,rankOfBerry:1,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:80,name:"ヤドラン",sleepType:"すやすや",specialty:"スキル",berry:"オレンのみ",food1:"リラックスカカオ",food1Num:[1,2,4],food2:"おいしいシッポ",food2Num:[0,1,2],food3:"あんみんトマト",food3Num:[0,0,5],skill:"げんきエールS",fp:12,sec:3800,fullyEvolved:true,expType:600,foodRate:0.197,foodOtetsudaiCountDay:9.9,skillRate:0.08,skillExpectionDay:3.55,berryEnergy:31,berrySEnergyLvMaxDay:12124,foodEnergyLvMaxDay:16694,rankOfBerry:3,rankOfFood:3,rankOfSkill:9}),
new Pokemon({no:81,name:"コイル",sleepType:"ぐっすり",specialty:"スキル",berry:"ベリブのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"げきからハーブ",food2Num:[0,2,3],food3:"",food3Num:[],skill:"料理パワーアップS",fp:5,sec:5800,fullyEvolved:false,expType:600,foodRate:0.182,foodOtetsudaiCountDay:6,skillRate:0.064,skillExpectionDay:2.06,berryEnergy:33,berrySEnergyLvMaxDay:8614,foodEnergyLvMaxDay:6278,rankOfBerry:1,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:82,name:"レアコイル",sleepType:"ぐっすり",specialty:"スキル",berry:"ベリブのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"げきからハーブ",food2Num:[0,2,3],food3:"",food3Num:[],skill:"料理パワーアップS",fp:12,sec:4000,fullyEvolved:false,expType:600,foodRate:0.182,foodOtetsudaiCountDay:8.7,skillRate:0.063,skillExpectionDay:2.73,berryEnergy:33,berrySEnergyLvMaxDay:12490,foodEnergyLvMaxDay:9103,rankOfBerry:3,rankOfFood:1,rankOfSkill:7}),
new Pokemon({no:83,name:"カモネギ",sleepType:"ぐっすり",specialty:"食材",berry:"シーヤのみ",food1:"ふといながねぎ",food1Num:[2,5,7],food2:"マメミート",food2Num:[0,8,13],food3:"あったかジンジャー",food3Num:[0,0,12],skill:"エナジーチャージS",fp:16,sec:3000,fullyEvolved:true,expType:600,foodRate:0.16,foodOtetsudaiCountDay:10.2,skillRate:0.043,skillExpectionDay:2.52,berryEnergy:24,berrySEnergyLvMaxDay:12437,foodEnergyLvMaxDay:33197,rankOfBerry:3,rankOfFood:10,rankOfSkill:6}),
new Pokemon({no:84,name:"ドードー",sleepType:"ぐっすり",specialty:"きのみ",berry:"シーヤのみ",food1:"ワカクサ大豆",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"げんきチャージS",fp:5,sec:3800,fullyEvolved:false,expType:600,foodRate:0.184,foodOtetsudaiCountDay:9.2,skillRate:0.02,skillExpectionDay:1.41,berryEnergy:24,berrySEnergyLvMaxDay:14307,foodEnergyLvMaxDay:7535,rankOfBerry:4,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:85,name:"ドードリオ",sleepType:"ぐっすり",specialty:"きのみ",berry:"シーヤのみ",food1:"ワカクサ大豆",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"げんきチャージS",fp:12,sec:2300,fullyEvolved:true,expType:600,foodRate:0.184,foodOtetsudaiCountDay:15.2,skillRate:0.02,skillExpectionDay:1.77,berryEnergy:24,berrySEnergyLvMaxDay:23638,foodEnergyLvMaxDay:12449,rankOfBerry:11,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:92,name:"ゴース",sleepType:"うとうと",specialty:"食材",berry:"ブリーのみ",food1:"げきからハーブ",food1Num:[2,5,7],food2:"あじわいキノコ",food2Num:[0,4,6],food3:"ピュアなオイル",food3Num:[0,0,8],skill:"エナジーチャージS(ランダム)",fp:5,sec:3800,fullyEvolved:false,expType:600,foodRate:0.144,foodOtetsudaiCountDay:7.2,skillRate:0.015,skillExpectionDay:1.31,berryEnergy:26,berrySEnergyLvMaxDay:10840,foodEnergyLvMaxDay:15885,rankOfBerry:2,rankOfFood:2,rankOfSkill:3}),
new Pokemon({no:93,name:"ゴースト",sleepType:"うとうと",specialty:"食材",berry:"ブリーのみ",food1:"げきからハーブ",food1Num:[2,5,7],food2:"あじわいキノコ",food2Num:[0,4,6],food3:"ピュアなオイル",food3Num:[0,0,8],skill:"エナジーチャージS(ランダム)",fp:12,sec:3000,fullyEvolved:false,expType:600,foodRate:0.157,foodOtetsudaiCountDay:10,skillRate:0.022,skillExpectionDay:1.62,berryEnergy:26,berrySEnergyLvMaxDay:13522,foodEnergyLvMaxDay:21938,rankOfBerry:4,rankOfFood:5,rankOfSkill:4}),
new Pokemon({no:94,name:"ゲンガー",sleepType:"うとうと",specialty:"食材",berry:"ブリーのみ",food1:"げきからハーブ",food1Num:[2,5,7],food2:"あじわいキノコ",food2Num:[0,4,6],food3:"ピュアなオイル",food3Num:[0,0,8],skill:"エナジーチャージS(ランダム)",fp:22,sec:2200,fullyEvolved:true,expType:600,foodRate:0.161,foodOtetsudaiCountDay:13.9,skillRate:0.024,skillExpectionDay:2.05,berryEnergy:26,berrySEnergyLvMaxDay:18351,foodEnergyLvMaxDay:30677,rankOfBerry:7,rankOfFood:9,rankOfSkill:5}),
new Pokemon({no:95,name:"イワーク",sleepType:"ぐっすり",specialty:"きのみ",berry:"オボンのみ",food1:"あんみんトマト",food1Num:[1,2,4],food2:"マメミート",food2Num:[0,2,4],food3:"ほっこりポテト",food3Num:[0,0,3],skill:"食材ゲットS",fp:16,sec:3100,fullyEvolved:true,expType:600,foodRate:0.132,foodOtetsudaiCountDay:8.1,skillRate:0.023,skillExpectionDay:1.62,berryEnergy:30,berrySEnergyLvMaxDay:23320,foodEnergyLvMaxDay:6626,rankOfBerry:10,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:104,name:"カラカラ",sleepType:"ぐっすり",specialty:"きのみ",berry:"フィラのみ",food1:"あったかジンジャー",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,2,3],food3:"",food3Num:[],skill:"げんきチャージS",fp:5,sec:4800,fullyEvolved:false,expType:600,foodRate:0.223,foodOtetsudaiCountDay:8.9,skillRate:0.044,skillExpectionDay:1.82,berryEnergy:29,berrySEnergyLvMaxDay:13032,foodEnergyLvMaxDay:9442,rankOfBerry:3,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:105,name:"ガラガラ",sleepType:"ぐっすり",specialty:"きのみ",berry:"フィラのみ",food1:"あったかジンジャー",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,2,3],food3:"",food3Num:[],skill:"げんきチャージS",fp:12,sec:3300,fullyEvolved:true,expType:600,foodRate:0.225,foodOtetsudaiCountDay:13,skillRate:0.045,skillExpectionDay:2.42,berryEnergy:29,berrySEnergyLvMaxDay:18907,foodEnergyLvMaxDay:13858,rankOfBerry:8,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:113,name:"ラッキー",sleepType:"すやすや",specialty:"食材",berry:"キーのみ",food1:"とくせんエッグ",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,7],food3:"あまいミツ",food3Num:[0,0,8],skill:"げんきオールS",fp:16,sec:2904,fullyEvolved:true,expType:600,foodRate:0.236,foodOtetsudaiCountDay:15.5,skillRate:0.023,skillExpectionDay:1.68,berryEnergy:28,berrySEnergyLvMaxDay:13633,foodEnergyLvMaxDay:32518,rankOfBerry:4,rankOfFood:10,rankOfSkill:4}),
new Pokemon({no:115,name:"ガルーラ",sleepType:"すやすや",specialty:"食材",berry:"キーのみ",food1:"あったかジンジャー",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,6],food3:"ワカクサ大豆",food3Num:[0,0,8],skill:"食材ゲットS",fp:16,sec:2650,fullyEvolved:true,expType:600,foodRate:0.222,foodOtetsudaiCountDay:16,skillRate:0.032,skillExpectionDay:2.2,berryEnergy:28,berrySEnergyLvMaxDay:15214,foodEnergyLvMaxDay:27668,rankOfBerry:5,rankOfFood:8,rankOfSkill:5}),
new Pokemon({no:122,name:"バリヤード",sleepType:"すやすや",specialty:"食材",berry:"マゴのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,6],food3:"ふといながねぎ",food3Num:[0,0,4],skill:"へんしん(スキルコピー)",fp:12,sec:2800,fullyEvolved:true,expType:600,foodRate:0.216,foodOtetsudaiCountDay:14.7,skillRate:0.039,skillExpectionDay:2.46,berryEnergy:26,berrySEnergyLvMaxDay:13474,foodEnergyLvMaxDay:25478,rankOfBerry:4,rankOfFood:7,rankOfSkill:6}),
new Pokemon({no:127,name:"カイロス",sleepType:"うとうと",specialty:"食材",berry:"ラムのみ",food1:"あまいミツ",food1Num:[2,5,7],food2:"とくせんリンゴ",food2Num:[0,5,8],food3:"マメミート",food3Num:[0,0,7],skill:"エナジーチャージS",fp:16,sec:2400,fullyEvolved:true,expType:600,foodRate:0.216,foodOtetsudaiCountDay:17.1,skillRate:0.031,skillExpectionDay:2.32,berryEnergy:24,berrySEnergyLvMaxDay:14510,foodEnergyLvMaxDay:30011,rankOfBerry:5,rankOfFood:9,rankOfSkill:5}),
new Pokemon({no:132,name:"メタモン",sleepType:"すやすや",specialty:"食材",berry:"キーのみ",food1:"ピュアなオイル",food1Num:[2,5,7],food2:"ふといながねぎ",food2Num:[0,3,5],food3:"おいしいシッポ",food3Num:[0,0,3],skill:"へんしん(スキルコピー)",fp:16,sec:3500,fullyEvolved:true,expType:600,foodRate:0.201,foodOtetsudaiCountDay:10.9,skillRate:0.036,skillExpectionDay:1.97,berryEnergy:28,berrySEnergyLvMaxDay:11830,foodEnergyLvMaxDay:23709,rankOfBerry:2,rankOfFood:6,rankOfSkill:5}),
new Pokemon({no:133,name:"イーブイ",sleepType:"すやすや",specialty:"スキル",berry:"キーのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"食材ゲットS",fp:5,sec:3700,fullyEvolved:false,expType:600,foodRate:0.192,foodOtetsudaiCountDay:9.9,skillRate:0.055,skillExpectionDay:2.6,berryEnergy:28,berrySEnergyLvMaxDay:11317,foodEnergyLvMaxDay:8075,rankOfBerry:2,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:133.1,name:"イーブイ(ホリデー)",sleepType:"すやすや",specialty:"きのみ",berry:"キーのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"ゆめのかけらゲットS",fp:5,sec:3100,fullyEvolved:true,expType:600,foodRate:0.156,foodOtetsudaiCountDay:9.6,skillRate:0.032,skillExpectionDay:1.97,berryEnergy:28,berrySEnergyLvMaxDay:21163,foodEnergyLvMaxDay:7831,rankOfBerry:9,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:133.2,name:"イーブイ(ハロウィン)",sleepType:"すやすや",specialty:"スキル",berry:"キーのみ",food1:"ずっしりカボチャ",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,4,6],food3:"モーモーミルク",food3Num:[0,0,9],skill:"食材ゲットS",fp:5,sec:3200,fullyEvolved:true,expType:600,foodRate:0.12,foodOtetsudaiCountDay:7.1,skillRate:0.046,skillExpectionDay:2.53,berryEnergy:28,berrySEnergyLvMaxDay:14251,foodEnergyLvMaxDay:15720,rankOfBerry:4,rankOfFood:2,rankOfSkill:6}),
new Pokemon({no:134,name:"シャワーズ",sleepType:"ぐっすり",specialty:"スキル",berry:"オレンのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"食材ゲットS",fp:20,sec:3100,fullyEvolved:true,expType:600,foodRate:0.212,foodOtetsudaiCountDay:13,skillRate:0.061,skillExpectionDay:3.33,berryEnergy:31,berrySEnergyLvMaxDay:14584,foodEnergyLvMaxDay:10642,rankOfBerry:5,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:135,name:"サンダース",sleepType:"すやすや",specialty:"スキル",berry:"ウブのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"おてつだいサポートS",fp:20,sec:2200,fullyEvolved:true,expType:600,foodRate:0.151,foodOtetsudaiCountDay:13.1,skillRate:0.039,skillExpectionDay:3.03,berryEnergy:25,berrySEnergyLvMaxDay:17856,foodEnergyLvMaxDay:10681,rankOfBerry:7,rankOfFood:1,rankOfSkill:7}),
new Pokemon({no:136,name:"ブースター",sleepType:"すやすや",specialty:"スキル",berry:"ヒメリのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"料理パワーアップS",fp:20,sec:2700,fullyEvolved:true,expType:600,foodRate:0.185,foodOtetsudaiCountDay:13.1,skillRate:0.052,skillExpectionDay:3.27,berryEnergy:27,berrySEnergyLvMaxDay:15084,foodEnergyLvMaxDay:10662,rankOfBerry:5,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:147,name:"ミニリュウ",sleepType:"うとうと",specialty:"食材",berry:"ヤチェのみ",food1:"げきからハーブ",food1Num:[2,5,7],food2:"ワカクサコーン",food2Num:[0,4,7],food3:"ピュアなオイル",food3Num:[0,0,8],skill:"げんきチャージS",fp:5,sec:5000,fullyEvolved:false,expType:900,foodRate:0.25,foodOtetsudaiCountDay:9.5,skillRate:0.02,skillExpectionDay:1.31,berryEnergy:35,berrySEnergyLvMaxDay:9717,foodEnergyLvMaxDay:20007,rankOfBerry:1,rankOfFood:4,rankOfSkill:3}),
new Pokemon({no:148,name:"ハクリュー",sleepType:"うとうと",specialty:"食材",berry:"ヤチェのみ",food1:"げきからハーブ",food1Num:[2,5,7],food2:"ワカクサコーン",food2Num:[0,4,7],food3:"ピュアなオイル",food3Num:[0,0,8],skill:"げんきチャージS",fp:12,sec:3800,fullyEvolved:false,expType:900,foodRate:0.262,foodOtetsudaiCountDay:13.1,skillRate:0.025,skillExpectionDay:1.53,berryEnergy:35,berrySEnergyLvMaxDay:12580,foodEnergyLvMaxDay:27589,rankOfBerry:3,rankOfFood:8,rankOfSkill:3}),
new Pokemon({no:149,name:"カイリュー",sleepType:"うとうと",specialty:"食材",berry:"ヤチェのみ",food1:"げきからハーブ",food1Num:[2,5,7],food2:"ワカクサコーン",food2Num:[0,4,7],food3:"ピュアなオイル",food3Num:[0,0,8],skill:"げんきチャージS",fp:25,sec:2600,fullyEvolved:true,expType:900,foodRate:0.264,foodOtetsudaiCountDay:19.3,skillRate:0.026,skillExpectionDay:1.93,berryEnergy:35,berrySEnergyLvMaxDay:18337,foodEnergyLvMaxDay:40630,rankOfBerry:7,rankOfFood:12,rankOfSkill:4}),
new Pokemon({no:151,name:"ミュウ",sleepType:"すやすや",specialty:"オール",berry:"マゴのみ",food1:"とくせんエッグ",food1Num:[2,4,6],food2:"げきからハーブ",food2Num:[0,4,5],food3:"つやつやアボカド",food3Num:[0,0,4],skill:"オールマイティー",fp:0,sec:2900,fullyEvolved:true,expType:1320,foodRate:0.2,foodOtetsudaiCountDay:13.1,skillRate:0.04,skillExpectionDay:2.45,berryEnergy:26,berrySEnergyLvMaxDay:19912,foodEnergyLvMaxDay:23654,rankOfBerry:8,rankOfFood:6,rankOfSkill:6}),
new Pokemon({no:152,name:"チコリータ",sleepType:"うとうと",specialty:"きのみ",berry:"ドリのみ",food1:"リラックスカカオ",food1Num:[1,2,4],food2:"あまいミツ",food2Num:[0,3,5],food3:"ふといながねぎ",food3Num:[0,0,3],skill:"エナジーチャージS(ランダム)",fp:5,sec:4400,fullyEvolved:false,expType:600,foodRate:0.169,foodOtetsudaiCountDay:7.3,skillRate:0.039,skillExpectionDay:1.79,berryEnergy:30,berrySEnergyLvMaxDay:15729,foodEnergyLvMaxDay:9734,rankOfBerry:5,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:153,name:"ベイリーフ",sleepType:"うとうと",specialty:"きのみ",berry:"ドリのみ",food1:"リラックスカカオ",food1Num:[1,2,4],food2:"あまいミツ",food2Num:[0,3,5],food3:"ふといながねぎ",food3Num:[0,0,3],skill:"エナジーチャージS(ランダム)",fp:12,sec:3300,fullyEvolved:false,expType:600,foodRate:0.168,foodOtetsudaiCountDay:9.7,skillRate:0.038,skillExpectionDay:2.12,berryEnergy:30,berrySEnergyLvMaxDay:20998,foodEnergyLvMaxDay:12902,rankOfBerry:9,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:154,name:"メガニウム",sleepType:"うとうと",specialty:"きのみ",berry:"ドリのみ",food1:"リラックスカカオ",food1Num:[1,2,4],food2:"あまいミツ",food2Num:[0,3,5],food3:"ふといながねぎ",food3Num:[0,0,3],skill:"エナジーチャージS(ランダム)",fp:20,sec:2800,fullyEvolved:true,expType:600,foodRate:0.175,foodOtetsudaiCountDay:11.9,skillRate:0.046,skillExpectionDay:2.83,berryEnergy:30,berrySEnergyLvMaxDay:24539,foodEnergyLvMaxDay:15839,rankOfBerry:11,rankOfFood:2,rankOfSkill:7}),
new Pokemon({no:155,name:"ヒノアラシ",sleepType:"すやすや",specialty:"きのみ",berry:"ヒメリのみ",food1:"あったかジンジャー",food1Num:[1,2,4],food2:"げきからハーブ",food2Num:[0,2,3],food3:"ピュアなオイル",food3Num:[0,0,3],skill:"エナジーチャージS(ランダム)",fp:5,sec:3500,fullyEvolved:false,expType:600,foodRate:0.186,foodOtetsudaiCountDay:10.1,skillRate:0.021,skillExpectionDay:1.48,berryEnergy:27,berrySEnergyLvMaxDay:17433,foodEnergyLvMaxDay:8776,rankOfBerry:7,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:156,name:"マグマラシ",sleepType:"すやすや",specialty:"きのみ",berry:"ヒメリのみ",food1:"あったかジンジャー",food1Num:[1,2,4],food2:"げきからハーブ",food2Num:[0,2,3],food3:"ピュアなオイル",food3Num:[0,0,3],skill:"エナジーチャージS(ランダム)",fp:12,sec:3000,fullyEvolved:false,expType:600,foodRate:0.211,foodOtetsudaiCountDay:13.4,skillRate:0.041,skillExpectionDay:2.43,berryEnergy:27,berrySEnergyLvMaxDay:19713,foodEnergyLvMaxDay:11615,rankOfBerry:8,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:157,name:"バクフーン",sleepType:"すやすや",specialty:"きのみ",berry:"ヒメリのみ",food1:"あったかジンジャー",food1Num:[1,2,4],food2:"げきからハーブ",food2Num:[0,2,3],food3:"ピュアなオイル",food3Num:[0,0,3],skill:"エナジーチャージS(ランダム)",fp:20,sec:2400,fullyEvolved:true,expType:600,foodRate:0.208,foodOtetsudaiCountDay:16.5,skillRate:0.039,skillExpectionDay:2.8,berryEnergy:27,berrySEnergyLvMaxDay:24735,foodEnergyLvMaxDay:14312,rankOfBerry:11,rankOfFood:1,rankOfSkill:7}),
new Pokemon({no:158,name:"ワニノコ",sleepType:"ぐっすり",specialty:"きのみ",berry:"オレンのみ",food1:"マメミート",food1Num:[1,2,4],food2:"ピュアなオイル",food2Num:[0,2,3],food3:"",food3Num:[],skill:"エナジーチャージS(ランダム)",fp:5,sec:4500,fullyEvolved:false,expType:600,foodRate:0.253,foodOtetsudaiCountDay:10.7,skillRate:0.052,skillExpectionDay:2.13,berryEnergy:31,berrySEnergyLvMaxDay:14286,foodEnergyLvMaxDay:9284,rankOfBerry:4,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:159,name:"アリゲイツ",sleepType:"ぐっすり",specialty:"きのみ",berry:"オレンのみ",food1:"マメミート",food1Num:[1,2,4],food2:"ピュアなオイル",food2Num:[0,2,3],food3:"",food3Num:[],skill:"エナジーチャージS(ランダム)",fp:12,sec:3400,fullyEvolved:false,expType:600,foodRate:0.253,foodOtetsudaiCountDay:14.2,skillRate:0.052,skillExpectionDay:2.66,berryEnergy:31,berrySEnergyLvMaxDay:18908,foodEnergyLvMaxDay:12288,rankOfBerry:8,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:160,name:"オーダイル",sleepType:"ぐっすり",specialty:"きのみ",berry:"オレンのみ",food1:"マメミート",food1Num:[1,2,4],food2:"ピュアなオイル",food2Num:[0,2,3],food3:"",food3Num:[],skill:"エナジーチャージS(ランダム)",fp:20,sec:2800,fullyEvolved:true,expType:600,foodRate:0.257,foodOtetsudaiCountDay:17.5,skillRate:0.055,skillExpectionDay:3.33,berryEnergy:31,berrySEnergyLvMaxDay:22837,foodEnergyLvMaxDay:15157,rankOfBerry:10,rankOfFood:2,rankOfSkill:8}),
new Pokemon({no:172,name:"ピチュー",sleepType:"ぐっすり",specialty:"きのみ",berry:"ウブのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,2,3],food3:"とくせんエッグ",food3Num:[0,0,3],skill:"エナジーチャージS",fp:5,sec:4300,fullyEvolved:false,expType:600,foodRate:0.21,foodOtetsudaiCountDay:9.3,skillRate:0.023,skillExpectionDay:1.42,berryEnergy:25,berrySEnergyLvMaxDay:12751,foodEnergyLvMaxDay:7600,rankOfBerry:3,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:173,name:"ピィ",sleepType:"ぐっすり",specialty:"きのみ",berry:"モモンのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"あまいミツ",food2Num:[0,2,3],food3:"ワカクサ大豆",food3Num:[0,0,3],skill:"ゆびをふる",fp:5,sec:5600,fullyEvolved:false,expType:600,foodRate:0.164,foodOtetsudaiCountDay:5.6,skillRate:0.034,skillExpectionDay:1.48,berryEnergy:26,berrySEnergyLvMaxDay:10775,foodEnergyLvMaxDay:4557,rankOfBerry:2,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:174,name:"ププリン",sleepType:"ぐっすり",specialty:"スキル",berry:"モモンのみ",food1:"あまいミツ",food1Num:[1,2,4],food2:"ピュアなオイル",food2Num:[0,2,3],food3:"リラックスカカオ",food3Num:[0,0,2],skill:"げんきオールS",fp:5,sec:5200,fullyEvolved:false,expType:600,foodRate:0.17,foodOtetsudaiCountDay:6.2,skillRate:0.038,skillExpectionDay:1.61,berryEnergy:26,berrySEnergyLvMaxDay:7681,foodEnergyLvMaxDay:5399,rankOfBerry:1,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:175,name:"トゲピー",sleepType:"ぐっすり",specialty:"スキル",berry:"モモンのみ",food1:"とくせんエッグ",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,2,4],food3:"リラックスカカオ",food3Num:[0,0,3],skill:"ゆびをふる",fp:5,sec:4800,fullyEvolved:false,expType:600,foodRate:0.151,foodOtetsudaiCountDay:6,skillRate:0.049,skillExpectionDay:1.95,berryEnergy:26,berrySEnergyLvMaxDay:8511,foodEnergyLvMaxDay:6294,rankOfBerry:1,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:176,name:"トゲチック",sleepType:"すやすや",specialty:"スキル",berry:"モモンのみ",food1:"とくせんエッグ",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,2,4],food3:"リラックスカカオ",food3Num:[0,0,3],skill:"ゆびをふる",fp:12,sec:3800,fullyEvolved:false,expType:600,foodRate:0.163,foodOtetsudaiCountDay:8.2,skillRate:0.056,skillExpectionDay:2.58,berryEnergy:26,berrySEnergyLvMaxDay:10599,foodEnergyLvMaxDay:8582,rankOfBerry:1,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:177,name:"ネイティ",sleepType:"すやすや",specialty:"きのみ",berry:"マゴのみ",food1:"とくせんエッグ",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,2,3],food3:"とくせんリンゴ",food3Num:[0,0,5],skill:"食材ゲットS",fp:5,sec:4500,fullyEvolved:false,expType:600,foodRate:0.185,foodOtetsudaiCountDay:7.8,skillRate:0.016,skillExpectionDay:1.28,berryEnergy:26,berrySEnergyLvMaxDay:13073,foodEnergyLvMaxDay:8617,rankOfBerry:3,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:178,name:"ネイティオ",sleepType:"すやすや",specialty:"きのみ",berry:"マゴのみ",food1:"とくせんエッグ",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,2,3],food3:"とくせんリンゴ",food3Num:[0,0,5],skill:"食材ゲットS",fp:12,sec:2500,fullyEvolved:true,expType:600,foodRate:0.191,foodOtetsudaiCountDay:14.6,skillRate:0.025,skillExpectionDay:1.93,berryEnergy:26,berrySEnergyLvMaxDay:23357,foodEnergyLvMaxDay:16013,rankOfBerry:10,rankOfFood:2,rankOfSkill:4}),
new Pokemon({no:179,name:"メリープ",sleepType:"すやすや",specialty:"スキル",berry:"ウブのみ",food1:"げきからハーブ",food1Num:[1,2,4],food2:"とくせんエッグ",food2Num:[0,3,4],food3:"",food3Num:[],skill:"エナジーチャージM",fp:5,sec:4600,fullyEvolved:false,expType:600,foodRate:0.128,foodOtetsudaiCountDay:5.3,skillRate:0.047,skillExpectionDay:1.95,berryEnergy:25,berrySEnergyLvMaxDay:8771,foodEnergyLvMaxDay:6362,rankOfBerry:1,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:180,name:"モココ",sleepType:"すやすや",specialty:"スキル",berry:"ウブのみ",food1:"げきからハーブ",food1Num:[1,2,4],food2:"とくせんエッグ",food2Num:[0,3,4],food3:"",food3Num:[],skill:"エナジーチャージM",fp:12,sec:3300,fullyEvolved:false,expType:600,foodRate:0.127,foodOtetsudaiCountDay:7.3,skillRate:0.046,skillExpectionDay:2.46,berryEnergy:25,berrySEnergyLvMaxDay:12240,foodEnergyLvMaxDay:8800,rankOfBerry:3,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:181,name:"デンリュウ",sleepType:"すやすや",specialty:"スキル",berry:"ウブのみ",food1:"げきからハーブ",food1Num:[1,2,4],food2:"とくせんエッグ",food2Num:[0,3,4],food3:"",food3Num:[],skill:"エナジーチャージM",fp:20,sec:2500,fullyEvolved:true,expType:600,foodRate:0.13,foodOtetsudaiCountDay:9.9,skillRate:0.047,skillExpectionDay:3.2,berryEnergy:25,berrySEnergyLvMaxDay:16102,foodEnergyLvMaxDay:11890,rankOfBerry:6,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:185,name:"ウソッキー",sleepType:"ぐっすり",specialty:"スキル",berry:"オボンのみ",food1:"あんみんトマト",food1Num:[1,2,4],food2:"ワカクサ大豆",food2Num:[0,2,4],food3:"あじわいキノコ",food3Num:[0,0,2],skill:"エナジーチャージM",fp:7,sec:4000,fullyEvolved:true,expType:600,foodRate:0.217,foodOtetsudaiCountDay:10.3,skillRate:0.072,skillExpectionDay:3.07,berryEnergy:30,berrySEnergyLvMaxDay:10869,foodEnergyLvMaxDay:8442,rankOfBerry:2,rankOfFood:1,rankOfSkill:7}),
new Pokemon({no:194,name:"ウパー",sleepType:"ぐっすり",specialty:"食材",berry:"オレンのみ",food1:"あじわいキノコ",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,6,10],food3:"マメミート",food3Num:[0,0,12],skill:"げんきチャージS",fp:5,sec:5900,fullyEvolved:false,expType:600,foodRate:0.201,foodOtetsudaiCountDay:6.5,skillRate:0.038,skillExpectionDay:1.52,berryEnergy:31,berrySEnergyLvMaxDay:7770,foodEnergyLvMaxDay:18046,rankOfBerry:1,rankOfFood:3,rankOfSkill:3}),
new Pokemon({no:194.1,name:"ウパー(パルデア)",sleepType:"うとうと",specialty:"食材",berry:"カゴのみ",food1:"リラックスカカオ",food1Num:[2,5,7],food2:"めざましコーヒー",food2Num:[0,4,7],food3:"ほっこりポテト",food3Num:[0,0,9],skill:"げんきチャージS",fp:5,sec:6400,fullyEvolved:false,expType:600,foodRate:0.209,foodOtetsudaiCountDay:6.2,skillRate:0.056,skillExpectionDay:1.77,berryEnergy:32,berrySEnergyLvMaxDay:7320,foodEnergyLvMaxDay:16552,rankOfBerry:1,rankOfFood:3,rankOfSkill:4}),
new Pokemon({no:195,name:"ヌオー",sleepType:"ぐっすり",specialty:"食材",berry:"オレンのみ",food1:"あじわいキノコ",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,6,10],food3:"マメミート",food3Num:[0,0,12],skill:"げんきチャージS",fp:12,sec:3400,fullyEvolved:true,expType:600,foodRate:0.19,foodOtetsudaiCountDay:10.6,skillRate:0.032,skillExpectionDay:1.86,berryEnergy:31,berrySEnergyLvMaxDay:13668,foodEnergyLvMaxDay:29601,rankOfBerry:4,rankOfFood:9,rankOfSkill:4}),
new Pokemon({no:196,name:"エーフィ",sleepType:"すやすや",specialty:"スキル",berry:"マゴのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"エナジーチャージM",fp:20,sec:2400,fullyEvolved:true,expType:600,foodRate:0.164,foodOtetsudaiCountDay:13,skillRate:0.044,skillExpectionDay:3.12,berryEnergy:26,berrySEnergyLvMaxDay:16762,foodEnergyLvMaxDay:10633,rankOfBerry:6,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:197,name:"ブラッキー",sleepType:"うとうと",specialty:"スキル",berry:"ウイのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"つきのひかり",fp:20,sec:3200,fullyEvolved:true,expType:600,foodRate:0.219,foodOtetsudaiCountDay:13,skillRate:0.101,skillExpectionDay:5.25,berryEnergy:31,berrySEnergyLvMaxDay:14003,foodEnergyLvMaxDay:10650,rankOfBerry:4,rankOfFood:1,rankOfSkill:12}),
new Pokemon({no:198,name:"ヤミカラス",sleepType:"うとうと",specialty:"スキル",berry:"ウイのみ",food1:"めざましコーヒー",food1Num:[1,2,4],food2:"ワカクサ大豆",food2Num:[0,3,6],food3:"げきからハーブ",food3Num:[0,0,4],skill:"きょううん(食材セレクトS)",fp:16,sec:3600,fullyEvolved:false,expType:600,foodRate:0.141,foodOtetsudaiCountDay:7.5,skillRate:0.062,skillExpectionDay:2.95,berryEnergy:31,berrySEnergyLvMaxDay:13690,foodEnergyLvMaxDay:9130,rankOfBerry:4,rankOfFood:1,rankOfSkill:7}),
new Pokemon({no:199,name:"ヤドキング",sleepType:"すやすや",specialty:"スキル",berry:"オレンのみ",food1:"リラックスカカオ",food1Num:[1,2,4],food2:"おいしいシッポ",food2Num:[0,1,2],food3:"あんみんトマト",food3Num:[0,0,5],skill:"げんきエールS",fp:20,sec:3400,fullyEvolved:true,expType:600,foodRate:0.166,foodOtetsudaiCountDay:9.3,skillRate:0.087,skillExpectionDay:4.28,berryEnergy:31,berrySEnergyLvMaxDay:14073,foodEnergyLvMaxDay:15722,rankOfBerry:4,rankOfFood:2,rankOfSkill:11}),
new Pokemon({no:202,name:"ソーナンス",sleepType:"すやすや",specialty:"スキル",berry:"マゴのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"あじわいキノコ",food2Num:[0,1,2],food3:"ピュアなオイル",food3Num:[0,0,3],skill:"げんきエールS",fp:7,sec:3500,fullyEvolved:true,expType:600,foodRate:0.211,foodOtetsudaiCountDay:11.5,skillRate:0.082,skillExpectionDay:3.93,berryEnergy:26,berrySEnergyLvMaxDay:10848,foodEnergyLvMaxDay:9381,rankOfBerry:2,rankOfFood:1,rankOfSkill:10}),
new Pokemon({no:208,name:"ハガネール",sleepType:"ぐっすり",specialty:"きのみ",berry:"ベリブのみ",food1:"あんみんトマト",food1Num:[1,2,4],food2:"マメミート",food2Num:[0,2,4],food3:"ほっこりポテト",food3Num:[0,0,3],skill:"食材ゲットS",fp:20,sec:3000,fullyEvolved:true,expType:600,foodRate:0.154,foodOtetsudaiCountDay:9.8,skillRate:0.032,skillExpectionDay:2.02,berryEnergy:33,berrySEnergyLvMaxDay:25835,foodEnergyLvMaxDay:7988,rankOfBerry:12,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:213,name:"ツボツボ",sleepType:"うとうと",specialty:"スキル",berry:"ラムのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"めざましコーヒー",food2Num:[0,2,3],food3:"あまいミツ",food3Num:[0,0,4],skill:"きのみジュース(げんきオールS)",fp:16,sec:3600,fullyEvolved:true,expType:600,foodRate:0.205,foodOtetsudaiCountDay:10.9,skillRate:0.059,skillExpectionDay:2.82,berryEnergy:24,berrySEnergyLvMaxDay:9809,foodEnergyLvMaxDay:11393,rankOfBerry:1,rankOfFood:1,rankOfSkill:7}),
new Pokemon({no:214,name:"ヘラクロス",sleepType:"うとうと",specialty:"スキル",berry:"ラムのみ",food1:"あまいミツ",food1Num:[1,2,4],food2:"あじわいキノコ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,4],skill:"ビルドアップ(料理アシストS)",fp:16,sec:2300,fullyEvolved:true,expType:600,foodRate:0.158,foodOtetsudaiCountDay:13.1,skillRate:0.047,skillExpectionDay:3.45,berryEnergy:24,berrySEnergyLvMaxDay:16261,foodEnergyLvMaxDay:10690,rankOfBerry:6,rankOfFood:1,rankOfSkill:9}),
new Pokemon({no:215,name:"ニューラ",sleepType:"うとうと",specialty:"きのみ",berry:"ウイのみ",food1:"マメミート",food1Num:[1,2,4],food2:"とくせんエッグ",food2Num:[0,2,3],food3:"ワカクサ大豆",food3Num:[0,0,4],skill:"料理チャンスS",fp:16,sec:3200,fullyEvolved:false,expType:600,foodRate:0.255,foodOtetsudaiCountDay:15.2,skillRate:0.019,skillExpectionDay:1.47,berryEnergy:31,berrySEnergyLvMaxDay:20036,foodEnergyLvMaxDay:13159,rankOfBerry:8,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:225,name:"デリバード",sleepType:"うとうと",specialty:"食材",berry:"シーヤのみ",food1:"とくせんエッグ",food1Num:[2,5,7],food2:"とくせんリンゴ",food2Num:[0,6,9],food3:"リラックスカカオ",food3Num:[0,0,5],skill:"プレゼント(食材ゲットS)",fp:16,sec:2500,fullyEvolved:true,expType:600,foodRate:0.188,foodOtetsudaiCountDay:14.3,skillRate:0.03,skillExpectionDay:2.19,berryEnergy:24,berrySEnergyLvMaxDay:14427,foodEnergyLvMaxDay:30091,rankOfBerry:5,rankOfFood:9,rankOfSkill:5}),
new Pokemon({no:228,name:"デルビル",sleepType:"うとうと",specialty:"きのみ",berry:"ウイのみ",food1:"げきからハーブ",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,3,4],food3:"ふといながねぎ",food3Num:[0,0,3],skill:"エナジーチャージM",fp:5,sec:4900,fullyEvolved:false,expType:600,foodRate:0.201,foodOtetsudaiCountDay:7.8,skillRate:0.037,skillExpectionDay:1.63,berryEnergy:31,berrySEnergyLvMaxDay:14033,foodEnergyLvMaxDay:8207,rankOfBerry:4,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:229,name:"ヘルガー",sleepType:"うとうと",specialty:"きのみ",berry:"ウイのみ",food1:"げきからハーブ",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,3,4],food3:"ふといながねぎ",food3Num:[0,0,3],skill:"エナジーチャージM",fp:12,sec:3300,fullyEvolved:true,expType:600,foodRate:0.203,foodOtetsudaiCountDay:11.7,skillRate:0.04,skillExpectionDay:2.21,berryEnergy:31,berrySEnergyLvMaxDay:20785,foodEnergyLvMaxDay:12307,rankOfBerry:9,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:242,name:"ハピナス",sleepType:"すやすや",specialty:"食材",berry:"キーのみ",food1:"とくせんエッグ",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,7],food3:"あまいミツ",food3Num:[0,0,8],skill:"げんきオールS",fp:20,sec:3100,fullyEvolved:true,expType:600,foodRate:0.238,foodOtetsudaiCountDay:14.6,skillRate:0.023,skillExpectionDay:1.62,berryEnergy:28,berrySEnergyLvMaxDay:12738,foodEnergyLvMaxDay:30721,rankOfBerry:3,rankOfFood:9,rankOfSkill:4}),
new Pokemon({no:243,name:"ライコウ",sleepType:"すやすや",specialty:"スキル",berry:"ウブのみ",food1:"マメミート",food1Num:[1,2,4],food2:"げきからハーブ",food2Num:[0,2,3],food3:"ふといながねぎ",food3Num:[0,0,2],skill:"おてつだいブースト(でんき)",fp:30,sec:2100,fullyEvolved:true,expType:1080,foodRate:0.192,foodOtetsudaiCountDay:17.4,skillRate:0.019,skillExpectionDay:1.81,berryEnergy:25,berrySEnergyLvMaxDay:17803,foodEnergyLvMaxDay:15098,rankOfBerry:7,rankOfFood:2,rankOfSkill:4}),
new Pokemon({no:244,name:"エンテイ",sleepType:"すやすや",specialty:"スキル",berry:"ヒメリのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"あんみんトマト",food2Num:[0,2,3],food3:"あじわいキノコ",food3Num:[0,0,3],skill:"おてつだいブースト(ほのお)",fp:30,sec:2400,fullyEvolved:true,expType:1080,foodRate:0.187,foodOtetsudaiCountDay:14.8,skillRate:0.023,skillExpectionDay:1.88,berryEnergy:27,berrySEnergyLvMaxDay:16928,foodEnergyLvMaxDay:15589,rankOfBerry:6,rankOfFood:2,rankOfSkill:4}),
new Pokemon({no:245,name:"スイクン",sleepType:"ぐっすり",specialty:"スキル",berry:"オレンのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"ピュアなオイル",food2Num:[0,2,3],food3:"ワカクサコーン",food3Num:[0,0,2],skill:"おてつだいブースト(みず)",fp:30,sec:2700,fullyEvolved:true,expType:1080,foodRate:0.277,foodOtetsudaiCountDay:19.5,skillRate:0.026,skillExpectionDay:1.88,berryEnergy:31,berrySEnergyLvMaxDay:15363,foodEnergyLvMaxDay:16942,rankOfBerry:5,rankOfFood:3,rankOfSkill:4}),
new Pokemon({no:246,name:"ヨーギラス",sleepType:"ぐっすり",specialty:"食材",berry:"オボンのみ",food1:"あったかジンジャー",food1Num:[2,5,7],food2:"ワカクサ大豆",food2Num:[0,5,8],food3:"マメミート",food3Num:[0,0,8],skill:"げんきチャージS",fp:5,sec:4800,fullyEvolved:false,expType:900,foodRate:0.238,foodOtetsudaiCountDay:9.4,skillRate:0.041,skillExpectionDay:1.75,berryEnergy:30,berrySEnergyLvMaxDay:8814,foodEnergyLvMaxDay:16534,rankOfBerry:1,rankOfFood:3,rankOfSkill:4}),
new Pokemon({no:247,name:"サナギラス",sleepType:"ぐっすり",specialty:"食材",berry:"オボンのみ",food1:"あったかジンジャー",food1Num:[2,5,7],food2:"ワカクサ大豆",food2Num:[0,5,8],food3:"マメミート",food3Num:[0,0,8],skill:"げんきチャージS",fp:12,sec:3600,fullyEvolved:false,expType:900,foodRate:0.247,foodOtetsudaiCountDay:13.1,skillRate:0.045,skillExpectionDay:2.26,berryEnergy:30,berrySEnergyLvMaxDay:11614,foodEnergyLvMaxDay:22878,rankOfBerry:2,rankOfFood:6,rankOfSkill:5}),
new Pokemon({no:248,name:"バンギラス",sleepType:"うとうと",specialty:"食材",berry:"ウイのみ",food1:"あったかジンジャー",food1Num:[2,5,7],food2:"ワカクサ大豆",food2Num:[0,5,8],food3:"マメミート",food3Num:[0,0,8],skill:"げんきチャージS",fp:25,sec:2700,fullyEvolved:true,expType:900,foodRate:0.266,foodOtetsudaiCountDay:18.8,skillRate:0.052,skillExpectionDay:3.27,berryEnergy:31,berrySEnergyLvMaxDay:15597,foodEnergyLvMaxDay:32851,rankOfBerry:5,rankOfFood:10,rankOfSkill:8}),
new Pokemon({no:252,name:"キモリ",sleepType:"うとうと",specialty:"スキル",berry:"ドリのみ",food1:"とくせんエッグ",food1Num:[1,2,4],food2:"めざましコーヒー",food2Num:[0,2,3],food3:"ふといながねぎ",food3Num:[0,0,2],skill:"きのみバースト",fp:5,sec:4500,fullyEvolved:false,expType:600,foodRate:0.172,foodOtetsudaiCountDay:7.3,skillRate:0.035,skillExpectionDay:1.66,berryEnergy:30,berrySEnergyLvMaxDay:10216,foodEnergyLvMaxDay:7647,rankOfBerry:1,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:253,name:"ジュプトル",sleepType:"うとうと",specialty:"スキル",berry:"ドリのみ",food1:"とくせんエッグ",food1Num:[1,2,4],food2:"めざましコーヒー",food2Num:[0,2,3],food3:"ふといながねぎ",food3Num:[0,0,2],skill:"きのみバースト",fp:12,sec:3300,fullyEvolved:false,expType:600,foodRate:0.15,foodOtetsudaiCountDay:8.7,skillRate:0.035,skillExpectionDay:2,berryEnergy:30,berrySEnergyLvMaxDay:14301,foodEnergyLvMaxDay:9094,rankOfBerry:4,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:254,name:"ジュカイン",sleepType:"うとうと",specialty:"スキル",berry:"ドリのみ",food1:"とくせんエッグ",food1Num:[1,2,4],food2:"めざましコーヒー",food2Num:[0,2,3],food3:"ふといながねぎ",food3Num:[0,0,2],skill:"きのみバースト",fp:20,sec:2300,fullyEvolved:true,expType:600,foodRate:0.107,foodOtetsudaiCountDay:8.9,skillRate:0.03,skillExpectionDay:2.34,berryEnergy:30,berrySEnergyLvMaxDay:21557,foodEnergyLvMaxDay:9308,rankOfBerry:9,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:255,name:"アチャモ",sleepType:"すやすや",specialty:"きのみ",berry:"ヒメリのみ",food1:"あじわいキノコ",food1Num:[1,2,4],food2:"ワカクサ大豆",food2Num:[0,4,6],food3:"ピュアなオイル",food3Num:[0,0,5],skill:"げんきチャージS",fp:5,sec:4300,fullyEvolved:false,expType:600,foodRate:0.16,foodOtetsudaiCountDay:7.1,skillRate:0.044,skillExpectionDay:1.96,berryEnergy:27,berrySEnergyLvMaxDay:14643,foodEnergyLvMaxDay:9619,rankOfBerry:5,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:256,name:"ワカシャモ",sleepType:"ぐっすり",specialty:"きのみ",berry:"クラボのみ",food1:"あじわいキノコ",food1Num:[1,2,4],food2:"ワカクサ大豆",food2Num:[0,4,6],food3:"ピュアなオイル",food3Num:[0,0,5],skill:"げんきチャージS",fp:12,sec:3400,fullyEvolved:false,expType:600,foodRate:0.17,foodOtetsudaiCountDay:9.5,skillRate:0.052,skillExpectionDay:2.66,berryEnergy:27,berrySEnergyLvMaxDay:18298,foodEnergyLvMaxDay:12925,rankOfBerry:7,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:257,name:"バシャーモ",sleepType:"ぐっすり",specialty:"きのみ",berry:"クラボのみ",food1:"あじわいキノコ",food1Num:[1,2,4],food2:"ワカクサ大豆",food2Num:[0,4,6],food3:"ピュアなオイル",food3Num:[0,0,5],skill:"げんきチャージS",fp:20,sec:2600,fullyEvolved:true,expType:600,foodRate:0.153,foodOtetsudaiCountDay:11.2,skillRate:0.049,skillExpectionDay:3.2,berryEnergy:27,berrySEnergyLvMaxDay:24418,foodEnergyLvMaxDay:15212,rankOfBerry:11,rankOfFood:2,rankOfSkill:8}),
new Pokemon({no:258,name:"ミズゴロウ",sleepType:"ぐっすり",specialty:"きのみ",berry:"オレンのみ",food1:"ワカクサコーン",food1Num:[1,2,3],food2:"モーモーミルク",food2Num:[0,3,5],food3:"あじわいキノコ",food3Num:[0,0,3],skill:"料理チャンスS",fp:5,sec:4700,fullyEvolved:false,expType:600,foodRate:0.192,foodOtetsudaiCountDay:7.8,skillRate:0.024,skillExpectionDay:1.4,berryEnergy:31,berrySEnergyLvMaxDay:14795,foodEnergyLvMaxDay:8433,rankOfBerry:5,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:259,name:"ヌマクロー",sleepType:"ぐっすり",specialty:"きのみ",berry:"フィラのみ",food1:"ワカクサコーン",food1Num:[1,2,3],food2:"モーモーミルク",food2Num:[0,3,5],food3:"あじわいキノコ",food3Num:[0,0,3],skill:"料理チャンスS",fp:12,sec:3500,fullyEvolved:false,expType:600,foodRate:0.168,foodOtetsudaiCountDay:9.1,skillRate:0.028,skillExpectionDay:1.69,berryEnergy:29,berrySEnergyLvMaxDay:19138,foodEnergyLvMaxDay:9908,rankOfBerry:8,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:260,name:"ラグラージ",sleepType:"ぐっすり",specialty:"きのみ",berry:"フィラのみ",food1:"ワカクサコーン",food1Num:[1,2,3],food2:"モーモーミルク",food2Num:[0,3,5],food3:"あじわいキノコ",food3Num:[0,0,3],skill:"料理チャンスS",fp:20,sec:2800,fullyEvolved:true,expType:600,foodRate:0.146,foodOtetsudaiCountDay:9.9,skillRate:0.034,skillExpectionDay:2.21,berryEnergy:29,berrySEnergyLvMaxDay:24555,foodEnergyLvMaxDay:10763,rankOfBerry:11,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:280,name:"ラルトス",sleepType:"すやすや",specialty:"スキル",berry:"マゴのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"ワカクサコーン",food2Num:[0,1,2],food3:"ふといながねぎ",food3Num:[0,0,2],skill:"げんきオールS",fp:5,sec:4800,fullyEvolved:false,expType:600,foodRate:0.145,foodOtetsudaiCountDay:5.8,skillRate:0.043,skillExpectionDay:1.8,berryEnergy:26,berrySEnergyLvMaxDay:8571,foodEnergyLvMaxDay:4701,rankOfBerry:1,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:281,name:"キルリア",sleepType:"すやすや",specialty:"スキル",berry:"マゴのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"ワカクサコーン",food2Num:[0,1,2],food3:"ふといながねぎ",food3Num:[0,0,2],skill:"げんきオールS",fp:12,sec:3500,fullyEvolved:false,expType:600,foodRate:0.146,foodOtetsudaiCountDay:7.9,skillRate:0.043,skillExpectionDay:2.23,berryEnergy:26,berrySEnergyLvMaxDay:11741,foodEnergyLvMaxDay:6491,rankOfBerry:2,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:282,name:"サーナイト",sleepType:"すやすや",specialty:"スキル",berry:"マゴのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"ワカクサコーン",food2Num:[0,1,2],food3:"ふといながねぎ",food3Num:[0,0,2],skill:"げんきオールS",fp:20,sec:2400,fullyEvolved:true,expType:600,foodRate:0.144,foodOtetsudaiCountDay:11.4,skillRate:0.042,skillExpectionDay:3,berryEnergy:26,berrySEnergyLvMaxDay:17163,foodEnergyLvMaxDay:9337,rankOfBerry:6,rankOfFood:1,rankOfSkill:7}),
new Pokemon({no:287,name:"ナマケロ",sleepType:"すやすや",specialty:"きのみ",berry:"キーのみ",food1:"あんみんトマト",food1Num:[1,2,4],food2:"あまいミツ",food2Num:[0,2,4],food3:"とくせんリンゴ",food3Num:[0,0,4],skill:"食材ゲットS",fp:5,sec:4900,fullyEvolved:false,expType:600,foodRate:0.216,foodOtetsudaiCountDay:8.4,skillRate:0.019,skillExpectionDay:1.3,berryEnergy:28,berrySEnergyLvMaxDay:12437,foodEnergyLvMaxDay:6860,rankOfBerry:3,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:288,name:"ヤルキモノ",sleepType:"うとうと",specialty:"きのみ",berry:"キーのみ",food1:"あんみんトマト",food1Num:[1,2,4],food2:"あまいミツ",food2Num:[0,2,4],food3:"とくせんリンゴ",food3Num:[0,0,4],skill:"食材ゲットS",fp:12,sec:3200,fullyEvolved:true,expType:600,foodRate:0.204,foodOtetsudaiCountDay:12.1,skillRate:0.015,skillExpectionDay:1.37,berryEnergy:28,berrySEnergyLvMaxDay:19336,foodEnergyLvMaxDay:9920,rankOfBerry:8,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:289,name:"ケッキング",sleepType:"すやすや",specialty:"きのみ",berry:"キーのみ",food1:"あんみんトマト",food1Num:[1,2,4],food2:"あまいミツ",food2Num:[0,2,4],food3:"とくせんリンゴ",food3Num:[0,0,4],skill:"食材ゲットS",fp:22,sec:3600,fullyEvolved:true,expType:600,foodRate:0.339,foodOtetsudaiCountDay:17.9,skillRate:0.067,skillExpectionDay:3.17,berryEnergy:28,berrySEnergyLvMaxDay:14272,foodEnergyLvMaxDay:14653,rankOfBerry:4,rankOfFood:2,rankOfSkill:8}),
new Pokemon({no:302,name:"ヤミラミ",sleepType:"うとうと",specialty:"スキル",berry:"ウイのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"あじわいキノコ",food2Num:[0,2,3],food3:"リラックスカカオ",food3Num:[0,0,3],skill:"ゆめのかけらゲットS(ランダム)",fp:16,sec:3600,fullyEvolved:true,expType:600,foodRate:0.188,foodOtetsudaiCountDay:10,skillRate:0.068,skillExpectionDay:3.21,berryEnergy:31,berrySEnergyLvMaxDay:12941,foodEnergyLvMaxDay:10946,rankOfBerry:3,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:303,name:"クチート",sleepType:"ぐっすり",specialty:"食材",berry:"ベリブのみ",food1:"ピュアなオイル",food1Num:[2,5,7],food2:"ワカクサコーン",food2Num:[0,4,6],food3:"あんみんトマト",food3Num:[0,0,8],skill:"かいりきバサミ(食材セレクトS)",fp:16,sec:3200,fullyEvolved:true,expType:600,foodRate:0.204,foodOtetsudaiCountDay:12.1,skillRate:0.038,skillExpectionDay:2.18,berryEnergy:33,berrySEnergyLvMaxDay:15192,foodEnergyLvMaxDay:25509,rankOfBerry:5,rankOfFood:7,rankOfSkill:5}),
new Pokemon({no:304,name:"ココドラ",sleepType:"ぐっすり",specialty:"食材",berry:"ベリブのみ",food1:"マメミート",food1Num:[2,5,7],food2:"めざましコーヒー",food2Num:[0,3,5],food3:"ワカクサ大豆",food3Num:[0,0,7],skill:"げんきチャージS",fp:5,sec:5700,fullyEvolved:false,expType:600,foodRate:0.273,foodOtetsudaiCountDay:9.1,skillRate:0.046,skillExpectionDay:1.69,berryEnergy:33,berrySEnergyLvMaxDay:7790,foodEnergyLvMaxDay:14906,rankOfBerry:1,rankOfFood:2,rankOfSkill:4}),
new Pokemon({no:305,name:"コドラ",sleepType:"ぐっすり",specialty:"食材",berry:"ベリブのみ",food1:"マメミート",food1Num:[2,5,7],food2:"めざましコーヒー",food2Num:[0,3,5],food3:"ワカクサ大豆",food3Num:[0,0,7],skill:"げんきチャージS",fp:12,sec:4200,fullyEvolved:false,expType:600,foodRate:0.277,foodOtetsudaiCountDay:12.6,skillRate:0.048,skillExpectionDay:2.11,berryEnergy:33,berrySEnergyLvMaxDay:10514,foodEnergyLvMaxDay:20526,rankOfBerry:1,rankOfFood:5,rankOfSkill:5}),
new Pokemon({no:306,name:"ボスゴドラ",sleepType:"ぐっすり",specialty:"食材",berry:"ベリブのみ",food1:"マメミート",food1Num:[2,5,7],food2:"めざましコーヒー",food2Num:[0,3,5],food3:"ワカクサ大豆",food3Num:[0,0,7],skill:"げんきチャージS",fp:20,sec:3000,fullyEvolved:true,expType:600,foodRate:0.285,foodOtetsudaiCountDay:18.1,skillRate:0.052,skillExpectionDay:2.97,berryEnergy:33,berrySEnergyLvMaxDay:14556,foodEnergyLvMaxDay:29566,rankOfBerry:5,rankOfFood:9,rankOfSkill:7}),
new Pokemon({no:311,name:"プラスル",sleepType:"すやすや",specialty:"スキル",berry:"ウブのみ",food1:"めざましコーヒー",food1Num:[1,2,4],food2:"ふといながねぎ",food2Num:[0,2,3],food3:"モーモーミルク",food3Num:[0,0,6],skill:"プラス(食材ゲットS)",fp:10,sec:2400,fullyEvolved:true,expType:600,foodRate:0.103,foodOtetsudaiCountDay:8.2,skillRate:0.049,skillExpectionDay:3.45,berryEnergy:25,berrySEnergyLvMaxDay:17293,foodEnergyLvMaxDay:10958,rankOfBerry:7,rankOfFood:1,rankOfSkill:9}),
new Pokemon({no:312,name:"マイナン",sleepType:"すやすや",specialty:"スキル",berry:"ウブのみ",food1:"あまいミツ",food1Num:[1,2,4],food2:"とくせんエッグ",food2Num:[0,2,4],food3:"モーモーミルク",food3Num:[0,0,4],skill:"マイナス(料理パワーアップS)",fp:10,sec:2400,fullyEvolved:true,expType:600,foodRate:0.174,foodOtetsudaiCountDay:13.8,skillRate:0.049,skillExpectionDay:3.45,berryEnergy:25,berrySEnergyLvMaxDay:15924,foodEnergyLvMaxDay:14045,rankOfBerry:6,rankOfFood:1,rankOfSkill:9}),
new Pokemon({no:316,name:"ゴクリン",sleepType:"うとうと",specialty:"スキル",berry:"カゴのみ",food1:"ワカクサ大豆",food1Num:[1,2,4],food2:"あじわいキノコ",food2Num:[0,1,2],food3:"あまいミツ",food3Num:[0,0,4],skill:"ゆめのかけらゲットS(ランダム)",fp:5,sec:5900,fullyEvolved:false,expType:600,foodRate:0.214,foodOtetsudaiCountDay:6.9,skillRate:0.063,skillExpectionDay:2.01,berryEnergy:32,berrySEnergyLvMaxDay:7890,foodEnergyLvMaxDay:5644,rankOfBerry:1,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:317,name:"マルノーム",sleepType:"うとうと",specialty:"スキル",berry:"カゴのみ",food1:"ワカクサ大豆",food1Num:[1,2,4],food2:"あじわいキノコ",food2Num:[0,1,2],food3:"あまいミツ",food3Num:[0,0,4],skill:"ゆめのかけらゲットS(ランダム)",fp:12,sec:3500,fullyEvolved:true,expType:600,foodRate:0.21,foodOtetsudaiCountDay:11.4,skillRate:0.07,skillExpectionDay:3.38,berryEnergy:32,berrySEnergyLvMaxDay:13368,foodEnergyLvMaxDay:9337,rankOfBerry:4,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:328,name:"ナックラー",sleepType:"ぐっすり",specialty:"食材",berry:"フィラのみ",food1:"つやつやアボカド",food1Num:[2,5,7],food2:"げきからハーブ",food2Num:[0,6,9],food3:"ワカクサ大豆",food3Num:[0,0,12],skill:"エナジーチャージS",fp:5,sec:5000,fullyEvolved:false,expType:600,foodRate:0.152,foodOtetsudaiCountDay:5.8,skillRate:0.031,skillExpectionDay:1.5,berryEnergy:29,berrySEnergyLvMaxDay:9103,foodEnergyLvMaxDay:15408,rankOfBerry:1,rankOfFood:2,rankOfSkill:3}),
new Pokemon({no:329,name:"ビブラーバ",sleepType:"ぐっすり",specialty:"食材",berry:"フィラのみ",food1:"つやつやアボカド",food1Num:[2,5,7],food2:"げきからハーブ",food2Num:[0,6,9],food3:"ワカクサ大豆",food3Num:[0,0,12],skill:"エナジーチャージS",fp:12,sec:3700,fullyEvolved:false,expType:600,foodRate:0.155,foodOtetsudaiCountDay:8,skillRate:0.034,skillExpectionDay:1.83,berryEnergy:29,berrySEnergyLvMaxDay:12258,foodEnergyLvMaxDay:21233,rankOfBerry:3,rankOfFood:5,rankOfSkill:4}),
new Pokemon({no:330,name:"フライゴン",sleepType:"ぐっすり",specialty:"食材",berry:"フィラのみ",food1:"つやつやアボカド",food1Num:[2,5,7],food2:"げきからハーブ",food2Num:[0,6,9],food3:"ワカクサ大豆",food3Num:[0,0,12],skill:"エナジーチャージS",fp:20,sec:2700,fullyEvolved:true,expType:600,foodRate:0.172,foodOtetsudaiCountDay:12.1,skillRate:0.039,skillExpectionDay:2.54,berryEnergy:29,berrySEnergyLvMaxDay:16459,foodEnergyLvMaxDay:32288,rankOfBerry:6,rankOfFood:10,rankOfSkill:6}),
new Pokemon({no:333,name:"チルット",sleepType:"ぐっすり",specialty:"きのみ",berry:"シーヤのみ",food1:"とくせんエッグ",food1Num:[1,2,4],food2:"ワカクサ大豆",food2Num:[0,3,4],food3:"とくせんリンゴ",food3Num:[0,0,5],skill:"げんきチャージS",fp:5,sec:4200,fullyEvolved:false,expType:600,foodRate:0.177,foodOtetsudaiCountDay:8,skillRate:0.032,skillExpectionDay:1.65,berryEnergy:24,berrySEnergyLvMaxDay:13056,foodEnergyLvMaxDay:8432,rankOfBerry:3,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:334,name:"チルタリス",sleepType:"うとうと",specialty:"きのみ",berry:"ヤチェのみ",food1:"とくせんエッグ",food1Num:[1,2,4],food2:"ワカクサ大豆",food2Num:[0,3,4],food3:"とくせんリンゴ",food3Num:[0,0,5],skill:"げんきチャージS",fp:12,sec:3500,fullyEvolved:true,expType:600,foodRate:0.258,foodOtetsudaiCountDay:14,skillRate:0.061,skillExpectionDay:2.98,berryEnergy:35,berrySEnergyLvMaxDay:20599,foodEnergyLvMaxDay:14748,rankOfBerry:9,rankOfFood:2,rankOfSkill:7}),
new Pokemon({no:353,name:"カゲボウズ",sleepType:"うとうと",specialty:"きのみ",berry:"ブリーのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,2,4],food3:"あじわいキノコ",food3Num:[0,0,3],skill:"エナジーチャージS(ランダム)",fp:5,sec:3900,fullyEvolved:false,expType:600,foodRate:0.171,foodOtetsudaiCountDay:8.4,skillRate:0.026,skillExpectionDay:1.54,berryEnergy:26,berrySEnergyLvMaxDay:15343,foodEnergyLvMaxDay:8772,rankOfBerry:5,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:354,name:"ジュペッタ",sleepType:"うとうと",specialty:"きのみ",berry:"ブリーのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,2,4],food3:"あじわいキノコ",food3Num:[0,0,3],skill:"エナジーチャージS(ランダム)",fp:16,sec:2600,fullyEvolved:true,expType:600,foodRate:0.179,foodOtetsudaiCountDay:13.1,skillRate:0.033,skillExpectionDay:2.29,berryEnergy:26,berrySEnergyLvMaxDay:22792,foodEnergyLvMaxDay:13774,rankOfBerry:10,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:359,name:"アブソル",sleepType:"うとうと",specialty:"食材",berry:"ウイのみ",food1:"リラックスカカオ",food1Num:[2,5,7],food2:"とくせんリンゴ",food2Num:[0,8,12],food3:"あじわいキノコ",food3Num:[0,0,7],skill:"エナジーチャージM",fp:16,sec:2950,fullyEvolved:true,expType:600,foodRate:0.178,foodOtetsudaiCountDay:11.5,skillRate:0.038,skillExpectionDay:2.31,berryEnergy:31,berrySEnergyLvMaxDay:15987,foodEnergyLvMaxDay:31196,rankOfBerry:6,rankOfFood:10,rankOfSkill:5}),
new Pokemon({no:360,name:"ソーナノ",sleepType:"ぐっすり",specialty:"スキル",berry:"マゴのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"あじわいキノコ",food2Num:[0,1,2],food3:"ピュアなオイル",food3Num:[0,0,3],skill:"げんきエールS",fp:5,sec:5800,fullyEvolved:false,expType:600,foodRate:0.213,foodOtetsudaiCountDay:7,skillRate:0.069,skillExpectionDay:2.17,berryEnergy:26,berrySEnergyLvMaxDay:6529,foodEnergyLvMaxDay:5715,rankOfBerry:1,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:363,name:"タマザラシ",sleepType:"ぐっすり",specialty:"きのみ",berry:"チーゴのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"マメミート",food2Num:[0,3,4],food3:"あったかジンジャー",food3Num:[0,0,4],skill:"食材ゲットS",fp:5,sec:5600,fullyEvolved:false,expType:600,foodRate:0.224,foodOtetsudaiCountDay:7.6,skillRate:0.023,skillExpectionDay:1.32,berryEnergy:32,berrySEnergyLvMaxDay:12310,foodEnergyLvMaxDay:8003,rankOfBerry:3,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:363.1,name:"タマザラシ(ホリデー)",sleepType:"ぐっすり",specialty:"スキル",berry:"チーゴのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"マメミート",food2Num:[0,3,4],food3:"あったかジンジャー",food3Num:[0,0,4],skill:"料理チャンスS",fp:5,sec:3300,fullyEvolved:true,expType:600,foodRate:0.214,foodOtetsudaiCountDay:12.4,skillRate:0.05,skillExpectionDay:2.64,berryEnergy:32,berrySEnergyLvMaxDay:14106,foodEnergyLvMaxDay:12974,rankOfBerry:4,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:364,name:"トドグラー",sleepType:"ぐっすり",specialty:"きのみ",berry:"チーゴのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"マメミート",food2Num:[0,3,4],food3:"あったかジンジャー",food3Num:[0,0,4],skill:"食材ゲットS",fp:12,sec:4000,fullyEvolved:false,expType:600,foodRate:0.221,foodOtetsudaiCountDay:10.5,skillRate:0.021,skillExpectionDay:1.41,berryEnergy:32,berrySEnergyLvMaxDay:17301,foodEnergyLvMaxDay:11054,rankOfBerry:7,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:365,name:"トドゼルガ",sleepType:"ぐっすり",specialty:"きのみ",berry:"チーゴのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"マメミート",food2Num:[0,3,4],food3:"あったかジンジャー",food3Num:[0,0,4],skill:"食材ゲットS",fp:20,sec:3000,fullyEvolved:true,expType:600,foodRate:0.223,foodOtetsudaiCountDay:14.2,skillRate:0.022,skillExpectionDay:1.62,berryEnergy:32,berrySEnergyLvMaxDay:23009,foodEnergyLvMaxDay:14872,rankOfBerry:10,rankOfFood:2,rankOfSkill:4}),
new Pokemon({no:371,name:"タツベイ",sleepType:"うとうと",specialty:"きのみ",berry:"ヤチェのみ",food1:"ほっこりポテト",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,3,4],food3:"マメミート",food3Num:[0,0,4],skill:"料理パワーアップS",fp:5,sec:5300,fullyEvolved:false,expType:900,foodRate:0.209,foodOtetsudaiCountDay:7.5,skillRate:0.027,skillExpectionDay:1.4,berryEnergy:35,berrySEnergyLvMaxDay:14501,foodEnergyLvMaxDay:7890,rankOfBerry:5,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:372,name:"コモルー",sleepType:"うとうと",specialty:"きのみ",berry:"ヤチェのみ",food1:"ほっこりポテト",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,3,4],food3:"マメミート",food3Num:[0,0,4],skill:"料理パワーアップS",fp:12,sec:3800,fullyEvolved:false,expType:900,foodRate:0.206,foodOtetsudaiCountDay:10.3,skillRate:0.027,skillExpectionDay:1.59,berryEnergy:35,berrySEnergyLvMaxDay:20302,foodEnergyLvMaxDay:10846,rankOfBerry:9,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:373,name:"ボーマンダ",sleepType:"うとうと",specialty:"きのみ",berry:"ヤチェのみ",food1:"ほっこりポテト",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,3,4],food3:"マメミート",food3Num:[0,0,4],skill:"料理パワーアップS",fp:25,sec:2800,fullyEvolved:true,expType:900,foodRate:0.217,foodOtetsudaiCountDay:14.8,skillRate:0.034,skillExpectionDay:2.21,berryEnergy:35,berrySEnergyLvMaxDay:27172,foodEnergyLvMaxDay:15505,rankOfBerry:12,rankOfFood:2,rankOfSkill:5}),
new Pokemon({no:380,name:"ラティアス",sleepType:"うとうと",specialty:"スキル",berry:"ヤチェのみ",food1:"あんみんトマト",food1Num:[1,2,4],food2:"ずっしりカボチャ",food2Num:[0,1,2],food3:"あじわいキノコ",food3Num:[0,0,2],skill:"いやしのはどう(げんきエールS)",fp:30,sec:2800,fullyEvolved:true,expType:1080,foodRate:0.114,foodOtetsudaiCountDay:7.8,skillRate:0.049,skillExpectionDay:3,berryEnergy:35,berrySEnergyLvMaxDay:20497,foodEnergyLvMaxDay:7887,rankOfBerry:9,rankOfFood:1,rankOfSkill:7}),
new Pokemon({no:403,name:"コリンク",sleepType:"すやすや",specialty:"食材",berry:"ウブのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"ピュアなオイル",food2Num:[0,4,7],food3:"めざましコーヒー",food3Num:[0,0,5],skill:"料理パワーアップS",fp:5,sec:4400,fullyEvolved:false,expType:600,foodRate:0.181,foodOtetsudaiCountDay:7.8,skillRate:0.018,skillExpectionDay:1.32,berryEnergy:25,berrySEnergyLvMaxDay:8612,foodEnergyLvMaxDay:14762,rankOfBerry:1,rankOfFood:2,rankOfSkill:3}),
new Pokemon({no:404,name:"ルクシオ",sleepType:"すやすや",specialty:"食材",berry:"ウブのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"ピュアなオイル",food2Num:[0,4,7],food3:"めざましコーヒー",food3Num:[0,0,5],skill:"料理パワーアップS",fp:12,sec:3200,fullyEvolved:false,expType:600,foodRate:0.182,foodOtetsudaiCountDay:10.8,skillRate:0.018,skillExpectionDay:1.44,berryEnergy:25,berrySEnergyLvMaxDay:11828,foodEnergyLvMaxDay:20410,rankOfBerry:2,rankOfFood:5,rankOfSkill:3}),
new Pokemon({no:405,name:"レントラー",sleepType:"すやすや",specialty:"食材",berry:"ウブのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"ピュアなオイル",food2Num:[0,4,7],food3:"めざましコーヒー",food3Num:[0,0,5],skill:"料理パワーアップS",fp:20,sec:2400,fullyEvolved:true,expType:600,foodRate:0.2,foodOtetsudaiCountDay:15.9,skillRate:0.023,skillExpectionDay:1.88,berryEnergy:25,berrySEnergyLvMaxDay:15423,foodEnergyLvMaxDay:29905,rankOfBerry:5,rankOfFood:9,rankOfSkill:4}),
new Pokemon({no:425,name:"フワンテ",sleepType:"うとうと",specialty:"スキル",berry:"ブリーのみ",food1:"ワカクサコーン",food1Num:[1,2,4],food2:"ピュアなオイル",food2Num:[0,3,4],food3:"ほっこりポテト",food3Num:[0,0,4],skill:"たくわえる(エナジーチャージS)",fp:5,sec:4800,fullyEvolved:false,expType:600,foodRate:0.137,foodOtetsudaiCountDay:5.4,skillRate:0.071,skillExpectionDay:2.59,berryEnergy:26,berrySEnergyLvMaxDay:8652,foodEnergyLvMaxDay:6526,rankOfBerry:1,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:426,name:"フワライド",sleepType:"うとうと",specialty:"スキル",berry:"ブリーのみ",food1:"ワカクサコーン",food1Num:[1,2,4],food2:"ピュアなオイル",food2Num:[0,3,4],food3:"ほっこりポテト",food3Num:[0,0,4],skill:"たくわえる(エナジーチャージS)",fp:12,sec:2500,fullyEvolved:true,expType:600,foodRate:0.128,foodOtetsudaiCountDay:9.8,skillRate:0.063,skillExpectionDay:4.21,berryEnergy:26,berrySEnergyLvMaxDay:16784,foodEnergyLvMaxDay:11707,rankOfBerry:6,rankOfFood:1,rankOfSkill:11}),
new Pokemon({no:430,name:"ドンカラス",sleepType:"うとうと",specialty:"スキル",berry:"ウイのみ",food1:"めざましコーヒー",food1Num:[1,2,4],food2:"ワカクサ大豆",food2Num:[0,3,6],food3:"げきからハーブ",food3Num:[0,0,4],skill:"きょううん(食材セレクトS)",fp:20,sec:3200,fullyEvolved:true,expType:600,foodRate:0.143,foodOtetsudaiCountDay:8.5,skillRate:0.067,skillExpectionDay:3.53,berryEnergy:31,berrySEnergyLvMaxDay:15365,foodEnergyLvMaxDay:10417,rankOfBerry:5,rankOfFood:1,rankOfSkill:9}),
new Pokemon({no:438,name:"ウソハチ",sleepType:"ぐっすり",specialty:"スキル",berry:"オボンのみ",food1:"あんみんトマト",food1Num:[1,2,4],food2:"ワカクサ大豆",food2Num:[0,2,4],food3:"あじわいキノコ",food3Num:[0,0,2],skill:"エナジーチャージM",fp:5,sec:6300,fullyEvolved:false,expType:600,foodRate:0.189,foodOtetsudaiCountDay:5.7,skillRate:0.061,skillExpectionDay:1.88,berryEnergy:30,berrySEnergyLvMaxDay:7147,foodEnergyLvMaxDay:4668,rankOfBerry:1,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:439,name:"マネネ",sleepType:"ぐっすり",specialty:"食材",berry:"マゴのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,6],food3:"ふといながねぎ",food3Num:[0,0,4],skill:"へんしん(スキルコピー)",fp:5,sec:4300,fullyEvolved:false,expType:600,foodRate:0.201,foodOtetsudaiCountDay:8.9,skillRate:0.032,skillExpectionDay:1.62,berryEnergy:26,berrySEnergyLvMaxDay:8941,foodEnergyLvMaxDay:15438,rankOfBerry:1,rankOfFood:2,rankOfSkill:4}),
new Pokemon({no:440,name:"ピンプク",sleepType:"ぐっすり",specialty:"食材",berry:"キーのみ",food1:"とくせんエッグ",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,7],food3:"あまいミツ",food3Num:[0,0,8],skill:"げんきオールS",fp:5,sec:4500,fullyEvolved:false,expType:600,foodRate:0.21,foodOtetsudaiCountDay:8.9,skillRate:0.013,skillExpectionDay:1.24,berryEnergy:28,berrySEnergyLvMaxDay:9098,foodEnergyLvMaxDay:18673,rankOfBerry:1,rankOfFood:4,rankOfSkill:3}),
new Pokemon({no:442,name:"ミカルゲ",sleepType:"うとうと",specialty:"食材",berry:"ウイのみ",food1:"あじわいキノコ",food1Num:[2,5,7],food2:"ずっしりカボチャ",food2Num:[0,3,5],food3:"ふといながねぎ",food3Num:[0,0,6],skill:"おてつだいサポートS",fp:16,sec:3500,fullyEvolved:true,expType:600,foodRate:0.198,foodOtetsudaiCountDay:10.8,skillRate:0.036,skillExpectionDay:1.97,berryEnergy:31,berrySEnergyLvMaxDay:13147,foodEnergyLvMaxDay:29966,rankOfBerry:4,rankOfFood:9,rankOfSkill:5}),
new Pokemon({no:447,name:"リオル",sleepType:"ぐっすり",specialty:"スキル",berry:"クラボのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"ほっこりポテト",food2Num:[0,2,4],food3:"とくせんエッグ",food3Num:[0,0,4],skill:"ゆめのかけらゲットS",fp:5,sec:4200,fullyEvolved:false,expType:600,foodRate:0.126,foodOtetsudaiCountDay:5.7,skillRate:0.038,skillExpectionDay:1.81,berryEnergy:27,berrySEnergyLvMaxDay:10399,foodEnergyLvMaxDay:6002,rankOfBerry:1,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:448,name:"ルカリオ",sleepType:"ぐっすり",specialty:"スキル",berry:"クラボのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"ほっこりポテト",food2Num:[0,2,4],food3:"とくせんエッグ",food3Num:[0,0,4],skill:"ゆめのかけらゲットS",fp:20,sec:2600,fullyEvolved:true,expType:600,foodRate:0.15,foodOtetsudaiCountDay:11,skillRate:0.051,skillExpectionDay:3.32,berryEnergy:27,berrySEnergyLvMaxDay:16337,foodEnergyLvMaxDay:11543,rankOfBerry:6,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:453,name:"グレッグル",sleepType:"うとうと",specialty:"食材",berry:"カゴのみ",food1:"ピュアなオイル",food1Num:[2,5,7],food2:"マメミート",food2Num:[0,5,8],food3:"",food3Num:[],skill:"エナジーチャージS",fp:5,sec:5600,fullyEvolved:false,expType:600,foodRate:0.228,foodOtetsudaiCountDay:7.8,skillRate:0.042,skillExpectionDay:1.63,berryEnergy:32,berrySEnergyLvMaxDay:8165,foodEnergyLvMaxDay:16291,rankOfBerry:1,rankOfFood:3,rankOfSkill:4}),
new Pokemon({no:454,name:"ドクロッグ",sleepType:"うとうと",specialty:"食材",berry:"カゴのみ",food1:"ピュアなオイル",food1Num:[2,5,7],food2:"マメミート",food2Num:[0,5,8],food3:"",food3Num:[],skill:"エナジーチャージS",fp:12,sec:3400,fullyEvolved:true,expType:600,foodRate:0.229,foodOtetsudaiCountDay:12.8,skillRate:0.043,skillExpectionDay:2.28,berryEnergy:32,berrySEnergyLvMaxDay:13430,foodEnergyLvMaxDay:26951,rankOfBerry:4,rankOfFood:8,rankOfSkill:5}),
new Pokemon({no:459,name:"ユキカブリ",sleepType:"ぐっすり",specialty:"食材",berry:"チーゴのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"とくせんエッグ",food2Num:[0,4,7],food3:"あじわいキノコ",food3Num:[0,0,5],skill:"エナジーチャージS(ランダム)",fp:5,sec:5600,fullyEvolved:false,expType:600,foodRate:0.251,foodOtetsudaiCountDay:8.5,skillRate:0.044,skillExpectionDay:1.67,berryEnergy:32,berrySEnergyLvMaxDay:7921,foodEnergyLvMaxDay:16084,rankOfBerry:1,rankOfFood:2,rankOfSkill:4}),
new Pokemon({no:460,name:"ユキノオー",sleepType:"ぐっすり",specialty:"食材",berry:"チーゴのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"とくせんエッグ",food2Num:[0,4,7],food3:"あじわいキノコ",food3Num:[0,0,5],skill:"エナジーチャージS(ランダム)",fp:12,sec:3000,fullyEvolved:true,expType:600,foodRate:0.25,foodOtetsudaiCountDay:15.9,skillRate:0.044,skillExpectionDay:2.57,berryEnergy:32,berrySEnergyLvMaxDay:14806,foodEnergyLvMaxDay:29905,rankOfBerry:5,rankOfFood:9,rankOfSkill:6}),
new Pokemon({no:461,name:"マニューラ",sleepType:"うとうと",specialty:"きのみ",berry:"ウイのみ",food1:"マメミート",food1Num:[1,2,4],food2:"とくせんエッグ",food2Num:[0,2,3],food3:"ワカクサ大豆",food3Num:[0,0,4],skill:"料理チャンスS",fp:20,sec:2700,fullyEvolved:true,expType:600,foodRate:0.251,foodOtetsudaiCountDay:17.7,skillRate:0.018,skillExpectionDay:1.54,berryEnergy:31,berrySEnergyLvMaxDay:23874,foodEnergyLvMaxDay:15352,rankOfBerry:11,rankOfFood:2,rankOfSkill:3}),
new Pokemon({no:462,name:"ジバコイル",sleepType:"ぐっすり",specialty:"スキル",berry:"ベリブのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"げきからハーブ",food2Num:[0,2,3],food3:"",food3Num:[],skill:"料理パワーアップS",fp:22,sec:3100,fullyEvolved:true,expType:600,foodRate:0.179,foodOtetsudaiCountDay:11,skillRate:0.062,skillExpectionDay:3.38,berryEnergy:33,berrySEnergyLvMaxDay:16175,foodEnergyLvMaxDay:11552,rankOfBerry:6,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:468,name:"トゲキッス",sleepType:"すやすや",specialty:"スキル",berry:"モモンのみ",food1:"とくせんエッグ",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,2,4],food3:"リラックスカカオ",food3Num:[0,0,3],skill:"ゆびをふる",fp:22,sec:2600,fullyEvolved:true,expType:600,foodRate:0.158,foodOtetsudaiCountDay:11.6,skillRate:0.053,skillExpectionDay:3.44,berryEnergy:26,berrySEnergyLvMaxDay:15583,foodEnergyLvMaxDay:12158,rankOfBerry:5,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:470,name:"リーフィア",sleepType:"うとうと",specialty:"スキル",berry:"ドリのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"げんきエールS",fp:20,sec:3000,fullyEvolved:true,expType:600,foodRate:0.205,foodOtetsudaiCountDay:13,skillRate:0.069,skillExpectionDay:3.86,berryEnergy:30,berrySEnergyLvMaxDay:14714,foodEnergyLvMaxDay:10633,rankOfBerry:5,rankOfFood:1,rankOfSkill:10}),
new Pokemon({no:471,name:"グレイシア",sleepType:"ぐっすり",specialty:"スキル",berry:"チーゴのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"料理パワーアップS",fp:20,sec:3200,fullyEvolved:true,expType:600,foodRate:0.219,foodOtetsudaiCountDay:13,skillRate:0.063,skillExpectionDay:3.33,berryEnergy:32,berrySEnergyLvMaxDay:14454,foodEnergyLvMaxDay:10650,rankOfBerry:5,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:475,name:"エルレイド",sleepType:"ぐっすり",specialty:"スキル",berry:"クラボのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"ワカクサコーン",food2Num:[0,1,2],food3:"ふといながねぎ",food3Num:[0,0,2],skill:"おてつだいサポートS",fp:22,sec:2400,fullyEvolved:true,expType:600,foodRate:0.147,foodOtetsudaiCountDay:11.7,skillRate:0.054,skillExpectionDay:3.78,berryEnergy:27,berrySEnergyLvMaxDay:17760,foodEnergyLvMaxDay:9531,rankOfBerry:7,rankOfFood:1,rankOfSkill:9}),
new Pokemon({no:488,name:"クレセリア",sleepType:"すやすや",specialty:"スキル",berry:"マゴのみ",food1:"あったかジンジャー",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,2,3],food3:"あんみんトマト",food3Num:[0,0,4],skill:"みかづきのいのり(げんきオールS)",fp:30,sec:2300,fullyEvolved:true,expType:1080,foodRate:0.239,foodOtetsudaiCountDay:19.8,skillRate:0.041,skillExpectionDay:3.05,berryEnergy:26,berrySEnergyLvMaxDay:15921,foodEnergyLvMaxDay:21120,rankOfBerry:6,rankOfFood:5,rankOfSkill:7}),
new Pokemon({no:491,name:"ダークライ",sleepType:"うとうと",specialty:"オール",berry:"ウイのみ",food1:"めざましコーヒー",food1Num:[2,3,4],food2:"ワカクサ大豆",food2Num:[2,4,6],food3:"マメミート",food3Num:[2,4,6],skill:"ナイトメア(エナジーチャージM)",fp:0,sec:2900,fullyEvolved:true,expType:1320,foodRate:0.192,foodOtetsudaiCountDay:12.6,skillRate:0.023,skillExpectionDay:1.68,berryEnergy:31,berrySEnergyLvMaxDay:23978,foodEnergyLvMaxDay:19680,rankOfBerry:11,rankOfFood:4,rankOfSkill:4}),
new Pokemon({no:517,name:"ムンナ",sleepType:"すやすや",specialty:"きのみ",berry:"マゴのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"あまいミツ",food2Num:[0,2,3],food3:"めざましコーヒー",food3Num:[0,0,2],skill:"ゆめのかけらゲットS(ランダム)",fp:5,sec:5700,fullyEvolved:false,expType:600,foodRate:0.197,foodOtetsudaiCountDay:6.6,skillRate:0.043,skillExpectionDay:1.63,berryEnergy:26,berrySEnergyLvMaxDay:10168,foodEnergyLvMaxDay:5378,rankOfBerry:1,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:518,name:"ムシャーナ",sleepType:"すやすや",specialty:"きのみ",berry:"マゴのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"あまいミツ",food2Num:[0,2,3],food3:"めざましコーヒー",food3Num:[0,0,2],skill:"ゆめのかけらゲットS(ランダム)",fp:20,sec:2800,fullyEvolved:true,expType:600,foodRate:0.188,foodOtetsudaiCountDay:12.8,skillRate:0.041,skillExpectionDay:2.57,berryEnergy:26,berrySEnergyLvMaxDay:20932,foodEnergyLvMaxDay:10448,rankOfBerry:9,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:557,name:"イシズマイ",sleepType:"うとうと",specialty:"スキル",berry:"ラムのみ",food1:"つやつやアボカド",food1Num:[1,2,4],food2:"ほっこりポテト",food2Num:[0,3,5],food3:"ピュアなオイル",food3Num:[0,0,5],skill:"食材セレクトS",fp:5,sec:4300,fullyEvolved:false,expType:600,foodRate:0.175,foodOtetsudaiCountDay:7.8,skillRate:0.054,skillExpectionDay:2.27,berryEnergy:24,berrySEnergyLvMaxDay:8522,foodEnergyLvMaxDay:10779,rankOfBerry:1,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:558,name:"イワパレス",sleepType:"うとうと",specialty:"スキル",berry:"ラムのみ",food1:"つやつやアボカド",food1Num:[1,2,4],food2:"ほっこりポテト",food2Num:[0,3,5],food3:"ピュアなオイル",food3Num:[0,0,5],skill:"食材セレクトS",fp:12,sec:3200,fullyEvolved:true,expType:600,foodRate:0.239,foodOtetsudaiCountDay:14.2,skillRate:0.064,skillExpectionDay:3.38,berryEnergy:24,berrySEnergyLvMaxDay:10563,foodEnergyLvMaxDay:19781,rankOfBerry:1,rankOfFood:4,rankOfSkill:8}),
new Pokemon({no:627,name:"ワシボン",sleepType:"ぐっすり",specialty:"スキル",berry:"シーヤのみ",food1:"マメミート",food1Num:[1,2,4],food2:"ワカクサコーン",food2Num:[0,2,3],food3:"めざましコーヒー",food3Num:[0,0,2],skill:"きのみバースト",fp:5,sec:3800,fullyEvolved:false,expType:600,foodRate:0.125,foodOtetsudaiCountDay:6.3,skillRate:0.031,skillExpectionDay:1.71,berryEnergy:24,berrySEnergyLvMaxDay:10228,foodEnergyLvMaxDay:5432,rankOfBerry:1,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:628,name:"ウォーグル",sleepType:"ぐっすり",specialty:"スキル",berry:"シーヤのみ",food1:"マメミート",food1Num:[1,2,4],food2:"ワカクサコーン",food2Num:[0,2,3],food3:"めざましコーヒー",food3Num:[0,0,2],skill:"きのみバースト",fp:12,sec:2400,fullyEvolved:true,expType:600,foodRate:0.121,foodOtetsudaiCountDay:9.6,skillRate:0.035,skillExpectionDay:2.56,berryEnergy:24,berrySEnergyLvMaxDay:16268,foodEnergyLvMaxDay:8326,rankOfBerry:6,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:700,name:"ニンフィア",sleepType:"すやすや",specialty:"スキル",berry:"モモンのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"げんきオールS",fp:20,sec:2600,fullyEvolved:true,expType:600,foodRate:0.178,foodOtetsudaiCountDay:13,skillRate:0.04,skillExpectionDay:2.68,berryEnergy:26,berrySEnergyLvMaxDay:15213,foodEnergyLvMaxDay:10653,rankOfBerry:5,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:702,name:"デデンネ",sleepType:"すやすや",specialty:"スキル",berry:"ウブのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"ワカクサコーン",food3Num:[0,0,2],skill:"料理チャンスS",fp:16,sec:2500,fullyEvolved:true,expType:600,foodRate:0.177,foodOtetsudaiCountDay:13.5,skillRate:0.045,skillExpectionDay:3.07,berryEnergy:25,berrySEnergyLvMaxDay:15232,foodEnergyLvMaxDay:11017,rankOfBerry:5,rankOfFood:1,rankOfSkill:7}),
new Pokemon({no:710,name:"バケッチャ(こだま)",sleepType:"うとうと",specialty:"食材",berry:"ブリーのみ",food1:"ずっしりカボチャ",food1Num:[2,5,7],food2:"ワカクサ大豆",food2Num:[0,11,18],food3:"ほっこりポテト",food3Num:[0,0,15],skill:"エナジーチャージS",fp:5,sec:5300,fullyEvolved:false,expType:600,foodRate:0.12,foodOtetsudaiCountDay:4.3,skillRate:0.049,skillExpectionDay:1.83,berryEnergy:26,berrySEnergyLvMaxDay:7990,foodEnergyLvMaxDay:18120,rankOfBerry:1,rankOfFood:4,rankOfSkill:4}),
new Pokemon({no:710.1,name:"バケッチャ(ちゅうだま)",sleepType:"うとうと",specialty:"食材",berry:"ブリーのみ",food1:"ずっしりカボチャ",food1Num:[2,5,7],food2:"ワカクサ大豆",food2Num:[0,11,18],food3:"ほっこりポテト",food3Num:[0,0,15],skill:"エナジーチャージS",fp:5,sec:5400,fullyEvolved:false,expType:600,foodRate:0.12,foodOtetsudaiCountDay:4.2,skillRate:0.049,skillExpectionDay:1.81,berryEnergy:26,berrySEnergyLvMaxDay:7842,foodEnergyLvMaxDay:17784,rankOfBerry:1,rankOfFood:3,rankOfSkill:4}),
new Pokemon({no:710.2,name:"バケッチャ(おおだま)",sleepType:"うとうと",specialty:"食材",berry:"ブリーのみ",food1:"ずっしりカボチャ",food1Num:[2,5,7],food2:"ワカクサ大豆",food2Num:[0,11,18],food3:"ほっこりポテト",food3Num:[0,0,15],skill:"エナジーチャージS",fp:5,sec:5500,fullyEvolved:false,expType:600,foodRate:0.12,foodOtetsudaiCountDay:4.2,skillRate:0.049,skillExpectionDay:1.79,berryEnergy:26,berrySEnergyLvMaxDay:7699,foodEnergyLvMaxDay:17461,rankOfBerry:1,rankOfFood:3,rankOfSkill:4}),
new Pokemon({no:710.3,name:"バケッチャ(ギガだま)",sleepType:"うとうと",specialty:"食材",berry:"ブリーのみ",food1:"ずっしりカボチャ",food1Num:[2,5,7],food2:"ワカクサ大豆",food2Num:[0,11,18],food3:"ほっこりポテト",food3Num:[0,0,15],skill:"エナジーチャージS",fp:5,sec:5600,fullyEvolved:false,expType:600,foodRate:0.12,foodOtetsudaiCountDay:4.1,skillRate:0.049,skillExpectionDay:1.77,berryEnergy:26,berrySEnergyLvMaxDay:7562,foodEnergyLvMaxDay:17149,rankOfBerry:1,rankOfFood:3,rankOfSkill:4}),
new Pokemon({no:711,name:"パンプジン(こだま)",sleepType:"うとうと",specialty:"食材",berry:"ブリーのみ",food1:"ずっしりカボチャ",food1Num:[2,5,7],food2:"ワカクサ大豆",food2Num:[0,11,18],food3:"ほっこりポテト",food3Num:[0,0,15],skill:"エナジーチャージS",fp:20,sec:3100,fullyEvolved:true,expType:600,foodRate:0.13,foodOtetsudaiCountDay:8,skillRate:0.049,skillExpectionDay:2.74,berryEnergy:26,berrySEnergyLvMaxDay:13505,foodEnergyLvMaxDay:33560,rankOfBerry:4,rankOfFood:10,rankOfSkill:7}),
new Pokemon({no:711.1,name:"パンプジン(ちゅうだま)",sleepType:"うとうと",specialty:"食材",berry:"ブリーのみ",food1:"ずっしりカボチャ",food1Num:[2,5,7],food2:"ワカクサ大豆",food2Num:[0,11,18],food3:"ほっこりポテト",food3Num:[0,0,15],skill:"エナジーチャージS",fp:20,sec:3200,fullyEvolved:true,expType:600,foodRate:0.13,foodOtetsudaiCountDay:7.7,skillRate:0.049,skillExpectionDay:2.66,berryEnergy:26,berrySEnergyLvMaxDay:13083,foodEnergyLvMaxDay:32511,rankOfBerry:3,rankOfFood:10,rankOfSkill:6}),
new Pokemon({no:711.2,name:"パンプジン(おおだま)",sleepType:"うとうと",specialty:"食材",berry:"ブリーのみ",food1:"ずっしりカボチャ",food1Num:[2,5,7],food2:"ワカクサ大豆",food2Num:[0,11,18],food3:"ほっこりポテト",food3Num:[0,0,15],skill:"エナジーチャージS",fp:20,sec:3300,fullyEvolved:true,expType:600,foodRate:0.13,foodOtetsudaiCountDay:7.5,skillRate:0.049,skillExpectionDay:2.6,berryEnergy:26,berrySEnergyLvMaxDay:12686,foodEnergyLvMaxDay:31526,rankOfBerry:3,rankOfFood:10,rankOfSkill:6}),
new Pokemon({no:711.3,name:"パンプジン(ギガだま)",sleepType:"うとうと",specialty:"食材",berry:"ブリーのみ",food1:"ずっしりカボチャ",food1Num:[2,5,7],food2:"ワカクサ大豆",food2Num:[0,11,18],food3:"ほっこりポテト",food3Num:[0,0,15],skill:"エナジーチャージS",fp:20,sec:3400,fullyEvolved:true,expType:600,foodRate:0.13,foodOtetsudaiCountDay:7.3,skillRate:0.049,skillExpectionDay:2.53,berryEnergy:26,berrySEnergyLvMaxDay:12313,foodEnergyLvMaxDay:30599,rankOfBerry:3,rankOfFood:9,rankOfSkill:6}),
new Pokemon({no:714,name:"オンバット",sleepType:"うとうと",specialty:"スキル",berry:"ヤチェのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"ふといながねぎ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"エナジーチャージM",fp:5,sec:5100,fullyEvolved:false,expType:600,foodRate:0.198,foodOtetsudaiCountDay:7.4,skillRate:0.048,skillExpectionDay:1.85,berryEnergy:35,berrySEnergyLvMaxDay:10186,foodEnergyLvMaxDay:6041,rankOfBerry:1,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:715,name:"オンバーン",sleepType:"うとうと",specialty:"スキル",berry:"ヤチェのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"ふといながねぎ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"エナジーチャージM",fp:12,sec:2700,fullyEvolved:true,expType:600,foodRate:0.195,foodOtetsudaiCountDay:13.8,skillRate:0.048,skillExpectionDay:3.04,berryEnergy:35,berrySEnergyLvMaxDay:19313,foodEnergyLvMaxDay:11239,rankOfBerry:8,rankOfFood:1,rankOfSkill:7}),
new Pokemon({no:736,name:"アゴジムシ",sleepType:"うとうと",specialty:"食材",berry:"ラムのみ",food1:"めざましコーヒー",food1Num:[2,5,7],food2:"あじわいキノコ",food2Num:[0,4,7],food3:"あまいミツ",food3Num:[0,0,11],skill:"エナジーチャージS",fp:5,sec:4600,fullyEvolved:false,expType:600,foodRate:0.155,foodOtetsudaiCountDay:6.4,skillRate:0.029,skillExpectionDay:1.51,berryEnergy:24,berrySEnergyLvMaxDay:8159,foodEnergyLvMaxDay:15645,rankOfBerry:1,rankOfFood:2,rankOfSkill:3}),
new Pokemon({no:737,name:"デンヂムシ",sleepType:"うとうと",specialty:"食材",berry:"ラムのみ",food1:"めざましコーヒー",food1Num:[2,5,7],food2:"あじわいキノコ",food2Num:[0,4,7],food3:"あまいミツ",food3Num:[0,0,11],skill:"エナジーチャージS",fp:12,sec:3300,fullyEvolved:false,expType:600,foodRate:0.154,foodOtetsudaiCountDay:8.9,skillRate:0.028,skillExpectionDay:1.74,berryEnergy:24,berrySEnergyLvMaxDay:11387,foodEnergyLvMaxDay:21667,rankOfBerry:2,rankOfFood:5,rankOfSkill:4}),
new Pokemon({no:738,name:"クワガノン",sleepType:"うとうと",specialty:"食材",berry:"ラムのみ",food1:"めざましコーヒー",food1Num:[2,5,7],food2:"あじわいキノコ",food2Num:[0,4,7],food3:"あまいミツ",food3Num:[0,0,11],skill:"エナジーチャージS",fp:20,sec:2800,fullyEvolved:true,expType:600,foodRate:0.194,foodOtetsudaiCountDay:13.2,skillRate:0.051,skillExpectionDay:3.1,berryEnergy:24,berrySEnergyLvMaxDay:12786,foodEnergyLvMaxDay:32169,rankOfBerry:3,rankOfFood:10,rankOfSkill:8}),
new Pokemon({no:742,name:"アブリー",sleepType:"すやすや",specialty:"食材",berry:"モモンのみ",food1:"あまいミツ",food1Num:[2,5,7],food2:"ピュアなオイル",food2Num:[0,4,6],food3:"ワカクサコーン",food3Num:[0,0,5],skill:"食材セレクトS",fp:5,sec:4500,fullyEvolved:false,expType:600,foodRate:0.199,foodOtetsudaiCountDay:8.4,skillRate:0.019,skillExpectionDay:1.33,berryEnergy:26,berrySEnergyLvMaxDay:8565,foodEnergyLvMaxDay:14606,rankOfBerry:1,rankOfFood:2,rankOfSkill:3}),
new Pokemon({no:743,name:"アブリボン",sleepType:"すやすや",specialty:"食材",berry:"モモンのみ",food1:"あまいミツ",food1Num:[2,5,7],food2:"ピュアなオイル",food2Num:[0,4,6],food3:"ワカクサコーン",food3Num:[0,0,5],skill:"食材セレクトS",fp:12,sec:2300,fullyEvolved:true,expType:600,foodRate:0.194,foodOtetsudaiCountDay:16.1,skillRate:0.025,skillExpectionDay:2.04,berryEnergy:26,berrySEnergyLvMaxDay:16863,foodEnergyLvMaxDay:27858,rankOfBerry:6,rankOfFood:8,rankOfSkill:5}),
new Pokemon({no:759,name:"ヌイコグマ",sleepType:"ぐっすり",specialty:"食材",berry:"クラボのみ",food1:"ワカクサコーン",food1Num:[2,5,7],food2:"マメミート",food2Num:[0,6,10],food3:"とくせんエッグ",food3Num:[0,0,9],skill:"エナジーチャージS(ランダム)",fp:5,sec:4100,fullyEvolved:false,expType:600,foodRate:0.225,foodOtetsudaiCountDay:10.5,skillRate:0.011,skillExpectionDay:1.23,berryEnergy:27,berrySEnergyLvMaxDay:9446,foodEnergyLvMaxDay:22656,rankOfBerry:1,rankOfFood:6,rankOfSkill:3}),
new Pokemon({no:760,name:"キテルグマ",sleepType:"ぐっすり",specialty:"食材",berry:"クラボのみ",food1:"ワカクサコーン",food1Num:[2,5,7],food2:"マメミート",food2Num:[0,6,10],food3:"とくせんエッグ",food3Num:[0,0,9],skill:"エナジーチャージS(ランダム)",fp:12,sec:2800,fullyEvolved:true,expType:600,foodRate:0.229,foodOtetsudaiCountDay:15.6,skillRate:0.013,skillExpectionDay:1.36,berryEnergy:27,berrySEnergyLvMaxDay:13760,foodEnergyLvMaxDay:33765,rankOfBerry:4,rankOfFood:11,rankOfSkill:3}),
new Pokemon({no:764,name:"キュワワー",sleepType:"すやすや",specialty:"食材",berry:"モモンのみ",food1:"ワカクサコーン",food1Num:[2,5,7],food2:"あったかジンジャー",food2Num:[0,6,9],food3:"リラックスカカオ",food3Num:[0,0,7],skill:"げんきエールS",fp:16,sec:2500,fullyEvolved:true,expType:600,foodRate:0.167,foodOtetsudaiCountDay:12.7,skillRate:0.035,skillExpectionDay:2.47,berryEnergy:26,berrySEnergyLvMaxDay:16034,foodEnergyLvMaxDay:26729,rankOfBerry:6,rankOfFood:8,rankOfSkill:6}),
new Pokemon({no:777,name:"トゲデマル",sleepType:"ぐっすり",specialty:"スキル",berry:"ベリブのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"つやつやアボカド",food2Num:[0,1,2],food3:"リラックスカカオ",food3Num:[0,0,2],skill:"ほっぺすりすり(げんきエールS)",fp:16,sec:2700,fullyEvolved:true,expType:600,foodRate:0.169,foodOtetsudaiCountDay:11.9,skillRate:0.054,skillExpectionDay:3.38,berryEnergy:33,berrySEnergyLvMaxDay:18798,foodEnergyLvMaxDay:9740,rankOfBerry:8,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:778,name:"ミミッキュ",sleepType:"うとうと",specialty:"スキル",berry:"ブリーのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"めざましコーヒー",food2Num:[0,1,2],food3:"あじわいキノコ",food3Num:[0,0,2],skill:"ばけのかわ(きのみバースト)",fp:16,sec:2500,fullyEvolved:true,expType:600,foodRate:0.153,foodOtetsudaiCountDay:11.7,skillRate:0.035,skillExpectionDay:2.47,berryEnergy:26,berrySEnergyLvMaxDay:16303,foodEnergyLvMaxDay:9523,rankOfBerry:6,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:845,name:"ウッウ",sleepType:"ぐっすり",specialty:"食材",berry:"シーヤのみ",food1:"ピュアなオイル",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,7],food3:"とくせんエッグ",food3Num:[0,0,8],skill:"料理チャンスS",fp:16,sec:2700,fullyEvolved:true,expType:600,foodRate:0.165,foodOtetsudaiCountDay:11.6,skillRate:0.039,skillExpectionDay:2.54,berryEnergy:24,berrySEnergyLvMaxDay:13737,foodEnergyLvMaxDay:24453,rankOfBerry:4,rankOfFood:7,rankOfSkill:6}),
new Pokemon({no:848,name:"エレズン",sleepType:"ぐっすり",specialty:"スキル",berry:"カゴのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"とくせんリンゴ",food2Num:[0,2,4],food3:"ふといながねぎ",food3Num:[0,0,2],skill:"食材ゲットS",fp:5,sec:5600,fullyEvolved:false,expType:600,foodRate:0.209,foodOtetsudaiCountDay:7.1,skillRate:0.048,skillExpectionDay:1.75,berryEnergy:32,berrySEnergyLvMaxDay:8365,foodEnergyLvMaxDay:5808,rankOfBerry:1,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:849.1,name:"ストリンダー(ハイ)",sleepType:"うとうと",specialty:"スキル",berry:"カゴのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"とくせんリンゴ",food2Num:[0,2,4],food3:"ふといながねぎ",food3Num:[0,0,2],skill:"プラス(食材ゲットS)",fp:20,sec:3100,fullyEvolved:true,expType:600,foodRate:0.239,foodOtetsudaiCountDay:14.7,skillRate:0.064,skillExpectionDay:3.48,berryEnergy:32,berrySEnergyLvMaxDay:14539,foodEnergyLvMaxDay:11997,rankOfBerry:5,rankOfFood:1,rankOfSkill:9}),
new Pokemon({no:849.2,name:"ストリンダー(ロー)",sleepType:"うとうと",specialty:"スキル",berry:"カゴのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"とくせんリンゴ",food2Num:[0,2,4],food3:"ふといながねぎ",food3Num:[0,0,2],skill:"マイナス(料理パワーアップS)",fp:20,sec:3100,fullyEvolved:true,expType:600,foodRate:0.239,foodOtetsudaiCountDay:14.7,skillRate:0.064,skillExpectionDay:3.48,berryEnergy:32,berrySEnergyLvMaxDay:14539,foodEnergyLvMaxDay:11997,rankOfBerry:5,rankOfFood:1,rankOfSkill:9}),
new Pokemon({no:906,name:"ニャオハ",sleepType:"うとうと",specialty:"食材",berry:"ドリのみ",food1:"ほっこりポテト",food1Num:[2,5,7],food2:"モーモーミルク",food2Num:[0,6,9],food3:"あったかジンジャー",food3Num:[0,0,8],skill:"料理パワーアップS",fp:5,sec:4600,fullyEvolved:false,expType:600,foodRate:0.208,foodOtetsudaiCountDay:8.6,skillRate:0.023,skillExpectionDay:1.39,berryEnergy:30,berrySEnergyLvMaxDay:9560,foodEnergyLvMaxDay:18093,rankOfBerry:1,rankOfFood:4,rankOfSkill:3}),
new Pokemon({no:907,name:"ニャローテ",sleepType:"うとうと",specialty:"食材",berry:"ドリのみ",food1:"ほっこりポテト",food1Num:[2,5,7],food2:"モーモーミルク",food2Num:[0,6,9],food3:"あったかジンジャー",food3Num:[0,0,8],skill:"料理パワーアップS",fp:12,sec:3500,fullyEvolved:false,expType:600,foodRate:0.209,foodOtetsudaiCountDay:11.4,skillRate:0.023,skillExpectionDay:1.53,berryEnergy:30,berrySEnergyLvMaxDay:12548,foodEnergyLvMaxDay:23894,rankOfBerry:3,rankOfFood:6,rankOfSkill:3}),
new Pokemon({no:908,name:"マスカーニャ",sleepType:"うとうと",specialty:"食材",berry:"ウイのみ",food1:"ほっこりポテト",food1Num:[2,5,7],food2:"モーモーミルク",food2Num:[0,6,9],food3:"あったかジンジャー",food3Num:[0,0,8],skill:"料理パワーアップS",fp:20,sec:2600,fullyEvolved:true,expType:600,foodRate:0.19,foodOtetsudaiCountDay:13.9,skillRate:0.022,skillExpectionDay:1.74,berryEnergy:31,berrySEnergyLvMaxDay:17874,foodEnergyLvMaxDay:29241,rankOfBerry:7,rankOfFood:9,rankOfSkill:4}),
new Pokemon({no:909,name:"ホゲータ",sleepType:"すやすや",specialty:"食材",berry:"ヒメリのみ",food1:"とくせんリンゴ",food1Num:[2,5,7],food2:"マメミート",food2Num:[0,4,6],food3:"げきからハーブ",food3Num:[0,0,5],skill:"げんきチャージS",fp:5,sec:4200,fullyEvolved:false,expType:600,foodRate:0.254,foodOtetsudaiCountDay:11.5,skillRate:0.053,skillExpectionDay:2.27,berryEnergy:27,berrySEnergyLvMaxDay:8876,foodEnergyLvMaxDay:18821,rankOfBerry:1,rankOfFood:4,rankOfSkill:5}),
new Pokemon({no:910,name:"アチゲータ",sleepType:"すやすや",specialty:"食材",berry:"ヒメリのみ",food1:"とくせんリンゴ",food1Num:[2,5,7],food2:"マメミート",food2Num:[0,4,6],food3:"げきからハーブ",food3Num:[0,0,5],skill:"げんきチャージS",fp:12,sec:3100,fullyEvolved:false,expType:600,foodRate:0.247,foodOtetsudaiCountDay:15.2,skillRate:0.05,skillExpectionDay:2.79,berryEnergy:27,berrySEnergyLvMaxDay:12138,foodEnergyLvMaxDay:24797,rankOfBerry:3,rankOfFood:7,rankOfSkill:7}),
new Pokemon({no:911,name:"ラウドボーン",sleepType:"うとうと",specialty:"食材",berry:"ブリーのみ",food1:"とくせんリンゴ",food1Num:[2,5,7],food2:"マメミート",food2Num:[0,4,6],food3:"げきからハーブ",food3Num:[0,0,5],skill:"げんきチャージS",fp:20,sec:2700,fullyEvolved:true,expType:600,foodRate:0.268,foodOtetsudaiCountDay:18.9,skillRate:0.062,skillExpectionDay:3.85,berryEnergy:26,berrySEnergyLvMaxDay:13046,foodEnergyLvMaxDay:30892,rankOfBerry:3,rankOfFood:9,rankOfSkill:10}),
new Pokemon({no:912,name:"クワッス",sleepType:"ぐっすり",specialty:"食材",berry:"オレンのみ",food1:"ワカクサ大豆",food1Num:[2,5,7],food2:"ふといながねぎ",food2Num:[0,2,4],food3:"ピュアなオイル",food3Num:[0,0,6],skill:"エナジーチャージM",fp:5,sec:4800,fullyEvolved:false,expType:600,foodRate:0.261,foodOtetsudaiCountDay:10.4,skillRate:0.028,skillExpectionDay:1.46,berryEnergy:31,berrySEnergyLvMaxDay:8833,foodEnergyLvMaxDay:16923,rankOfBerry:1,rankOfFood:3,rankOfSkill:3}),
new Pokemon({no:913,name:"ウェルカモ",sleepType:"ぐっすり",specialty:"食材",berry:"オレンのみ",food1:"ワカクサ大豆",food1Num:[2,5,7],food2:"ふといながねぎ",food2Num:[0,2,4],food3:"ピュアなオイル",food3Num:[0,0,6],skill:"エナジーチャージM",fp:12,sec:3600,fullyEvolved:false,expType:600,foodRate:0.259,foodOtetsudaiCountDay:13.7,skillRate:0.027,skillExpectionDay:1.63,berryEnergy:31,berrySEnergyLvMaxDay:11809,foodEnergyLvMaxDay:22391,rankOfBerry:2,rankOfFood:6,rankOfSkill:4}),
new Pokemon({no:914,name:"ウェーニバル",sleepType:"ぐっすり",specialty:"食材",berry:"クラボのみ",food1:"ワカクサ大豆",food1Num:[2,5,7],food2:"ふといながねぎ",food2Num:[0,2,4],food3:"ピュアなオイル",food3Num:[0,0,6],skill:"エナジーチャージM",fp:20,sec:2600,fullyEvolved:true,expType:600,foodRate:0.232,foodOtetsudaiCountDay:17,skillRate:0.024,skillExpectionDay:1.83,berryEnergy:27,berrySEnergyLvMaxDay:14761,foodEnergyLvMaxDay:27770,rankOfBerry:5,rankOfFood:8,rankOfSkill:4}),
new Pokemon({no:921,name:"パモ",sleepType:"すやすや",specialty:"スキル",berry:"ウブのみ",food1:"リラックスカカオ",food1Num:[1,2,4],food2:"モーモーミルク",food2Num:[0,3,6],food3:"とくせんエッグ",food3Num:[0,0,5],skill:"げんきオールS",fp:5,sec:4600,fullyEvolved:false,expType:600,foodRate:0.111,foodOtetsudaiCountDay:4.6,skillRate:0.036,skillExpectionDay:1.67,berryEnergy:25,berrySEnergyLvMaxDay:8942,foodEnergyLvMaxDay:6115,rankOfBerry:1,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:922,name:"パモット",sleepType:"すやすや",specialty:"スキル",berry:"ウブのみ",food1:"リラックスカカオ",food1Num:[1,2,4],food2:"モーモーミルク",food2Num:[0,3,6],food3:"とくせんエッグ",food3Num:[0,0,5],skill:"げんきオールS",fp:12,sec:3300,fullyEvolved:false,expType:600,foodRate:0.109,foodOtetsudaiCountDay:6.3,skillRate:0.036,skillExpectionDay:2.04,berryEnergy:25,berrySEnergyLvMaxDay:12493,foodEnergyLvMaxDay:8371,rankOfBerry:3,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:923,name:"パーモット",sleepType:"すやすや",specialty:"スキル",berry:"ウブのみ",food1:"リラックスカカオ",food1Num:[1,2,4],food2:"モーモーミルク",food2Num:[0,3,6],food3:"とくせんエッグ",food3Num:[0,0,5],skill:"げんきオールS",fp:22,sec:2400,fullyEvolved:true,expType:600,foodRate:0.141,foodOtetsudaiCountDay:11.2,skillRate:0.039,skillExpectionDay:2.8,berryEnergy:25,berrySEnergyLvMaxDay:16560,foodEnergyLvMaxDay:14889,rankOfBerry:6,rankOfFood:2,rankOfSkill:7}),
new Pokemon({no:974,name:"アルクジラ",sleepType:"ぐっすり",specialty:"食材",berry:"チーゴのみ",food1:"ほっこりポテト",food1Num:[2,5,7],food2:"マメミート",food2Num:[0,5,9],food3:"ずっしりカボチャ",food3Num:[0,0,4],skill:"げんきチャージS",fp:5,sec:5100,fullyEvolved:false,expType:600,foodRate:0.223,foodOtetsudaiCountDay:8.3,skillRate:0.042,skillExpectionDay:1.71,berryEnergy:32,berrySEnergyLvMaxDay:9023,foodEnergyLvMaxDay:17496,rankOfBerry:1,rankOfFood:3,rankOfSkill:4}),
new Pokemon({no:975,name:"ハルクジラ",sleepType:"ぐっすり",specialty:"食材",berry:"チーゴのみ",food1:"ほっこりポテト",food1Num:[2,5,7],food2:"マメミート",food2Num:[0,5,9],food3:"ずっしりカボチャ",food3Num:[0,0,4],skill:"げんきチャージS",fp:20,sec:2800,fullyEvolved:true,expType:600,foodRate:0.209,foodOtetsudaiCountDay:14.2,skillRate:0.042,skillExpectionDay:2.62,berryEnergy:32,berrySEnergyLvMaxDay:16731,foodEnergyLvMaxDay:29868,rankOfBerry:6,rankOfFood:9,rankOfSkill:6}),
new Pokemon({no:980,name:"ドオー",sleepType:"うとうと",specialty:"食材",berry:"カゴのみ",food1:"リラックスカカオ",food1Num:[2,5,7],food2:"めざましコーヒー",food2Num:[0,4,7],food3:"ほっこりポテト",food3Num:[0,0,9],skill:"げんきチャージS",fp:12,sec:3500,fullyEvolved:true,expType:600,foodRate:0.208,foodOtetsudaiCountDay:11.3,skillRate:0.055,skillExpectionDay:2.72,berryEnergy:32,berrySEnergyLvMaxDay:13402,foodEnergyLvMaxDay:30121,rankOfBerry:4,rankOfFood:9,rankOfSkill:7}),











            
            //コピーする前に全部のポケモンがいるか確認！！(現在の最後はドオー)

        
        ];
        
        this.fullyEvolvedPokemons = this.pokemons.filter(p => p.fullyEvolved);
        
        this.berries =
        [
            {no: 1, name: "キーのみ", power: 28},
            {no: 2, name: "ヒメリのみ", power: 27},
            {no: 3, name: "オレンのみ", power: 31},
            {no: 4, name: "ウブのみ", power: 25},
            {no: 5, name: "ドリのみ", power: 30},
            {no: 6, name: "チーゴのみ", power: 32},
            {no: 7, name: "クラボのみ", power: 27},
            {no: 8, name: "カゴのみ", power: 32},
            {no: 9, name: "フィラのみ", power: 29},
            {no: 10, name: "シーヤのみ", power: 24},
            {no: 11, name: "マゴのみ", power: 26},
            {no: 12, name: "ラムのみ", power: 24},
            {no: 13, name: "オボンのみ", power: 30},
            {no: 14, name: "ブリーのみ", power: 26},
            {no: 15, name: "ヤチェのみ", power: 35},
            {no: 16, name: "ウイのみ", power: 31},
            {no: 17, name: "ベリブのみ", power: 33},
            {no: 18, name: "モモンのみ", power: 26}
        ];

        //foodDBシートにもあるので値を変えたときはそちらも変えること
        this.foodPowerKariMap = {
            "おいしいシッポ" : 1500,
            "ずっしりカボチャ" : 900,
            "ふといながねぎ" : 700,
            "あじわいキノコ" : 570,
            "リラックスカカオ" : 570,            
            "つやつやアボカド" : 570,
            "めざましコーヒー" : 520,
            "ピュアなオイル" : 450,
            "ワカクサコーン" : 450,
            "げきからハーブ" : 450,
            "ほっこりポテト" : 450,            
            "とくせんエッグ" : 450
        };

        this.berryList = this.berries;
        this.skillList = Array.from((new Set(this.pokemons.map(p => p.skill)))).sort();
        this.foodList = Array.from((new Set(this.pokemons.map(p => [p.food1, p.food2, p.food3]).flat()))).filter(f => f != "").sort();//本当はこんなのよくないよね・・・
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
        let targ = s in this.dakutenMap ? this.dakutenMap[s] : s;
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

    getBerryPowerDayWithNoAdjust(poke, lv){
        let ote = poke.getOtetsudaiCountDay(lv);
        let berryOte = ote * (1 - poke.foodRate);
        let berryNum = poke.getBerryNum(true);
        let berryPow = this.getBerryPowerOf(poke.berry, lv);
        
        return Math.round(berryNum * berryPow * berryOte);

    }
    

    getBerryPowerBaseOf(name){
        for (let i = 0; i < this.berries.length; i++){
            if (this.berries[i].name == name) return this.berries[i].power;
        }
        return -1;
    }

    getBerryPowerOf(berryName, lv){
        let powerBase = this.getBerryPowerBaseOf(berryName);
        if (powerBase == -1) return -1;
        return Math.max(powerBase + (lv - 1), powerBase * Math.pow(1.025, lv - 1));
    }

    getFoodPowerKariOf(poke, foodCode, ABCIndex, powerNotFound){
        let food = poke.getFoodByCode(foodCode);
        
        let foodPow = this.foodPowerKariMap[food] ?? powerNotFound;
        let foodCount = (foodCode == "A") ? poke.food1Num[ABCIndex]
                      : (foodCode == "B") ? poke.food2Num[ABCIndex]
                      : (foodCode == "C") ? poke.food3Num[ABCIndex]
                      : poke.food1Num[ABCIndex];
        return foodPow * foodCount;              
    }
}


class Pokemon{
    constructor(json){
        Object.assign(this, json);
        this.indicatorChar = "|";
        this.isBerrySpecialty = (this.specialty == "きのみ" || this.specialty == "オール");
        this.isFoodSpecialty = (this.specialty == "食材" || this.specialty == "オール");
        this.isSkillSpecialty = (this.specialty == "スキル" || this.specialty == "オール");
    }

    getFoodByCode(code){
        return  (code == "A") ? this.food1
              : (code == "B") ? this.food2
              : (code == "C") ? this.food3
              : this.food1;
    }

    setFoodCombinations(){
        this.foodCombinations = [];
        let code = "A";

        for (let ib = 0; ib < 2; ib++){         //2つ目の食材はAかB
            code = 'A' + String.fromCharCode(65 + ib);
            this.foodCombinations.push(this.createFoodCombination(null, 30, code));
            for (let ic = 0; ic < 3; ic++){      //3つ目の食材はAかBかC なお、Cがない場合もある
                if (this.food3 == "" && ic == 2) continue;
                this.foodCombinations.push(this.createFoodCombination(null, 60, code + String.fromCharCode(65 + ic)));
            }
        }
    }


    createFoodCombination(json = null, lv = -1, code = null){   //json=nullは無補正の一覧表示の時を想定。 lvとcodeは上書きできるように
        if (json == null){
            json = {};
            json.charAdjusts = {speed: 0, food:0};
            json.subAdjusts  = {speed: 0, food:0};
        }                
        lv = (lv != -1) ? lv : json.lv; //lvの入力がなかったらjsonの情報を見る
        code = code ?? json.foodCode;   //foodCodeの入力がなかったらjsonの情報を見る
        return new FoodCombination(this, lv, this.getOtetsudaiCountDay(lv, json.charAdjusts.speed, json.subAdjusts.speed), code, json.charAdjusts.food + json.subAdjusts.food);
    }


    existAnyInFoodList(foods){
        return (foods.includes(this.food1) || foods.includes(this.food2) || (this.food3 == "" ? false : foods.includes(this.food3)) );
    }

    getAllFoodNames(){
        let tmp = [this.food1];
        if (this.food2 != "") tmp.push(this.food2)
        if (this.food3 != "") tmp.push(this.food3)
        return tmp;
    }


    getIndicatorBarOf(num){
        num = (num < 0) ? 0 : num;
        let left = (num >= 10) ? "" + num + " " : "<font color='white'>_</font>" + num + " ";
        return left + this.indicatorChar.repeat(num);
    }

    getOtetsudaiCountDay(lv, spdAdj = 0.0, subAdj = 0.0, genkiAdj = 0.52, foodCountMode = false){//speedAdjはプラスのほうが○
        let lvAdj  = 1 - ((lv - 1) * 0.002);
        spdAdj = 1 / (1 + spdAdj);
        subAdj = 1 / (1 + subAdj);

        let adjSec = this.sec * lvAdj * spdAdj * subAdj;
        let oteCount = 86400 / (adjSec * genkiAdj)
        return (foodCountMode) ? oteCount * this.foodRate : oteCount;
    }

    getBerryNum(subBerryS = false){
        return (this.isBerrySpecialty ? 2 : 1) + (subBerryS ? 1 : 0);
    }
}


class FoodCombination{
    constructor(poke, lv, otetudaiCount, code, foodRateAdjust = 0){
        this.code = code;
        this.lv = lv;
        this.foods = [];
        let codeForCalc = (lv < 30) ? code.substring(0, 1)
                         : (lv < 60) ? code.substring(0, 2) : code; //lvが60未満の時は3つ目の食材は取れない
        let foodName = -1;
        let foodNum = -1;
        let foodExpection = -1;
        let otetudaiPerItem = otetudaiCount / codeForCalc.length;        

        for (let i = 0; i < codeForCalc.length; i++){
            if (i == 2 && lv < 60) continue;
            if (codeForCalc[i] == "A") {
                foodName = poke.food1;
                foodNum = poke.food1Num[i];
            } else if (codeForCalc[i] == "B") {
                foodName = poke.food2;
                foodNum = poke.food2Num[i];
            } else if (codeForCalc[i] == "C") {
                foodName = poke.food3;
                foodNum = poke.food3Num[i];
            } else {
                continue;
            }
            
            foodExpection = foodNum * otetudaiPerItem * (poke.foodRate * (1 + foodRateAdjust))

            let f = this.foods.find(x => x.name == foodName);
            if (f === undefined){
                this.foods.push({name: foodName, expection: foodExpection});
            }
            else{
                f.expection += foodExpection;
            }
        }
        for (let i = 0; i < this.foods.length; i++){
            this.foods[i].expection = Math.round(this.foods[i].expection);
        }
    }

    containsFoodsAtLeast(foodNames, min = 0){
        return this.getExpectionOf(foodNames) >= min;
    }

    getExpectionOf(foodNames){
        this.totalExpectionFinally = this.foods.filter(f => foodNames.includes(f.name)).map(f => f.expection).reduce((p, c) => p + c, 0);
        return this.totalExpectionFinally;
    }

}











