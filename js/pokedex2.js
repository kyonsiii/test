class Pokedex{
    constructor(pokemons){
        this.pokemons =
        [
new Pokemon({no:1,name:"フシギダネ",sleepType:"うとうと",specialty:"食材",berry:"ドリのみ",food1:"あまいミツ",food1Num:[2,5,7],food2:"あんみんトマト",food2Num:[0,4,7],food3:"ほっこりポテト",food3Num:[0,0,6],skill:"食材ゲットS",fp:5,sec:4400,fullyEvolved:false,foodRate:0.257,skillRate:0.019,skillExpectionDay:0.72,berryEnergy:30,berryEnergyLv60Day:4096,berrySEnergyLv60Day:8192,rankOfBerry:1,rankOfFood:2,rankOfSkill:2}),
new Pokemon({no:2,name:"フシギソウ",sleepType:"うとうと",specialty:"食材",berry:"ドリのみ",food1:"あまいミツ",food1Num:[2,5,7],food2:"あんみんトマト",food2Num:[0,4,7],food3:"ほっこりポテト",food3Num:[0,0,6],skill:"食材ゲットS",fp:12,sec:3300,fullyEvolved:false,foodRate:0.255,skillRate:0.019,skillExpectionDay:0.96,berryEnergy:30,berryEnergyLv60Day:5477,berrySEnergyLv60Day:10954,rankOfBerry:3,rankOfFood:6,rankOfSkill:2}),
new Pokemon({no:3,name:"フシギバナ",sleepType:"うとうと",specialty:"食材",berry:"ドリのみ",food1:"あまいミツ",food1Num:[2,5,7],food2:"あんみんトマト",food2Num:[0,4,7],food3:"ほっこりポテト",food3Num:[0,0,6],skill:"食材ゲットS",fp:20,sec:2800,fullyEvolved:true,foodRate:0.266,skillRate:0.021,skillExpectionDay:1.25,berryEnergy:30,berryEnergyLv60Day:6359,berrySEnergyLv60Day:12718,rankOfBerry:4,rankOfFood:9,rankOfSkill:3}),
new Pokemon({no:4,name:"ヒトカゲ",sleepType:"すやすや",specialty:"食材",berry:"ヒメリのみ",food1:"マメミート",food1Num:[2,5,7],food2:"あったかジンジャー",food2Num:[0,4,7],food3:"げきからハーブ",food3Num:[0,0,6],skill:"食材ゲットS",fp:5,sec:3500,fullyEvolved:false,foodRate:0.201,skillRate:0.011,skillExpectionDay:0.52,berryEnergy:27,berryEnergyLv60Day:4984,berrySEnergyLv60Day:9968,rankOfBerry:3,rankOfFood:2,rankOfSkill:2}),
new Pokemon({no:5,name:"リザード",sleepType:"すやすや",specialty:"食材",berry:"ヒメリのみ",food1:"マメミート",food1Num:[2,5,7],food2:"あったかジンジャー",food2Num:[0,4,7],food3:"げきからハーブ",food3Num:[0,0,6],skill:"食材ゲットS",fp:12,sec:3000,fullyEvolved:false,foodRate:0.227,skillRate:0.016,skillExpectionDay:0.89,berryEnergy:27,berryEnergyLv60Day:5626,berrySEnergyLv60Day:11252,rankOfBerry:3,rankOfFood:5,rankOfSkill:2}),
new Pokemon({no:6,name:"リザードン",sleepType:"すやすや",specialty:"食材",berry:"ヒメリのみ",food1:"マメミート",food1Num:[2,5,7],food2:"あったかジンジャー",food2Num:[0,4,7],food3:"げきからハーブ",food3Num:[0,0,6],skill:"食材ゲットS",fp:20,sec:2400,fullyEvolved:true,foodRate:0.224,skillRate:0.016,skillExpectionDay:1.11,berryEnergy:27,berryEnergyLv60Day:7059,berrySEnergyLv60Day:14118,rankOfBerry:5,rankOfFood:9,rankOfSkill:3}),
new Pokemon({no:7,name:"ゼニガメ",sleepType:"ぐっすり",specialty:"食材",berry:"オレンのみ",food1:"モーモーミルク",food1Num:[2,5,7],food2:"リラックスカカオ",food2Num:[0,3,5],food3:"マメミート",food3Num:[0,0,7],skill:"食材ゲットS",fp:5,sec:4500,fullyEvolved:false,foodRate:0.271,skillRate:0.02,skillExpectionDay:0.74,berryEnergy:31,berryEnergyLv60Day:4061,berrySEnergyLv60Day:8122,rankOfBerry:1,rankOfFood:3,rankOfSkill:2}),
new Pokemon({no:8,name:"カメール",sleepType:"ぐっすり",specialty:"食材",berry:"オレンのみ",food1:"モーモーミルク",food1Num:[2,5,7],food2:"リラックスカカオ",food2Num:[0,3,5],food3:"マメミート",food3Num:[0,0,7],skill:"食材ゲットS",fp:12,sec:3400,fullyEvolved:false,foodRate:0.271,skillRate:0.02,skillExpectionDay:0.98,berryEnergy:31,berryEnergyLv60Day:5375,berrySEnergyLv60Day:10750,rankOfBerry:3,rankOfFood:6,rankOfSkill:2}),
new Pokemon({no:9,name:"カメックス",sleepType:"ぐっすり",specialty:"食材",berry:"オレンのみ",food1:"モーモーミルク",food1Num:[2,5,7],food2:"リラックスカカオ",food2Num:[0,3,5],food3:"マメミート",food3Num:[0,0,7],skill:"食材ゲットS",fp:20,sec:2800,fullyEvolved:true,foodRate:0.275,skillRate:0.021,skillExpectionDay:1.25,berryEnergy:31,berryEnergyLv60Day:6491,berrySEnergyLv60Day:12982,rankOfBerry:4,rankOfFood:10,rankOfSkill:3}),
new Pokemon({no:10,name:"キャタピー",sleepType:"うとうと",specialty:"きのみ",berry:"ラムのみ",food1:"あまいミツ",food1Num:[1,2,4],food2:"あんみんトマト",food2Num:[0,2,3],food3:"ワカクサ大豆",food3Num:[0,0,4],skill:"食材ゲットS",fp:5,sec:4400,fullyEvolved:false,foodRate:0.179,skillRate:0.008,skillExpectionDay:0.3,berryEnergy:24,berryEnergyLv60Day:7242,berrySEnergyLv60Day:10863,rankOfBerry:3,rankOfFood:1,rankOfSkill:1}),
new Pokemon({no:11,name:"トランセル",sleepType:"うとうと",specialty:"きのみ",berry:"ラムのみ",food1:"あまいミツ",food1Num:[1,2,4],food2:"あんみんトマト",food2Num:[0,2,3],food3:"ワカクサ大豆",food3Num:[0,0,4],skill:"食材ゲットS",fp:7,sec:4200,fullyEvolved:false,foodRate:0.208,skillRate:0.018,skillExpectionDay:0.71,berryEnergy:24,berryEnergyLv60Day:7319,berrySEnergyLv60Day:10979,rankOfBerry:3,rankOfFood:1,rankOfSkill:2}),
new Pokemon({no:12,name:"バタフリー",sleepType:"うとうと",specialty:"きのみ",berry:"ラムのみ",food1:"あまいミツ",food1Num:[1,2,4],food2:"あんみんトマト",food2Num:[0,2,3],food3:"ワカクサ大豆",food3Num:[0,0,4],skill:"食材ゲットS",fp:15,sec:2500,fullyEvolved:true,foodRate:0.197,skillRate:0.014,skillExpectionDay:0.93,berryEnergy:24,berryEnergyLv60Day:12467,berrySEnergyLv60Day:18701,rankOfBerry:8,rankOfFood:1,rankOfSkill:2}),
new Pokemon({no:19,name:"コラッタ",sleepType:"すやすや",specialty:"きのみ",berry:"キーのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"ワカクサ大豆",food2Num:[0,2,3],food3:"マメミート",food3Num:[0,0,3],skill:"げんきチャージS",fp:5,sec:4900,fullyEvolved:false,foodRate:0.237,skillRate:0.03,skillExpectionDay:1.02,berryEnergy:28,berryEnergyLv60Day:7051,berrySEnergyLv60Day:10577,rankOfBerry:3,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:20,name:"ラッタ",sleepType:"すやすや",specialty:"きのみ",berry:"キーのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"ワカクサ大豆",food2Num:[0,2,3],food3:"マメミート",food3Num:[0,0,3],skill:"げんきチャージS",fp:12,sec:2950,fullyEvolved:true,foodRate:0.237,skillRate:0.03,skillExpectionDay:1.69,berryEnergy:28,berryEnergyLv60Day:11712,berrySEnergyLv60Day:17568,rankOfBerry:7,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:23,name:"アーボ",sleepType:"うとうと",specialty:"きのみ",berry:"カゴのみ",food1:"マメミート",food1Num:[1,2,4],food2:"とくせんエッグ",food2Num:[0,2,3],food3:"げきからハーブ",food3Num:[0,0,3],skill:"げんきチャージS",fp:5,sec:5000,fullyEvolved:false,foodRate:0.235,skillRate:0.033,skillExpectionDay:1.1,berryEnergy:32,berryEnergyLv60Day:7918,berrySEnergyLv60Day:11877,rankOfBerry:4,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:24,name:"アーボック",sleepType:"うとうと",specialty:"きのみ",berry:"カゴのみ",food1:"マメミート",food1Num:[1,2,4],food2:"とくせんエッグ",food2Num:[0,2,3],food3:"げきからハーブ",food3Num:[0,0,3],skill:"げんきチャージS",fp:12,sec:3400,fullyEvolved:true,foodRate:0.264,skillRate:0.057,skillExpectionDay:2.79,berryEnergy:32,berryEnergyLv60Day:11203,berrySEnergyLv60Day:16805,rankOfBerry:7,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:25,name:"ピカチュウ",sleepType:"すやすや",specialty:"きのみ",berry:"ウブのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,2,3],food3:"とくせんエッグ",food3Num:[0,0,3],skill:"エナジーチャージS",fp:7,sec:2700,fullyEvolved:false,foodRate:0.207,skillRate:0.021,skillExpectionDay:1.29,berryEnergy:25,berryEnergyLv60Day:11875,berrySEnergyLv60Day:17813,rankOfBerry:7,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:25.1,name:"ピカチュウ(ハロウィン)",sleepType:"すやすや",specialty:"きのみ",berry:"ウブのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,2,3],food3:"とくせんエッグ",food3Num:[0,0,3],skill:"エナジーチャージS(ランダム)",fp:7,sec:2500,fullyEvolved:true,foodRate:0.218,skillRate:0.028,skillExpectionDay:1.86,berryEnergy:25,berryEnergyLv60Day:12647,berrySEnergyLv60Day:18971,rankOfBerry:8,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:25.2,name:"ピカチュウ(ホリデー)",sleepType:"すやすや",specialty:"スキル",berry:"ウブのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,2,3],food3:"とくせんエッグ",food3Num:[0,0,3],skill:"ゆめのかけらゲットS",fp:7,sec:2500,fullyEvolved:true,foodRate:0.131,skillRate:0.042,skillExpectionDay:3.79,berryEnergy:25,berryEnergyLv60Day:7027,berrySEnergyLv60Day:14054,rankOfBerry:5,rankOfFood:1,rankOfSkill:7}),
new Pokemon({no:26,name:"ライチュウ",sleepType:"すやすや",specialty:"きのみ",berry:"ウブのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,2,3],food3:"とくせんエッグ",food3Num:[0,0,3],skill:"エナジーチャージS",fp:18,sec:2200,fullyEvolved:true,foodRate:0.224,skillRate:0.032,skillExpectionDay:2.42,berryEnergy:25,berryEnergyLv60Day:14261,berrySEnergyLv60Day:21392,rankOfBerry:10,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:35,name:"ピッピ",sleepType:"すやすや",specialty:"きのみ",berry:"モモンのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"あまいミツ",food2Num:[0,2,3],food3:"ワカクサ大豆",food3Num:[0,0,3],skill:"ゆびをふる",fp:7,sec:4000,fullyEvolved:false,foodRate:0.168,skillRate:0.036,skillExpectionDay:1.5,berryEnergy:26,berryEnergyLv60Day:8746,berrySEnergyLv60Day:13119,rankOfBerry:4,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:36,name:"ピクシー",sleepType:"すやすや",specialty:"きのみ",berry:"モモンのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"あまいミツ",food2Num:[0,2,3],food3:"ワカクサ大豆",food3Num:[0,0,3],skill:"ゆびをふる",fp:20,sec:2800,fullyEvolved:true,foodRate:0.168,skillRate:0.036,skillExpectionDay:2.14,berryEnergy:26,berryEnergyLv60Day:12494,berrySEnergyLv60Day:18741,rankOfBerry:8,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:37,name:"ロコン",sleepType:"すやすや",specialty:"きのみ",berry:"ヒメリのみ",food1:"ワカクサ大豆",food1Num:[1,2,4],food2:"ワカクサコーン",food2Num:[0,2,3],food3:"ほっこりポテト",food3Num:[0,0,3],skill:"げんきエールS",fp:5,sec:4700,fullyEvolved:false,foodRate:0.168,skillRate:0.027,skillExpectionDay:0.95,berryEnergy:27,berryEnergyLv60Day:7730,berrySEnergyLv60Day:11595,rankOfBerry:4,rankOfFood:1,rankOfSkill:2}),
new Pokemon({no:37.1,name:"ロコン(アローラ)",sleepType:"ぐっすり",specialty:"きのみ",berry:"チーゴのみ",food1:"ワカクサ大豆",food1Num:[1,2,4],food2:"ワカクサコーン",food2Num:[0,2,3],food3:"ほっこりポテト",food3Num:[0,0,3],skill:"おてつだいサポートS",fp:5,sec:5600,fullyEvolved:false,foodRate:0.23,skillRate:0.028,skillExpectionDay:0.83,berryEnergy:32,berryEnergyLv60Day:7116,berrySEnergyLv60Day:10674,rankOfBerry:3,rankOfFood:1,rankOfSkill:2}),
new Pokemon({no:38,name:"キュウコン",sleepType:"すやすや",specialty:"きのみ",berry:"ヒメリのみ",food1:"ワカクサ大豆",food1Num:[1,2,4],food2:"ワカクサコーン",food2Num:[0,2,3],food3:"ほっこりポテト",food3Num:[0,0,3],skill:"げんきエールS",fp:20,sec:2600,fullyEvolved:true,foodRate:0.164,skillRate:0.025,skillExpectionDay:1.6,berryEnergy:27,berryEnergyLv60Day:14040,berrySEnergyLv60Day:21060,rankOfBerry:9,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:38.1,name:"キュウコン(アローラ)",sleepType:"ぐっすり",specialty:"きのみ",berry:"チーゴのみ",food1:"ワカクサ大豆",food1Num:[1,2,4],food2:"ワカクサコーン",food2Num:[0,2,3],food3:"ほっこりポテト",food3Num:[0,0,3],skill:"おてつだいサポートS",fp:20,sec:2900,fullyEvolved:true,foodRate:0.232,skillRate:0.028,skillExpectionDay:1.6,berryEnergy:32,berryEnergyLv60Day:13705,berrySEnergyLv60Day:20558,rankOfBerry:9,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:39,name:"プリン",sleepType:"すやすや",specialty:"スキル",berry:"モモンのみ",food1:"あまいミツ",food1Num:[1,2,4],food2:"ピュアなオイル",food2Num:[0,2,3],food3:"リラックスカカオ",food3Num:[0,0,2],skill:"げんきオールS",fp:7,sec:3900,fullyEvolved:false,foodRate:0.182,skillRate:0.043,skillExpectionDay:2.83,berryEnergy:26,berryEnergyLv60Day:4410,berrySEnergyLv60Day:8820,rankOfBerry:2,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:40,name:"プクリン",sleepType:"すやすや",specialty:"スキル",berry:"モモンのみ",food1:"あまいミツ",food1Num:[1,2,4],food2:"ピュアなオイル",food2Num:[0,2,3],food3:"リラックスカカオ",food3Num:[0,0,2],skill:"げんきオールS",fp:16,sec:2900,fullyEvolved:true,foodRate:0.174,skillRate:0.04,skillExpectionDay:3.29,berryEnergy:26,berryEnergyLv60Day:5988,berrySEnergyLv60Day:11976,rankOfBerry:4,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:50,name:"ディグダ",sleepType:"すやすや",specialty:"食材",berry:"フィラのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"ふといながねぎ",food2Num:[0,3,4],food3:"ワカクサ大豆",food3Num:[0,0,8],skill:"エナジーチャージS",fp:5,sec:4300,fullyEvolved:false,foodRate:0.192,skillRate:0.021,skillExpectionDay:0.81,berryEnergy:29,berryEnergyLv60Day:4406,berrySEnergyLv60Day:8812,rankOfBerry:2,rankOfFood:1,rankOfSkill:2}),
new Pokemon({no:51,name:"ダグトリオ",sleepType:"すやすや",specialty:"食材",berry:"フィラのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"ふといながねぎ",food2Num:[0,3,4],food3:"ワカクサ大豆",food3Num:[0,0,8],skill:"エナジーチャージS",fp:12,sec:2800,fullyEvolved:true,foodRate:0.19,skillRate:0.02,skillExpectionDay:1.19,berryEnergy:29,berryEnergyLv60Day:6784,berrySEnergyLv60Day:13568,rankOfBerry:5,rankOfFood:4,rankOfSkill:3}),
new Pokemon({no:52,name:"ニャース",sleepType:"すやすや",specialty:"スキル",berry:"キーのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"マメミート",food2Num:[0,2,3],food3:"",food3Num:[],skill:"ゆめのかけらゲットS",fp:5,sec:4400,fullyEvolved:false,foodRate:0.163,skillRate:0.042,skillExpectionDay:2.59,berryEnergy:28,berryEnergyLv60Day:4307,berrySEnergyLv60Day:8614,rankOfBerry:2,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:53,name:"ペルシアン",sleepType:"すやすや",specialty:"スキル",berry:"キーのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"マメミート",food2Num:[0,2,3],food3:"",food3Num:[],skill:"ゆめのかけらゲットS",fp:12,sec:2800,fullyEvolved:true,foodRate:0.169,skillRate:0.044,skillExpectionDay:3.61,berryEnergy:28,berryEnergyLv60Day:6720,berrySEnergyLv60Day:13440,rankOfBerry:5,rankOfFood:1,rankOfSkill:7}),
new Pokemon({no:54,name:"コダック",sleepType:"うとうと",specialty:"スキル",berry:"オレンのみ",food1:"リラックスカカオ",food1Num:[1,2,4],food2:"とくせんリンゴ",food2Num:[0,4,6],food3:"マメミート",food3Num:[0,0,5],skill:"エナジーチャージS(ランダム)",fp:5,sec:5400,fullyEvolved:false,foodRate:0.136,skillRate:0.126,skillExpectionDay:4.88,berryEnergy:31,berryEnergyLv60Day:4011,berrySEnergyLv60Day:8022,rankOfBerry:1,rankOfFood:1,rankOfSkill:9}),
new Pokemon({no:55,name:"ゴルダック",sleepType:"ぐっすり",specialty:"スキル",berry:"オレンのみ",food1:"リラックスカカオ",food1Num:[1,2,4],food2:"とくせんリンゴ",food2Num:[0,4,6],food3:"マメミート",food3Num:[0,0,5],skill:"エナジーチャージS(ランダム)",fp:12,sec:3400,fullyEvolved:true,foodRate:0.162,skillRate:0.125,skillExpectionDay:7.11,berryEnergy:31,berryEnergyLv60Day:6178,berrySEnergyLv60Day:12356,rankOfBerry:4,rankOfFood:1,rankOfSkill:10}),
new Pokemon({no:56,name:"マンキー",sleepType:"うとうと",specialty:"きのみ",berry:"クラボのみ",food1:"マメミート",food1Num:[1,2,4],food2:"あじわいキノコ",food2Num:[0,1,2],food3:"あまいミツ",food3Num:[0,0,4],skill:"エナジーチャージS(ランダム)",fp:5,sec:4200,fullyEvolved:false,foodRate:0.197,skillRate:0.022,skillExpectionDay:0.87,berryEnergy:27,berryEnergyLv60Day:8349,berrySEnergyLv60Day:12524,rankOfBerry:4,rankOfFood:1,rankOfSkill:2}),
new Pokemon({no:57,name:"オコリザル",sleepType:"うとうと",specialty:"きのみ",berry:"クラボのみ",food1:"マメミート",food1Num:[1,2,4],food2:"あじわいキノコ",food2Num:[0,1,2],food3:"あまいミツ",food3Num:[0,0,4],skill:"エナジーチャージS(ランダム)",fp:12,sec:2800,fullyEvolved:true,foodRate:0.2,skillRate:0.024,skillExpectionDay:1.42,berryEnergy:27,berryEnergyLv60Day:12476,berrySEnergyLv60Day:18714,rankOfBerry:8,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:58,name:"ガーディ",sleepType:"すやすや",specialty:"スキル",berry:"ヒメリのみ",food1:"げきからハーブ",food1Num:[1,2,4],food2:"マメミート",food2Num:[0,3,5],food3:"モーモーミルク",food3Num:[0,0,5],skill:"おてつだいサポートS",fp:5,sec:4300,fullyEvolved:false,foodRate:0.138,skillRate:0.05,skillExpectionDay:2.93,berryEnergy:27,berryEnergyLv60Day:4377,berrySEnergyLv60Day:8754,rankOfBerry:2,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:59,name:"ウインディ",sleepType:"すやすや",specialty:"スキル",berry:"ヒメリのみ",food1:"げきからハーブ",food1Num:[1,2,4],food2:"マメミート",food2Num:[0,3,5],food3:"モーモーミルク",food3Num:[0,0,5],skill:"おてつだいサポートS",fp:20,sec:2500,fullyEvolved:true,foodRate:0.136,skillRate:0.049,skillExpectionDay:4.26,berryEnergy:27,berryEnergyLv60Day:7545,berrySEnergyLv60Day:15090,rankOfBerry:6,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:69,name:"マダツボミ",sleepType:"うとうと",specialty:"食材",berry:"ドリのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,6],food3:"ふといながねぎ",food3Num:[0,0,4],skill:"げんきチャージS",fp:5,sec:5200,fullyEvolved:false,foodRate:0.233,skillRate:0.039,skillExpectionDay:1.25,berryEnergy:30,berryEnergyLv60Day:3578,berrySEnergyLv60Day:7156,rankOfBerry:1,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:70,name:"ウツドン",sleepType:"うとうと",specialty:"食材",berry:"ドリのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,6],food3:"ふといながねぎ",food3Num:[0,0,4],skill:"げんきチャージS",fp:12,sec:3800,fullyEvolved:false,foodRate:0.235,skillRate:0.04,skillExpectionDay:1.75,berryEnergy:30,berryEnergyLv60Day:4884,berrySEnergyLv60Day:9768,rankOfBerry:2,rankOfFood:3,rankOfSkill:4}),
new Pokemon({no:71,name:"ウツボット",sleepType:"うとうと",specialty:"食材",berry:"ドリのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,6],food3:"ふといながねぎ",food3Num:[0,0,4],skill:"げんきチャージS",fp:20,sec:2800,fullyEvolved:true,foodRate:0.233,skillRate:0.039,skillExpectionDay:2.31,berryEnergy:30,berryEnergyLv60Day:6645,berrySEnergyLv60Day:13290,rankOfBerry:5,rankOfFood:7,rankOfSkill:5}),
new Pokemon({no:74,name:"イシツブテ",sleepType:"ぐっすり",specialty:"食材",berry:"オボンのみ",food1:"ワカクサ大豆",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,6],food3:"あじわいキノコ",food3Num:[0,0,4],skill:"エナジーチャージS(ランダム)",fp:5,sec:5700,fullyEvolved:false,foodRate:0.281,skillRate:0.052,skillExpectionDay:1.52,berryEnergy:30,berryEnergyLv60Day:3060,berrySEnergyLv60Day:6120,rankOfBerry:1,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:75,name:"ゴローン",sleepType:"ぐっすり",specialty:"食材",berry:"オボンのみ",food1:"ワカクサ大豆",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,6],food3:"あじわいキノコ",food3Num:[0,0,4],skill:"エナジーチャージS(ランダム)",fp:12,sec:4000,fullyEvolved:false,foodRate:0.272,skillRate:0.048,skillExpectionDay:1.99,berryEnergy:30,berryEnergyLv60Day:4415,berrySEnergyLv60Day:8830,rankOfBerry:2,rankOfFood:4,rankOfSkill:5}),
new Pokemon({no:76,name:"ゴローニャ",sleepType:"ぐっすり",specialty:"食材",berry:"オボンのみ",food1:"ワカクサ大豆",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,6],food3:"あじわいキノコ",food3Num:[0,0,4],skill:"エナジーチャージS(ランダム)",fp:22,sec:3100,fullyEvolved:true,foodRate:0.28,skillRate:0.052,skillExpectionDay:2.79,berryEnergy:30,berryEnergyLv60Day:5634,berrySEnergyLv60Day:11268,rankOfBerry:3,rankOfFood:8,rankOfSkill:6}),
new Pokemon({no:79,name:"ヤドン",sleepType:"すやすや",specialty:"スキル",berry:"オレンのみ",food1:"リラックスカカオ",food1Num:[1,2,4],food2:"おいしいシッポ",food2Num:[0,1,2],food3:"あんみんトマト",food3Num:[0,0,5],skill:"げんきエールS",fp:5,sec:5700,fullyEvolved:false,foodRate:0.151,skillRate:0.067,skillExpectionDay:2.95,berryEnergy:31,berryEnergyLv60Day:3734,berrySEnergyLv60Day:7468,rankOfBerry:1,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:80,name:"ヤドラン",sleepType:"すやすや",specialty:"スキル",berry:"オレンのみ",food1:"リラックスカカオ",food1Num:[1,2,4],food2:"おいしいシッポ",food2Num:[0,1,2],food3:"あんみんトマト",food3Num:[0,0,5],skill:"げんきエールS",fp:12,sec:3800,fullyEvolved:true,foodRate:0.197,skillRate:0.068,skillExpectionDay:3.97,berryEnergy:31,berryEnergyLv60Day:5297,berrySEnergyLv60Day:10594,rankOfBerry:3,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:81,name:"コイル",sleepType:"ぐっすり",specialty:"スキル",berry:"ベリブのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"げきからハーブ",food2Num:[0,2,3],food3:"",food3Num:[],skill:"料理パワーアップS",fp:5,sec:5800,fullyEvolved:false,foodRate:0.182,skillRate:0.064,skillExpectionDay:2.83,berryEnergy:33,berryEnergyLv60Day:3763,berrySEnergyLv60Day:7526,rankOfBerry:1,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:82,name:"レアコイル",sleepType:"ぐっすり",specialty:"スキル",berry:"ベリブのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"げきからハーブ",food2Num:[0,2,3],food3:"",food3Num:[],skill:"料理パワーアップS",fp:12,sec:4000,fullyEvolved:false,foodRate:0.182,skillRate:0.063,skillExpectionDay:3.62,berryEnergy:33,berryEnergyLv60Day:5457,berrySEnergyLv60Day:10914,rankOfBerry:3,rankOfFood:1,rankOfSkill:7}),
new Pokemon({no:83,name:"カモネギ",sleepType:"ぐっすり",specialty:"食材",berry:"シーヤのみ",food1:"ふといながねぎ",food1Num:[2,5,7],food2:"マメミート",food2Num:[0,8,13],food3:"あったかジンジャー",food3Num:[0,0,12],skill:"エナジーチャージS",fp:16,sec:3000,fullyEvolved:true,foodRate:0.16,skillRate:0.043,skillExpectionDay:2.38,berryEnergy:24,berryEnergyLv60Day:5434,berrySEnergyLv60Day:10868,rankOfBerry:3,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:84,name:"ドードー",sleepType:"ぐっすり",specialty:"きのみ",berry:"シーヤのみ",food1:"ワカクサ大豆",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"げんきチャージS",fp:5,sec:3800,fullyEvolved:false,foodRate:0.184,skillRate:0.02,skillExpectionDay:0.87,berryEnergy:24,berryEnergyLv60Day:8335,berrySEnergyLv60Day:12503,rankOfBerry:4,rankOfFood:1,rankOfSkill:2}),
new Pokemon({no:85,name:"ドードリオ",sleepType:"ぐっすり",specialty:"きのみ",berry:"シーヤのみ",food1:"ワカクサ大豆",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"げんきチャージS",fp:12,sec:2300,fullyEvolved:true,foodRate:0.184,skillRate:0.02,skillExpectionDay:1.44,berryEnergy:24,berryEnergyLv60Day:13771,berrySEnergyLv60Day:20657,rankOfBerry:9,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:92,name:"ゴース",sleepType:"うとうと",specialty:"食材",berry:"ブリーのみ",food1:"げきからハーブ",food1Num:[2,5,7],food2:"あじわいキノコ",food2Num:[0,4,6],food3:"ピュアなオイル",food3Num:[0,0,8],skill:"エナジーチャージS(ランダム)",fp:5,sec:3800,fullyEvolved:false,foodRate:0.144,skillRate:0.015,skillExpectionDay:0.66,berryEnergy:26,berryEnergyLv60Day:4736,berrySEnergyLv60Day:9472,rankOfBerry:2,rankOfFood:1,rankOfSkill:2}),
new Pokemon({no:93,name:"ゴースト",sleepType:"うとうと",specialty:"食材",berry:"ブリーのみ",food1:"げきからハーブ",food1Num:[2,5,7],food2:"あじわいキノコ",food2Num:[0,4,6],food3:"ピュアなオイル",food3Num:[0,0,8],skill:"エナジーチャージS(ランダム)",fp:12,sec:3000,fullyEvolved:false,foodRate:0.157,skillRate:0.022,skillExpectionDay:1.22,berryEnergy:26,berryEnergyLv60Day:5908,berrySEnergyLv60Day:11816,rankOfBerry:4,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:94,name:"ゲンガー",sleepType:"うとうと",specialty:"食材",berry:"ブリーのみ",food1:"げきからハーブ",food1Num:[2,5,7],food2:"あじわいキノコ",food2Num:[0,4,6],food3:"ピュアなオイル",food3Num:[0,0,8],skill:"エナジーチャージS(ランダム)",fp:22,sec:2200,fullyEvolved:true,foodRate:0.161,skillRate:0.024,skillExpectionDay:1.81,berryEnergy:26,berryEnergyLv60Day:8018,berrySEnergyLv60Day:16036,rankOfBerry:6,rankOfFood:5,rankOfSkill:4}),
new Pokemon({no:95,name:"イワーク",sleepType:"ぐっすり",specialty:"きのみ",berry:"オボンのみ",food1:"あんみんトマト",food1Num:[1,2,4],food2:"マメミート",food2Num:[0,2,4],food3:"ほっこりポテト",food3Num:[0,0,3],skill:"食材ゲットS",fp:16,sec:3100,fullyEvolved:true,foodRate:0.132,skillRate:0.023,skillExpectionDay:1.23,berryEnergy:30,berryEnergyLv60Day:13585,berrySEnergyLv60Day:20378,rankOfBerry:9,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:104,name:"カラカラ",sleepType:"ぐっすり",specialty:"きのみ",berry:"フィラのみ",food1:"あったかジンジャー",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,2,3],food3:"",food3Num:[],skill:"げんきチャージS",fp:5,sec:4800,fullyEvolved:false,foodRate:0.223,skillRate:0.044,skillExpectionDay:1.52,berryEnergy:29,berryEnergyLv60Day:7592,berrySEnergyLv60Day:11388,rankOfBerry:3,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:105,name:"ガラガラ",sleepType:"ぐっすり",specialty:"きのみ",berry:"フィラのみ",food1:"あったかジンジャー",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,2,3],food3:"",food3Num:[],skill:"げんきチャージS",fp:12,sec:3500,fullyEvolved:true,foodRate:0.225,skillRate:0.045,skillExpectionDay:2.14,berryEnergy:29,berryEnergyLv60Day:10385,berrySEnergyLv60Day:15578,rankOfBerry:6,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:113,name:"ラッキー",sleepType:"すやすや",specialty:"食材",berry:"キーのみ",food1:"とくせんエッグ",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,7],food3:"あまいミツ",food3Num:[0,0,8],skill:"げんきオールS",fp:16,sec:2904,fullyEvolved:true,foodRate:0.236,skillRate:0.023,skillExpectionDay:1.32,berryEnergy:28,berryEnergyLv60Day:5957,berrySEnergyLv60Day:11914,rankOfBerry:4,rankOfFood:6,rankOfSkill:3}),
new Pokemon({no:115,name:"ガルーラ",sleepType:"すやすや",specialty:"食材",berry:"キーのみ",food1:"あったかジンジャー",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,6],food3:"ワカクサ大豆",food3Num:[0,0,8],skill:"食材ゲットS",fp:16,sec:2650,fullyEvolved:true,foodRate:0.222,skillRate:0.017,skillExpectionDay:1.07,berryEnergy:28,berryEnergyLv60Day:6647,berrySEnergyLv60Day:13294,rankOfBerry:5,rankOfFood:7,rankOfSkill:3}),
new Pokemon({no:122,name:"バリヤード",sleepType:"すやすや",specialty:"食材",berry:"マゴのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,6],food3:"ふといながねぎ",food3Num:[0,0,4],skill:"へんしん(スキルコピー)",fp:12,sec:2800,fullyEvolved:true,foodRate:0.216,skillRate:0.039,skillExpectionDay:2.31,berryEnergy:26,berryEnergyLv60Day:5887,berrySEnergyLv60Day:11774,rankOfBerry:4,rankOfFood:6,rankOfSkill:5}),
new Pokemon({no:127,name:"カイロス",sleepType:"うとうと",specialty:"食材",berry:"ラムのみ",food1:"あまいミツ",food1Num:[2,5,7],food2:"とくせんリンゴ",food2Num:[0,5,8],food3:"マメミート",food3Num:[0,0,7],skill:"エナジーチャージS",fp:16,sec:2400,fullyEvolved:true,foodRate:0.216,skillRate:0.031,skillExpectionDay:2.15,berryEnergy:24,berryEnergyLv60Day:6340,berrySEnergyLv60Day:12680,rankOfBerry:4,rankOfFood:8,rankOfSkill:5}),
new Pokemon({no:132,name:"メタモン",sleepType:"すやすや",specialty:"食材",berry:"キーのみ",food1:"ピュアなオイル",food1Num:[2,5,7],food2:"ふといながねぎ",food2Num:[0,3,5],food3:"おいしいシッポ",food3Num:[0,0,3],skill:"へんしん(スキルコピー)",fp:16,sec:3500,fullyEvolved:true,foodRate:0.201,skillRate:0.036,skillExpectionDay:1.71,berryEnergy:28,berryEnergyLv60Day:5169,berrySEnergyLv60Day:10338,rankOfBerry:3,rankOfFood:2,rankOfSkill:4}),
new Pokemon({no:133,name:"イーブイ",sleepType:"すやすや",specialty:"スキル",berry:"キーのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"食材ゲットS",fp:5,sec:3700,fullyEvolved:false,foodRate:0.192,skillRate:0.055,skillExpectionDay:3.47,berryEnergy:28,berryEnergyLv60Day:4944,berrySEnergyLv60Day:9888,rankOfBerry:2,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:134,name:"シャワーズ",sleepType:"ぐっすり",specialty:"スキル",berry:"オレンのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"食材ゲットS",fp:20,sec:3100,fullyEvolved:true,foodRate:0.212,skillRate:0.061,skillExpectionDay:4.27,berryEnergy:31,berryEnergyLv60Day:6372,berrySEnergyLv60Day:12744,rankOfBerry:4,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:135,name:"サンダース",sleepType:"すやすや",specialty:"スキル",berry:"ウブのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"おてつだいサポートS",fp:20,sec:2200,fullyEvolved:true,foodRate:0.151,skillRate:0.039,skillExpectionDay:3.95,berryEnergy:25,berryEnergyLv60Day:7801,berrySEnergyLv60Day:15602,rankOfBerry:6,rankOfFood:1,rankOfSkill:7}),
new Pokemon({no:136,name:"ブースター",sleepType:"すやすや",specialty:"スキル",berry:"ヒメリのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"料理パワーアップS",fp:20,sec:2700,fullyEvolved:true,foodRate:0.185,skillRate:0.052,skillExpectionDay:4.2,berryEnergy:27,berryEnergyLv60Day:6590,berrySEnergyLv60Day:13180,rankOfBerry:5,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:147,name:"ミニリュウ",sleepType:"うとうと",specialty:"食材",berry:"ヤチェのみ",food1:"げきからハーブ",food1Num:[2,5,7],food2:"ワカクサコーン",food2Num:[0,4,7],food3:"ピュアなオイル",food3Num:[0,0,8],skill:"げんきチャージS",fp:5,sec:5000,fullyEvolved:false,foodRate:0.25,skillRate:0.02,skillExpectionDay:0.66,berryEnergy:35,berryEnergyLv60Day:4245,berrySEnergyLv60Day:8490,rankOfBerry:2,rankOfFood:1,rankOfSkill:2}),
new Pokemon({no:148,name:"ハクリュー",sleepType:"うとうと",specialty:"食材",berry:"ヤチェのみ",food1:"げきからハーブ",food1Num:[2,5,7],food2:"ワカクサコーン",food2Num:[0,4,7],food3:"ピュアなオイル",food3Num:[0,0,8],skill:"げんきチャージS",fp:12,sec:3800,fullyEvolved:false,foodRate:0.262,skillRate:0.025,skillExpectionDay:1.09,berryEnergy:35,berryEnergyLv60Day:5497,berrySEnergyLv60Day:10994,rankOfBerry:3,rankOfFood:4,rankOfSkill:3}),
new Pokemon({no:149,name:"カイリュー",sleepType:"うとうと",specialty:"食材",berry:"ヤチェのみ",food1:"げきからハーブ",food1Num:[2,5,7],food2:"ワカクサコーン",food2Num:[0,4,7],food3:"ピュアなオイル",food3Num:[0,0,8],skill:"げんきチャージS",fp:25,sec:2600,fullyEvolved:true,foodRate:0.264,skillRate:0.026,skillExpectionDay:1.66,berryEnergy:35,berryEnergyLv60Day:8012,berrySEnergyLv60Day:16024,rankOfBerry:6,rankOfFood:10,rankOfSkill:4}),
new Pokemon({no:152,name:"チコリータ",sleepType:"うとうと",specialty:"きのみ",berry:"ドリのみ",food1:"リラックスカカオ",food1Num:[1,2,4],food2:"あまいミツ",food2Num:[0,3,5],food3:"ふといながねぎ",food3Num:[0,0,3],skill:"エナジーチャージS(ランダム)",fp:5,sec:4400,fullyEvolved:false,foodRate:0.169,skillRate:0.039,skillExpectionDay:1.47,berryEnergy:30,berryEnergyLv60Day:9163,berrySEnergyLv60Day:13745,rankOfBerry:5,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:153,name:"ベイリーフ",sleepType:"うとうと",specialty:"きのみ",berry:"ドリのみ",food1:"リラックスカカオ",food1Num:[1,2,4],food2:"あまいミツ",food2Num:[0,3,5],food3:"ふといながねぎ",food3Num:[0,0,3],skill:"エナジーチャージS(ランダム)",fp:12,sec:3300,fullyEvolved:false,foodRate:0.168,skillRate:0.038,skillExpectionDay:1.91,berryEnergy:30,berryEnergyLv60Day:12232,berrySEnergyLv60Day:18348,rankOfBerry:8,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:154,name:"メガニウム",sleepType:"うとうと",specialty:"きのみ",berry:"ドリのみ",food1:"リラックスカカオ",food1Num:[1,2,4],food2:"あまいミツ",food2Num:[0,3,5],food3:"ふといながねぎ",food3Num:[0,0,3],skill:"エナジーチャージS(ランダム)",fp:20,sec:2800,fullyEvolved:true,foodRate:0.175,skillRate:0.046,skillExpectionDay:2.73,berryEnergy:30,berryEnergyLv60Day:14295,berrySEnergyLv60Day:21443,rankOfBerry:10,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:155,name:"ヒノアラシ",sleepType:"すやすや",specialty:"きのみ",berry:"ヒメリのみ",food1:"あったかジンジャー",food1Num:[1,2,4],food2:"げきからハーブ",food2Num:[0,2,3],food3:"ピュアなオイル",food3Num:[0,0,3],skill:"エナジーチャージS(ランダム)",fp:5,sec:3500,fullyEvolved:false,foodRate:0.186,skillRate:0.021,skillExpectionDay:1,berryEnergy:27,berryEnergyLv60Day:10155,berrySEnergyLv60Day:15233,rankOfBerry:6,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:156,name:"マグマラシ",sleepType:"すやすや",specialty:"きのみ",berry:"ヒメリのみ",food1:"あったかジンジャー",food1Num:[1,2,4],food2:"げきからハーブ",food2Num:[0,2,3],food3:"ピュアなオイル",food3Num:[0,0,3],skill:"エナジーチャージS(ランダム)",fp:12,sec:3000,fullyEvolved:false,foodRate:0.211,skillRate:0.041,skillExpectionDay:2.27,berryEnergy:27,berryEnergyLv60Day:11484,berrySEnergyLv60Day:17226,rankOfBerry:7,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:157,name:"バクフーン",sleepType:"すやすや",specialty:"きのみ",berry:"ヒメリのみ",food1:"あったかジンジャー",food1Num:[1,2,4],food2:"げきからハーブ",food2Num:[0,2,3],food3:"ピュアなオイル",food3Num:[0,0,3],skill:"エナジーチャージS(ランダム)",fp:20,sec:2400,fullyEvolved:true,foodRate:0.208,skillRate:0.039,skillExpectionDay:2.7,berryEnergy:27,berryEnergyLv60Day:14410,berrySEnergyLv60Day:21615,rankOfBerry:10,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:158,name:"ワニノコ",sleepType:"ぐっすり",specialty:"きのみ",berry:"オレンのみ",food1:"マメミート",food1Num:[1,2,4],food2:"ピュアなオイル",food2Num:[0,2,3],food3:"",food3Num:[],skill:"エナジーチャージS(ランダム)",fp:5,sec:4500,fullyEvolved:false,foodRate:0.253,skillRate:0.052,skillExpectionDay:1.92,berryEnergy:31,berryEnergyLv60Day:8322,berrySEnergyLv60Day:12483,rankOfBerry:4,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:159,name:"アリゲイツ",sleepType:"ぐっすり",specialty:"きのみ",berry:"オレンのみ",food1:"マメミート",food1Num:[1,2,4],food2:"ピュアなオイル",food2Num:[0,2,3],food3:"",food3Num:[],skill:"エナジーチャージS(ランダム)",fp:12,sec:3400,fullyEvolved:false,foodRate:0.253,skillRate:0.052,skillExpectionDay:2.54,berryEnergy:31,berryEnergyLv60Day:11015,berrySEnergyLv60Day:16523,rankOfBerry:7,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:160,name:"オーダイル",sleepType:"ぐっすり",specialty:"きのみ",berry:"オレンのみ",food1:"マメミート",food1Num:[1,2,4],food2:"ピュアなオイル",food2Num:[0,2,3],food3:"",food3Num:[],skill:"エナジーチャージS(ランダム)",fp:20,sec:2800,fullyEvolved:true,foodRate:0.257,skillRate:0.055,skillExpectionDay:3.26,berryEnergy:31,berryEnergyLv60Day:13304,berrySEnergyLv60Day:19956,rankOfBerry:9,rankOfFood:1,rankOfSkill:7}),
new Pokemon({no:172,name:"ピチュー",sleepType:"ぐっすり",specialty:"きのみ",berry:"ウブのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,2,3],food3:"とくせんエッグ",food3Num:[0,0,3],skill:"エナジーチャージS",fp:5,sec:4300,fullyEvolved:false,foodRate:0.21,skillRate:0.023,skillExpectionDay:0.89,berryEnergy:25,berryEnergyLv60Day:7428,berrySEnergyLv60Day:11142,rankOfBerry:3,rankOfFood:1,rankOfSkill:2}),
new Pokemon({no:173,name:"ピィ",sleepType:"ぐっすり",specialty:"きのみ",berry:"モモンのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"あまいミツ",food2Num:[0,2,3],food3:"ワカクサ大豆",food3Num:[0,0,3],skill:"ゆびをふる",fp:5,sec:5600,fullyEvolved:false,foodRate:0.164,skillRate:0.034,skillExpectionDay:1.01,berryEnergy:26,berryEnergyLv60Day:6277,berrySEnergyLv60Day:9416,rankOfBerry:2,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:174,name:"ププリン",sleepType:"ぐっすり",specialty:"スキル",berry:"モモンのみ",food1:"あまいミツ",food1Num:[1,2,4],food2:"ピュアなオイル",food2Num:[0,2,3],food3:"リラックスカカオ",food3Num:[0,0,2],skill:"げんきオールS",fp:5,sec:5200,fullyEvolved:false,foodRate:0.17,skillRate:0.038,skillExpectionDay:2.21,berryEnergy:26,berryEnergyLv60Day:3356,berrySEnergyLv60Day:6712,rankOfBerry:1,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:175,name:"トゲピー",sleepType:"ぐっすり",specialty:"スキル",berry:"モモンのみ",food1:"とくせんエッグ",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,2,4],food3:"リラックスカカオ",food3Num:[0,0,3],skill:"ゆびをふる",fp:5,sec:4800,fullyEvolved:false,foodRate:0.151,skillRate:0.049,skillExpectionDay:2.7,berryEnergy:26,berryEnergyLv60Day:3719,berrySEnergyLv60Day:7438,rankOfBerry:1,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:176,name:"トゲチック",sleepType:"すやすや",specialty:"スキル",berry:"モモンのみ",food1:"とくせんエッグ",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,2,4],food3:"リラックスカカオ",food3Num:[0,0,3],skill:"ゆびをふる",fp:12,sec:3800,fullyEvolved:false,foodRate:0.163,skillRate:0.056,skillExpectionDay:3.45,berryEnergy:26,berryEnergyLv60Day:4631,berrySEnergyLv60Day:9262,rankOfBerry:2,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:179,name:"メリープ",sleepType:"すやすや",specialty:"スキル",berry:"ウブのみ",food1:"げきからハーブ",food1Num:[1,2,4],food2:"とくせんエッグ",food2Num:[0,3,4],food3:"",food3Num:[],skill:"エナジーチャージM",fp:5,sec:4600,fullyEvolved:false,foodRate:0.128,skillRate:0.047,skillExpectionDay:2.7,berryEnergy:25,berryEnergyLv60Day:3832,berrySEnergyLv60Day:7664,rankOfBerry:1,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:180,name:"モココ",sleepType:"すやすや",specialty:"スキル",berry:"ウブのみ",food1:"げきからハーブ",food1Num:[1,2,4],food2:"とくせんエッグ",food2Num:[0,3,4],food3:"",food3Num:[],skill:"エナジーチャージM",fp:12,sec:3300,fullyEvolved:false,foodRate:0.127,skillRate:0.046,skillExpectionDay:3.32,berryEnergy:25,berryEnergyLv60Day:5348,berrySEnergyLv60Day:10696,rankOfBerry:3,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:181,name:"デンリュウ",sleepType:"すやすや",specialty:"スキル",berry:"ウブのみ",food1:"げきからハーブ",food1Num:[1,2,4],food2:"とくせんエッグ",food2Num:[0,3,4],food3:"",food3Num:[],skill:"エナジーチャージM",fp:20,sec:2500,fullyEvolved:true,foodRate:0.13,skillRate:0.047,skillExpectionDay:4.12,berryEnergy:25,berryEnergyLv60Day:7035,berrySEnergyLv60Day:14070,rankOfBerry:5,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:185,name:"ウソッキー",sleepType:"ぐっすり",specialty:"スキル",berry:"オボンのみ",food1:"あんみんトマト",food1Num:[1,2,4],food2:"ワカクサ大豆",food2Num:[0,2,4],food3:"あじわいキノコ",food3Num:[0,0,2],skill:"エナジーチャージM",fp:7,sec:4000,fullyEvolved:true,foodRate:0.217,skillRate:0.072,skillExpectionDay:3.99,berryEnergy:30,berryEnergyLv60Day:4749,berrySEnergyLv60Day:9498,rankOfBerry:2,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:194,name:"ウパー",sleepType:"ぐっすり",specialty:"食材",berry:"オレンのみ",food1:"あじわいキノコ",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,6,10],food3:"マメミート",food3Num:[0,0,12],skill:"げんきチャージS",fp:5,sec:5900,fullyEvolved:false,foodRate:0.201,skillRate:0.038,skillExpectionDay:1.07,berryEnergy:31,berryEnergyLv60Day:3395,berrySEnergyLv60Day:6790,rankOfBerry:1,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:194.1,name:"ウパー(パルデア)",sleepType:"うとうと",specialty:"食材",berry:"カゴのみ",food1:"リラックスカカオ",food1Num:[2,5,7],food2:"めざましコーヒー",food2Num:[0,4,7],food3:"ほっこりポテト",food3Num:[0,0,9],skill:"げんきチャージS",fp:5,sec:6400,fullyEvolved:false,foodRate:0.209,skillRate:0.056,skillExpectionDay:1.45,berryEnergy:32,berryEnergyLv60Day:3198,berrySEnergyLv60Day:6396,rankOfBerry:1,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:195,name:"ヌオー",sleepType:"ぐっすり",specialty:"食材",berry:"オレンのみ",food1:"あじわいキノコ",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,6,10],food3:"マメミート",food3Num:[0,0,12],skill:"げんきチャージS",fp:12,sec:3400,fullyEvolved:true,foodRate:0.19,skillRate:0.032,skillExpectionDay:1.56,berryEnergy:31,berryEnergyLv60Day:5972,berrySEnergyLv60Day:11944,rankOfBerry:4,rankOfFood:2,rankOfSkill:4}),
new Pokemon({no:196,name:"エーフィ",sleepType:"すやすや",specialty:"スキル",berry:"マゴのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"エナジーチャージM",fp:20,sec:2400,fullyEvolved:true,foodRate:0.164,skillRate:0.044,skillExpectionDay:4.05,berryEnergy:26,berryEnergyLv60Day:7323,berrySEnergyLv60Day:14646,rankOfBerry:5,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:197,name:"ブラッキー",sleepType:"うとうと",specialty:"スキル",berry:"ウイのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"つきのひかり",fp:20,sec:3200,fullyEvolved:true,foodRate:0.219,skillRate:0.101,skillExpectionDay:6.24,berryEnergy:31,berryEnergyLv60Day:6118,berrySEnergyLv60Day:12236,rankOfBerry:4,rankOfFood:1,rankOfSkill:10}),
new Pokemon({no:198,name:"ヤミカラス",sleepType:"うとうと",specialty:"スキル",berry:"ウイのみ",food1:"めざましコーヒー",food1Num:[1,2,4],food2:"ワカクサ大豆",food2Num:[0,3,6],food3:"げきからハーブ",food3Num:[0,0,4],skill:"きょううん(食材セレクトS)",fp:16,sec:3600,fullyEvolved:false,foodRate:0.141,skillRate:0.062,skillExpectionDay:3.86,berryEnergy:31,berryEnergyLv60Day:5981,berrySEnergyLv60Day:11962,rankOfBerry:4,rankOfFood:1,rankOfSkill:7}),
new Pokemon({no:199,name:"ヤドキング",sleepType:"すやすや",specialty:"スキル",berry:"オレンのみ",food1:"リラックスカカオ",food1Num:[1,2,4],food2:"おいしいシッポ",food2Num:[0,1,2],food3:"あんみんトマト",food3Num:[0,0,5],skill:"げんきエールS",fp:20,sec:3400,fullyEvolved:true,foodRate:0.166,skillRate:0.074,skillExpectionDay:4.62,berryEnergy:31,berryEnergyLv60Day:6149,berrySEnergyLv60Day:12298,rankOfBerry:4,rankOfFood:1,rankOfSkill:9}),
new Pokemon({no:202,name:"ソーナンス",sleepType:"すやすや",specialty:"スキル",berry:"マゴのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"あじわいキノコ",food2Num:[0,1,2],food3:"ピュアなオイル",food3Num:[0,0,3],skill:"げんきエールS",fp:7,sec:3500,fullyEvolved:true,foodRate:0.211,skillRate:0.07,skillExpectionDay:4.32,berryEnergy:26,berryEnergyLv60Day:4739,berrySEnergyLv60Day:9478,rankOfBerry:2,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:208,name:"ハガネール",sleepType:"ぐっすり",specialty:"きのみ",berry:"ベリブのみ",food1:"あんみんトマト",food1Num:[1,2,4],food2:"マメミート",food2Num:[0,2,4],food3:"ほっこりポテト",food3Num:[0,0,3],skill:"食材ゲットS",fp:20,sec:3000,fullyEvolved:true,foodRate:0.154,skillRate:0.032,skillExpectionDay:1.77,berryEnergy:33,berryEnergyLv60Day:15050,berrySEnergyLv60Day:22575,rankOfBerry:10,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:214,name:"ヘラクロス",sleepType:"うとうと",specialty:"スキル",berry:"ラムのみ",food1:"あまいミツ",food1Num:[1,2,4],food2:"あじわいキノコ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,4],skill:"食材ゲットS",fp:16,sec:2300,fullyEvolved:true,foodRate:0.158,skillRate:0.047,skillExpectionDay:4.4,berryEnergy:24,berryEnergyLv60Day:7105,berrySEnergyLv60Day:14210,rankOfBerry:5,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:215,name:"ニューラ",sleepType:"うとうと",specialty:"きのみ",berry:"ウイのみ",food1:"マメミート",food1Num:[1,2,4],food2:"とくせんエッグ",food2Num:[0,2,3],food3:"ワカクサ大豆",food3Num:[0,0,4],skill:"料理チャンスS",fp:16,sec:3200,fullyEvolved:false,foodRate:0.255,skillRate:0.019,skillExpectionDay:0.99,berryEnergy:31,berryEnergyLv60Day:11672,berrySEnergyLv60Day:17508,rankOfBerry:7,rankOfFood:1,rankOfSkill:2}),
new Pokemon({no:225,name:"デリバード",sleepType:"うとうと",specialty:"食材",berry:"シーヤのみ",food1:"とくせんエッグ",food1Num:[2,5,7],food2:"とくせんリンゴ",food2Num:[0,6,9],food3:"リラックスカカオ",food3Num:[0,0,5],skill:"食材ゲットS",fp:16,sec:2500,fullyEvolved:true,foodRate:0.188,skillRate:0.015,skillExpectionDay:1,berryEnergy:24,berryEnergyLv60Day:6303,berrySEnergyLv60Day:12606,rankOfBerry:4,rankOfFood:5,rankOfSkill:3}),
new Pokemon({no:228,name:"デルビル",sleepType:"うとうと",specialty:"きのみ",berry:"ウイのみ",food1:"げきからハーブ",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,3,4],food3:"ふといながねぎ",food3Num:[0,0,3],skill:"エナジーチャージM",fp:5,sec:4900,fullyEvolved:false,foodRate:0.201,skillRate:0.037,skillExpectionDay:1.25,berryEnergy:31,berryEnergyLv60Day:8175,berrySEnergyLv60Day:12263,rankOfBerry:4,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:229,name:"ヘルガー",sleepType:"うとうと",specialty:"きのみ",berry:"ウイのみ",food1:"げきからハーブ",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,3,4],food3:"ふといながねぎ",food3Num:[0,0,3],skill:"エナジーチャージM",fp:12,sec:3300,fullyEvolved:true,foodRate:0.203,skillRate:0.04,skillExpectionDay:2.01,berryEnergy:31,berryEnergyLv60Day:12108,berrySEnergyLv60Day:18162,rankOfBerry:8,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:242,name:"ハピナス",sleepType:"すやすや",specialty:"食材",berry:"キーのみ",food1:"とくせんエッグ",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,7],food3:"あまいミツ",food3Num:[0,0,8],skill:"げんきオールS",fp:20,sec:3100,fullyEvolved:true,foodRate:0.238,skillRate:0.023,skillExpectionDay:1.23,berryEnergy:28,berryEnergyLv60Day:5565,berrySEnergyLv60Day:11130,rankOfBerry:3,rankOfFood:6,rankOfSkill:3}),
new Pokemon({no:243,name:"ライコウ",sleepType:"すやすや",specialty:"スキル",berry:"ウブのみ",food1:"マメミート",food1Num:[1,2,4],food2:"げきからハーブ",food2Num:[0,2,3],food3:"ふといながねぎ",food3Num:[0,0,2],skill:"おてつだいブースト(でんき)",fp:30,sec:2100,fullyEvolved:true,foodRate:0.192,skillRate:0.019,skillExpectionDay:2.5,berryEnergy:25,berryEnergyLv60Day:7778,berrySEnergyLv60Day:15556,rankOfBerry:6,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:244,name:"エンテイ",sleepType:"すやすや",specialty:"スキル",berry:"ヒメリのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"あんみんトマト",food2Num:[0,2,3],food3:"あじわいキノコ",food3Num:[0,0,3],skill:"おてつだいブースト(ほのお)",fp:30,sec:2400,fullyEvolved:true,foodRate:0.187,skillRate:0.023,skillExpectionDay:2.59,berryEnergy:27,berryEnergyLv60Day:7396,berrySEnergyLv60Day:14792,rankOfBerry:6,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:245,name:"スイクン",sleepType:"ぐっすり",specialty:"スキル",berry:"オレンのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"ピュアなオイル",food2Num:[0,2,3],food3:"ワカクサコーン",food3Num:[0,0,2],skill:"おてつだいブースト(みず)",fp:30,sec:2700,fullyEvolved:true,foodRate:0.277,skillRate:0.026,skillExpectionDay:2.6,berryEnergy:31,berryEnergyLv60Day:6713,berrySEnergyLv60Day:13426,rankOfBerry:5,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:246,name:"ヨーギラス",sleepType:"ぐっすり",specialty:"食材",berry:"オボンのみ",food1:"あったかジンジャー",food1Num:[2,5,7],food2:"ワカクサ大豆",food2Num:[0,5,8],food3:"マメミート",food3Num:[0,0,8],skill:"げんきチャージS",fp:5,sec:4800,fullyEvolved:false,foodRate:0.238,skillRate:0.041,skillExpectionDay:1.42,berryEnergy:30,berryEnergyLv60Day:3851,berrySEnergyLv60Day:7702,rankOfBerry:1,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:247,name:"サナギラス",sleepType:"ぐっすり",specialty:"食材",berry:"オボンのみ",food1:"あったかジンジャー",food1Num:[2,5,7],food2:"ワカクサ大豆",food2Num:[0,5,8],food3:"マメミート",food3Num:[0,0,8],skill:"げんきチャージS",fp:12,sec:3600,fullyEvolved:false,foodRate:0.247,skillRate:0.045,skillExpectionDay:2.08,berryEnergy:30,berryEnergyLv60Day:5074,berrySEnergyLv60Day:10148,rankOfBerry:3,rankOfFood:4,rankOfSkill:5}),
new Pokemon({no:248,name:"バンギラス",sleepType:"うとうと",specialty:"食材",berry:"ウイのみ",food1:"あったかジンジャー",food1Num:[2,5,7],food2:"ワカクサ大豆",food2Num:[0,5,8],food3:"マメミート",food3Num:[0,0,8],skill:"げんきチャージS",fp:25,sec:2700,fullyEvolved:true,foodRate:0.266,skillRate:0.052,skillExpectionDay:3.2,berryEnergy:31,berryEnergyLv60Day:6815,berrySEnergyLv60Day:13630,rankOfBerry:5,rankOfFood:10,rankOfSkill:7}),
new Pokemon({no:252,name:"キモリ",sleepType:"うとうと",specialty:"スキル",berry:"ドリのみ",food1:"とくせんエッグ",food1Num:[1,2,4],food2:"めざましコーヒー",food2Num:[0,2,3],food3:"ふといながねぎ",food3Num:[0,0,2],skill:"きのみバースト",fp:5,sec:4500,fullyEvolved:false,foodRate:0.172,skillRate:0.035,skillExpectionDay:2.29,berryEnergy:30,berryEnergyLv60Day:4464,berrySEnergyLv60Day:8928,rankOfBerry:2,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:253,name:"ジュプトル",sleepType:"うとうと",specialty:"スキル",berry:"ドリのみ",food1:"とくせんエッグ",food1Num:[1,2,4],food2:"めざましコーヒー",food2Num:[0,2,3],food3:"ふといながねぎ",food3Num:[0,0,2],skill:"きのみバースト",fp:12,sec:3300,fullyEvolved:false,foodRate:0.15,skillRate:0.035,skillExpectionDay:2.76,berryEnergy:30,berryEnergyLv60Day:6249,berrySEnergyLv60Day:12498,rankOfBerry:4,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:254,name:"ジュカイン",sleepType:"うとうと",specialty:"スキル",berry:"ドリのみ",food1:"とくせんエッグ",food1Num:[1,2,4],food2:"めざましコーヒー",food2Num:[0,2,3],food3:"ふといながねぎ",food3Num:[0,0,2],skill:"きのみバースト",fp:20,sec:2300,fullyEvolved:true,foodRate:0.107,skillRate:0.03,skillExpectionDay:3.17,berryEnergy:30,berryEnergyLv60Day:9419,berrySEnergyLv60Day:18838,rankOfBerry:8,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:255,name:"アチャモ",sleepType:"すやすや",specialty:"きのみ",berry:"ヒメリのみ",food1:"あじわいキノコ",food1Num:[1,2,4],food2:"ワカクサ大豆",food2Num:[0,4,6],food3:"ピュアなオイル",food3Num:[0,0,5],skill:"げんきチャージS",fp:5,sec:4300,fullyEvolved:false,foodRate:0.16,skillRate:0.044,skillExpectionDay:1.7,berryEnergy:27,berryEnergyLv60Day:8530,berrySEnergyLv60Day:12795,rankOfBerry:4,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:256,name:"ワカシャモ",sleepType:"ぐっすり",specialty:"きのみ",berry:"クラボのみ",food1:"あじわいキノコ",food1Num:[1,2,4],food2:"ワカクサ大豆",food2Num:[0,4,6],food3:"ピュアなオイル",food3Num:[0,0,5],skill:"げんきチャージS",fp:12,sec:3400,fullyEvolved:false,foodRate:0.17,skillRate:0.052,skillExpectionDay:2.54,berryEnergy:27,berryEnergyLv60Day:10660,berrySEnergyLv60Day:15990,rankOfBerry:6,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:257,name:"バシャーモ",sleepType:"ぐっすり",specialty:"きのみ",berry:"クラボのみ",food1:"あじわいキノコ",food1Num:[1,2,4],food2:"ワカクサ大豆",food2Num:[0,4,6],food3:"ピュアなオイル",food3Num:[0,0,5],skill:"げんきチャージS",fp:20,sec:2600,fullyEvolved:true,foodRate:0.153,skillRate:0.049,skillExpectionDay:3.13,berryEnergy:27,berryEnergyLv60Day:14225,berrySEnergyLv60Day:21338,rankOfBerry:10,rankOfFood:1,rankOfSkill:7}),
new Pokemon({no:258,name:"ミズゴロウ",sleepType:"ぐっすり",specialty:"きのみ",berry:"オレンのみ",food1:"ワカクサコーン",food1Num:[1,2,3],food2:"モーモーミルク",food2Num:[0,3,5],food3:"あじわいキノコ",food3Num:[0,0,3],skill:"料理チャンスS",fp:5,sec:4700,fullyEvolved:false,foodRate:0.192,skillRate:0.024,skillExpectionDay:0.85,berryEnergy:31,berryEnergyLv60Day:8619,berrySEnergyLv60Day:12929,rankOfBerry:4,rankOfFood:1,rankOfSkill:2}),
new Pokemon({no:259,name:"ヌマクロー",sleepType:"ぐっすり",specialty:"きのみ",berry:"フィラのみ",food1:"ワカクサコーン",food1Num:[1,2,3],food2:"モーモーミルク",food2Num:[0,3,5],food3:"あじわいキノコ",food3Num:[0,0,3],skill:"料理チャンスS",fp:12,sec:3500,fullyEvolved:false,foodRate:0.19,skillRate:0.027,skillExpectionDay:1.28,berryEnergy:29,berryEnergyLv60Day:10854,berrySEnergyLv60Day:16281,rankOfBerry:6,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:260,name:"ラグラージ",sleepType:"ぐっすり",specialty:"きのみ",berry:"フィラのみ",food1:"ワカクサコーン",food1Num:[1,2,3],food2:"モーモーミルク",food2Num:[0,3,5],food3:"あじわいキノコ",food3Num:[0,0,3],skill:"料理チャンスS",fp:20,sec:2800,fullyEvolved:true,foodRate:0.146,skillRate:0.034,skillExpectionDay:2.02,berryEnergy:29,berryEnergyLv60Day:14305,berrySEnergyLv60Day:21458,rankOfBerry:10,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:280,name:"ラルトス",sleepType:"すやすや",specialty:"スキル",berry:"マゴのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"ワカクサコーン",food2Num:[0,1,2],food3:"ふといながねぎ",food3Num:[0,0,2],skill:"げんきオールS",fp:5,sec:4800,fullyEvolved:false,foodRate:0.145,skillRate:0.043,skillExpectionDay:2.49,berryEnergy:26,berryEnergyLv60Day:3745,berrySEnergyLv60Day:7490,rankOfBerry:1,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:281,name:"キルリア",sleepType:"すやすや",specialty:"スキル",berry:"マゴのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"ワカクサコーン",food2Num:[0,1,2],food3:"ふといながねぎ",food3Num:[0,0,2],skill:"げんきオールS",fp:12,sec:3500,fullyEvolved:false,foodRate:0.146,skillRate:0.043,skillExpectionDay:3.04,berryEnergy:26,berryEnergyLv60Day:5130,berrySEnergyLv60Day:10260,rankOfBerry:3,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:282,name:"サーナイト",sleepType:"すやすや",specialty:"スキル",berry:"マゴのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"ワカクサコーン",food2Num:[0,1,2],food3:"ふといながねぎ",food3Num:[0,0,2],skill:"げんきオールS",fp:20,sec:2400,fullyEvolved:true,foodRate:0.144,skillRate:0.042,skillExpectionDay:3.91,berryEnergy:26,berryEnergyLv60Day:7499,berrySEnergyLv60Day:14998,rankOfBerry:6,rankOfFood:1,rankOfSkill:7}),
new Pokemon({no:287,name:"ナマケロ",sleepType:"すやすや",specialty:"きのみ",berry:"キーのみ",food1:"あんみんトマト",food1Num:[1,2,4],food2:"あまいミツ",food2Num:[0,2,4],food3:"とくせんリンゴ",food3Num:[0,0,4],skill:"食材ゲットS",fp:5,sec:4900,fullyEvolved:false,foodRate:0.216,skillRate:0.019,skillExpectionDay:0.64,berryEnergy:28,berryEnergyLv60Day:7245,berrySEnergyLv60Day:10868,rankOfBerry:3,rankOfFood:1,rankOfSkill:2}),
new Pokemon({no:288,name:"ヤルキモノ",sleepType:"うとうと",specialty:"きのみ",berry:"キーのみ",food1:"あんみんトマト",food1Num:[1,2,4],food2:"あまいミツ",food2Num:[0,2,4],food3:"とくせんリンゴ",food3Num:[0,0,4],skill:"食材ゲットS",fp:12,sec:3200,fullyEvolved:true,foodRate:0.204,skillRate:0.015,skillExpectionDay:0.78,berryEnergy:28,berryEnergyLv60Day:11264,berrySEnergyLv60Day:16896,rankOfBerry:7,rankOfFood:1,rankOfSkill:2}),
new Pokemon({no:289,name:"ケッキング",sleepType:"すやすや",specialty:"きのみ",berry:"キーのみ",food1:"あんみんトマト",food1Num:[1,2,4],food2:"あまいミツ",food2Num:[0,2,4],food3:"とくせんリンゴ",food3Num:[0,0,4],skill:"食材ゲットS",fp:22,sec:3600,fullyEvolved:true,foodRate:0.339,skillRate:0.067,skillExpectionDay:3.09,berryEnergy:28,berryEnergyLv60Day:8315,berrySEnergyLv60Day:12473,rankOfBerry:4,rankOfFood:1,rankOfSkill:7}),
new Pokemon({no:302,name:"ヤミラミ",sleepType:"うとうと",specialty:"スキル",berry:"ウイのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"あじわいキノコ",food2Num:[0,2,3],food3:"リラックスカカオ",food3Num:[0,0,3],skill:"ゆめのかけらゲットS(ランダム)",fp:16,sec:3600,fullyEvolved:true,foodRate:0.188,skillRate:0.068,skillExpectionDay:4.14,berryEnergy:31,berryEnergyLv60Day:5654,berrySEnergyLv60Day:11308,rankOfBerry:3,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:303,name:"クチート",sleepType:"ぐっすり",specialty:"食材",berry:"ベリブのみ",food1:"ピュアなオイル",food1Num:[2,5,7],food2:"ワカクサコーン",food2Num:[0,4,6],food3:"あんみんトマト",food3Num:[0,0,8],skill:"かいりきバサミ(食材セレクトS)",fp:16,sec:3200,fullyEvolved:true,foodRate:0.204,skillRate:0.038,skillExpectionDay:1.97,berryEnergy:33,berryEnergyLv60Day:6638,berrySEnergyLv60Day:13276,rankOfBerry:5,rankOfFood:3,rankOfSkill:4}),
new Pokemon({no:304,name:"ココドラ",sleepType:"ぐっすり",specialty:"食材",berry:"ベリブのみ",food1:"マメミート",food1Num:[2,5,7],food2:"めざましコーヒー",food2Num:[0,3,5],food3:"ワカクサ大豆",food3Num:[0,0,7],skill:"げんきチャージS",fp:5,sec:5700,fullyEvolved:false,foodRate:0.273,skillRate:0.046,skillExpectionDay:1.34,berryEnergy:33,berryEnergyLv60Day:3403,berrySEnergyLv60Day:6806,rankOfBerry:1,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:305,name:"コドラ",sleepType:"ぐっすり",specialty:"食材",berry:"ベリブのみ",food1:"マメミート",food1Num:[2,5,7],food2:"めざましコーヒー",food2Num:[0,3,5],food3:"ワカクサ大豆",food3Num:[0,0,7],skill:"げんきチャージS",fp:12,sec:4200,fullyEvolved:false,foodRate:0.277,skillRate:0.048,skillExpectionDay:1.9,berryEnergy:33,berryEnergyLv60Day:4594,berrySEnergyLv60Day:9188,rankOfBerry:2,rankOfFood:4,rankOfSkill:4}),
new Pokemon({no:306,name:"ボスゴドラ",sleepType:"ぐっすり",specialty:"食材",berry:"ベリブのみ",food1:"マメミート",food1Num:[2,5,7],food2:"めざましコーヒー",food2Num:[0,3,5],food3:"ワカクサ大豆",food3Num:[0,0,7],skill:"げんきチャージS",fp:20,sec:3000,fullyEvolved:true,foodRate:0.285,skillRate:0.052,skillExpectionDay:2.88,berryEnergy:33,berryEnergyLv60Day:6360,berrySEnergyLv60Day:12720,rankOfBerry:4,rankOfFood:9,rankOfSkill:6}),
new Pokemon({no:311,name:"プラスル",sleepType:"すやすや",specialty:"スキル",berry:"ウブのみ",food1:"めざましコーヒー",food1Num:[1,2,4],food2:"ふといながねぎ",food2Num:[0,2,3],food3:"モーモーミルク",food3Num:[0,0,6],skill:"プラス(食材ゲットS)?",fp:10,sec:2400,fullyEvolved:true,foodRate:0.103,skillRate:0.049,skillExpectionDay:4.39,berryEnergy:25,berryEnergyLv60Day:7556,berrySEnergyLv60Day:15112,rankOfBerry:6,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:312,name:"マイナン",sleepType:"すやすや",specialty:"スキル",berry:"ウブのみ",food1:"あまいミツ",food1Num:[1,2,4],food2:"とくせんエッグ",food2Num:[0,2,4],food3:"モーモーミルク",food3Num:[0,0,4],skill:"マイナス(料理パワーアップS)?",fp:10,sec:2400,fullyEvolved:true,foodRate:0.174,skillRate:0.049,skillExpectionDay:4.39,berryEnergy:25,berryEnergyLv60Day:6958,berrySEnergyLv60Day:13916,rankOfBerry:5,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:316,name:"ゴクリン",sleepType:"うとうと",specialty:"スキル",berry:"カゴのみ",food1:"ワカクサ大豆",food1Num:[1,2,4],food2:"あじわいキノコ",food2Num:[0,1,2],food3:"あまいミツ",food3Num:[0,0,4],skill:"ゆめのかけらゲットS(ランダム)",fp:5,sec:5900,fullyEvolved:false,foodRate:0.214,skillRate:0.063,skillExpectionDay:2.77,berryEnergy:32,berryEnergyLv60Day:3447,berrySEnergyLv60Day:6894,rankOfBerry:1,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:317,name:"マルノーム",sleepType:"うとうと",specialty:"スキル",berry:"カゴのみ",food1:"ワカクサ大豆",food1Num:[1,2,4],food2:"あじわいキノコ",food2Num:[0,1,2],food3:"あまいミツ",food3Num:[0,0,4],skill:"ゆめのかけらゲットS(ランダム)",fp:12,sec:3500,fullyEvolved:true,foodRate:0.21,skillRate:0.07,skillExpectionDay:4.32,berryEnergy:32,berryEnergyLv60Day:5841,berrySEnergyLv60Day:11682,rankOfBerry:4,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:333,name:"チルット",sleepType:"ぐっすり",specialty:"きのみ",berry:"シーヤのみ",food1:"とくせんエッグ",food1Num:[1,2,4],food2:"ワカクサ大豆",food2Num:[0,3,4],food3:"とくせんリンゴ",food3Num:[0,0,5],skill:"げんきチャージS",fp:5,sec:4200,fullyEvolved:false,foodRate:0.177,skillRate:0.032,skillExpectionDay:1.27,berryEnergy:24,berryEnergyLv60Day:7606,berrySEnergyLv60Day:11409,rankOfBerry:3,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:334,name:"チルタリス",sleepType:"うとうと",specialty:"きのみ",berry:"ヤチェのみ",food1:"とくせんエッグ",food1Num:[1,2,4],food2:"ワカクサ大豆",food2Num:[0,3,4],food3:"とくせんリンゴ",food3Num:[0,0,5],skill:"げんきチャージS",fp:12,sec:3500,fullyEvolved:true,foodRate:0.258,skillRate:0.061,skillExpectionDay:2.9,berryEnergy:35,berryEnergyLv60Day:12000,berrySEnergyLv60Day:18000,rankOfBerry:7,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:353,name:"カゲボウズ",sleepType:"うとうと",specialty:"きのみ",berry:"ブリーのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,2,4],food3:"あじわいキノコ",food3Num:[0,0,3],skill:"エナジーチャージS(ランダム)",fp:5,sec:3900,fullyEvolved:false,foodRate:0.171,skillRate:0.026,skillExpectionDay:1.11,berryEnergy:26,berryEnergyLv60Day:8938,berrySEnergyLv60Day:13407,rankOfBerry:5,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:354,name:"ジュペッタ",sleepType:"うとうと",specialty:"きのみ",berry:"ブリーのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,2,4],food3:"あじわいキノコ",food3Num:[0,0,3],skill:"エナジーチャージS(ランダム)",fp:16,sec:2600,fullyEvolved:true,foodRate:0.179,skillRate:0.033,skillExpectionDay:2.11,berryEnergy:26,berryEnergyLv60Day:13278,berrySEnergyLv60Day:19917,rankOfBerry:9,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:359,name:"アブソル",sleepType:"うとうと",specialty:"食材",berry:"ウイのみ",food1:"リラックスカカオ",food1Num:[2,5,7],food2:"とくせんリンゴ",food2Num:[0,8,12],food3:"あじわいキノコ",food3Num:[0,0,7],skill:"エナジーチャージS",fp:16,sec:2950,fullyEvolved:true,foodRate:0.178,skillRate:0.038,skillExpectionDay:2.14,berryEnergy:31,berryEnergyLv60Day:6985,berrySEnergyLv60Day:13970,rankOfBerry:5,rankOfFood:3,rankOfSkill:5}),
new Pokemon({no:360,name:"ソーナノ",sleepType:"ぐっすり",specialty:"スキル",berry:"マゴのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"あじわいキノコ",food2Num:[0,1,2],food3:"ピュアなオイル",food3Num:[0,0,3],skill:"げんきエールS",fp:5,sec:5800,fullyEvolved:false,foodRate:0.213,skillRate:0.059,skillExpectionDay:2.69,berryEnergy:26,berryEnergyLv60Day:2853,berrySEnergyLv60Day:5706,rankOfBerry:1,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:363,name:"タマザラシ",sleepType:"ぐっすり",specialty:"きのみ",berry:"チーゴのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"マメミート",food2Num:[0,3,4],food3:"あったかジンジャー",food3Num:[0,0,4],skill:"食材ゲットS",fp:5,sec:5600,fullyEvolved:false,foodRate:0.224,skillRate:0.023,skillExpectionDay:0.68,berryEnergy:32,berryEnergyLv60Day:7171,berrySEnergyLv60Day:10757,rankOfBerry:3,rankOfFood:1,rankOfSkill:2}),
new Pokemon({no:364,name:"トドグラー",sleepType:"ぐっすり",specialty:"きのみ",berry:"チーゴのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"マメミート",food2Num:[0,3,4],food3:"あったかジンジャー",food3Num:[0,0,4],skill:"食材ゲットS",fp:12,sec:4000,fullyEvolved:false,foodRate:0.221,skillRate:0.021,skillExpectionDay:0.87,berryEnergy:32,berryEnergyLv60Day:10079,berrySEnergyLv60Day:15119,rankOfBerry:6,rankOfFood:1,rankOfSkill:2}),
new Pokemon({no:365,name:"トドゼルガ",sleepType:"ぐっすり",specialty:"きのみ",berry:"チーゴのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"マメミート",food2Num:[0,3,4],food3:"あったかジンジャー",food3Num:[0,0,4],skill:"食材ゲットS",fp:20,sec:3000,fullyEvolved:true,foodRate:0.223,skillRate:0.022,skillExpectionDay:1.22,berryEnergy:32,berryEnergyLv60Day:13404,berrySEnergyLv60Day:20106,rankOfBerry:9,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:403,name:"コリンク",sleepType:"すやすや",specialty:"食材",berry:"ウブのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"ピュアなオイル",food2Num:[0,4,7],food3:"めざましコーヒー",food3Num:[0,0,5],skill:"料理パワーアップS",fp:5,sec:4400,fullyEvolved:false,foodRate:0.181,skillRate:0.018,skillExpectionDay:0.68,berryEnergy:25,berryEnergyLv60Day:3763,berrySEnergyLv60Day:7526,rankOfBerry:1,rankOfFood:1,rankOfSkill:2}),
new Pokemon({no:404,name:"ルクシオ",sleepType:"すやすや",specialty:"食材",berry:"ウブのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"ピュアなオイル",food2Num:[0,4,7],food3:"めざましコーヒー",food3Num:[0,0,5],skill:"料理パワーアップS",fp:12,sec:3200,fullyEvolved:false,foodRate:0.182,skillRate:0.018,skillExpectionDay:0.93,berryEnergy:25,berryEnergyLv60Day:5168,berrySEnergyLv60Day:10336,rankOfBerry:3,rankOfFood:2,rankOfSkill:2}),
new Pokemon({no:405,name:"レントラー",sleepType:"すやすや",specialty:"食材",berry:"ウブのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"ピュアなオイル",food2Num:[0,4,7],food3:"めざましコーヒー",food3Num:[0,0,5],skill:"料理パワーアップS",fp:20,sec:2400,fullyEvolved:true,foodRate:0.2,skillRate:0.023,skillExpectionDay:1.59,berryEnergy:25,berryEnergyLv60Day:6739,berrySEnergyLv60Day:13478,rankOfBerry:5,rankOfFood:7,rankOfSkill:4}),
new Pokemon({no:430,name:"ドンカラス",sleepType:"うとうと",specialty:"スキル",berry:"ウイのみ",food1:"めざましコーヒー",food1Num:[1,2,4],food2:"ワカクサ大豆",food2Num:[0,3,6],food3:"げきからハーブ",food3Num:[0,0,4],skill:"きょううん(食材セレクトS)",fp:20,sec:3200,fullyEvolved:true,foodRate:0.143,skillRate:0.067,skillExpectionDay:4.48,berryEnergy:31,berryEnergyLv60Day:6713,berrySEnergyLv60Day:13426,rankOfBerry:5,rankOfFood:1,rankOfSkill:9}),
new Pokemon({no:438,name:"ウソハチ",sleepType:"ぐっすり",specialty:"スキル",berry:"オボンのみ",food1:"あんみんトマト",food1Num:[1,2,4],food2:"ワカクサ大豆",food2Num:[0,2,4],food3:"あじわいキノコ",food3Num:[0,0,2],skill:"エナジーチャージM",fp:5,sec:6300,fullyEvolved:false,foodRate:0.189,skillRate:0.061,skillExpectionDay:2.61,berryEnergy:30,berryEnergyLv60Day:3123,berrySEnergyLv60Day:6246,rankOfBerry:1,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:439,name:"マネネ",sleepType:"ぐっすり",specialty:"食材",berry:"マゴのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,6],food3:"ふといながねぎ",food3Num:[0,0,4],skill:"へんしん(スキルコピー)",fp:5,sec:4300,fullyEvolved:false,foodRate:0.201,skillRate:0.032,skillExpectionDay:1.24,berryEnergy:26,berryEnergyLv60Day:3907,berrySEnergyLv60Day:7814,rankOfBerry:1,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:440,name:"ピンプク",sleepType:"ぐっすり",specialty:"食材",berry:"キーのみ",food1:"とくせんエッグ",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,7],food3:"あまいミツ",food3Num:[0,0,8],skill:"げんきオールS",fp:5,sec:4500,fullyEvolved:false,foodRate:0.21,skillRate:0.013,skillExpectionDay:0.48,berryEnergy:28,berryEnergyLv60Day:3975,berrySEnergyLv60Day:7950,rankOfBerry:1,rankOfFood:1,rankOfSkill:1}),
new Pokemon({no:447,name:"リオル",sleepType:"ぐっすり",specialty:"スキル",berry:"クラボのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"ほっこりポテト",food2Num:[0,2,4],food3:"とくせんエッグ",food3Num:[0,0,4],skill:"ゆめのかけらゲットS",fp:5,sec:4200,fullyEvolved:false,foodRate:0.126,skillRate:0.038,skillExpectionDay:2.5,berryEnergy:27,berryEnergyLv60Day:4543,berrySEnergyLv60Day:9086,rankOfBerry:2,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:448,name:"ルカリオ",sleepType:"ぐっすり",specialty:"スキル",berry:"クラボのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"ほっこりポテト",food2Num:[0,2,4],food3:"とくせんエッグ",food3Num:[0,0,4],skill:"ゆめのかけらゲットS",fp:20,sec:2600,fullyEvolved:true,foodRate:0.15,skillRate:0.051,skillExpectionDay:4.26,berryEnergy:27,berryEnergyLv60Day:7138,berrySEnergyLv60Day:14276,rankOfBerry:5,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:453,name:"グレッグル",sleepType:"うとうと",specialty:"食材",berry:"カゴのみ",food1:"ピュアなオイル",food1Num:[2,5,7],food2:"マメミート",food2Num:[0,5,8],food3:"",food3Num:[],skill:"エナジーチャージS",fp:5,sec:5600,fullyEvolved:false,foodRate:0.228,skillRate:0.042,skillExpectionDay:1.25,berryEnergy:32,berryEnergyLv60Day:3567,berrySEnergyLv60Day:7134,rankOfBerry:1,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:454,name:"ドクロッグ",sleepType:"うとうと",specialty:"食材",berry:"カゴのみ",food1:"ピュアなオイル",food1Num:[2,5,7],food2:"マメミート",food2Num:[0,5,8],food3:"",food3Num:[],skill:"エナジーチャージS",fp:12,sec:3400,fullyEvolved:true,foodRate:0.229,skillRate:0.043,skillExpectionDay:2.1,berryEnergy:32,berryEnergyLv60Day:5868,berrySEnergyLv60Day:11736,rankOfBerry:4,rankOfFood:4,rankOfSkill:5}),
new Pokemon({no:459,name:"ユキカブリ",sleepType:"ぐっすり",specialty:"食材",berry:"チーゴのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"とくせんエッグ",food2Num:[0,4,7],food3:"あじわいキノコ",food3Num:[0,0,5],skill:"エナジーチャージS(ランダム)",fp:5,sec:5600,fullyEvolved:false,foodRate:0.251,skillRate:0.044,skillExpectionDay:1.31,berryEnergy:32,berryEnergyLv60Day:3461,berrySEnergyLv60Day:6922,rankOfBerry:1,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:460,name:"ユキノオー",sleepType:"ぐっすり",specialty:"食材",berry:"チーゴのみ",food1:"あんみんトマト",food1Num:[2,5,7],food2:"とくせんエッグ",food2Num:[0,4,7],food3:"あじわいキノコ",food3Num:[0,0,5],skill:"エナジーチャージS(ランダム)",fp:12,sec:3000,fullyEvolved:true,foodRate:0.25,skillRate:0.044,skillExpectionDay:2.44,berryEnergy:32,berryEnergyLv60Day:6469,berrySEnergyLv60Day:12938,rankOfBerry:4,rankOfFood:7,rankOfSkill:5}),
new Pokemon({no:461,name:"マニューラ",sleepType:"うとうと",specialty:"きのみ",berry:"ウイのみ",food1:"マメミート",food1Num:[1,2,4],food2:"とくせんエッグ",food2Num:[0,2,3],food3:"ワカクサ大豆",food3Num:[0,0,4],skill:"料理チャンスS",fp:20,sec:2700,fullyEvolved:true,foodRate:0.251,skillRate:0.018,skillExpectionDay:1.11,berryEnergy:31,berryEnergyLv60Day:13908,berrySEnergyLv60Day:20862,rankOfBerry:9,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:462,name:"ジバコイル",sleepType:"ぐっすり",specialty:"スキル",berry:"ベリブのみ",food1:"ピュアなオイル",food1Num:[1,2,4],food2:"げきからハーブ",food2Num:[0,2,3],food3:"",food3Num:[],skill:"料理パワーアップS",fp:22,sec:3100,fullyEvolved:true,foodRate:0.179,skillRate:0.062,skillExpectionDay:4.32,berryEnergy:33,berryEnergyLv60Day:7067,berrySEnergyLv60Day:14134,rankOfBerry:5,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:468,name:"トゲキッス",sleepType:"すやすや",specialty:"スキル",berry:"モモンのみ",food1:"とくせんエッグ",food1Num:[1,2,4],food2:"あったかジンジャー",food2Num:[0,2,4],food3:"リラックスカカオ",food3Num:[0,0,3],skill:"ゆびをふる",fp:22,sec:2600,fullyEvolved:true,foodRate:0.158,skillRate:0.053,skillExpectionDay:4.39,berryEnergy:26,berryEnergyLv60Day:6809,berrySEnergyLv60Day:13618,rankOfBerry:5,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:470,name:"リーフィア",sleepType:"うとうと",specialty:"スキル",berry:"ドリのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"げんきエールS",fp:20,sec:3000,fullyEvolved:true,foodRate:0.205,skillRate:0.059,skillExpectionDay:4.27,berryEnergy:30,berryEnergyLv60Day:6429,berrySEnergyLv60Day:12858,rankOfBerry:4,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:471,name:"グレイシア",sleepType:"ぐっすり",specialty:"スキル",berry:"チーゴのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"料理パワーアップS",fp:20,sec:3200,fullyEvolved:true,foodRate:0.219,skillRate:0.063,skillExpectionDay:4.27,berryEnergy:32,berryEnergyLv60Day:6315,berrySEnergyLv60Day:12630,rankOfBerry:4,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:475,name:"エルレイド",sleepType:"ぐっすり",specialty:"スキル",berry:"クラボのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"ワカクサコーン",food2Num:[0,1,2],food3:"ふといながねぎ",food3Num:[0,0,2],skill:"おてつだいサポートS",fp:22,sec:2400,fullyEvolved:true,foodRate:0.147,skillRate:0.054,skillExpectionDay:4.74,berryEnergy:27,berryEnergyLv60Day:7760,berrySEnergyLv60Day:15520,rankOfBerry:6,rankOfFood:1,rankOfSkill:9}),
new Pokemon({no:488,name:"クレセリア",sleepType:"すやすや",specialty:"スキル",berry:"マゴのみ",food1:"あったかジンジャー",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,2,3],food3:"あんみんトマト",food3Num:[0,0,4],skill:"みかづきのいのり(げんきオールS)",fp:30,sec:2300,fullyEvolved:true,foodRate:0.239,skillRate:0.041,skillExpectionDay:3.96,berryEnergy:26,berryEnergyLv60Day:6956,berrySEnergyLv60Day:13912,rankOfBerry:5,rankOfFood:1,rankOfSkill:7}),
new Pokemon({no:491,name:"ダークライ",sleepType:"うとうと",specialty:"オール",berry:"ウイのみ",food1:"めざましコーヒー",food1Num:[2,3,4],food2:"ワカクサ大豆",food2Num:[2,4,6],food3:"マメミート",food3Num:[2,4,6],skill:"ナイトメア(エナジーチャージM)",fp:0,sec:2900,fullyEvolved:true,foodRate:0.192,skillRate:0.023,skillExpectionDay:1.32,berryEnergy:31,berryEnergyLv60Day:13969,berrySEnergyLv60Day:20954,rankOfBerry:9,rankOfFood:4,rankOfSkill:4}),
new Pokemon({no:517,name:"ムンナ",sleepType:"すやすや",specialty:"きのみ",berry:"マゴのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"あまいミツ",food2Num:[0,2,3],food3:"めざましコーヒー",food3Num:[0,0,2],skill:"ゆめのかけらゲットS(ランダム)",fp:5,sec:5700,fullyEvolved:false,foodRate:0.197,skillRate:0.043,skillExpectionDay:1.25,berryEnergy:26,berryEnergyLv60Day:5924,berrySEnergyLv60Day:8886,rankOfBerry:2,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:518,name:"ムシャーナ",sleepType:"すやすや",specialty:"きのみ",berry:"マゴのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"あまいミツ",food2Num:[0,2,3],food3:"めざましコーヒー",food3Num:[0,0,2],skill:"ゆめのかけらゲットS(ランダム)",fp:20,sec:2800,fullyEvolved:true,foodRate:0.188,skillRate:0.041,skillExpectionDay:2.43,berryEnergy:26,berryEnergyLv60Day:12194,berrySEnergyLv60Day:18291,rankOfBerry:8,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:627,name:"ワシボン",sleepType:"ぐっすり",specialty:"スキル",berry:"シーヤのみ",food1:"マメミート",food1Num:[1,2,4],food2:"ワカクサコーン",food2Num:[0,2,3],food3:"めざましコーヒー",food3Num:[0,0,2],skill:"きのみバースト",fp:5,sec:3800,fullyEvolved:false,foodRate:0.125,skillRate:0.031,skillExpectionDay:2.36,berryEnergy:24,berryEnergyLv60Day:4469,berrySEnergyLv60Day:8938,rankOfBerry:2,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:628,name:"ウォーグル",sleepType:"ぐっすり",specialty:"スキル",berry:"シーヤのみ",food1:"マメミート",food1Num:[1,2,4],food2:"ワカクサコーン",food2Num:[0,2,3],food3:"めざましコーヒー",food3Num:[0,0,2],skill:"きのみバースト",fp:12,sec:2400,fullyEvolved:true,foodRate:0.121,skillRate:0.032,skillExpectionDay:3.22,berryEnergy:24,berryEnergyLv60Day:7108,berrySEnergyLv60Day:14216,rankOfBerry:5,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:700,name:"ニンフィア",sleepType:"すやすや",specialty:"スキル",berry:"モモンのみ",food1:"モーモーミルク",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"マメミート",food3Num:[0,0,3],skill:"げんきオールS",fp:20,sec:2600,fullyEvolved:true,foodRate:0.178,skillRate:0.04,skillExpectionDay:3.56,berryEnergy:26,berryEnergyLv60Day:6647,berrySEnergyLv60Day:13294,rankOfBerry:5,rankOfFood:1,rankOfSkill:7}),
new Pokemon({no:702,name:"デデンネ",sleepType:"すやすや",specialty:"スキル",berry:"ウブのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"リラックスカカオ",food2Num:[0,1,2],food3:"ワカクサコーン",food3Num:[0,0,2],skill:"料理チャンスS",fp:16,sec:2500,fullyEvolved:true,foodRate:0.177,skillRate:0.045,skillExpectionDay:3.99,berryEnergy:25,berryEnergyLv60Day:6655,berrySEnergyLv60Day:13310,rankOfBerry:5,rankOfFood:1,rankOfSkill:8}),
new Pokemon({no:736,name:"アゴジムシ",sleepType:"うとうと",specialty:"食材",berry:"ラムのみ",food1:"めざましコーヒー",food1Num:[2,5,7],food2:"あじわいキノコ",food2Num:[0,4,7],food3:"あまいミツ",food3Num:[0,0,11],skill:"エナジーチャージS",fp:5,sec:4600,fullyEvolved:false,foodRate:0.155,skillRate:0.029,skillExpectionDay:1.05,berryEnergy:24,berryEnergyLv60Day:3565,berrySEnergyLv60Day:7130,rankOfBerry:1,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:737,name:"デンヂムシ",sleepType:"うとうと",specialty:"食材",berry:"ラムのみ",food1:"めざましコーヒー",food1Num:[2,5,7],food2:"あじわいキノコ",food2Num:[0,4,7],food3:"あまいミツ",food3Num:[0,0,11],skill:"エナジーチャージS",fp:12,sec:3300,fullyEvolved:false,foodRate:0.154,skillRate:0.028,skillExpectionDay:1.41,berryEnergy:24,berryEnergyLv60Day:4975,berrySEnergyLv60Day:9950,rankOfBerry:3,rankOfFood:1,rankOfSkill:3}),
new Pokemon({no:738,name:"クワガノン",sleepType:"うとうと",specialty:"食材",berry:"ラムのみ",food1:"めざましコーヒー",food1Num:[2,5,7],food2:"あじわいキノコ",food2Num:[0,4,7],food3:"あまいミツ",food3Num:[0,0,11],skill:"エナジーチャージS",fp:20,sec:2800,fullyEvolved:true,foodRate:0.194,skillRate:0.051,skillExpectionDay:3.03,berryEnergy:24,berryEnergyLv60Day:5586,berrySEnergyLv60Day:11172,rankOfBerry:3,rankOfFood:4,rankOfSkill:7}),
new Pokemon({no:759,name:"ヌイコグマ",sleepType:"ぐっすり",specialty:"食材",berry:"クラボのみ",food1:"ワカクサコーン",food1Num:[2,5,7],food2:"マメミート",food2Num:[0,6,10],food3:"とくせんエッグ",food3Num:[0,0,9],skill:"エナジーチャージS(ランダム)",fp:5,sec:4100,fullyEvolved:false,foodRate:0.225,skillRate:0.011,skillExpectionDay:0.45,berryEnergy:27,berryEnergyLv60Day:4127,berrySEnergyLv60Day:8254,rankOfBerry:1,rankOfFood:2,rankOfSkill:1}),
new Pokemon({no:760,name:"キテルグマ",sleepType:"ぐっすり",specialty:"食材",berry:"クラボのみ",food1:"ワカクサコーン",food1Num:[2,5,7],food2:"マメミート",food2Num:[0,6,10],food3:"とくせんエッグ",food3Num:[0,0,9],skill:"エナジーチャージS(ランダム)",fp:12,sec:2800,fullyEvolved:true,foodRate:0.229,skillRate:0.013,skillExpectionDay:0.77,berryEnergy:27,berryEnergyLv60Day:6012,berrySEnergyLv60Day:12024,rankOfBerry:4,rankOfFood:7,rankOfSkill:2}),
new Pokemon({no:764,name:"キュワワー",sleepType:"すやすや",specialty:"食材",berry:"モモンのみ",food1:"ワカクサコーン",food1Num:[2,5,7],food2:"あったかジンジャー",food2Num:[0,6,9],food3:"リラックスカカオ",food3Num:[0,0,7],skill:"げんきエールS",fp:16,sec:2500,fullyEvolved:true,foodRate:0.167,skillRate:0.03,skillExpectionDay:1.99,berryEnergy:26,berryEnergyLv60Day:7005,berrySEnergyLv60Day:14010,rankOfBerry:5,rankOfFood:4,rankOfSkill:5}),
new Pokemon({no:778,name:"ミミッキュ",sleepType:"うとうと",specialty:"スキル",berry:"ブリーのみ",food1:"とくせんリンゴ",food1Num:[1,2,4],food2:"めざましコーヒー",food2Num:[0,1,2],food3:"あじわいキノコ",food3Num:[0,0,2],skill:"ばけのかわ(きのみバースト)",fp:16,sec:2500,fullyEvolved:true,foodRate:0.153,skillRate:0.033,skillExpectionDay:3.19,berryEnergy:26,berryEnergyLv60Day:7123,berrySEnergyLv60Day:14246,rankOfBerry:5,rankOfFood:1,rankOfSkill:6}),
new Pokemon({no:845,name:"ウッウ",sleepType:"ぐっすり",specialty:"食材",berry:"シーヤのみ",food1:"ピュアなオイル",food1Num:[2,5,7],food2:"ほっこりポテト",food2Num:[0,4,7],food3:"とくせんエッグ",food3Num:[0,0,8],skill:"料理チャンスS",fp:16,sec:2700,fullyEvolved:true,foodRate:0.165,skillRate:0.039,skillExpectionDay:2.4,berryEnergy:24,berryEnergyLv60Day:6002,berrySEnergyLv60Day:12004,rankOfBerry:4,rankOfFood:3,rankOfSkill:5}),
new Pokemon({no:906,name:"ニャオハ",sleepType:"うとうと",specialty:"食材",berry:"ドリのみ",food1:"ほっこりポテト",food1Num:[2,5,7],food2:"モーモーミルク",food2Num:[0,6,9],food3:"あったかジンジャー",food3Num:[0,0,8],skill:"料理パワーアップS",fp:5,sec:4600,fullyEvolved:false,foodRate:0.208,skillRate:0.023,skillExpectionDay:0.83,berryEnergy:30,berryEnergyLv60Day:4177,berrySEnergyLv60Day:8354,rankOfBerry:2,rankOfFood:1,rankOfSkill:2}),
new Pokemon({no:907,name:"ニャローテ",sleepType:"うとうと",specialty:"食材",berry:"ドリのみ",food1:"ほっこりポテト",food1Num:[2,5,7],food2:"モーモーミルク",food2Num:[0,6,9],food3:"あったかジンジャー",food3Num:[0,0,8],skill:"料理パワーアップS",fp:12,sec:3500,fullyEvolved:false,foodRate:0.209,skillRate:0.023,skillExpectionDay:1.09,berryEnergy:30,berryEnergyLv60Day:5483,berrySEnergyLv60Day:10966,rankOfBerry:3,rankOfFood:3,rankOfSkill:3}),
new Pokemon({no:908,name:"マスカーニャ",sleepType:"うとうと",specialty:"食材",berry:"ウイのみ",food1:"ほっこりポテト",food1Num:[2,5,7],food2:"モーモーミルク",food2Num:[0,6,9],food3:"あったかジンジャー",food3Num:[0,0,8],skill:"料理パワーアップS",fp:20,sec:2600,fullyEvolved:true,foodRate:0.19,skillRate:0.022,skillExpectionDay:1.41,berryEnergy:31,berryEnergyLv60Day:7810,berrySEnergyLv60Day:15620,rankOfBerry:6,rankOfFood:5,rankOfSkill:3}),
new Pokemon({no:909,name:"ホゲータ",sleepType:"すやすや",specialty:"食材",berry:"ヒメリのみ",food1:"とくせんリンゴ",food1Num:[2,5,7],food2:"マメミート",food2Num:[0,4,6],food3:"げきからハーブ",food3Num:[0,0,5],skill:"げんきチャージS",fp:5,sec:4200,fullyEvolved:false,foodRate:0.254,skillRate:0.053,skillExpectionDay:2.1,berryEnergy:27,berryEnergyLv60Day:3878,berrySEnergyLv60Day:7756,rankOfBerry:1,rankOfFood:3,rankOfSkill:5}),
new Pokemon({no:910,name:"アチゲータ",sleepType:"すやすや",specialty:"食材",berry:"ヒメリのみ",food1:"とくせんリンゴ",food1Num:[2,5,7],food2:"マメミート",food2Num:[0,4,6],food3:"げきからハーブ",food3Num:[0,0,5],skill:"げんきチャージS",fp:12,sec:3100,fullyEvolved:false,foodRate:0.247,skillRate:0.05,skillExpectionDay:2.68,berryEnergy:27,berryEnergyLv60Day:5303,berrySEnergyLv60Day:10606,rankOfBerry:3,rankOfFood:6,rankOfSkill:6}),
new Pokemon({no:911,name:"ラウドボーン",sleepType:"うとうと",specialty:"食材",berry:"ブリーのみ",food1:"とくせんリンゴ",food1Num:[2,5,7],food2:"マメミート",food2Num:[0,4,6],food3:"げきからハーブ",food3Num:[0,0,5],skill:"げんきチャージS",fp:20,sec:2700,fullyEvolved:true,foodRate:0.268,skillRate:0.062,skillExpectionDay:3.82,berryEnergy:26,berryEnergyLv60Day:5700,berrySEnergyLv60Day:11400,rankOfBerry:3,rankOfFood:10,rankOfSkill:8}),
new Pokemon({no:912,name:"クワッス",sleepType:"ぐっすり",specialty:"食材",berry:"オレンのみ",food1:"ワカクサ大豆",food1Num:[2,5,7],food2:"ふといながねぎ",food2Num:[0,2,4],food3:"ピュアなオイル",food3Num:[0,0,6],skill:"エナジーチャージM",fp:5,sec:4800,fullyEvolved:false,foodRate:0.261,skillRate:0.028,skillExpectionDay:0.97,berryEnergy:31,berryEnergyLv60Day:3859,berrySEnergyLv60Day:7718,rankOfBerry:1,rankOfFood:2,rankOfSkill:2}),
new Pokemon({no:913,name:"ウェルカモ",sleepType:"ぐっすり",specialty:"食材",berry:"オレンのみ",food1:"ワカクサ大豆",food1Num:[2,5,7],food2:"ふといながねぎ",food2Num:[0,2,4],food3:"ピュアなオイル",food3Num:[0,0,6],skill:"エナジーチャージM",fp:12,sec:3600,fullyEvolved:false,foodRate:0.259,skillRate:0.027,skillExpectionDay:1.25,berryEnergy:31,berryEnergyLv60Day:5160,berrySEnergyLv60Day:10320,rankOfBerry:3,rankOfFood:5,rankOfSkill:3}),
new Pokemon({no:914,name:"ウェーニバル",sleepType:"ぐっすり",specialty:"食材",berry:"クラボのみ",food1:"ワカクサ大豆",food1Num:[2,5,7],food2:"ふといながねぎ",food2Num:[0,2,4],food3:"ピュアなオイル",food3Num:[0,0,6],skill:"エナジーチャージM",fp:20,sec:2600,fullyEvolved:true,foodRate:0.232,skillRate:0.024,skillExpectionDay:1.53,berryEnergy:27,berryEnergyLv60Day:6449,berrySEnergyLv60Day:12898,rankOfBerry:4,rankOfFood:8,rankOfSkill:4}),
new Pokemon({no:921,name:"パモ",sleepType:"すやすや",specialty:"スキル",berry:"ウブのみ",food1:"リラックスカカオ",food1Num:[1,2,4],food2:"モーモーミルク",food2Num:[0,3,6],food3:"とくせんエッグ",food3Num:[0,0,5],skill:"げんきオールS",fp:5,sec:4600,fullyEvolved:false,foodRate:0.111,skillRate:0.036,skillExpectionDay:2.3,berryEnergy:25,berryEnergyLv60Day:3907,berrySEnergyLv60Day:7814,rankOfBerry:1,rankOfFood:1,rankOfSkill:4}),
new Pokemon({no:922,name:"パモット",sleepType:"すやすや",specialty:"スキル",berry:"ウブのみ",food1:"リラックスカカオ",food1Num:[1,2,4],food2:"モーモーミルク",food2Num:[0,3,6],food3:"とくせんエッグ",food3Num:[0,0,5],skill:"げんきオールS",fp:12,sec:3300,fullyEvolved:false,foodRate:0.109,skillRate:0.036,skillExpectionDay:2.81,berryEnergy:25,berryEnergyLv60Day:5458,berrySEnergyLv60Day:10916,rankOfBerry:3,rankOfFood:1,rankOfSkill:5}),
new Pokemon({no:923,name:"パーモット",sleepType:"すやすや",specialty:"スキル",berry:"ウブのみ",food1:"リラックスカカオ",food1Num:[1,2,4],food2:"モーモーミルク",food2Num:[0,3,6],food3:"とくせんエッグ",food3Num:[0,0,5],skill:"げんきオールS",fp:22,sec:2400,fullyEvolved:true,foodRate:0.141,skillRate:0.039,skillExpectionDay:3.7,berryEnergy:25,berryEnergyLv60Day:7236,berrySEnergyLv60Day:14472,rankOfBerry:5,rankOfFood:1,rankOfSkill:7}),
new Pokemon({no:980,name:"ドオー",sleepType:"うとうと",specialty:"食材",berry:"カゴのみ",food1:"リラックスカカオ",food1Num:[2,5,7],food2:"めざましコーヒー",food2Num:[0,4,7],food3:"ほっこりポテト",food3Num:[0,0,9],skill:"げんきチャージS",fp:12,sec:3500,fullyEvolved:true,foodRate:0.208,skillRate:0.055,skillExpectionDay:2.61,berryEnergy:32,berryEnergyLv60Day:5855,berrySEnergyLv60Day:11710,rankOfBerry:4,rankOfFood:3,rankOfSkill:6})

            
            
                    
            
            
            
            
            
            
            
            
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

        this.berryList = this.berries;
        this.skillList = Array.from((new Set(this.pokemons.map(p => p.skill)))).sort();
        this.foodList = Array.from((new Set(this.pokemons.map(p => [p.food1, p.food2, p.food3]).flat()))).filter(f => f != "").sort();//本当はこんなのよくないよね・・・
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
        return (this.specialty == "きのみ" ? 2 : 1) + (subBerryS ? 1 : 0);
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











