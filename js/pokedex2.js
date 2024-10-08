class Pokedex{
    constructor(pokemons){
        this.pokemons =
        [


            new Pokemon({no:1,name:"フシギダネ",sleepType:"うとうと",specialty:"食材",berry:"ドリのみ",food1:"あまいミツ",food1Num:[2,5,7],food2:"あんみんトマト",food2Num:[0,4,7],food3:"ほっこりポテト",food3Num:[0,0,6],skill:"食材ゲットS",fp:5,sec:4400,fullyEvolved:false,foodRate:0.257,skillRate:0.019,skillExpectionDay:0.72,berryEnergy:30,berryEnergyLv30Day:2457,berryEnergyLv60Day:5446,berrySEnergyLv30Day:4914,berrySEnergyLv60Day:10892,rankOfBerry:2,rankOfFood:5,rankOfSkill:2}),
new Pokemon({no:2,name:"フシギソウ",sleepType:"うとうと",specialty:"食材",berry:"ドリのみ",food1:"あまいミツ",food1Num:[2,5,7],food2:"あんみんトマト",food2Num:[0,4,7],food3:"ほっこりポテト",food3Num:[0,0,6],skill:"食材ゲットS",fp:12,sec:3300,fullyEvolved:false,foodRate:0.255,skillRate:0.019,skillExpectionDay:0.96,berryEnergy:30,berryEnergyLv30Day:3277,berryEnergyLv60Day:7262,berrySEnergyLv30Day:6554,berrySEnergyLv60Day:14524,rankOfBerry:4,rankOfFood:7,rankOfSkill:2}),
new Pokemon({no:3,name:"フシギバナ",sleepType:"うとうと",specialty:"食材",berry:"ドリのみ",food1:"あまいミツ",food1Num:[2,5,7],food2:"あんみんトマト",food2Num:[0,4,7],food3:"ほっこりポテト",food3Num:[0,0,6],skill:"食材ゲットS",fp:20,sec:2800,fullyEvolved:true,foodRate:0.266,skillRate:0.021,skillExpectionDay:1.25,berryEnergy:30,berryEnergyLv30Day:3862,berryEnergyLv60Day:8559,berrySEnergyLv30Day:7724,berrySEnergyLv60Day:17118,rankOfBerry:5,rankOfFood:9,rankOfSkill:3}),
new Pokemon({no:4,name:"ヒトカゲ",sleepType:"すやすや",specialty:"食材",berry:"ヒメリのみ",food1:"マメミート",food1Num:[2,5,7],food2:"あったかジンジャー",food2Num:[0,4,7],food3:"げきからハーブ",food3Num:[0,0,6],skill:"食材ゲットS",fp:5,sec:3500,fullyEvolved:false,foodRate:0.201,skillRate:0.011,skillExpectionDay:0.52,berryEnergy:27,berryEnergyLv30Day:2818,berryEnergyLv60Day:6162,berrySEnergyLv30Day:5636,berrySEnergyLv60Day:12324,rankOfBerry:2,rankOfFood:5,rankOfSkill:2}),
new Pokemon({no:5,name:"リザード",sleepType:"すやすや",specialty:"食材",berry:"ヒメリのみ",food1:"マメミート",food1Num:[2,5,7],food2:"あったかジンジャー",food2Num:[0,4,7],food3:"げきからハーブ",food3Num:[0,0,6],skill:"食材ゲットS",fp:12,sec:3000,fullyEvolved:false,foodRate:0.227,skillRate:0.016,skillExpectionDay:0.89,berryEnergy:27,berryEnergyLv30Day:3288,berryEnergyLv60Day:7189,berrySEnergyLv30Day:6576,berrySEnergyLv60Day:14378,rankOfBerry:3,rankOfFood:7,rankOfSkill:2}),
new Pokemon({no:6,name:"リザードン",sleepType:"すやすや",specialty:"食材",berry:"ヒメリのみ",food1:"マメミート",food1Num:[2,5,7],food2:"あったかジンジャー",food2Num:[0,4,7],food3:"げきからハーブ",food3Num:[0,0,6],skill:"食材ゲットS",fp:20,sec:2400,fullyEvolved:true,foodRate:0.224,skillRate:0.016,skillExpectionDay:1.11,berryEnergy:27,berryEnergyLv30Day:4110,berryEnergyLv60Day:8986,berrySEnergyLv30Day:8220,berrySEnergyLv60Day:17972,rankOfBerry:5,rankOfFood:9,rankOfSkill:3}),
new Pokemon({no:7,name:"ゼニガメ",sleepType:"ぐっすり",specialty:"食材",berry:"オレンのみ",food1:"モーモーミルク",food1Num:[2,5,7],food2:"リラックスカカオ",food2Num:[0,3,5],food3:"マメミート",food3Num:[0,0,7],skill:"食材ゲットS",fp:5,sec:4500,fullyEvolved:false,foodRate:0.271,skillRate:0.02,skillExpectionDay:0.74,berryEnergy:31,berryEnergyLv30Day:2483,berryEnergyLv60Day:5503,berrySEnergyLv30Day:4966,berrySEnergyLv60Day:11006,rankOfBerry:2,rankOfFood:5,rankOfSkill:2}),
new Pokemon({no:8,name:"カメール",sleepType:"ぐっすり",specialty:"食材",berry:"オレンのみ",food1:"モーモーミルク",food1Num:[2,5,7],food2:"リラックスカカオ",food2Num:[0,3,5],food3:"マメミート",food3Num:[0,0,7],skill:"食材ゲットS",fp:12,sec:3400,fullyEvolved:false,foodRate:0.271,skillRate:0.02,skillExpectionDay:0.98,berryEnergy:31,berryEnergyLv30Day:3286,berryEnergyLv60Day:7283,berrySEnergyLv30Day:6572,berrySEnergyLv60Day:14566,rankOfBerry:4,rankOfFood:7,rankOfSkill:2}),
new Pokemon({no:9,name:"カメックス",sleepType:"ぐっすり",specialty:"食材",berry:"オレンのみ",food1:"モーモーミルク",food1Num:[2,5,7],food2:"リラックスカカオ",food2Num:[0,3,5],food3:"マメミート",food3Num:[0,0,7],skill:"食材ゲットS",fp:20,sec:2800,fullyEvolved:true,foodRate:0.275,skillRate:0.021,skillExpectionDay:1.25,berryEnergy:31,berryEnergyLv30Day:3990,berryEnergyLv60Day:8844,berrySEnergyLv30Day:7980,berrySEnergyLv60Day:17688,rankOfBerry:5,rankOfFood:10,rankOfSkill:3}),
new Pokemon({no:10,name:"キャタピー",sleepType:"うとうと",specialty:"きのみ",berry:"ラムのみ",food1:"あまいミツ",food1Num:[1,2,4],food2:"あんみんトマト",food2Num:[0,2,3],food3:"ワカクサ大豆",food3Num:[0,0,4],skill:"食材ゲットS",fp:5,sec:4400,fullyEvolved:false,foodRate:0.179,skillRate:0.008,skillExpectionDay:0.3,berryEnergy:24,berryEnergyLv30Day:4243,berryEnergyLv60Day:4357,berrySEnergyLv30Day:6365,berrySEnergyLv60Day:6536,rankOfBerry:3,rankOfFood:1,rankOfSkill:1}),
new Pokemon({no:11,name:"トランセル",sleepType:"うとうと",specialty:"きのみ",berry:"ラムのみ",food1:"あまいミツ",food1Num:[1,2,4],food2:"あんみんトマト",food2Num:[0,2,3],food3:"ワカクサ大豆",food3Num:[0,0,4],skill:"食材ゲットS",fp:7,sec:4200,fullyEvolved:false,foodRate:0.208,skillRate:0.018,skillExpectionDay:0.71,berryEnergy:24,berryEnergyLv30Day:4445,berryEnergyLv60Day:4565,berrySEnergyLv30Day:6668,berrySEnergyLv60Day:6848,rankOfBerry:3,rankOfFood:1,rankOfSkill:2}),
new Pokemon({no:12,name:"バタフリー",sleepType:"うとうと",specialty:"きのみ",berry:"ラムのみ",food1:"あまいミツ",food1Num:[1,2,4],food2:"あんみんトマト",food2Num:[0,2,3],food3:"ワカクサ大豆",food3Num:[0,0,4],skill:"食材ゲットS",fp:15,sec:2600,fullyEvolved:true,foodRate:0.197,skillRate:0.014,skillExpectionDay:0.89,berryEnergy:24,berryEnergyLv30Day:7180,berryEnergyLv60Day:7374,berrySEnergyLv30Day:10770,berrySEnergyLv60Day:11061,rankOfBerry:8,rankOfFood:3,rankOfSkill:2}),
new Pokemon({no:19,name:"コラッタ",sleepType:"すやすや",specialty:"きのみ",berry:"キーのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"ワカクサ大豆",food2Num:[0,2,3],food3:"マメミート",food3Num:[0,0,3],skill:"げんきチャージS",fp:5,sec:4900,fullyEvolved:false,foodRate:0.237,skillRate:0.03,skillExpectionDay:1.02,berryEnergy:28,berryEnergyLv30Day:4119,berryEnergyLv60Day:4565,berrySEnergyLv30Day:6179,berrySEnergyLv60Day:6848,rankOfBerry:3,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:20,name:"ラッタ",sleepType:"すやすや",specialty:"きのみ",berry:"キーのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"ワカクサ大豆",food2Num:[0,2,3],food3:"マメミート",food3Num:[0,0,3],skill:"げんきチャージS",fp:12,sec:3200,fullyEvolved:true,foodRate:0.237,skillRate:0.03,skillExpectionDay:1.56,berryEnergy:28,berryEnergyLv30Day:6307,berryEnergyLv60Day:6989,berrySEnergyLv30Day:9461,berrySEnergyLv60Day:10484,rankOfBerry:7,rankOfFood:3,rankOfSkill:4}),
new Pokemon({no:23,name:"アーボ",sleepType:"うとうと",specialty:"きのみ",berry:"カゴのみ",food1:"マメミート",food1Num:[1,2,4],food2:"とくせんエッグ",food2Num:[0,2,3],food3:"げきからハーブ",food3Num:[0,0,3],skill:"げんきチャージS",fp:5,sec:5000,fullyEvolved:false,foodRate:0.235,skillRate:0.033,skillExpectionDay:1.1,berryEnergy:32,berryEnergyLv30Day:4613,berryEnergyLv60Day:5112,berrySEnergyLv30Day:6920,berrySEnergyLv60Day:7668,rankOfBerry:4,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:24,name:"アーボック",sleepType:"うとうと",specialty:"きのみ",berry:"カゴのみ",food1:"マメミート",food1Num:[1,2,4],food2:"とくせんエッグ",food2Num:[0,2,3],food3:"げきからハーブ",food3Num:[0,0,3],skill:"げんきチャージS",fp:12,sec:3700,fullyEvolved:true,foodRate:0.264,skillRate:0.057,skillExpectionDay:2.56,berryEnergy:32,berryEnergyLv30Day:6234,berryEnergyLv60Day:6909,berrySEnergyLv30Day:9351,berrySEnergyLv60Day:10364,rankOfBerry:7,rankOfFood:3,rankOfSkill:6}),
new Pokemon({no:25,name:"ピカチュウ",sleepType:"すやすや",specialty:"きのみ",berry:"ウブのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,2,3],food3:"とくせんエッグ",food3Num:[0,0,3],skill:"エナジーチャージS",fp:7,sec:2700,fullyEvolved:false,foodRate:0.207,skillRate:0.021,skillExpectionDay:1.29,berryEnergy:25,berryEnergyLv30Day:7045,berryEnergyLv60Day:7396,berrySEnergyLv30Day:10568,berrySEnergyLv60Day:11094,rankOfBerry:8,rankOfFood:3,rankOfSkill:3}),
new Pokemon({no:25.1,name:"ピカチュウ(ハロウィン)",sleepType:"すやすや",specialty:"きのみ",berry:"ウブのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,2,3],food3:"とくせんエッグ",food3Num:[0,0,3],skill:"エナジーチャージS(ランダム)",fp:7,sec:2600,fullyEvolved:true,foodRate:0.218,skillRate:0.028,skillExpectionDay:1.79,berryEnergy:25,berryEnergyLv30Day:7316,berryEnergyLv60Day:7681,berrySEnergyLv30Day:10974,berrySEnergyLv60Day:11522,rankOfBerry:8,rankOfFood:3,rankOfSkill:4}),
new Pokemon({no:25.2,name:"ピカチュウ(ホリデー)",sleepType:"すやすや",specialty:"スキル",berry:"ウブのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,2,3],food3:"とくせんエッグ",food3Num:[0,0,3],skill:"ゆめのかけらゲットS",fp:7,sec:2600,fullyEvolved:true,foodRate:0.131,skillRate:0.042,skillExpectionDay:3.68,berryEnergy:25,berryEnergyLv30Day:3658,berryEnergyLv60Day:7681,berrySEnergyLv30Day:7316,berrySEnergyLv60Day:15362,rankOfBerry:4,rankOfFood:1,rankOfSkill:7}),
new Pokemon({no:26,name:"ライチュウ",sleepType:"すやすや",specialty:"きのみ",berry:"ウブのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,2,3],food3:"とくせんエッグ",food3Num:[0,0,3],skill:"エナジーチャージS",fp:18,sec:2200,fullyEvolved:true,foodRate:0.224,skillRate:0.032,skillExpectionDay:2.42,berryEnergy:25,berryEnergyLv30Day:8646,berryEnergyLv60Day:9077,berrySEnergyLv30Day:12969,berrySEnergyLv60Day:13616,rankOfBerry:10,rankOfFood:4,rankOfSkill:5}),
new Pokemon({no:35,name:"ピッピ",sleepType:"すやすや",specialty:"きのみ",berry:"モモンのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"あまいミツ",food2Num:[0,2,3],food3:"ワカクサ大豆",food3Num:[0,0,3],skill:"ゆびをふる",fp:7,sec:4000,fullyEvolved:false,foodRate:0.168,skillRate:0.036,skillExpectionDay:1.5,berryEnergy:26,berryEnergyLv30Day:4843,berryEnergyLv60Day:5192,berrySEnergyLv30Day:7265,berrySEnergyLv60Day:7788,rankOfBerry:4,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:36,name:"ピクシー",sleepType:"すやすや",specialty:"きのみ",berry:"モモンのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"あまいミツ",food2Num:[0,2,3],food3:"ワカクサ大豆",food3Num:[0,0,3],skill:"ゆびをふる",fp:20,sec:2800,fullyEvolved:true,foodRate:0.168,skillRate:0.036,skillExpectionDay:2.14,berryEnergy:26,berryEnergyLv30Day:6919,berryEnergyLv60Day:7417,berrySEnergyLv30Day:10379,berrySEnergyLv60Day:11126,rankOfBerry:8,rankOfFood:2,rankOfSkill:5}),
new Pokemon({no:37,name:"ロコン",sleepType:"すやすや",specialty:"きのみ",berry:"ヒメリのみ",food1:"ワカクサ大豆",food1Num:[1,2,4],food2:"ワカクサコーン",food2Num:[0,2,3],food3:"ほっこりポテト",food3Num:[0,0,3],skill:"げんきエールS",fp:5,sec:4700,fullyEvolved:false,foodRate:0.168,skillRate:0.027,skillExpectionDay:0.95,berryEnergy:27,berryEnergyLv30Day:4197,berryEnergyLv60Day:4589,berrySEnergyLv30Day:6296,berrySEnergyLv60Day:6884,rankOfBerry:3,rankOfFood:1,rankOfSkill:2}),
new Pokemon({no:38,name:"キュウコン",sleepType:"すやすや",specialty:"きのみ",berry:"ヒメリのみ",food1:"ワカクサ大豆",food1Num:[1,2,4],food2:"ワカクサコーン",food2Num:[0,2,3],food3:"ほっこりポテト",food3Num:[0,0,3],skill:"げんきエールS",fp:20,sec:2600,fullyEvolved:true,foodRate:0.164,skillRate:0.025,skillExpectionDay:1.6,berryEnergy:27,berryEnergyLv30Day:7587,berryEnergyLv60Day:8295,berrySEnergyLv30Day:11381,berrySEnergyLv60Day:12443,rankOfBerry:9,rankOfFood:2,rankOfSkill:4}),
new Pokemon({no:39,name:"プリン",sleepType:"すやすや",specialty:"スキル",berry:"モモンのみ",food1:"あまいミツ",food1Num:[1,2,4],food2:"ピュアなオイル",food2Num:[0,2,3],food3:"リラックスカカオ",food3Num:[0,0,2],skill:"げんきオールS",fp:7,sec:3900,fullyEvolved:false,foodRate:0.182,skillRate:0.043,skillExpectionDay:2.83,berryEnergy:26,berryEnergyLv30Day:2484,berryEnergyLv60Day:5325,berrySEnergyLv30Day:4968,berrySEnergyLv60Day:10650,rankOfBerry:1,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:40,name:"プクリン",sleepType:"すやすや",specialty:"スキル",berry:"モモンのみ",food1:"あまいミツ",food1Num:[1,2,4],food2:"ピュアなオイル",food2Num:[0,2,3],food3:"リラックスカカオ",food3Num:[0,0,2],skill:"げんきオールS",fp:16,sec:2900,fullyEvolved:true,foodRate:0.174,skillRate:0.04,skillExpectionDay:3.29,berryEnergy:26,berryEnergyLv30Day:3340,berryEnergyLv60Day:7162,berrySEnergyLv30Day:6680,berrySEnergyLv60Day:14324,rankOfBerry:3,rankOfFood:2,rankOfSkill:6}),
new Pokemon({no:50,name:"ディグダ",sleepType:"すやすや",specialty:"食材",berry:"フィラのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"ふといながねぎ",food2Num:[0,3,4],food3:"ワカクサ大豆",food3Num:[0,0,8],skill:"エナジーチャージS",fp:5,sec:4300,fullyEvolved:false,foodRate:0.192,skillRate:0.021,skillExpectionDay:0.81,berryEnergy:29,berryEnergyLv30Day:2431,berryEnergyLv60Day:5387,berrySEnergyLv30Day:4862,berrySEnergyLv60Day:10774,rankOfBerry:1,rankOfFood:4,rankOfSkill:2}),
new Pokemon({no:51,name:"ダグトリオ",sleepType:"すやすや",specialty:"食材",berry:"フィラのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"ふといながねぎ",food2Num:[0,3,4],food3:"ワカクサ大豆",food3Num:[0,0,8],skill:"エナジーチャージS",fp:12,sec:2800,fullyEvolved:true,foodRate:0.19,skillRate:0.02,skillExpectionDay:1.19,berryEnergy:29,berryEnergyLv30Day:3733,berryEnergyLv60Day:8273,berrySEnergyLv30Day:7466,berrySEnergyLv60Day:16546,rankOfBerry:5,rankOfFood:6,rankOfSkill:3}),
new Pokemon({no:52,name:"ニャース",sleepType:"すやすや",specialty:"スキル",berry:"キーのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"マメミート",food2Num:[0,2,3],food3:"",food3Num:[],skill:"ゆめのかけらゲットS",fp:5,sec:4400,fullyEvolved:false,foodRate:0.163,skillRate:0.042,skillExpectionDay:2.59,berryEnergy:28,berryEnergyLv30Day:2294,berryEnergyLv60Day:5083,berrySEnergyLv30Day:4588,berrySEnergyLv60Day:10166,rankOfBerry:1,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:53,name:"ペルシアン",sleepType:"すやすや",specialty:"スキル",berry:"キーのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"マメミート",food2Num:[0,2,3],food3:"",food3Num:[],skill:"ゆめのかけらゲットS",fp:12,sec:2800,fullyEvolved:true,foodRate:0.169,skillRate:0.044,skillExpectionDay:3.61,berryEnergy:28,berryEnergyLv30Day:3604,berryEnergyLv60Day:7988,berrySEnergyLv30Day:7208,berrySEnergyLv60Day:15976,rankOfBerry:4,rankOfFood:2,rankOfSkill:7}),
new Pokemon({no:54,name:"コダック",sleepType:"うとうと",specialty:"スキル",berry:"オレンのみ",food1:"リラックスカカオ",food1Num:[1,2,4],food2:"とくせんリンゴ",food2Num:[0,4,6],food3:"マメミート",food3Num:[0,0,5],skill:"エナジーチャージS(ランダム)",fp:5,sec:5400,fullyEvolved:false,foodRate:0.136,skillRate:0.126,skillExpectionDay:4.88,berryEnergy:31,berryEnergyLv30Day:2069,berryEnergyLv60Day:4586,berrySEnergyLv30Day:4138,berrySEnergyLv60Day:9172,rankOfBerry:1,rankOfFood:1,rankOfSkill:9}),
new Pokemon({no:55,name:"ゴルダック",sleepType:"ぐっすり",specialty:"スキル",berry:"オレンのみ",food1:"リラックスカカオ",food1Num:[1,2,4],food2:"とくせんリンゴ",food2Num:[0,4,6],food3:"マメミート",food3Num:[0,0,5],skill:"エナジーチャージS(ランダム)",fp:12,sec:3400,fullyEvolved:true,foodRate:0.162,skillRate:0.125,skillExpectionDay:7.11,berryEnergy:31,berryEnergyLv30Day:3286,berryEnergyLv60Day:7283,berrySEnergyLv30Day:6572,berrySEnergyLv60Day:14566,rankOfBerry:4,rankOfFood:1,rankOfSkill:10}),
new Pokemon({no:56,name:"マンキー",sleepType:"うとうと",specialty:"きのみ",berry:"クラボのみ",food1:"マメミート",food1Num:[1,2,4],food2:"あじわいキノコ",food2Num:[0,1,2],food3:"あまいミツ",food3Num:[0,0,4],skill:"エナジーチャージS(ランダム)",fp:5,sec:4200,fullyEvolved:false,foodRate:0.197,skillRate:0.022,skillExpectionDay:0.87,berryEnergy:27,berryEnergyLv30Day:4697,berryEnergyLv60Day:5135,berrySEnergyLv30Day:7046,berrySEnergyLv60Day:7703,rankOfBerry:4,rankOfFood:1,rankOfSkill:2}),
new Pokemon({no:57,name:"オコリザル",sleepType:"うとうと",specialty:"きのみ",berry:"クラボのみ",food1:"マメミート",food1Num:[1,2,4],food2:"あじわいキノコ",food2Num:[0,1,2],food3:"あまいミツ",food3Num:[0,0,4],skill:"エナジーチャージS(ランダム)",fp:12,sec:2800,fullyEvolved:true,foodRate:0.2,skillRate:0.024,skillExpectionDay:1.42,berryEnergy:27,berryEnergyLv30Day:7045,berryEnergyLv60Day:7703,berrySEnergyLv30Day:10568,berrySEnergyLv60Day:11555,rankOfBerry:8,rankOfFood:3,rankOfSkill:3}),
new Pokemon({no:58,name:"ガーディ",sleepType:"すやすや",specialty:"スキル",berry:"ヒメリのみ",food1:"げきからハーブ",food1Num:[1,2,4],food2:"マメミート",food2Num:[0,3,5],food3:"モーモーミルク",food3Num:[0,0,5],skill:"おてつだいサポートS",fp:5,sec:4300,fullyEvolved:false,foodRate:0.138,skillRate:0.05,skillExpectionDay:2.93,berryEnergy:27,berryEnergyLv30Day:2294,berryEnergyLv60Day:5016,berrySEnergyLv30Day:4588,berrySEnergyLv60Day:10032,rankOfBerry:1,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:59,name:"ウインディ",sleepType:"すやすや",specialty:"スキル",berry:"ヒメリのみ",food1:"げきからハーブ",food1Num:[1,2,4],food2:"マメミート",food2Num:[0,3,5],food3:"モーモーミルク",food3Num:[0,0,5],skill:"おてつだいサポートS",fp:20,sec:2500,fullyEvolved:true,foodRate:0.136,skillRate:0.049,skillExpectionDay:4.26,berryEnergy:27,berryEnergyLv30Day:3945,berryEnergyLv60Day:8627,berrySEnergyLv30Day:7890,berrySEnergyLv60Day:17254,rankOfBerry:5,rankOfFood:2,rankOfSkill:8}),
new Pokemon({no:69,name:"マダツボミ",sleepType:"うとうと",specialty:"食材",berry:"ドリのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,6],food3:"ふといながねぎ",food3Num:[0,0,4],skill:"げんきチャージS",fp:5,sec:5200,fullyEvolved:false,foodRate:0.233,skillRate:0.039,skillExpectionDay:1.25,berryEnergy:30,berryEnergyLv30Day:2079,berryEnergyLv60Day:4608,berrySEnergyLv30Day:4158,berrySEnergyLv60Day:9216,rankOfBerry:1,rankOfFood:4,rankOfSkill:3}),
new Pokemon({no:70,name:"ウツドン",sleepType:"うとうと",specialty:"食材",berry:"ドリのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,6],food3:"ふといながねぎ",food3Num:[0,0,4],skill:"げんきチャージS",fp:12,sec:3800,fullyEvolved:false,foodRate:0.235,skillRate:0.04,skillExpectionDay:1.75,berryEnergy:30,berryEnergyLv30Day:2845,berryEnergyLv60Day:6306,berrySEnergyLv30Day:5690,berrySEnergyLv60Day:12612,rankOfBerry:2,rankOfFood:5,rankOfSkill:4}),
new Pokemon({no:71,name:"ウツボット",sleepType:"うとうと",specialty:"食材",berry:"ドリのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,6],food3:"ふといながねぎ",food3Num:[0,0,4],skill:"げんきチャージS",fp:20,sec:2800,fullyEvolved:true,foodRate:0.233,skillRate:0.039,skillExpectionDay:2.31,berryEnergy:30,berryEnergyLv30Day:3862,berryEnergyLv60Day:8559,berrySEnergyLv30Day:7724,berrySEnergyLv60Day:17118,rankOfBerry:5,rankOfFood:8,rankOfSkill:5}),
new Pokemon({no:74,name:"イシツブテ",sleepType:"ぐっすり",specialty:"食材",berry:"オボンのみ",food1:"ワカクサ大豆",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,6],food3:"あじわいキノコ",food3Num:[0,0,4],skill:"エナジーチャージS(ランダム)",fp:5,sec:5700,fullyEvolved:false,foodRate:0.281,skillRate:0.052,skillExpectionDay:1.52,berryEnergy:30,berryEnergyLv30Day:1897,berryEnergyLv60Day:4204,berrySEnergyLv30Day:3794,berrySEnergyLv60Day:8408,rankOfBerry:0,rankOfFood:4,rankOfSkill:4}),
new Pokemon({no:75,name:"ゴローン",sleepType:"ぐっすり",specialty:"食材",berry:"オボンのみ",food1:"ワカクサ大豆",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,6],food3:"あじわいキノコ",food3Num:[0,0,4],skill:"エナジーチャージS(ランダム)",fp:12,sec:4000,fullyEvolved:false,foodRate:0.272,skillRate:0.048,skillExpectionDay:1.99,berryEnergy:30,berryEnergyLv30Day:2703,berryEnergyLv60Day:5991,berrySEnergyLv30Day:5406,berrySEnergyLv60Day:11982,rankOfBerry:2,rankOfFood:6,rankOfSkill:5}),
new Pokemon({no:76,name:"ゴローニャ",sleepType:"ぐっすり",specialty:"食材",berry:"オボンのみ",food1:"ワカクサ大豆",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,6],food3:"あじわいキノコ",food3Num:[0,0,4],skill:"エナジーチャージS(ランダム)",fp:22,sec:3100,fullyEvolved:true,foodRate:0.28,skillRate:0.052,skillExpectionDay:2.79,berryEnergy:30,berryEnergyLv30Day:3488,berryEnergyLv60Day:7730,berrySEnergyLv30Day:6976,berrySEnergyLv60Day:15460,rankOfBerry:4,rankOfFood:9,rankOfSkill:6}),
new Pokemon({no:79,name:"ヤドン",sleepType:"すやすや",specialty:"スキル",berry:"オレンのみ",food1:"リラックスカカオ",food1Num:[1,2,4],food2:"おいしいシッポ",food2Num:[0,1,2],food3:"あんみんトマト",food3Num:[0,0,5],skill:"げんきエールS",fp:5,sec:5700,fullyEvolved:false,foodRate:0.151,skillRate:0.067,skillExpectionDay:2.95,berryEnergy:31,berryEnergyLv30Day:1960,berryEnergyLv60Day:4344,berrySEnergyLv30Day:3920,berrySEnergyLv60Day:8688,rankOfBerry:0,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:80,name:"ヤドラン",sleepType:"すやすや",specialty:"スキル",berry:"オレンのみ",food1:"リラックスカカオ",food1Num:[1,2,4],food2:"おいしいシッポ",food2Num:[0,1,2],food3:"あんみんトマト",food3Num:[0,0,5],skill:"げんきエールS",fp:12,sec:3800,fullyEvolved:true,foodRate:0.197,skillRate:0.068,skillExpectionDay:3.97,berryEnergy:31,berryEnergyLv30Day:2940,berryEnergyLv60Day:6517,berrySEnergyLv30Day:5880,berrySEnergyLv60Day:13034,rankOfBerry:3,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:81,name:"コイル",sleepType:"ぐっすり",specialty:"スキル",berry:"ベリブのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"げきからハーブ",food2Num:[0,2,3],food3:"",food3Num:[],skill:"料理パワーアップS",fp:5,sec:5800,fullyEvolved:false,foodRate:0.182,skillRate:0.064,skillExpectionDay:2.83,berryEnergy:33,berryEnergyLv30Day:2051,berryEnergyLv60Day:4545,berrySEnergyLv30Day:4102,berrySEnergyLv60Day:9090,rankOfBerry:1,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:82,name:"レアコイル",sleepType:"ぐっすり",specialty:"スキル",berry:"ベリブのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"げきからハーブ",food2Num:[0,2,3],food3:"",food3Num:[],skill:"料理パワーアップS",fp:12,sec:4000,fullyEvolved:false,foodRate:0.182,skillRate:0.063,skillExpectionDay:3.62,berryEnergy:33,berryEnergyLv30Day:2973,berryEnergyLv60Day:6590,berrySEnergyLv30Day:5946,berrySEnergyLv60Day:13180,rankOfBerry:3,rankOfFood:1,rankOfSkill:7}),
new Pokemon({no:84,name:"ドードー",sleepType:"ぐっすり",specialty:"きのみ",berry:"シーヤのみ",food1:"ワカクサ大豆",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"げんきチャージS",fp:5,sec:3800,fullyEvolved:false,foodRate:0.184,skillRate:0.02,skillExpectionDay:0.87,berryEnergy:24,berryEnergyLv30Day:4913,berryEnergyLv60Day:5045,berrySEnergyLv30Day:7370,berrySEnergyLv60Day:7568,rankOfBerry:4,rankOfFood:1,rankOfSkill:2}),
new Pokemon({no:85,name:"ドードリオ",sleepType:"ぐっすり",specialty:"きのみ",berry:"シーヤのみ",food1:"ワカクサ大豆",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"げんきチャージS",fp:12,sec:2400,fullyEvolved:true,foodRate:0.184,skillRate:0.02,skillExpectionDay:1.38,berryEnergy:24,berryEnergyLv30Day:7779,berryEnergyLv60Day:7988,berrySEnergyLv30Day:11669,berrySEnergyLv60Day:11982,rankOfBerry:9,rankOfFood:3,rankOfSkill:3}),
new Pokemon({no:92,name:"ゴース",sleepType:"うとうと",specialty:"食材",berry:"ブリーのみ",food1:"げきからハーブ",food1Num:[2,5,7],food2:"あじわいキノコ",food2Num:[0,4,6],food3:"ピュアなオイル",food3Num:[0,0,8],skill:"エナジーチャージS(ランダム)",fp:5,sec:3800,fullyEvolved:false,foodRate:0.144,skillRate:0.015,skillExpectionDay:0.66,berryEnergy:26,berryEnergyLv30Day:2549,berryEnergyLv60Day:5465,berrySEnergyLv30Day:5098,berrySEnergyLv60Day:10930,rankOfBerry:2,rankOfFood:3,rankOfSkill:2}),
new Pokemon({no:93,name:"ゴースト",sleepType:"うとうと",specialty:"食材",berry:"ブリーのみ",food1:"げきからハーブ",food1Num:[2,5,7],food2:"あじわいキノコ",food2Num:[0,4,6],food3:"ピュアなオイル",food3Num:[0,0,8],skill:"エナジーチャージS(ランダム)",fp:12,sec:3000,fullyEvolved:false,foodRate:0.157,skillRate:0.022,skillExpectionDay:1.22,berryEnergy:26,berryEnergyLv30Day:3229,berryEnergyLv60Day:6923,berrySEnergyLv30Day:6458,berrySEnergyLv60Day:13846,rankOfBerry:3,rankOfFood:4,rankOfSkill:3}),
new Pokemon({no:94,name:"ゲンガー",sleepType:"うとうと",specialty:"食材",berry:"ブリーのみ",food1:"げきからハーブ",food1Num:[2,5,7],food2:"あじわいキノコ",food2Num:[0,4,6],food3:"ピュアなオイル",food3Num:[0,0,8],skill:"エナジーチャージS(ランダム)",fp:22,sec:2200,fullyEvolved:true,foodRate:0.161,skillRate:0.024,skillExpectionDay:1.81,berryEnergy:26,berryEnergyLv30Day:4403,berryEnergyLv60Day:9440,berrySEnergyLv30Day:8806,berrySEnergyLv60Day:18880,rankOfBerry:6,rankOfFood:7,rankOfSkill:4}),
new Pokemon({no:95,name:"イワーク",sleepType:"ぐっすり",specialty:"きのみ",berry:"オボンのみ",food1:"あんみんトマト",food1Num:[1,2,4],food2:"マメミート",food2Num:[0,2,4],food3:"ほっこりポテト",food3Num:[0,0,3],skill:"食材ゲットS",fp:16,sec:3100,fullyEvolved:true,foodRate:0.132,skillRate:0.023,skillExpectionDay:1.23,berryEnergy:30,berryEnergyLv30Day:6976,berryEnergyLv60Day:7730,berrySEnergyLv30Day:10464,berrySEnergyLv60Day:11595,rankOfBerry:8,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:104,name:"カラカラ",sleepType:"ぐっすり",specialty:"きのみ",berry:"フィラのみ",food1:"あったかジンジャー",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,2,3],food3:"",food3Num:[],skill:"げんきチャージS",fp:5,sec:4800,fullyEvolved:false,foodRate:0.223,skillRate:0.044,skillExpectionDay:1.52,berryEnergy:29,berryEnergyLv30Day:4355,berryEnergyLv60Day:4826,berrySEnergyLv30Day:6533,berrySEnergyLv60Day:7239,rankOfBerry:3,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:105,name:"ガラガラ",sleepType:"ぐっすり",specialty:"きのみ",berry:"フィラのみ",food1:"あったかジンジャー",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,2,3],food3:"",food3Num:[],skill:"げんきチャージS",fp:12,sec:3500,fullyEvolved:true,foodRate:0.225,skillRate:0.045,skillExpectionDay:2.14,berryEnergy:29,berryEnergyLv30Day:5973,berryEnergyLv60Day:6619,berrySEnergyLv30Day:8960,berrySEnergyLv60Day:9929,rankOfBerry:6,rankOfFood:2,rankOfSkill:5}),
new Pokemon({no:115,name:"ガルーラ",sleepType:"すやすや",specialty:"食材",berry:"キーのみ",food1:"あったかジンジャー",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,6],food3:"ワカクサ大豆",food3Num:[0,0,8],skill:"食材ゲットS",fp:16,sec:2800,fullyEvolved:true,foodRate:0.222,skillRate:0.017,skillExpectionDay:1.01,berryEnergy:28,berryEnergyLv30Day:3604,berryEnergyLv60Day:7988,berrySEnergyLv30Day:7208,berrySEnergyLv60Day:15976,rankOfBerry:4,rankOfFood:7,rankOfSkill:3}),
new Pokemon({no:122,name:"バリヤード",sleepType:"すやすや",specialty:"食材",berry:"マゴのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,6],food3:"ふといながねぎ",food3Num:[0,0,4],skill:"エナジーチャージS",fp:12,sec:2800,fullyEvolved:true,foodRate:0.216,skillRate:0.039,skillExpectionDay:2.31,berryEnergy:26,berryEnergyLv30Day:3460,berryEnergyLv60Day:7417,berrySEnergyLv30Day:6920,berrySEnergyLv60Day:14834,rankOfBerry:4,rankOfFood:7,rankOfSkill:5}),
new Pokemon({no:127,name:"カイロス",sleepType:"うとうと",specialty:"食材",berry:"ラムのみ",food1:"あまいミツ",food1Num:[2,5,7],food2:"とくせんリンゴ",food2Num:[0,5,8],food3:"マメミート",food3Num:[0,0,7],skill:"エナジーチャージS",fp:16,sec:2400,fullyEvolved:true,foodRate:0.216,skillRate:0.031,skillExpectionDay:2.15,berryEnergy:24,berryEnergyLv30Day:3889,berryEnergyLv60Day:7988,berrySEnergyLv30Day:7778,berrySEnergyLv60Day:15976,rankOfBerry:4,rankOfFood:9,rankOfSkill:5}),
new Pokemon({no:132,name:"メタモン",sleepType:"すやすや",specialty:"食材",berry:"キーのみ",food1:"ピュアなオイル",food1Num:[2,5,7],food2:"ふといながねぎ",food2Num:[0,3,5],food3:"おいしいシッポ",food3Num:[0,0,3],skill:"エナジーチャージS(ランダム)",fp:16,sec:3500,fullyEvolved:true,foodRate:0.201,skillRate:0.036,skillExpectionDay:1.71,berryEnergy:28,berryEnergyLv30Day:2883,berryEnergyLv60Day:6390,berrySEnergyLv30Day:5766,berrySEnergyLv60Day:12780,rankOfBerry:3,rankOfFood:5,rankOfSkill:4}),
new Pokemon({no:133,name:"イーブイ",sleepType:"すやすや",specialty:"スキル",berry:"キーのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"食材ゲットS",fp:5,sec:3700,fullyEvolved:false,foodRate:0.192,skillRate:0.055,skillExpectionDay:3.47,berryEnergy:28,berryEnergyLv30Day:2727,berryEnergyLv60Day:6045,berrySEnergyLv30Day:5454,berrySEnergyLv60Day:12090,rankOfBerry:2,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:134,name:"シャワーズ",sleepType:"ぐっすり",specialty:"スキル",berry:"オレンのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"食材ゲットS",fp:20,sec:3100,fullyEvolved:true,foodRate:0.212,skillRate:0.061,skillExpectionDay:4.27,berryEnergy:31,berryEnergyLv30Day:3604,berryEnergyLv60Day:7988,berrySEnergyLv30Day:7208,berrySEnergyLv60Day:15976,rankOfBerry:4,rankOfFood:2,rankOfSkill:8}),
new Pokemon({no:135,name:"サンダース",sleepType:"すやすや",specialty:"スキル",berry:"ウブのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"おてつだいサポートS",fp:20,sec:2200,fullyEvolved:true,foodRate:0.151,skillRate:0.039,skillExpectionDay:3.95,berryEnergy:25,berryEnergyLv30Day:4323,berryEnergyLv60Day:9077,berrySEnergyLv30Day:8646,berrySEnergyLv60Day:18154,rankOfBerry:6,rankOfFood:2,rankOfSkill:7}),
new Pokemon({no:136,name:"ブースター",sleepType:"すやすや",specialty:"スキル",berry:"ヒメリのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"料理パワーアップS",fp:20,sec:2700,fullyEvolved:true,foodRate:0.185,skillRate:0.052,skillExpectionDay:4.2,berryEnergy:27,berryEnergyLv30Day:3653,berryEnergyLv60Day:7988,berrySEnergyLv30Day:7306,berrySEnergyLv60Day:15976,rankOfBerry:4,rankOfFood:2,rankOfSkill:8}),
new Pokemon({no:147,name:"ミニリュウ",sleepType:"うとうと",specialty:"食材",berry:"ヤチェのみ",food1:"げきからハーブ",food1Num:[2,5,7],food2:"ワカクサコーン",food2Num:[0,4,7],food3:"ピュアなオイル",food3Num:[0,0,8],skill:"げんきチャージS",fp:5,sec:5000,fullyEvolved:false,foodRate:0.25,skillRate:0.02,skillExpectionDay:0.66,berryEnergy:35,berryEnergyLv30Day:2523,berryEnergyLv60Day:5592,berrySEnergyLv30Day:5046,berrySEnergyLv60Day:11184,rankOfBerry:2,rankOfFood:4,rankOfSkill:2}),
new Pokemon({no:148,name:"ハクリュー",sleepType:"うとうと",specialty:"食材",berry:"ヤチェのみ",food1:"げきからハーブ",food1Num:[2,5,7],food2:"ワカクサコーン",food2Num:[0,4,7],food3:"ピュアなオイル",food3Num:[0,0,8],skill:"げんきチャージS",fp:12,sec:3800,fullyEvolved:false,foodRate:0.262,skillRate:0.025,skillExpectionDay:1.09,berryEnergy:35,berryEnergyLv30Day:3320,berryEnergyLv60Day:7357,berrySEnergyLv30Day:6640,berrySEnergyLv60Day:14714,rankOfBerry:4,rankOfFood:6,rankOfSkill:3}),
new Pokemon({no:149,name:"カイリュー",sleepType:"うとうと",specialty:"食材",berry:"ヤチェのみ",food1:"げきからハーブ",food1Num:[2,5,7],food2:"ワカクサコーン",food2Num:[0,4,7],food3:"ピュアなオイル",food3Num:[0,0,8],skill:"げんきチャージS",fp:25,sec:2600,fullyEvolved:true,foodRate:0.264,skillRate:0.026,skillExpectionDay:1.66,berryEnergy:35,berryEnergyLv30Day:4852,berryEnergyLv60Day:10753,berrySEnergyLv30Day:9704,berrySEnergyLv60Day:21506,rankOfBerry:7,rankOfFood:10,rankOfSkill:4}),
new Pokemon({no:152,name:"チコリータ",sleepType:"うとうと",specialty:"きのみ",berry:"ドリのみ",food1:"リラックスカカオ",food1Num:[1,2,4],food2:"あまいミツ",food2Num:[0,3,5],food3:"ふといながねぎ",food3Num:[0,0,3],skill:"エナジーチャージS(ランダム)",fp:5,sec:4400,fullyEvolved:false,foodRate:0.169,skillRate:0.039,skillExpectionDay:1.47,berryEnergy:30,berryEnergyLv30Day:4915,berryEnergyLv60Day:5446,berrySEnergyLv30Day:7373,berrySEnergyLv60Day:8169,rankOfBerry:5,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:153,name:"ベイリーフ",sleepType:"うとうと",specialty:"きのみ",berry:"ドリのみ",food1:"リラックスカカオ",food1Num:[1,2,4],food2:"あまいミツ",food2Num:[0,3,5],food3:"ふといながねぎ",food3Num:[0,0,3],skill:"エナジーチャージS(ランダム)",fp:12,sec:3300,fullyEvolved:false,foodRate:0.168,skillRate:0.038,skillExpectionDay:1.91,berryEnergy:30,berryEnergyLv30Day:6553,berryEnergyLv60Day:7262,berrySEnergyLv30Day:9830,berrySEnergyLv60Day:10893,rankOfBerry:7,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:154,name:"メガニウム",sleepType:"うとうと",specialty:"きのみ",berry:"ドリのみ",food1:"リラックスカカオ",food1Num:[1,2,4],food2:"あまいミツ",food2Num:[0,3,5],food3:"ふといながねぎ",food3Num:[0,0,3],skill:"エナジーチャージS(ランダム)",fp:20,sec:2800,fullyEvolved:true,foodRate:0.175,skillRate:0.046,skillExpectionDay:2.73,berryEnergy:30,berryEnergyLv30Day:7723,berryEnergyLv60Day:8559,berrySEnergyLv30Day:11585,berrySEnergyLv60Day:12839,rankOfBerry:10,rankOfFood:2,rankOfSkill:6}),
new Pokemon({no:155,name:"ヒノアラシ",sleepType:"すやすや",specialty:"きのみ",berry:"ヒメリのみ",food1:"あったかジンジャー",food1Num:[1,2,4],food2:"げきからハーブ",food2Num:[0,2,3],food3:"ピュアなオイル",food3Num:[0,0,3],skill:"エナジーチャージS(ランダム)",fp:5,sec:3500,fullyEvolved:false,foodRate:0.186,skillRate:0.021,skillExpectionDay:1,berryEnergy:27,berryEnergyLv30Day:5636,berryEnergyLv60Day:6162,berrySEnergyLv30Day:8454,berrySEnergyLv60Day:9243,rankOfBerry:6,rankOfFood:2,rankOfSkill:3}),
new Pokemon({no:156,name:"マグマラシ",sleepType:"すやすや",specialty:"きのみ",berry:"ヒメリのみ",food1:"あったかジンジャー",food1Num:[1,2,4],food2:"げきからハーブ",food2Num:[0,2,3],food3:"ピュアなオイル",food3Num:[0,0,3],skill:"エナジーチャージS(ランダム)",fp:12,sec:3000,fullyEvolved:false,foodRate:0.211,skillRate:0.041,skillExpectionDay:2.27,berryEnergy:27,berryEnergyLv30Day:6575,berryEnergyLv60Day:7189,berrySEnergyLv30Day:9863,berrySEnergyLv60Day:10784,rankOfBerry:7,rankOfFood:2,rankOfSkill:5}),
new Pokemon({no:157,name:"バクフーン",sleepType:"すやすや",specialty:"きのみ",berry:"ヒメリのみ",food1:"あったかジンジャー",food1Num:[1,2,4],food2:"げきからハーブ",food2Num:[0,2,3],food3:"ピュアなオイル",food3Num:[0,0,3],skill:"エナジーチャージS(ランダム)",fp:20,sec:2400,fullyEvolved:true,foodRate:0.208,skillRate:0.039,skillExpectionDay:2.7,berryEnergy:27,berryEnergyLv30Day:8219,berryEnergyLv60Day:8986,berrySEnergyLv30Day:12329,berrySEnergyLv60Day:13479,rankOfBerry:10,rankOfFood:3,rankOfSkill:6}),
new Pokemon({no:158,name:"ワニノコ",sleepType:"ぐっすり",specialty:"きのみ",berry:"オレンのみ",food1:"マメミート",food1Num:[1,2,4],food2:"ピュアなオイル",food2Num:[0,2,3],food3:"",food3Num:[],skill:"エナジーチャージS(ランダム)",fp:5,sec:4500,fullyEvolved:false,foodRate:0.253,skillRate:0.052,skillExpectionDay:1.92,berryEnergy:31,berryEnergyLv30Day:4966,berryEnergyLv60Day:5503,berrySEnergyLv30Day:7449,berrySEnergyLv60Day:8255,rankOfBerry:5,rankOfFood:2,rankOfSkill:4}),
new Pokemon({no:159,name:"アリゲイツ",sleepType:"ぐっすり",specialty:"きのみ",berry:"オレンのみ",food1:"マメミート",food1Num:[1,2,4],food2:"ピュアなオイル",food2Num:[0,2,3],food3:"",food3Num:[],skill:"エナジーチャージS(ランダム)",fp:12,sec:3400,fullyEvolved:false,foodRate:0.253,skillRate:0.052,skillExpectionDay:2.54,berryEnergy:31,berryEnergyLv30Day:6572,berryEnergyLv60Day:7283,berrySEnergyLv30Day:9858,berrySEnergyLv60Day:10925,rankOfBerry:8,rankOfFood:3,rankOfSkill:6}),
new Pokemon({no:160,name:"オーダイル",sleepType:"ぐっすり",specialty:"きのみ",berry:"オレンのみ",food1:"マメミート",food1Num:[1,2,4],food2:"ピュアなオイル",food2Num:[0,2,3],food3:"",food3Num:[],skill:"エナジーチャージS(ランダム)",fp:20,sec:2800,fullyEvolved:true,foodRate:0.257,skillRate:0.055,skillExpectionDay:3.26,berryEnergy:31,berryEnergyLv30Day:7981,berryEnergyLv60Day:8844,berrySEnergyLv30Day:11972,berrySEnergyLv60Day:13266,rankOfBerry:10,rankOfFood:4,rankOfSkill:7}),
new Pokemon({no:172,name:"ピチュー",sleepType:"ぐっすり",specialty:"きのみ",berry:"ウブのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,2,3],food3:"とくせんエッグ",food3Num:[0,0,3],skill:"エナジーチャージS",fp:5,sec:4300,fullyEvolved:false,foodRate:0.21,skillRate:0.023,skillExpectionDay:0.89,berryEnergy:25,berryEnergyLv30Day:4424,berryEnergyLv60Day:4644,berrySEnergyLv30Day:6636,berrySEnergyLv60Day:6966,rankOfBerry:3,rankOfFood:1,rankOfSkill:2}),
new Pokemon({no:173,name:"ピィ",sleepType:"ぐっすり",specialty:"きのみ",berry:"モモンのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"あまいミツ",food2Num:[0,2,3],food3:"ワカクサ大豆",food3Num:[0,0,3],skill:"ゆびをふる",fp:5,sec:5600,fullyEvolved:false,foodRate:0.164,skillRate:0.034,skillExpectionDay:1.01,berryEnergy:26,berryEnergyLv30Day:3460,berryEnergyLv60Day:3709,berrySEnergyLv30Day:5190,berrySEnergyLv60Day:5564,rankOfBerry:2,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:174,name:"ププリン",sleepType:"ぐっすり",specialty:"スキル",berry:"モモンのみ",food1:"あまいミツ",food1Num:[1,2,4],food2:"ピュアなオイル",food2Num:[0,2,3],food3:"リラックスカカオ",food3Num:[0,0,2],skill:"げんきオールS",fp:5,sec:5200,fullyEvolved:false,foodRate:0.17,skillRate:0.038,skillExpectionDay:2.21,berryEnergy:26,berryEnergyLv30Day:1863,berryEnergyLv60Day:3994,berrySEnergyLv30Day:3726,berrySEnergyLv60Day:7988,rankOfBerry:0,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:175,name:"トゲピー",sleepType:"ぐっすり",specialty:"スキル",berry:"モモンのみ",food1:"とくせんエッグ",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,2,4],food3:"リラックスカカオ",food3Num:[0,0,3],skill:"ゆびをふる",fp:5,sec:4800,fullyEvolved:false,foodRate:0.151,skillRate:0.049,skillExpectionDay:2.7,berryEnergy:26,berryEnergyLv30Day:2018,berryEnergyLv60Day:4327,berrySEnergyLv30Day:4036,berrySEnergyLv60Day:8654,rankOfBerry:0,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:176,name:"トゲチック",sleepType:"すやすや",specialty:"スキル",berry:"モモンのみ",food1:"とくせんエッグ",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,2,4],food3:"リラックスカカオ",food3Num:[0,0,3],skill:"ゆびをふる",fp:12,sec:3800,fullyEvolved:false,foodRate:0.163,skillRate:0.056,skillExpectionDay:3.45,berryEnergy:26,berryEnergyLv30Day:2549,berryEnergyLv60Day:5465,berrySEnergyLv30Day:5098,berrySEnergyLv60Day:10930,rankOfBerry:2,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:179,name:"メリープ",sleepType:"すやすや",specialty:"スキル",berry:"ウブのみ",food1:"げきからハーブ",food1Num:[1,2,4],food2:"とくせんエッグ",food2Num:[0,3,4],food3:"",food3Num:[],skill:"エナジーチャージM",fp:5,sec:4600,fullyEvolved:false,foodRate:0.128,skillRate:0.047,skillExpectionDay:2.7,berryEnergy:25,berryEnergyLv30Day:2068,berryEnergyLv60Day:4341,berrySEnergyLv30Day:4136,berrySEnergyLv60Day:8682,rankOfBerry:0,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:180,name:"モココ",sleepType:"すやすや",specialty:"スキル",berry:"ウブのみ",food1:"げきからハーブ",food1Num:[1,2,4],food2:"とくせんエッグ",food2Num:[0,3,4],food3:"",food3Num:[],skill:"エナジーチャージM",fp:12,sec:3300,fullyEvolved:false,foodRate:0.127,skillRate:0.046,skillExpectionDay:3.32,berryEnergy:25,berryEnergyLv30Day:2882,berryEnergyLv60Day:6051,berrySEnergyLv30Day:5764,berrySEnergyLv60Day:12102,rankOfBerry:2,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:181,name:"デンリュウ",sleepType:"すやすや",specialty:"スキル",berry:"ウブのみ",food1:"げきからハーブ",food1Num:[1,2,4],food2:"とくせんエッグ",food2Num:[0,3,4],food3:"",food3Num:[],skill:"エナジーチャージM",fp:20,sec:2500,fullyEvolved:true,foodRate:0.13,skillRate:0.047,skillExpectionDay:4.12,berryEnergy:25,berryEnergyLv30Day:3804,berryEnergyLv60Day:7988,berrySEnergyLv30Day:7608,berrySEnergyLv60Day:15976,rankOfBerry:4,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:185,name:"ウソッキー",sleepType:"ぐっすり",specialty:"スキル",berry:"オボンのみ",food1:"あんみんトマト",food1Num:[1,2,4],food2:"ワカクサ大豆",food2Num:[0,2,4],food3:"あじわいキノコ",food3Num:[0,0,2],skill:"エナジーチャージM",fp:7,sec:4000,fullyEvolved:true,foodRate:0.217,skillRate:0.072,skillExpectionDay:3.99,berryEnergy:30,berryEnergyLv30Day:2703,berryEnergyLv60Day:5991,berrySEnergyLv30Day:5406,berrySEnergyLv60Day:11982,rankOfBerry:2,rankOfFood:2,rankOfSkill:8}),
new Pokemon({no:194,name:"ウパー",sleepType:"ぐっすり",specialty:"食材",berry:"オレンのみ",food1:"あじわいキノコ",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,6,10],food3:"マメミート",food3Num:[0,0,12],skill:"げんきチャージS",fp:5,sec:5900,fullyEvolved:false,foodRate:0.201,skillRate:0.038,skillExpectionDay:1.07,berryEnergy:31,berryEnergyLv30Day:1894,berryEnergyLv60Day:4197,berrySEnergyLv30Day:3788,berrySEnergyLv60Day:8394,rankOfBerry:0,rankOfFood:2,rankOfSkill:3}),
new Pokemon({no:195,name:"ヌオー",sleepType:"ぐっすり",specialty:"食材",berry:"オレンのみ",food1:"あじわいキノコ",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,6,10],food3:"マメミート",food3Num:[0,0,12],skill:"げんきチャージS",fp:12,sec:3400,fullyEvolved:true,foodRate:0.19,skillRate:0.032,skillExpectionDay:1.56,berryEnergy:31,berryEnergyLv30Day:3286,berryEnergyLv60Day:7283,berrySEnergyLv30Day:6572,berrySEnergyLv60Day:14566,rankOfBerry:4,rankOfFood:5,rankOfSkill:4}),
new Pokemon({no:196,name:"エーフィ",sleepType:"すやすや",specialty:"スキル",berry:"マゴのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"エナジーチャージM",fp:20,sec:2400,fullyEvolved:true,foodRate:0.164,skillRate:0.044,skillExpectionDay:4.05,berryEnergy:26,berryEnergyLv30Day:4036,berryEnergyLv60Day:8654,berrySEnergyLv30Day:8072,berrySEnergyLv60Day:17308,rankOfBerry:5,rankOfFood:2,rankOfSkill:8}),
new Pokemon({no:197,name:"ブラッキー",sleepType:"うとうと",specialty:"スキル",berry:"ウイのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"げんきチャージS",fp:20,sec:3200,fullyEvolved:true,foodRate:0.219,skillRate:0.141,skillExpectionDay:8.32,berryEnergy:31,berryEnergyLv30Day:3492,berryEnergyLv60Day:7738,berrySEnergyLv30Day:6984,berrySEnergyLv60Day:15476,rankOfBerry:4,rankOfFood:2,rankOfSkill:10}),
new Pokemon({no:199,name:"ヤドキング",sleepType:"すやすや",specialty:"スキル",berry:"オレンのみ",food1:"リラックスカカオ",food1Num:[1,2,4],food2:"おいしいシッポ",food2Num:[0,1,2],food3:"あんみんトマト",food3Num:[0,0,5],skill:"げんきエールS",fp:20,sec:3400,fullyEvolved:true,foodRate:0.166,skillRate:0.074,skillExpectionDay:4.62,berryEnergy:31,berryEnergyLv30Day:3286,berryEnergyLv60Day:7283,berrySEnergyLv30Day:6572,berrySEnergyLv60Day:14566,rankOfBerry:4,rankOfFood:1,rankOfSkill:9}),
new Pokemon({no:202,name:"ソーナンス",sleepType:"すやすや",specialty:"スキル",berry:"マゴのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"あじわいキノコ",food2Num:[0,1,2],food3:"ピュアなオイル",food3Num:[0,0,3],skill:"げんきエールS",fp:7,sec:3500,fullyEvolved:true,foodRate:0.211,skillRate:0.064,skillExpectionDay:4.04,berryEnergy:26,berryEnergyLv30Day:2768,berryEnergyLv60Day:5934,berrySEnergyLv30Day:5536,berrySEnergyLv60Day:11868,rankOfBerry:2,rankOfFood:2,rankOfSkill:8}),
new Pokemon({no:208,name:"ハガネール",sleepType:"ぐっすり",specialty:"きのみ",berry:"ベリブのみ",food1:"あんみんトマト",food1Num:[1,2,4],food2:"マメミート",food2Num:[0,2,4],food3:"ほっこりポテト",food3Num:[0,0,3],skill:"食材ゲットS",fp:20,sec:3000,fullyEvolved:true,foodRate:0.154,skillRate:0.032,skillExpectionDay:1.77,berryEnergy:33,berryEnergyLv30Day:7929,berryEnergyLv60Day:8787,berrySEnergyLv30Day:11894,berrySEnergyLv60Day:13181,rankOfBerry:10,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:214,name:"ヘラクロス",sleepType:"うとうと",specialty:"スキル",berry:"ラムのみ",food1:"あまいミツ",food1Num:[1,2,4],food2:"あじわいキノコ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,4],skill:"食材ゲットS",fp:16,sec:2400,fullyEvolved:true,foodRate:0.158,skillRate:0.047,skillExpectionDay:4.25,berryEnergy:24,berryEnergyLv30Day:3889,berryEnergyLv60Day:7988,berrySEnergyLv30Day:7778,berrySEnergyLv60Day:15976,rankOfBerry:4,rankOfFood:2,rankOfSkill:8}),
new Pokemon({no:225,name:"デリバード",sleepType:"うとうと",specialty:"食材",berry:"シーヤのみ",food1:"とくせんエッグ",food1Num:[2,5,7],food2:"とくせんリンゴ",food2Num:[0,6,9],food3:"リラックスカカオ",food3Num:[0,0,5],skill:"食材ゲットS",fp:16,sec:2500,fullyEvolved:true,foodRate:0.188,skillRate:0.015,skillExpectionDay:1,berryEnergy:24,berryEnergyLv30Day:3734,berryEnergyLv60Day:7668,berrySEnergyLv30Day:7468,berrySEnergyLv60Day:15336,rankOfBerry:4,rankOfFood:7,rankOfSkill:3}),
new Pokemon({no:228,name:"デルビル",sleepType:"うとうと",specialty:"きのみ",berry:"ウイのみ",food1:"げきからハーブ",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,3,4],food3:"ふといながねぎ",food3Num:[0,0,3],skill:"エナジーチャージS",fp:5,sec:4900,fullyEvolved:false,foodRate:0.201,skillRate:0.044,skillExpectionDay:1.49,berryEnergy:31,berryEnergyLv30Day:4560,berryEnergyLv60Day:5054,berrySEnergyLv30Day:6840,berrySEnergyLv60Day:7581,rankOfBerry:4,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:229,name:"ヘルガー",sleepType:"うとうと",specialty:"きのみ",berry:"ウイのみ",food1:"げきからハーブ",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,3,4],food3:"ふといながねぎ",food3Num:[0,0,3],skill:"エナジーチャージS",fp:12,sec:3300,fullyEvolved:true,foodRate:0.203,skillRate:0.046,skillExpectionDay:2.32,berryEnergy:31,berryEnergyLv30Day:6772,berryEnergyLv60Day:7504,berrySEnergyLv30Day:10158,berrySEnergyLv60Day:11256,rankOfBerry:8,rankOfFood:2,rankOfSkill:5}),
new Pokemon({no:243,name:"ライコウ",sleepType:"すやすや",specialty:"スキル",berry:"ウブのみ",food1:"マメミート",food1Num:[1,2,4],food2:"げきからハーブ",food2Num:[0,2,3],food3:"ふといながねぎ",food3Num:[0,0,2],skill:"おてつだいブースト(でんき)",fp:30,sec:2100,fullyEvolved:true,foodRate:0.192,skillRate:0.019,skillExpectionDay:2.5,berryEnergy:25,berryEnergyLv30Day:4529,berryEnergyLv60Day:9509,berrySEnergyLv30Day:9058,berrySEnergyLv60Day:19018,rankOfBerry:6,rankOfFood:4,rankOfSkill:5}),
new Pokemon({no:244,name:"エンテイ",sleepType:"すやすや",specialty:"スキル",berry:"ヒメリのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"あんみんトマト",food2Num:[0,2,3],food3:"あじわいキノコ",food3Num:[0,0,3],skill:"おてつだいブースト(ほのお)",fp:30,sec:2400,fullyEvolved:true,foodRate:0.187,skillRate:0.023,skillExpectionDay:2.59,berryEnergy:27,berryEnergyLv30Day:4110,berryEnergyLv60Day:8986,berrySEnergyLv30Day:8220,berrySEnergyLv60Day:17972,rankOfBerry:5,rankOfFood:3,rankOfSkill:5}),
new Pokemon({no:245,name:"スイクン",sleepType:"ぐっすり",specialty:"スキル",berry:"オレンのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"ピュアなオイル",food2Num:[0,2,3],food3:"ワカクサコーン",food3Num:[0,0,2],skill:"おてつだいブースト(みず)",fp:30,sec:2700,fullyEvolved:true,foodRate:0.277,skillRate:0.026,skillExpectionDay:2.6,berryEnergy:31,berryEnergyLv30Day:4138,berryEnergyLv60Day:9171,berrySEnergyLv30Day:8276,berrySEnergyLv60Day:18342,rankOfBerry:6,rankOfFood:4,rankOfSkill:5}),
new Pokemon({no:246,name:"ヨーギラス",sleepType:"ぐっすり",specialty:"食材",berry:"オボンのみ",food1:"あったかジンジャー",food1Num:[2,5,7],food2:"ワカクサ大豆",food2Num:[0,5,8],food3:"マメミート",food3Num:[0,0,8],skill:"げんきチャージS",fp:5,sec:4800,fullyEvolved:false,foodRate:0.238,skillRate:0.041,skillExpectionDay:1.42,berryEnergy:30,berryEnergyLv30Day:2253,berryEnergyLv60Day:4992,berrySEnergyLv30Day:4506,berrySEnergyLv60Day:9984,rankOfBerry:1,rankOfFood:4,rankOfSkill:3}),
new Pokemon({no:247,name:"サナギラス",sleepType:"ぐっすり",specialty:"食材",berry:"オボンのみ",food1:"あったかジンジャー",food1Num:[2,5,7],food2:"ワカクサ大豆",food2Num:[0,5,8],food3:"マメミート",food3Num:[0,0,8],skill:"げんきチャージS",fp:12,sec:3600,fullyEvolved:false,foodRate:0.247,skillRate:0.045,skillExpectionDay:2.08,berryEnergy:30,berryEnergyLv30Day:3003,berryEnergyLv60Day:6657,berrySEnergyLv30Day:6006,berrySEnergyLv60Day:13314,rankOfBerry:3,rankOfFood:6,rankOfSkill:5}),
new Pokemon({no:248,name:"バンギラス",sleepType:"うとうと",specialty:"食材",berry:"ウイのみ",food1:"あったかジンジャー",food1Num:[2,5,7],food2:"ワカクサ大豆",food2Num:[0,5,8],food3:"マメミート",food3Num:[0,0,8],skill:"げんきチャージS",fp:25,sec:2700,fullyEvolved:true,foodRate:0.266,skillRate:0.052,skillExpectionDay:3.2,berryEnergy:31,berryEnergyLv30Day:4138,berryEnergyLv60Day:9171,berrySEnergyLv30Day:8276,berrySEnergyLv60Day:18342,rankOfBerry:6,rankOfFood:10,rankOfSkill:7}),
new Pokemon({no:280,name:"ラルトス",sleepType:"すやすや",specialty:"スキル",berry:"マゴのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"ワカクサコーン",food2Num:[0,1,2],food3:"ふといながねぎ",food3Num:[0,0,2],skill:"げんきオールS",fp:5,sec:4800,fullyEvolved:false,foodRate:0.145,skillRate:0.043,skillExpectionDay:2.49,berryEnergy:26,berryEnergyLv30Day:2018,berryEnergyLv60Day:4327,berrySEnergyLv30Day:4036,berrySEnergyLv60Day:8654,rankOfBerry:0,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:281,name:"キルリア",sleepType:"すやすや",specialty:"スキル",berry:"マゴのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"ワカクサコーン",food2Num:[0,1,2],food3:"ふといながねぎ",food3Num:[0,0,2],skill:"げんきオールS",fp:12,sec:3500,fullyEvolved:false,foodRate:0.146,skillRate:0.043,skillExpectionDay:3.04,berryEnergy:26,berryEnergyLv30Day:2768,berryEnergyLv60Day:5934,berrySEnergyLv30Day:5536,berrySEnergyLv60Day:11868,rankOfBerry:2,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:282,name:"サーナイト",sleepType:"すやすや",specialty:"スキル",berry:"マゴのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"ワカクサコーン",food2Num:[0,1,2],food3:"ふといながねぎ",food3Num:[0,0,2],skill:"げんきオールS",fp:20,sec:2400,fullyEvolved:true,foodRate:0.144,skillRate:0.042,skillExpectionDay:3.91,berryEnergy:26,berryEnergyLv30Day:4036,berryEnergyLv60Day:8654,berrySEnergyLv30Day:8072,berrySEnergyLv60Day:17308,rankOfBerry:5,rankOfFood:2,rankOfSkill:7}),
new Pokemon({no:287,name:"ナマケロ",sleepType:"すやすや",specialty:"きのみ",berry:"キーのみ",food1:"あんみんトマト",food1Num:[1,2,4],food2:"あまいミツ",food2Num:[0,2,4],food3:"とくせんリンゴ",food3Num:[0,0,4],skill:"食材ゲットS",fp:5,sec:4900,fullyEvolved:false,foodRate:0.216,skillRate:0.019,skillExpectionDay:0.64,berryEnergy:28,berryEnergyLv30Day:4119,berryEnergyLv60Day:4565,berrySEnergyLv30Day:6179,berrySEnergyLv60Day:6848,rankOfBerry:3,rankOfFood:1,rankOfSkill:2}),
new Pokemon({no:288,name:"ヤルキモノ",sleepType:"うとうと",specialty:"きのみ",berry:"キーのみ",food1:"あんみんトマト",food1Num:[1,2,4],food2:"あまいミツ",food2Num:[0,2,4],food3:"とくせんリンゴ",food3Num:[0,0,4],skill:"食材ゲットS",fp:12,sec:3200,fullyEvolved:true,foodRate:0.204,skillRate:0.015,skillExpectionDay:0.78,berryEnergy:28,berryEnergyLv30Day:6307,berryEnergyLv60Day:6989,berrySEnergyLv30Day:9461,berrySEnergyLv60Day:10484,rankOfBerry:7,rankOfFood:2,rankOfSkill:2}),
new Pokemon({no:289,name:"ケッキング",sleepType:"すやすや",specialty:"きのみ",berry:"キーのみ",food1:"あんみんトマト",food1Num:[1,2,4],food2:"あまいミツ",food2Num:[0,2,4],food3:"とくせんリンゴ",food3Num:[0,0,4],skill:"食材ゲットS",fp:22,sec:3800,fullyEvolved:true,foodRate:0.339,skillRate:0.067,skillExpectionDay:2.93,berryEnergy:28,berryEnergyLv30Day:5311,berryEnergyLv60Day:5886,berrySEnergyLv30Day:7967,berrySEnergyLv60Day:8829,rankOfBerry:5,rankOfFood:4,rankOfSkill:6}),
new Pokemon({no:302,name:"ヤミラミ",sleepType:"うとうと",specialty:"スキル",berry:"ウイのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"あじわいキノコ",food2Num:[0,2,3],food3:"リラックスカカオ",food3Num:[0,0,3],skill:"ゆめのかけらゲットS(ランダム)",fp:16,sec:3600,fullyEvolved:true,foodRate:0.188,skillRate:0.068,skillExpectionDay:4.14,berryEnergy:31,berryEnergyLv30Day:3104,berryEnergyLv60Day:6879,berrySEnergyLv30Day:6208,berrySEnergyLv60Day:13758,rankOfBerry:3,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:304,name:"ココドラ",sleepType:"ぐっすり",specialty:"食材",berry:"ベリブのみ",food1:"マメミート",food1Num:[2,5,7],food2:"めざましコーヒー",food2Num:[0,3,5],food3:"ワカクサ大豆",food3Num:[0,0,7],skill:"げんきチャージS",fp:5,sec:5700,fullyEvolved:false,foodRate:0.273,skillRate:0.046,skillExpectionDay:1.34,berryEnergy:33,berryEnergyLv30Day:2087,berryEnergyLv60Day:4625,berrySEnergyLv30Day:4174,berrySEnergyLv60Day:9250,rankOfBerry:1,rankOfFood:4,rankOfSkill:3}),
new Pokemon({no:305,name:"コドラ",sleepType:"ぐっすり",specialty:"食材",berry:"ベリブのみ",food1:"マメミート",food1Num:[2,5,7],food2:"めざましコーヒー",food2Num:[0,3,5],food3:"ワカクサ大豆",food3Num:[0,0,7],skill:"げんきチャージS",fp:12,sec:4200,fullyEvolved:false,foodRate:0.277,skillRate:0.048,skillExpectionDay:1.9,berryEnergy:33,berryEnergyLv30Day:2832,berryEnergyLv60Day:6276,berrySEnergyLv30Day:5664,berrySEnergyLv60Day:12552,rankOfBerry:2,rankOfFood:6,rankOfSkill:4}),
new Pokemon({no:306,name:"ボスゴドラ",sleepType:"ぐっすり",specialty:"食材",berry:"ベリブのみ",food1:"マメミート",food1Num:[2,5,7],food2:"めざましコーヒー",food2Num:[0,3,5],food3:"ワカクサ大豆",food3Num:[0,0,7],skill:"げんきチャージS",fp:20,sec:3000,fullyEvolved:true,foodRate:0.285,skillRate:0.052,skillExpectionDay:2.88,berryEnergy:33,berryEnergyLv30Day:3965,berryEnergyLv60Day:8787,berrySEnergyLv30Day:7930,berrySEnergyLv60Day:17574,rankOfBerry:5,rankOfFood:9,rankOfSkill:6}),
new Pokemon({no:316,name:"ゴクリン",sleepType:"うとうと",specialty:"スキル",berry:"カゴのみ",food1:"ワカクサ大豆",food1Num:[1,2,4],food2:"あじわいキノコ",food2Num:[0,1,2],food3:"あまいミツ",food3Num:[0,0,4],skill:"ゆめのかけらゲットS(ランダム)",fp:5,sec:5900,fullyEvolved:false,foodRate:0.214,skillRate:0.063,skillExpectionDay:2.77,berryEnergy:32,berryEnergyLv30Day:1955,berryEnergyLv60Day:4332,berrySEnergyLv30Day:3910,berrySEnergyLv60Day:8664,rankOfBerry:0,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:317,name:"マルノーム",sleepType:"うとうと",specialty:"スキル",berry:"カゴのみ",food1:"ワカクサ大豆",food1Num:[1,2,4],food2:"あじわいキノコ",food2Num:[0,1,2],food3:"あまいミツ",food3Num:[0,0,4],skill:"ゆめのかけらゲットS(ランダム)",fp:12,sec:3500,fullyEvolved:true,foodRate:0.21,skillRate:0.07,skillExpectionDay:4.32,berryEnergy:32,berryEnergyLv30Day:3295,berryEnergyLv60Day:7303,berrySEnergyLv30Day:6590,berrySEnergyLv60Day:14606,rankOfBerry:4,rankOfFood:2,rankOfSkill:8}),
new Pokemon({no:333,name:"チルット",sleepType:"ぐっすり",specialty:"きのみ",berry:"シーヤのみ",food1:"とくせんエッグ",food1Num:[1,2,4],food2:"ワカクサ大豆",food2Num:[0,3,4],food3:"とくせんリンゴ",food3Num:[0,0,5],skill:"げんきチャージS",fp:5,sec:4200,fullyEvolved:false,foodRate:0.177,skillRate:0.032,skillExpectionDay:1.27,berryEnergy:24,berryEnergyLv30Day:4445,berryEnergyLv60Day:4565,berrySEnergyLv30Day:6668,berrySEnergyLv60Day:6848,rankOfBerry:3,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:334,name:"チルタリス",sleepType:"うとうと",specialty:"きのみ",berry:"ヤチェのみ",food1:"とくせんエッグ",food1Num:[1,2,4],food2:"ワカクサ大豆",food2Num:[0,3,4],food3:"とくせんリンゴ",food3Num:[0,0,5],skill:"げんきチャージS",fp:12,sec:3700,fullyEvolved:true,foodRate:0.258,skillRate:0.061,skillExpectionDay:2.74,berryEnergy:35,berryEnergyLv30Day:6819,berryEnergyLv60Day:7556,berrySEnergyLv30Day:10229,berrySEnergyLv60Day:11334,rankOfBerry:8,rankOfFood:2,rankOfSkill:6}),
new Pokemon({no:353,name:"カゲボウズ",sleepType:"うとうと",specialty:"きのみ",berry:"ブリーのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,2,4],food3:"あじわいキノコ",food3Num:[0,0,3],skill:"エナジーチャージS(ランダム)",fp:5,sec:3900,fullyEvolved:false,foodRate:0.171,skillRate:0.026,skillExpectionDay:1.11,berryEnergy:26,berryEnergyLv30Day:4968,berryEnergyLv60Day:5325,berrySEnergyLv30Day:7452,berrySEnergyLv60Day:7988,rankOfBerry:4,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:354,name:"ジュペッタ",sleepType:"うとうと",specialty:"きのみ",berry:"ブリーのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,2,4],food3:"あじわいキノコ",food3Num:[0,0,3],skill:"エナジーチャージS(ランダム)",fp:16,sec:2600,fullyEvolved:true,foodRate:0.179,skillRate:0.033,skillExpectionDay:2.11,berryEnergy:26,berryEnergyLv30Day:7451,berryEnergyLv60Day:7988,berrySEnergyLv30Day:11177,berrySEnergyLv60Day:11982,rankOfBerry:9,rankOfFood:2,rankOfSkill:5}),
new Pokemon({no:359,name:"アブソル",sleepType:"うとうと",specialty:"食材",berry:"ウイのみ",food1:"リラックスカカオ",food1Num:[2,5,7],food2:"とくせんリンゴ",food2Num:[0,8,12],food3:"あじわいキノコ",food3Num:[0,0,7],skill:"エナジーチャージS",fp:16,sec:3100,fullyEvolved:true,foodRate:0.178,skillRate:0.038,skillExpectionDay:2.04,berryEnergy:31,berryEnergyLv30Day:3604,berryEnergyLv60Day:7988,berrySEnergyLv30Day:7208,berrySEnergyLv60Day:15976,rankOfBerry:4,rankOfFood:5,rankOfSkill:5}),
new Pokemon({no:360,name:"ソーナノ",sleepType:"ぐっすり",specialty:"スキル",berry:"マゴのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"あじわいキノコ",food2Num:[0,1,2],food3:"ピュアなオイル",food3Num:[0,0,3],skill:"げんきエールS",fp:5,sec:5800,fullyEvolved:false,foodRate:0.213,skillRate:0.059,skillExpectionDay:2.69,berryEnergy:26,berryEnergyLv30Day:1670,berryEnergyLv60Day:3581,berrySEnergyLv30Day:3340,berrySEnergyLv60Day:7162,rankOfBerry:-1,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:363,name:"タマザラシ",sleepType:"ぐっすり",specialty:"きのみ",berry:"チーゴのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"マメミート",food2Num:[0,3,4],food3:"あったかジンジャー",food3Num:[0,0,4],skill:"食材ゲットS",fp:5,sec:5600,fullyEvolved:false,foodRate:0.224,skillRate:0.023,skillExpectionDay:0.68,berryEnergy:32,berryEnergyLv30Day:4119,berryEnergyLv60Day:4565,berrySEnergyLv30Day:6179,berrySEnergyLv60Day:6848,rankOfBerry:3,rankOfFood:1,rankOfSkill:2}),
new Pokemon({no:364,name:"トドグラー",sleepType:"ぐっすり",specialty:"きのみ",berry:"チーゴのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"マメミート",food2Num:[0,3,4],food3:"あったかジンジャー",food3Num:[0,0,4],skill:"食材ゲットS",fp:12,sec:4000,fullyEvolved:false,foodRate:0.221,skillRate:0.021,skillExpectionDay:0.87,berryEnergy:32,berryEnergyLv30Day:5767,berryEnergyLv60Day:6390,berrySEnergyLv30Day:8651,berrySEnergyLv60Day:9585,rankOfBerry:6,rankOfFood:2,rankOfSkill:2}),
new Pokemon({no:365,name:"トドゼルガ",sleepType:"ぐっすり",specialty:"きのみ",berry:"チーゴのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"マメミート",food2Num:[0,3,4],food3:"あったかジンジャー",food3Num:[0,0,4],skill:"食材ゲットS",fp:20,sec:3000,fullyEvolved:true,foodRate:0.223,skillRate:0.022,skillExpectionDay:1.22,berryEnergy:32,berryEnergyLv30Day:7689,berryEnergyLv60Day:8521,berrySEnergyLv30Day:11534,berrySEnergyLv60Day:12782,rankOfBerry:10,rankOfFood:3,rankOfSkill:3}),
new Pokemon({no:403,name:"コリンク",sleepType:"すやすや",specialty:"食材",berry:"ウブのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"ピュアなオイル",food2Num:[0,4,7],food3:"めざましコーヒー",food3Num:[0,0,5],skill:"料理パワーアップS",fp:5,sec:4400,fullyEvolved:false,foodRate:0.181,skillRate:0.018,skillExpectionDay:0.68,berryEnergy:25,berryEnergyLv30Day:2162,berryEnergyLv60Day:4539,berrySEnergyLv30Day:4324,berrySEnergyLv60Day:9078,rankOfBerry:1,rankOfFood:3,rankOfSkill:2}),
new Pokemon({no:404,name:"ルクシオ",sleepType:"すやすや",specialty:"食材",berry:"ウブのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"ピュアなオイル",food2Num:[0,4,7],food3:"めざましコーヒー",food3Num:[0,0,5],skill:"料理パワーアップS",fp:12,sec:3200,fullyEvolved:false,foodRate:0.182,skillRate:0.018,skillExpectionDay:0.93,berryEnergy:25,berryEnergyLv30Day:2972,berryEnergyLv60Day:6241,berrySEnergyLv30Day:5944,berrySEnergyLv60Day:12482,rankOfBerry:2,rankOfFood:5,rankOfSkill:2}),
new Pokemon({no:405,name:"レントラー",sleepType:"すやすや",specialty:"食材",berry:"ウブのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"ピュアなオイル",food2Num:[0,4,7],food3:"めざましコーヒー",food3Num:[0,0,5],skill:"料理パワーアップS",fp:20,sec:2400,fullyEvolved:true,foodRate:0.2,skillRate:0.023,skillExpectionDay:1.59,berryEnergy:25,berryEnergyLv30Day:3963,berryEnergyLv60Day:8321,berrySEnergyLv30Day:7926,berrySEnergyLv60Day:16642,rankOfBerry:5,rankOfFood:8,rankOfSkill:4}),
new Pokemon({no:438,name:"ウソハチ",sleepType:"ぐっすり",specialty:"スキル",berry:"オボンのみ",food1:"あんみんトマト",food1Num:[1,2,4],food2:"ワカクサ大豆",food2Num:[0,2,4],food3:"あじわいキノコ",food3Num:[0,0,2],skill:"エナジーチャージM",fp:5,sec:6300,fullyEvolved:false,foodRate:0.189,skillRate:0.061,skillExpectionDay:2.61,berryEnergy:30,berryEnergyLv30Day:1716,berryEnergyLv60Day:3804,berrySEnergyLv30Day:3432,berrySEnergyLv60Day:7608,rankOfBerry:0,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:439,name:"マネネ",sleepType:"ぐっすり",specialty:"食材",berry:"マゴのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,6],food3:"ふといながねぎ",food3Num:[0,0,4],skill:"エナジーチャージS",fp:5,sec:4300,fullyEvolved:false,foodRate:0.201,skillRate:0.032,skillExpectionDay:1.24,berryEnergy:26,berryEnergyLv30Day:2253,berryEnergyLv60Day:4830,berrySEnergyLv30Day:4506,berrySEnergyLv60Day:9660,rankOfBerry:1,rankOfFood:4,rankOfSkill:3}),
new Pokemon({no:447,name:"リオル",sleepType:"ぐっすり",specialty:"スキル",berry:"クラボのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"ほっこりポテト",food2Num:[0,2,4],food3:"とくせんエッグ",food3Num:[0,0,4],skill:"ゆめのかけらゲットS",fp:5,sec:4200,fullyEvolved:false,foodRate:0.126,skillRate:0.038,skillExpectionDay:2.5,berryEnergy:27,berryEnergyLv30Day:2348,berryEnergyLv60Day:5135,berrySEnergyLv30Day:4696,berrySEnergyLv60Day:10270,rankOfBerry:1,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:448,name:"ルカリオ",sleepType:"ぐっすり",specialty:"スキル",berry:"クラボのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"ほっこりポテト",food2Num:[0,2,4],food3:"とくせんエッグ",food3Num:[0,0,4],skill:"ゆめのかけらゲットS",fp:20,sec:2600,fullyEvolved:true,foodRate:0.15,skillRate:0.051,skillExpectionDay:4.26,berryEnergy:27,berryEnergyLv30Day:3793,berryEnergyLv60Day:8295,berrySEnergyLv30Day:7586,berrySEnergyLv60Day:16590,rankOfBerry:5,rankOfFood:2,rankOfSkill:8}),
new Pokemon({no:453,name:"グレッグル",sleepType:"うとうと",specialty:"食材",berry:"カゴのみ",food1:"ピュアなオイル",food1Num:[2,5,7],food2:"マメミート",food2Num:[0,5,8],food3:"",food3Num:[],skill:"エナジーチャージS",fp:5,sec:5600,fullyEvolved:false,foodRate:0.228,skillRate:0.042,skillExpectionDay:1.25,berryEnergy:32,berryEnergyLv30Day:2060,berryEnergyLv60Day:4565,berrySEnergyLv30Day:4120,berrySEnergyLv60Day:9130,rankOfBerry:1,rankOfFood:3,rankOfSkill:3}),
new Pokemon({no:454,name:"ドクロッグ",sleepType:"うとうと",specialty:"食材",berry:"カゴのみ",food1:"ピュアなオイル",food1Num:[2,5,7],food2:"マメミート",food2Num:[0,5,8],food3:"",food3Num:[],skill:"エナジーチャージS",fp:12,sec:3400,fullyEvolved:true,foodRate:0.229,skillRate:0.043,skillExpectionDay:2.1,berryEnergy:32,berryEnergyLv30Day:3392,berryEnergyLv60Day:7518,berrySEnergyLv30Day:6784,berrySEnergyLv60Day:15036,rankOfBerry:4,rankOfFood:6,rankOfSkill:5}),
new Pokemon({no:459,name:"ユキカブリ",sleepType:"ぐっすり",specialty:"食材",berry:"チーゴのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"とくせんエッグ",food2Num:[0,4,7],food3:"あじわいキノコ",food3Num:[0,0,5],skill:"エナジーチャージS(ランダム)",fp:5,sec:5600,fullyEvolved:false,foodRate:0.251,skillRate:0.044,skillExpectionDay:1.31,berryEnergy:32,berryEnergyLv30Day:2060,berryEnergyLv60Day:4565,berrySEnergyLv30Day:4120,berrySEnergyLv60Day:9130,rankOfBerry:1,rankOfFood:4,rankOfSkill:3}),
new Pokemon({no:460,name:"ユキノオー",sleepType:"ぐっすり",specialty:"食材",berry:"チーゴのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"とくせんエッグ",food2Num:[0,4,7],food3:"あじわいキノコ",food3Num:[0,0,5],skill:"エナジーチャージS(ランダム)",fp:12,sec:3000,fullyEvolved:true,foodRate:0.25,skillRate:0.044,skillExpectionDay:2.44,berryEnergy:32,berryEnergyLv30Day:3844,berryEnergyLv60Day:8521,berrySEnergyLv30Day:7688,berrySEnergyLv60Day:17042,rankOfBerry:5,rankOfFood:8,rankOfSkill:5}),
new Pokemon({no:462,name:"ジバコイル",sleepType:"ぐっすり",specialty:"スキル",berry:"ベリブのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"げきからハーブ",food2Num:[0,2,3],food3:"",food3Num:[],skill:"料理パワーアップS",fp:22,sec:3100,fullyEvolved:true,foodRate:0.179,skillRate:0.062,skillExpectionDay:4.32,berryEnergy:33,berryEnergyLv30Day:3837,berryEnergyLv60Day:8503,berrySEnergyLv30Day:7674,berrySEnergyLv60Day:17006,rankOfBerry:5,rankOfFood:2,rankOfSkill:8}),
new Pokemon({no:468,name:"トゲキッス",sleepType:"すやすや",specialty:"スキル",berry:"モモンのみ",food1:"とくせんエッグ",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,2,4],food3:"リラックスカカオ",food3Num:[0,0,3],skill:"ゆびをふる",fp:22,sec:2600,fullyEvolved:true,foodRate:0.158,skillRate:0.053,skillExpectionDay:4.39,berryEnergy:26,berryEnergyLv30Day:3726,berryEnergyLv60Day:7988,berrySEnergyLv30Day:7452,berrySEnergyLv60Day:15976,rankOfBerry:4,rankOfFood:2,rankOfSkill:8}),
new Pokemon({no:470,name:"リーフィア",sleepType:"うとうと",specialty:"スキル",berry:"ドリのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"げんきエールS",fp:20,sec:3000,fullyEvolved:true,foodRate:0.205,skillRate:0.059,skillExpectionDay:4.27,berryEnergy:30,berryEnergyLv30Day:3604,berryEnergyLv60Day:7988,berrySEnergyLv30Day:7208,berrySEnergyLv60Day:15976,rankOfBerry:4,rankOfFood:2,rankOfSkill:8}),
new Pokemon({no:471,name:"グレイシア",sleepType:"ぐっすり",specialty:"スキル",berry:"チーゴのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"料理パワーアップS",fp:20,sec:3200,fullyEvolved:true,foodRate:0.219,skillRate:0.063,skillExpectionDay:4.27,berryEnergy:32,berryEnergyLv30Day:3604,berryEnergyLv60Day:7988,berrySEnergyLv30Day:7208,berrySEnergyLv60Day:15976,rankOfBerry:4,rankOfFood:2,rankOfSkill:8}),
new Pokemon({no:475,name:"エルレイド",sleepType:"ぐっすり",specialty:"スキル",berry:"クラボのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"ワカクサコーン",food2Num:[0,1,2],food3:"ふといながねぎ",food3Num:[0,0,2],skill:"おてつだいサポートS",fp:22,sec:2400,fullyEvolved:true,foodRate:0.147,skillRate:0.054,skillExpectionDay:4.74,berryEnergy:27,berryEnergyLv30Day:4110,berryEnergyLv60Day:8986,berrySEnergyLv30Day:8220,berrySEnergyLv60Day:17972,rankOfBerry:5,rankOfFood:2,rankOfSkill:9}),
new Pokemon({no:700,name:"ニンフィア",sleepType:"すやすや",specialty:"スキル",berry:"モモンのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"げんきオールS",fp:20,sec:2600,fullyEvolved:true,foodRate:0.178,skillRate:0.04,skillExpectionDay:3.56,berryEnergy:26,berryEnergyLv30Day:3726,berryEnergyLv60Day:7988,berrySEnergyLv30Day:7452,berrySEnergyLv60Day:15976,rankOfBerry:4,rankOfFood:2,rankOfSkill:7}),
new Pokemon({no:702,name:"デデンネ",sleepType:"すやすや",specialty:"スキル",berry:"ウブのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"ワカクサコーン",food3Num:[0,0,2],skill:"料理チャンスS",fp:16,sec:2500,fullyEvolved:true,foodRate:0.177,skillRate:0.045,skillExpectionDay:3.99,berryEnergy:25,berryEnergyLv30Day:3804,berryEnergyLv60Day:7988,berrySEnergyLv30Day:7608,berrySEnergyLv60Day:15976,rankOfBerry:4,rankOfFood:3,rankOfSkill:8}),
new Pokemon({no:736,name:"アゴジムシ",sleepType:"うとうと",specialty:"食材",berry:"ラムのみ",food1:"めざましコーヒー",food1Num:[2,5,7],food2:"あじわいキノコ",food2Num:[0,4,7],food3:"あまいミツ",food3Num:[0,0,11],skill:"エナジーチャージS",fp:5,sec:4600,fullyEvolved:false,foodRate:0.155,skillRate:0.029,skillExpectionDay:1.05,berryEnergy:24,berryEnergyLv30Day:2029,berryEnergyLv60Day:4168,berrySEnergyLv30Day:4058,berrySEnergyLv60Day:8336,rankOfBerry:0,rankOfFood:2,rankOfSkill:3}),
new Pokemon({no:737,name:"デンヂムシ",sleepType:"うとうと",specialty:"食材",berry:"ラムのみ",food1:"めざましコーヒー",food1Num:[2,5,7],food2:"あじわいキノコ",food2Num:[0,4,7],food3:"あまいミツ",food3Num:[0,0,11],skill:"エナジーチャージS",fp:12,sec:3300,fullyEvolved:false,foodRate:0.154,skillRate:0.028,skillExpectionDay:1.41,berryEnergy:24,berryEnergyLv30Day:2829,berryEnergyLv60Day:5809,berrySEnergyLv30Day:5658,berrySEnergyLv60Day:11618,rankOfBerry:2,rankOfFood:4,rankOfSkill:3}),
new Pokemon({no:738,name:"クワガノン",sleepType:"うとうと",specialty:"食材",berry:"ラムのみ",food1:"めざましコーヒー",food1Num:[2,5,7],food2:"あじわいキノコ",food2Num:[0,4,7],food3:"あまいミツ",food3Num:[0,0,11],skill:"エナジーチャージS",fp:20,sec:2800,fullyEvolved:true,foodRate:0.194,skillRate:0.051,skillExpectionDay:3.03,berryEnergy:24,berryEnergyLv30Day:3334,berryEnergyLv60Day:6847,berrySEnergyLv30Day:6668,berrySEnergyLv60Day:13694,rankOfBerry:3,rankOfFood:6,rankOfSkill:7}),
new Pokemon({no:759,name:"ヌイコグマ",sleepType:"ぐっすり",specialty:"食材",berry:"クラボのみ",food1:"ワカクサコーン",food1Num:[2,5,7],food2:"マメミート",food2Num:[0,6,10],food3:"とくせんエッグ",food3Num:[0,0,9],skill:"エナジーチャージS(ランダム)",fp:5,sec:4100,fullyEvolved:false,foodRate:0.225,skillRate:0.011,skillExpectionDay:0.45,berryEnergy:27,berryEnergyLv30Day:2406,berryEnergyLv60Day:5260,berrySEnergyLv30Day:4812,berrySEnergyLv60Day:10520,rankOfBerry:1,rankOfFood:5,rankOfSkill:1}),
new Pokemon({no:760,name:"キテルグマ",sleepType:"ぐっすり",specialty:"食材",berry:"クラボのみ",food1:"ワカクサコーン",food1Num:[2,5,7],food2:"マメミート",food2Num:[0,6,10],food3:"とくせんエッグ",food3Num:[0,0,9],skill:"エナジーチャージS(ランダム)",fp:12,sec:2800,fullyEvolved:true,foodRate:0.229,skillRate:0.013,skillExpectionDay:0.77,berryEnergy:27,berryEnergyLv30Day:3522,berryEnergyLv60Day:7703,berrySEnergyLv30Day:7044,berrySEnergyLv60Day:15406,rankOfBerry:4,rankOfFood:8,rankOfSkill:2}),
new Pokemon({no:764,name:"キュワワー",sleepType:"すやすや",specialty:"食材",berry:"モモンのみ",food1:"ワカクサコーン",food1Num:[2,5,7],food2:"あったかジンジャー",food2Num:[0,6,9],food3:"リラックスカカオ",food3Num:[0,0,7],skill:"げんきエールS",fp:16,sec:2500,fullyEvolved:true,foodRate:0.139,skillRate:0.022,skillExpectionDay:1.46,berryEnergy:26,berryEnergyLv30Day:3875,berryEnergyLv60Day:8307,berrySEnergyLv30Day:7750,berrySEnergyLv60Day:16614,rankOfBerry:5,rankOfFood:5,rankOfSkill:3}),
new Pokemon({no:845,name:"ウッウ",sleepType:"ぐっすり",specialty:"食材",berry:"シーヤのみ",food1:"ピュアなオイル",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,7],food3:"とくせんエッグ",food3Num:[0,0,8],skill:"料理チャンスS",fp:16,sec:2700,fullyEvolved:true,foodRate:0.165,skillRate:0.033,skillExpectionDay:2.03,berryEnergy:24,berryEnergyLv30Day:3457,berryEnergyLv60Day:7100,berrySEnergyLv30Day:6914,berrySEnergyLv60Day:14200,rankOfBerry:3,rankOfFood:5,rankOfSkill:5}),
new Pokemon({no:906,name:"ニャオハ",sleepType:"うとうと",specialty:"食材",berry:"ドリのみ",food1:"ほっこりポテト",food1Num:[2,5,7],food2:"モーモーミルク",food2Num:[0,6,9],food3:"あったかジンジャー",food3Num:[0,0,8],skill:"料理パワーアップS",fp:5,sec:4600,fullyEvolved:false,foodRate:0.208,skillRate:0.023,skillExpectionDay:0.83,berryEnergy:30,berryEnergyLv30Day:2351,berryEnergyLv60Day:5210,berrySEnergyLv30Day:4702,berrySEnergyLv60Day:10420,rankOfBerry:1,rankOfFood:4,rankOfSkill:2}),
new Pokemon({no:907,name:"ニャローテ",sleepType:"うとうと",specialty:"食材",berry:"ドリのみ",food1:"ほっこりポテト",food1Num:[2,5,7],food2:"モーモーミルク",food2Num:[0,6,9],food3:"あったかジンジャー",food3Num:[0,0,8],skill:"料理パワーアップS",fp:12,sec:3500,fullyEvolved:false,foodRate:0.209,skillRate:0.023,skillExpectionDay:1.09,berryEnergy:30,berryEnergyLv30Day:3089,berryEnergyLv60Day:6847,berrySEnergyLv30Day:6178,berrySEnergyLv60Day:13694,rankOfBerry:3,rankOfFood:5,rankOfSkill:3}),
new Pokemon({no:908,name:"マスカーニャ",sleepType:"うとうと",specialty:"食材",berry:"ウイのみ",food1:"ほっこりポテト",food1Num:[2,5,7],food2:"モーモーミルク",food2Num:[0,6,9],food3:"あったかジンジャー",food3Num:[0,0,8],skill:"料理パワーアップS",fp:20,sec:2600,fullyEvolved:true,foodRate:0.19,skillRate:0.022,skillExpectionDay:1.41,berryEnergy:31,berryEnergyLv30Day:4297,berryEnergyLv60Day:9524,berrySEnergyLv30Day:8594,berrySEnergyLv60Day:19048,rankOfBerry:6,rankOfFood:7,rankOfSkill:3}),
new Pokemon({no:909,name:"ホゲータ",sleepType:"すやすや",specialty:"食材",berry:"ヒメリのみ",food1:"とくせんリンゴ",food1Num:[2,5,7],food2:"マメミート",food2Num:[0,4,6],food3:"げきからハーブ",food3Num:[0,0,5],skill:"げんきチャージS",fp:5,sec:4200,fullyEvolved:false,foodRate:0.254,skillRate:0.053,skillExpectionDay:2.1,berryEnergy:27,berryEnergyLv30Day:2348,berryEnergyLv60Day:5135,berrySEnergyLv30Day:4696,berrySEnergyLv60Day:10270,rankOfBerry:1,rankOfFood:5,rankOfSkill:5}),
new Pokemon({no:910,name:"アチゲータ",sleepType:"すやすや",specialty:"食材",berry:"ヒメリのみ",food1:"とくせんリンゴ",food1Num:[2,5,7],food2:"マメミート",food2Num:[0,4,6],food3:"げきからハーブ",food3Num:[0,0,5],skill:"げんきチャージS",fp:12,sec:3100,fullyEvolved:false,foodRate:0.247,skillRate:0.05,skillExpectionDay:2.68,berryEnergy:27,berryEnergyLv30Day:3182,berryEnergyLv60Day:6957,berrySEnergyLv30Day:6364,berrySEnergyLv60Day:13914,rankOfBerry:3,rankOfFood:7,rankOfSkill:6}),
new Pokemon({no:911,name:"ラウドボーン",sleepType:"うとうと",specialty:"食材",berry:"ブリーのみ",food1:"とくせんリンゴ",food1Num:[2,5,7],food2:"マメミート",food2Num:[0,4,6],food3:"げきからハーブ",food3Num:[0,0,5],skill:"げんきチャージS",fp:20,sec:2700,fullyEvolved:true,foodRate:0.268,skillRate:0.062,skillExpectionDay:3.82,berryEnergy:26,berryEnergyLv30Day:3588,berryEnergyLv60Day:7692,berrySEnergyLv30Day:7176,berrySEnergyLv60Day:15384,rankOfBerry:4,rankOfFood:10,rankOfSkill:8}),
new Pokemon({no:912,name:"クワッス",sleepType:"ぐっすり",specialty:"食材",berry:"オレンのみ",food1:"ワカクサ大豆",food1Num:[2,5,7],food2:"ふといながねぎ",food2Num:[0,2,4],food3:"ピュアなオイル",food3Num:[0,0,6],skill:"エナジーチャージM",fp:5,sec:4800,fullyEvolved:false,foodRate:0.261,skillRate:0.028,skillExpectionDay:0.97,berryEnergy:31,berryEnergyLv30Day:2328,berryEnergyLv60Day:5159,berrySEnergyLv30Day:4656,berrySEnergyLv60Day:10318,rankOfBerry:1,rankOfFood:5,rankOfSkill:2}),
new Pokemon({no:913,name:"ウェルカモ",sleepType:"ぐっすり",specialty:"食材",berry:"オレンのみ",food1:"ワカクサ大豆",food1Num:[2,5,7],food2:"ふといながねぎ",food2Num:[0,2,4],food3:"ピュアなオイル",food3Num:[0,0,6],skill:"エナジーチャージM",fp:12,sec:3600,fullyEvolved:false,foodRate:0.259,skillRate:0.027,skillExpectionDay:1.25,berryEnergy:31,berryEnergyLv30Day:3104,berryEnergyLv60Day:6879,berrySEnergyLv30Day:6208,berrySEnergyLv60Day:13758,rankOfBerry:3,rankOfFood:7,rankOfSkill:3}),
new Pokemon({no:914,name:"ウェーニバル",sleepType:"ぐっすり",specialty:"食材",berry:"クラボのみ",food1:"ワカクサ大豆",food1Num:[2,5,7],food2:"ふといながねぎ",food2Num:[0,2,4],food3:"ピュアなオイル",food3Num:[0,0,6],skill:"エナジーチャージM",fp:20,sec:2600,fullyEvolved:true,foodRate:0.232,skillRate:0.024,skillExpectionDay:1.53,berryEnergy:27,berryEnergyLv30Day:3793,berryEnergyLv60Day:8295,berrySEnergyLv30Day:7586,berrySEnergyLv60Day:16590,rankOfBerry:5,rankOfFood:9,rankOfSkill:4})
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        ];



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

    }

    getPokemonByName(name){
        for (let i = 0; i < this.pokemons.length; i++){
            if (this.pokemons[i].name == name) return this.pokemons[i];
        }
        return null;
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
        return Math.round(Math.max(powerBase + (lv - 1), powerBase * Math.pow(1.025, lv - 1)) * 100) / 100;
    }


}


class Pokemon{
    constructor(json){
        Object.assign(this, json);
        this.indicatorChar = "|";
    }

    setFoodCombinations(){
        this.foodCombinations = [];
        let code = "A";

        for (let ib = 0; ib < 2; ib++){         //2つ目の食材はAかB
            code = 'A' + String.fromCharCode(65 + ib);
            this.foodCombinations.push(new FoodCombination(this, 30, this.getOtetsudaiCountDay(30), code));

            for (let ic = 0; ic < 3; ic++){      //3つ目の食材はAかBかC なお、Cがない場合もある
                if (this.food3 == "" && ic == 2) continue;
                this.foodCombinations.push(new FoodCombination(this, 60, this.getOtetsudaiCountDay(60), code + String.fromCharCode(65 + ic)));
            }
        }
    }

    containsFood(foods){
        return (foods.includes(this.food1) || foods.includes(this.food2) || (this.food3 == "" ? false : foods.includes(this.food3)) );
    }

    getAllFoodNames(){
        let tmp = [this.food1];
        if (this.food2 != "") tmp.push(this.food2)
        if (this.food3 != "") tmp.push(this.food3)
        return tmp;
    }


    getIndicatorBarOf(num){
        let left = (num >= 10) ? "" + num + " " : "<font color='white'>_</font>" + num + " ";
        return left + this.indicatorChar.repeat(num);
    }

    getOtetsudaiCountDay(lv, spdAdj = 0.0, subAdj = 0.0, genkiAdj = 0.52){//speedAdjはプラスのほうが○
        let lvAdj  = 1 - ((lv - 1) * 0.002);
        spdAdj = 1 - spdAdj;
        subAdj = 1 - subAdj;

        let adjSec = this.sec * lvAdj * spdAdj * subAdj;
        return 86400 / (adjSec * genkiAdj);
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


    insertResultTo(tr, foodName, poke){
        let cell = tr.insertCell();
        let img = document.createElement("img");
        img.src = "img/poke/" + String(poke.no).padStart(3, '0') + ".png"
        img.classList.add("tiny");
        cell.appendChild(img);

        let lv = document.createElement("span");
        lv.textContent = "Lv" + this.lv;
        cell.appendChild(lv);

        for (let i = 0; i < this.code.length; i++){
            let c = this.code[i];
            let fImg = document.createElement("img");
            let food = (c == "A") ? poke.food1
                      : (c == "B") ? poke.food2 : poke.food3;
            fImg.src = "img/food/" + food + ".png";
            fImg.classList.add("ex-tiny");
            cell.appendChild(fImg);
        }

        this.setCombinationResultTo(tr, foodName);

    }

    setCombinationResultTo(row, targetFoodName){
        for (let i = 0; i < 3; i++){
            if (this.foods[i].name == targetFoodName){
                row.appendChild(this.getResultCell(i, true));
                break;
            }
        }

        for (let i = 0; i < 3; i++){
            if (i >= this.foods.length) {  
                row.appendChild(this.getResultCell(i, false));
            } else if (this.foods[i].name != targetFoodName){
                row.appendChild(this.getResultCell(i, false));
            }
        }
    }

    getResultCell(index, isTarget = false){
        let c = document.createElement("td");
        if (index >= this.foods.length){
            c.setAttribute('value', 0);
            return c;
        }

        let img = document.createElement('img');
        img.classList.add("tiny");
        img.src = "img/food/" + this.foods[index].name + ".png";        
        c.appendChild(img);

        let numEl;
        if (isTarget){
            numEl = document.createElement('strong');
        }
        else{
            numEl = document.createElement('span');
        }
        numEl.textContent = this.foods[index].expection;
        c.appendChild(numEl);
        c.setAttribute('name', this.foods[index].name);
        c.setAttribute('value', this.foods[index].expection);
        return c;
    }



    contains(foodName, min = 0){
        for (let i = 0; i < this.foods.length; i++){
            if (this.foods[i].name == foodName && this.foods[i].expection >= min) return true;
        }
        return false;
    }

    getExpectionOf(foodName){
        for (let i = 0; i < this.foods.length; i++){
            if (this.foods[i].name == foodName){
                return this.foods[i].expection;
            }
        }
        return 0;
    }
}











