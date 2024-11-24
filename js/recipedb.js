
class RecipeDB{
    
    constructor(){
        this.recipes = [
            new Recipe({no:1, category: "カレー・シチュー", name: "とくせんリンゴカレー", energy:2266, food1:"とくせんリンゴ", food1Num:7, food2:"", food2Num:0, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:2, category: "カレー・シチュー", name: "たんじゅんホワイトシチュー", energy:2466, food1:"モーモーミルク", food1Num:7, food2:"", food2Num:0, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:3, category: "カレー・シチュー", name: "ベイビィハニーカレー", energy:2542, food1:"あまいミツ", food1Num:7, food2:"", food2Num:0, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:4, category: "カレー・シチュー", name: "マメバーグカレー", energy:2593, food1:"マメミート", food1Num:7, food2:"", food2Num:0, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:5, category: "カレー・シチュー", name: "満腹チーズバーグカレー", energy:5787, food1:"モーモーミルク", food1Num:8, food2:"マメミート", food2Num:8, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:6, category: "カレー・シチュー", name: "ひでりカツカレー", energy:5884, food1:"マメミート", food1Num:10, food2:"ピュアなオイル", food2Num:5, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:7, category: "カレー・シチュー", name: "サンパワートマトカレー", energy:6296, food1:"げきからハーブ", food1Num:5, food2:"あんみんトマト", food2Num:10, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:8, category: "カレー・シチュー", name: "とけるオムカレー", energy:6514, food1:"とくせんエッグ", food1Num:10, food2:"あんみんトマト", food2Num:6, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:9, category: "カレー・シチュー", name: "ほっこりポテトシチュー", energy:9638, food1:"モーモーミルク", food1Num:10, food2:"ほっこりポテト", food2Num:8, food3:"あじわいキノコ", food3Num:4, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:10, category: "カレー・シチュー", name: "ビルドアップマメカレー", energy:10217, food1:"ワカクサ大豆", food1Num:12, food2:"マメミート", food2Num:6, food3:"とくせんエッグ", food3Num:4, food4:"げきからハーブ", food4Num:4, food5:"", food5Num:0}),
            new Recipe({no:11, category: "カレー・シチュー", name: "キノコのほうしカレー", energy:12610, food1:"ほっこりポテト", food1Num:9, food2:"あじわいキノコ", food2Num:14, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:12, category: "カレー・シチュー", name: "おやこあいカレー", energy:13704, food1:"ほっこりポテト", food1Num:4, food2:"とくせんリンゴ", food2Num:11, food3:"とくせんエッグ", food3Num:8, food4:"あまいミツ", food4Num:12, food5:"", food5Num:0}),
            new Recipe({no:13, category: "カレー・シチュー", name: "じゅうなんコーンシチュー", energy:14150, food1:"ワカクサコーン", food1Num:14, food2:"モーモーミルク", food2Num:8, food3:"ほっこりポテト", food3Num:8, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:14, category: "カレー・シチュー", name: "からくちネギもりカレー", energy:17877, food1:"ふといながねぎ", food1Num:14, food2:"げきからハーブ", food2Num:8, food3:"あったかジンジャー", food3Num:10, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:15, category: "カレー・シチュー", name: "あぶりテールカレー", energy:22673, food1:"げきからハーブ", food1Num:25, food2:"おいしいシッポ", food2Num:8, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:16, category: "カレー・シチュー", name: "ぜったいねむりバターカレー", energy:27300, food1:"リラックスカカオ", food1Num:12, food2:"モーモーミルク", food2Num:10, food3:"ほっこりポテト", food3Num:18, food4:"あんみんトマト", food4Num:15, food5:"", food5Num:0}),
            new Recipe({no:17, category: "カレー・シチュー", name: "ニンジャカレー", energy:28618, food1:"ワカクサ大豆", food1Num:24, food2:"マメミート", food2Num:9, food3:"ふといながねぎ", food3Num:12, food4:"あじわいキノコ", food4Num:5, food5:"", food5Num:0}),
            new Recipe({no:18, category: "カレー・シチュー", name: "れんごくコーンキーマカレー", energy:41480, food1:"げきからハーブ", food1Num:27, food2:"マメミート", food2Num:24, food3:"ワカクサコーン", food3Num:14, food4:"あったかジンジャー", food4Num:12, food5:"", food5Num:0}),
            new Recipe({no:19, category: "カレー・シチュー", name: "めざめるパワーシチュー", energy:57754, food1:"ワカクサ大豆", food1Num:28, food2:"あんみんトマト", food2Num:25, food3:"あじわいキノコ", food3Num:23, food4:"めざましコーヒー", food4Num:16, food5:"", food5Num:0}),
            new Recipe({no:20, category: "カレー・シチュー", name: "ピヨピヨパンチ辛口カレー", energy:17277, food1:"めざましコーヒー", food1Num:11, food2:"げきからハーブ", food2Num:11, food3:"あまいミツ", food3Num:11, food4:"", food4Num:0, food5:"", food5Num:0}),
            
            
            
            
            
            
            
            
            
            new Recipe({no:30, category: "サラダ", name: "とくせんリンゴサラダ", energy:2590, food1:"とくせんリンゴ", food1Num:8, food2:"", food2Num:0, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:31, category: "サラダ", name: "マメハムサラダ", energy:2963, food1:"マメミート", food1Num:8, food2:"", food2Num:0, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:32, category: "サラダ", name: "あんみんトマトサラダ", energy:3166, food1:"あんみんトマト", food1Num:8, food2:"", food2Num:0, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:33, category: "サラダ", name: "ゆきかきシーザーサラダ", energy:5750, food1:"モーモーミルク", food1Num:10, food2:"マメミート", food2Num:6, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:34, category: "サラダ", name: "ねっぷうとうふサラダ", energy:6405, food1:"ワカクサ大豆", food1Num:10, food2:"げきからハーブ", food2Num:6, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:35, category: "サラダ", name: "メロメロりんごのチーズサラダ", energy:8044, food1:"モーモーミルク", food1Num:5, food2:"ピュアなオイル", food2Num:3, food3:"とくせんリンゴ", food3Num:15, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:36, category: "サラダ", name: "みだれづきコーンサラダ", energy:8438, food1:"ワカクサコーン", food1Num:9, food2:"ピュアなオイル", food2Num:8, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:37, category: "サラダ", name: "めんえきねぎサラダ", energy:8620, food1:"ふといながねぎ", food1Num:10, food2:"あったかジンジャー", food2Num:5, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:38, category: "サラダ", name: "モーモーカプレーゼ", energy:8914, food1:"モーモーミルク", food1Num:12, food2:"ピュアなオイル", food2Num:5, food3:"あんみんトマト", food3Num:6, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:39, category: "サラダ", name: "ばかぢからワイルドサラダ", energy:9229, food1:"マメミート", food1Num:9, food2:"ほっこりポテト", food2Num:3, food3:"とくせんエッグ", food3Num:5, food4:"あったかジンジャー", food4Num:6, food5:"", food5Num:0}),
            new Recipe({no:40, category: "サラダ", name: "うるおいとうふサラダ", energy:9432, food1:"ワカクサ大豆", food1Num:15, food2:"あんみんトマト", food2Num:9, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:41, category: "サラダ", name: "ムラっけチョコミートサラダ", energy:11104, food1:"リラックスカカオ", food1Num:14, food2:"マメミート", food2Num:9, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:42, category: "サラダ", name: "くいしんぼうポテトサラダ", energy:15271, food1:"マメミート", food1Num:7, food2:"ほっこりポテト", food2Num:14, food3:"とくせんリンゴ", food3Num:6, food4:"とくせんエッグ", food4Num:9, food5:"", food5Num:0}),
            new Recipe({no:43, category: "サラダ", name: "オーバーヒートサラダ", energy:15831, food1:"げきからハーブ", food1Num:17, food2:"あんみんトマト", food2Num:8, food3:"あったかジンジャー", food3Num:10, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:44, category: "サラダ", name: "キノコのほうしサラダ", energy:17752, food1:"ピュアなオイル", food1Num:8, food2:"あんみんトマト", food2Num:8, food3:"あじわいキノコ", food3Num:17, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:45, category: "サラダ", name: "めいそうスイートサラダ", energy:23255, food1:"とくせんリンゴ", food1Num:21, food2:"あまいミツ", food2Num:16, food3:"ワカクサコーン", food3Num:12, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:46, category: "サラダ", name: "ヤドンテールのペッパーサラダ", energy:24752, food1:"ピュアなオイル", food1Num:15, food2:"げきからハーブ", food2Num:10, food3:"おいしいシッポ", food3Num:10, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:47, category: "サラダ", name: "ワカクササラダ", energy:34520, food1:"ピュアなオイル", food1Num:22, food2:"ワカクサコーン", food2Num:17, food3:"あんみんトマト", food3Num:14, food4:"ほっこりポテト", food4Num:9, food5:"", food5Num:0}),
            new Recipe({no:48, category: "サラダ", name: "ニンジャサラダ", energy:35326, food1:"ワカクサ大豆", food1Num:19, food2:"ふといながねぎ", food2Num:15, food3:"あったかジンジャー", food3Num:11, food4:"あじわいキノコ", food4Num:12, food5:"", food5Num:0}),
            new Recipe({no:49, category: "サラダ", name: "まけんきコーヒーサラダ", energy:61260, food1:"めざましコーヒー", food1Num:28, food2:"マメミート", food2Num:28, food3:"ピュアなオイル", food3Num:22, food4:"ほっこりポテト", food4Num:22, food5:"", food5Num:0}),
            new Recipe({no:50, category: "サラダ", name: "クロスチョップドサラダ", energy:26527, food1:"とくせんエッグ", food1Num:20, food2:"マメミート", food2Num:15, food3:"ワカクサコーン", food3Num:11, food4:"あんみんトマト", food4Num:10, food5:"", food5Num:0}),
            
            
            
            
            
            
            
            
            
            new Recipe({no:60, category: "デザート・ドリンク", name: "モーモーホットミルク", energy:2466, food1:"モーモーミルク", food1Num:7, food2:"", food2Num:0, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:61, category: "デザート・ドリンク", name: "とくせんリンゴジュース", energy:2590, food1:"とくせんリンゴ", food1Num:8, food2:"", food2Num:0, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:62, category: "デザート・ドリンク", name: "クラフトサイコソーダ", energy:3269, food1:"あまいミツ", food1Num:9, food2:"", food2Num:0, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:63, category: "デザート・ドリンク", name: "ねがいごとアップルパイ", energy:5296, food1:"モーモーミルク", food1Num:4, food2:"とくせんリンゴ", food2Num:12, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:64, category: "デザート・ドリンク", name: "じゅくせいスイートポテト", energy:5778, food1:"モーモーミルク", food1Num:5, food2:"ほっこりポテト", food2Num:9, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:65, category: "デザート・ドリンク", name: "ひのこジンジャーティー", energy:5796, food1:"とくせんリンゴ", food1Num:7, food2:"あったかジンジャー", food2Num:9, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:66, category: "デザート・ドリンク", name: "マイペースやさいジュース", energy:5829, food1:"とくせんリンゴ", food1Num:7, food2:"あんみんトマト", food2Num:9, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:67, category: "デザート・ドリンク", name: "かるわざソイケーキ", energy:5829, food1:"ワカクサ大豆", food1Num:7, food2:"とくせんエッグ", food2Num:8, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:68, category: "デザート・ドリンク", name: "おおきいマラサダ", energy:9135, food1:"モーモーミルク", food1Num:7, food2:"ピュアなオイル", food2Num:10, food3:"あまいミツ", food3Num:6, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:69, category: "デザート・ドリンク", name: "はりきりプロテインスムージー", energy:9886, food1:"ワカクサ大豆", food1Num:15, food2:"リラックスカカオ", food2Num:8, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:70, category: "デザート・ドリンク", name: "はなびらのまいチョコタルト", energy:10041, food1:"リラックスカカオ", food1Num:11, food2:"とくせんリンゴ", food2Num:11, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:71, category: "デザート・ドリンク", name: "あまいかおりチョコケーキ", energy:10235, food1:"リラックスカカオ", food1Num:8, food2:"モーモーミルク", food2Num:7, food3:"あまいミツ", food3Num:9, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:72, category: "デザート・ドリンク", name: "あくまのキッスフルーツオレ", energy:14344, food1:"リラックスカカオ", food1Num:8, food2:"モーモーミルク", food2Num:9, food3:"とくせんリンゴ", food3Num:11, food4:"あまいミツ", food4Num:7, food5:"", food5Num:0}),
            new Recipe({no:73, category: "デザート・ドリンク", name: "ふくつのジンジャークッキー", energy:14910, food1:"リラックスカカオ", food1Num:5, food2:"とくせんエッグ", food2Num:4, food3:"あまいミツ", food3Num:14, food4:"あったかジンジャー", food4Num:12, food5:"", food5Num:0}),
            new Recipe({no:74, category: "デザート・ドリンク", name: "ネロリのデトックスティー", energy:15346, food1:"とくせんリンゴ", food1Num:15, food2:"あったかジンジャー", food2Num:11, food3:"あじわいキノコ", food3Num:9, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:75, category: "デザート・ドリンク", name: "ちからもちソイドーナツ", energy:16807, food1:"ワカクサ大豆", food1Num:16, food2:"リラックスカカオ", food2Num:7, food3:"ピュアなオイル", food3Num:12, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:76, category: "デザート・ドリンク", name: "だいばくはつポップコーン", energy:18325, food1:"ワカクサコーン", food1Num:15, food2:"ピュアなオイル", food2Num:14, food3:"モーモーミルク", food3Num:7, food4:"", food4Num:0, food5:"", food5Num:0}),
            new Recipe({no:77, category: "デザート・ドリンク", name: "プリンのプリンアラモード", energy:23009, food1:"モーモーミルク", food1Num:10, food2:"とくせんリンゴ", food2Num:10, food3:"とくせんエッグ", food3Num:15, food4:"あまいミツ", food4Num:20, food5:"", food5Num:0}),
            new Recipe({no:78, category: "デザート・ドリンク", name: "おちゃかいコーンスコーン", energy:33102, food1:"とくせんリンゴ", food1Num:20, food2:"あったかジンジャー", food2Num:20, food3:"ワカクサコーン", food3Num:18, food4:"モーモーミルク", food4Num:9, food5:"", food5Num:0}),
            new Recipe({no:79, category: "デザート・ドリンク", name: "フラワーギフトマカロン", energy:41917, food1:"リラックスカカオ", food1Num:25, food2:"とくせんエッグ", food2Num:25, food3:"あまいミツ", food3Num:17, food4:"モーモーミルク", food4Num:10, food5:"", food5Num:0}),
            new Recipe({no:80, category: "デザート・ドリンク", name: "スパークスパイスコーラ", energy:53006, food1:"とくせんリンゴ", food1Num:35, food2:"あったかジンジャー", food2Num:20, food3:"ふといながねぎ", food3Num:20, food4:"めざましコーヒー", food4Num:12, food5:"", food5Num:0}),
            new Recipe({no:81, category: "デザート・ドリンク", name: "はやおきコーヒーゼリー", energy:20582, food1:"めざましコーヒー", food1Num:16, food2:"モーモーミルク", food2Num:14, food3:"あまいミツ", food3Num:12, food4:"", food4Num:0, food5:"", food5Num:0})
        ];

        this.foods = [
            {name: "あじわいキノコ", power: 167, advanced: true},
            {name: "あったかジンジャー", power: 109, advanced: false},
            {name: "あまいミツ", power: 101, advanced: false},
            {name: "あんみんトマト", power: 110, advanced: false},
            {name: "おいしいシッポ", power: 342, advanced: true},
            {name: "げきからハーブ", power: 130, advanced: false},
            {name: "とくせんエッグ", power: 115, advanced: false},
            {name: "とくせんリンゴ", power: 90, advanced: false},
            {name: "ピュアなオイル", power: 121, advanced: false},
            {name: "ふといながねぎ", power: 185, advanced: true},
            {name: "ほっこりポテト", power: 124, advanced: false},
            {name: "マメミート", power: 103, advanced: false},
            {name: "めざましコーヒー", power: 153, advanced: false},
            {name: "モーモーミルク", power: 98, advanced: false},
            {name: "リラックスカカオ", power: 151, advanced: false},
            {name: "ワカクサ大豆", power: 100, advanced: false},
            {name: "ワカクサコーン", power: 140, advanced: false}
        ];
    }

    getAllCurryRecipes(){
        return this.getRecipesOf("カレー・シチュー");      
    }

    getAllSaladRecipes(){
        return this.getRecipesOf("サラダ");      
    }

    getAllSweetRecipes(){
        return this.getRecipesOf("デザート・ドリンク");      
    }

    getRecipesOf(category){        
        return (category == "") ? this.recipes : this.recipes.filter(r => r.category == category);
    }
   
}


class Recipe{
    constructor(json){
        this.advancedFoods = ["おいしいシッポ", "ふといながねぎ"];
        this.no = json.no;
        this.category = json.category;
        this.name = json.name;
        this.energy = json.energy;
        this.weekendCount = 0;
        this.ingredients = [new Ingredient(json.food1, json.food1Num, this.advancedFoods.includes(json.food1))]
        if (json.food2 != "") this.ingredients.push(new Ingredient(json.food2, json.food2Num, this.advancedFoods.includes(json.food2)));
        if (json.food3 != "") this.ingredients.push(new Ingredient(json.food3, json.food3Num, this.advancedFoods.includes(json.food3)));
        if (json.food4 != "") this.ingredients.push(new Ingredient(json.food4, json.food4Num, this.advancedFoods.includes(json.food4)));
        if (json.food5 != "") this.ingredients.push(new Ingredient(json.food5, json.food5Num, this.advancedFoods.includes(json.food5)));

        this.totalFoodsCount = 0;
        this.ingredients.forEach(f => this.totalFoodsCount+= f.num);
        this.hasAnyAdvancedFood = this.ingredients.some(f => f.isAdvanced);
    }

        //個数制限なしの場合は9999が入力されるのでかならずtrueを返すようにする
        lessThan(num){
            return (num == 9999) ? true : this.totalFoodsCount <= num;
        }
    
        moreThan(num){
            return (num == 9999) ? true : this.totalFoodsCount >= num;
        }
        
        containsFood(name){
            return this.ingredients.some(x => x.name == name);
        }
}



class Ingredient{
    constructor(name, num, isAdvanced){
        this.name = (name == undefined) ? "" : name;
        this.num = (num == undefined) ? 0 : num;
        this.isAdvanced = isAdvanced;
    }


    getLi(){
        let el = document.createElement('li');
        let img = document.createElement('img');
        img.classList.add('ex-tiny');
        img.src = "img/food/" + this.name + ".png";
        el.appendChild(img);

        el.innerHTML += (this.isAdvanced) ? "<strong>" + this.name + "x" + this.num + "</strong>"
                      : this.name + "x" + this.num;
        return el;
    }
}
