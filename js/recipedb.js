
class RecipeDB{
    
    constructor(){
        this.recipes = [
new Recipe({no:1, category: "カレー・シチュー", name: "とくせんリンゴカレー", recipeLv: 65, fieldBonus: "85%", baseEnergy:748, food1:"とくせんリンゴ", food1Num:7, food2:"", food2Num:0, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:2, category: "カレー・シチュー", name: "たんじゅんホワイトシチュー", recipeLv: 65, fieldBonus: "85%", baseEnergy:814, food1:"モーモーミルク", food1Num:7, food2:"", food2Num:0, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:3, category: "カレー・シチュー", name: "ベイビィハニーカレー", recipeLv: 65, fieldBonus: "85%", baseEnergy:839, food1:"あまいミツ", food1Num:7, food2:"", food2Num:0, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:4, category: "カレー・シチュー", name: "マメバーグカレー", recipeLv: 65, fieldBonus: "85%", baseEnergy:856, food1:"マメミート", food1Num:7, food2:"", food2Num:0, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:5, category: "カレー・シチュー", name: "満腹チーズバーグカレー", recipeLv: 65, fieldBonus: "85%", baseEnergy:1910, food1:"モーモーミルク", food1Num:8, food2:"マメミート", food2Num:8, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:6, category: "カレー・シチュー", name: "ひでりカツカレー", recipeLv: 65, fieldBonus: "85%", baseEnergy:1942, food1:"マメミート", food1Num:10, food2:"ピュアなオイル", food2Num:5, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:7, category: "カレー・シチュー", name: "サンパワートマトカレー", recipeLv: 65, fieldBonus: "85%", baseEnergy:2078, food1:"げきからハーブ", food1Num:5, food2:"あんみんトマト", food2Num:10, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:8, category: "カレー・シチュー", name: "とけるオムカレー", recipeLv: 65, fieldBonus: "85%", baseEnergy:2150, food1:"とくせんエッグ", food1Num:10, food2:"あんみんトマト", food2Num:6, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:9, category: "カレー・シチュー", name: "ほっこりポテトシチュー", recipeLv: 65, fieldBonus: "85%", baseEnergy:3181, food1:"モーモーミルク", food1Num:10, food2:"ほっこりポテト", food2Num:8, food3:"あじわいキノコ", food3Num:4, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:10, category: "カレー・シチュー", name: "ビルドアップマメカレー", recipeLv: 65, fieldBonus: "85%", baseEnergy:3372, food1:"ワカクサ大豆", food1Num:12, food2:"マメミート", food2Num:6, food3:"とくせんエッグ", food3Num:4, food4:"げきからハーブ", food4Num:4, food5:"", food5Num:0}),
new Recipe({no:11, category: "カレー・シチュー", name: "キノコのほうしカレー", recipeLv: 65, fieldBonus: "85%", baseEnergy:4162, food1:"ほっこりポテト", food1Num:9, food2:"あじわいキノコ", food2Num:14, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:12, category: "カレー・シチュー", name: "おやこあいカレー", recipeLv: 65, fieldBonus: "85%", baseEnergy:4523, food1:"ほっこりポテト", food1Num:4, food2:"とくせんリンゴ", food2Num:11, food3:"とくせんエッグ", food3Num:8, food4:"あまいミツ", food4Num:12, food5:"", food5Num:0}),
new Recipe({no:13, category: "カレー・シチュー", name: "じゅうなんコーンシチュー", recipeLv: 65, fieldBonus: "85%", baseEnergy:4670, food1:"ワカクサコーン", food1Num:14, food2:"モーモーミルク", food2Num:8, food3:"ほっこりポテト", food3Num:8, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:14, category: "カレー・シチュー", name: "ピヨピヨパンチ辛口カレー", recipeLv: 65, fieldBonus: "85%", baseEnergy:5702, food1:"めざましコーヒー", food1Num:11, food2:"げきからハーブ", food2Num:11, food3:"あまいミツ", food3Num:11, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:15, category: "カレー・シチュー", name: "からくちネギもりカレー", recipeLv: 65, fieldBonus: "85%", baseEnergy:5900, food1:"ふといながねぎ", food1Num:14, food2:"げきからハーブ", food2Num:8, food3:"あったかジンジャー", food3Num:10, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:16, category: "カレー・シチュー", name: "あぶりテールカレー", recipeLv: 65, fieldBonus: "85%", baseEnergy:7483, food1:"げきからハーブ", food1Num:25, food2:"おいしいシッポ", food2Num:8, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:17, category: "カレー・シチュー", name: "ぜったいねむりバターカレー", recipeLv: 65, fieldBonus: "85%", baseEnergy:9010, food1:"リラックスカカオ", food1Num:12, food2:"モーモーミルク", food2Num:10, food3:"ほっこりポテト", food3Num:18, food4:"あんみんトマト", food4Num:15, food5:"", food5Num:0}),
new Recipe({no:18, category: "カレー・シチュー", name: "ニンジャカレー", recipeLv: 65, fieldBonus: "85%", baseEnergy:9445, food1:"ワカクサ大豆", food1Num:24, food2:"マメミート", food2Num:9, food3:"ふといながねぎ", food3Num:12, food4:"あじわいキノコ", food4Num:5, food5:"", food5Num:0}),
new Recipe({no:19, category: "カレー・シチュー", name: "れんごくコーンキーマカレー", recipeLv: 65, fieldBonus: "85%", baseEnergy:13690, food1:"げきからハーブ", food1Num:27, food2:"マメミート", food2Num:24, food3:"ワカクサコーン", food3Num:14, food4:"あったかジンジャー", food4Num:12, food5:"", food5Num:0}),
new Recipe({no:20, category: "カレー・シチュー", name: "なりきりバケッチャシチュー", recipeLv: 65, fieldBonus: "85%", baseEnergy:15621, food1:"ずっしりカボチャ", food1Num:10, food2:"マメミート", food2Num:16, food3:"ほっこりポテト", food3Num:18, food4:"あじわいキノコ", food4Num:25, food5:"", food5Num:0}),
new Recipe({no:21, category: "カレー・シチュー", name: "めざめるパワーシチュー", recipeLv: 65, fieldBonus: "85%", baseEnergy:19061, food1:"ワカクサ大豆", food1Num:28, food2:"あんみんトマト", food2Num:25, food3:"あじわいキノコ", food3Num:23, food4:"めざましコーヒー", food4Num:16, food5:"", food5Num:0}),
new Recipe({no:22, category: "カレー・シチュー", name: "いあいぎりすき焼きカレー", recipeLv: 65, fieldBonus: "85%", baseEnergy:20655, food1:"ふといながねぎ", food1Num:27, food2:"マメミート", food2Num:26, food3:"あまいミツ", food3Num:26, food4:"とくせんエッグ", food4Num:22, food5:"", food5Num:0}),
new Recipe({no:23, category: "カレー・シチュー", name: "しんりょくアボカドグラタン", recipeLv: 65, fieldBonus: "85%", baseEnergy:24802, food1:"つやつやアボカド", food1Num:22, food2:"ほっこりポテト", food2Num:20, food3:"モーモーミルク", food3Num:41, food4:"ピュアなオイル", food4Num:32, food5:"", food5Num:0}),













new Recipe({no:37, category: "サラダ", name: "とくせんリンゴサラダ", recipeLv: 65, fieldBonus: "85%", baseEnergy:855, food1:"とくせんリンゴ", food1Num:8, food2:"", food2Num:0, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:38, category: "サラダ", name: "マメハムサラダ", recipeLv: 65, fieldBonus: "85%", baseEnergy:978, food1:"マメミート", food1Num:8, food2:"", food2Num:0, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:39, category: "サラダ", name: "あんみんトマトサラダ", recipeLv: 65, fieldBonus: "85%", baseEnergy:1045, food1:"あんみんトマト", food1Num:8, food2:"", food2Num:0, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:40, category: "サラダ", name: "ゆきかきシーザーサラダ", recipeLv: 65, fieldBonus: "85%", baseEnergy:1898, food1:"モーモーミルク", food1Num:10, food2:"マメミート", food2Num:6, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:41, category: "サラダ", name: "ねっぷうとうふサラダ", recipeLv: 65, fieldBonus: "85%", baseEnergy:2114, food1:"ワカクサ大豆", food1Num:10, food2:"げきからハーブ", food2Num:6, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:42, category: "サラダ", name: "メロメロりんごのチーズサラダ", recipeLv: 65, fieldBonus: "85%", baseEnergy:2655, food1:"モーモーミルク", food1Num:5, food2:"ピュアなオイル", food2Num:3, food3:"とくせんリンゴ", food3Num:15, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:43, category: "サラダ", name: "みだれづきコーンサラダ", recipeLv: 65, fieldBonus: "85%", baseEnergy:2785, food1:"ワカクサコーン", food1Num:9, food2:"ピュアなオイル", food2Num:8, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:44, category: "サラダ", name: "めんえきねぎサラダ", recipeLv: 65, fieldBonus: "85%", baseEnergy:2845, food1:"ふといながねぎ", food1Num:10, food2:"あったかジンジャー", food2Num:5, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:45, category: "サラダ", name: "モーモーカプレーゼ", recipeLv: 65, fieldBonus: "85%", baseEnergy:2942, food1:"モーモーミルク", food1Num:12, food2:"ピュアなオイル", food2Num:5, food3:"あんみんトマト", food3Num:6, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:46, category: "サラダ", name: "ばかぢからワイルドサラダ", recipeLv: 65, fieldBonus: "85%", baseEnergy:3046, food1:"マメミート", food1Num:9, food2:"ほっこりポテト", food2Num:3, food3:"とくせんエッグ", food3Num:5, food4:"あったかジンジャー", food4Num:6, food5:"", food5Num:0}),
new Recipe({no:47, category: "サラダ", name: "うるおいとうふサラダ", recipeLv: 65, fieldBonus: "85%", baseEnergy:3113, food1:"ワカクサ大豆", food1Num:15, food2:"あんみんトマト", food2Num:9, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:48, category: "サラダ", name: "ムラっけチョコミートサラダ", recipeLv: 65, fieldBonus: "85%", baseEnergy:3665, food1:"リラックスカカオ", food1Num:14, food2:"マメミート", food2Num:9, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:49, category: "サラダ", name: "くいしんぼうポテトサラダ", recipeLv: 65, fieldBonus: "85%", baseEnergy:5040, food1:"マメミート", food1Num:7, food2:"ほっこりポテト", food2Num:14, food3:"とくせんリンゴ", food3Num:6, food4:"とくせんエッグ", food4Num:9, food5:"", food5Num:0}),
new Recipe({no:50, category: "サラダ", name: "オーバーヒートサラダ", recipeLv: 65, fieldBonus: "85%", baseEnergy:5225, food1:"げきからハーブ", food1Num:17, food2:"あんみんトマト", food2Num:8, food3:"あったかジンジャー", food3Num:10, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:51, category: "サラダ", name: "キノコのほうしサラダ", recipeLv: 65, fieldBonus: "85%", baseEnergy:5859, food1:"ピュアなオイル", food1Num:8, food2:"あんみんトマト", food2Num:8, food3:"あじわいキノコ", food3Num:17, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:52, category: "サラダ", name: "くだけるアボカドサラダ", recipeLv: 65, fieldBonus: "85%", baseEnergy:7125, food1:"つやつやアボカド", food1Num:14, food2:"ワカクサ大豆", food2Num:18, food3:"ピュアなオイル", food3Num:10, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:53, category: "サラダ", name: "めいそうスイートサラダ", recipeLv: 65, fieldBonus: "85%", baseEnergy:7675, food1:"とくせんリンゴ", food1Num:21, food2:"あまいミツ", food2Num:16, food3:"ワカクサコーン", food3Num:12, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:54, category: "サラダ", name: "ヤドンテールのペッパーサラダ", recipeLv: 65, fieldBonus: "85%", baseEnergy:8169, food1:"ピュアなオイル", food1Num:15, food2:"げきからハーブ", food2Num:10, food3:"おいしいシッポ", food3Num:10, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:55, category: "サラダ", name: "クロスチョップドサラダ", recipeLv: 65, fieldBonus: "85%", baseEnergy:8755, food1:"とくせんエッグ", food1Num:20, food2:"マメミート", food2Num:15, food3:"ワカクサコーン", food3Num:11, food4:"あんみんトマト", food4Num:10, food5:"", food5Num:0}),
new Recipe({no:56, category: "サラダ", name: "ワカクササラダ", recipeLv: 65, fieldBonus: "85%", baseEnergy:11393, food1:"ピュアなオイル", food1Num:22, food2:"ワカクサコーン", food2Num:17, food3:"あんみんトマト", food3Num:14, food4:"ほっこりポテト", food4Num:9, food5:"", food5Num:0}),
new Recipe({no:57, category: "サラダ", name: "ニンジャサラダ", recipeLv: 65, fieldBonus: "85%", baseEnergy:11659, food1:"ワカクサ大豆", food1Num:19, food2:"ふといながねぎ", food2Num:15, food3:"あったかジンジャー", food3Num:11, food4:"あじわいキノコ", food4Num:12, food5:"", food5Num:0}),
new Recipe({no:58, category: "サラダ", name: "はなふぶきミモザサラダ", recipeLv: 65, fieldBonus: "85%", baseEnergy:11811, food1:"とくせんエッグ", food1Num:25, food2:"ピュアなオイル", food2Num:17, food3:"ほっこりポテト", food3Num:15, food4:"マメミート", food4Num:12, food5:"", food5Num:0}),
new Recipe({no:59, category: "サラダ", name: "りんごさんヨーグルトサラダ", recipeLv: 65, fieldBonus: "85%", baseEnergy:19293, food1:"とくせんエッグ", food1Num:35, food2:"とくせんリンゴ", food2Num:28, food3:"あんみんトマト", food3Num:23, food4:"モーモーミルク", food4Num:18, food5:"", food5Num:0}),
new Recipe({no:60, category: "サラダ", name: "まけんきコーヒーサラダ", recipeLv: 65, fieldBonus: "85%", baseEnergy:20218, food1:"めざましコーヒー", food1Num:28, food2:"マメミート", food2Num:28, food3:"ピュアなオイル", food3Num:22, food4:"ほっこりポテト", food4Num:22, food5:"", food5Num:0}),
new Recipe({no:61, category: "サラダ", name: "じならしワカモレチップス", recipeLv: 65, fieldBonus: "85%", baseEnergy:25162, food1:"つやつやアボカド", food1Num:28, food2:"ワカクサコーン", food2Num:25, food3:"げきからハーブ", food3Num:30, food4:"ワカクサ大豆", food4Num:22, food5:"", food5Num:0}),
new Recipe({no:62, category: "サラダ", name: "ごろごろねっとうサラダ", recipeLv: 65, fieldBonus: "85%", baseEnergy:25536, food1:"ずっしりカボチャ", food1Num:20, food2:"ほっこりポテト", food2Num:30, food3:"ワカクサコーン", food3Num:18, food4:"あじわいキノコ", food4Num:27, food5:"", food5Num:0}),












new Recipe({no:75, category: "デザート・ドリンク", name: "モーモーホットミルク", recipeLv: 65, fieldBonus: "85%", baseEnergy:814, food1:"モーモーミルク", food1Num:7, food2:"", food2Num:0, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:76, category: "デザート・ドリンク", name: "とくせんリンゴジュース", recipeLv: 65, fieldBonus: "85%", baseEnergy:855, food1:"とくせんリンゴ", food1Num:8, food2:"", food2Num:0, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:77, category: "デザート・ドリンク", name: "クラフトサイコソーダ", recipeLv: 65, fieldBonus: "85%", baseEnergy:1079, food1:"あまいミツ", food1Num:9, food2:"", food2Num:0, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:78, category: "デザート・ドリンク", name: "ねがいごとアップルパイ", recipeLv: 65, fieldBonus: "85%", baseEnergy:1748, food1:"モーモーミルク", food1Num:4, food2:"とくせんリンゴ", food2Num:12, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:79, category: "デザート・ドリンク", name: "じゅくせいスイートポテト", recipeLv: 65, fieldBonus: "85%", baseEnergy:1907, food1:"モーモーミルク", food1Num:5, food2:"ほっこりポテト", food2Num:9, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:80, category: "デザート・ドリンク", name: "ひのこジンジャーティー", recipeLv: 65, fieldBonus: "85%", baseEnergy:1913, food1:"とくせんリンゴ", food1Num:7, food2:"あったかジンジャー", food2Num:9, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:81, category: "デザート・ドリンク", name: "マイペースやさいジュース", recipeLv: 65, fieldBonus: "85%", baseEnergy:1924, food1:"とくせんリンゴ", food1Num:7, food2:"あんみんトマト", food2Num:9, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:82, category: "デザート・ドリンク", name: "かるわざソイケーキ", recipeLv: 65, fieldBonus: "85%", baseEnergy:1924, food1:"ワカクサ大豆", food1Num:7, food2:"とくせんエッグ", food2Num:8, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:83, category: "デザート・ドリンク", name: "おおきいマラサダ", recipeLv: 65, fieldBonus: "85%", baseEnergy:3015, food1:"モーモーミルク", food1Num:7, food2:"ピュアなオイル", food2Num:10, food3:"あまいミツ", food3Num:6, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:84, category: "デザート・ドリンク", name: "はりきりプロテインスムージー", recipeLv: 65, fieldBonus: "85%", baseEnergy:3263, food1:"ワカクサ大豆", food1Num:15, food2:"リラックスカカオ", food2Num:8, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:85, category: "デザート・ドリンク", name: "はなびらのまいチョコタルト", recipeLv: 65, fieldBonus: "85%", baseEnergy:3314, food1:"リラックスカカオ", food1Num:11, food2:"とくせんリンゴ", food2Num:11, food3:"", food3Num:0, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:86, category: "デザート・ドリンク", name: "あまいかおりチョコケーキ", recipeLv: 65, fieldBonus: "85%", baseEnergy:3378, food1:"リラックスカカオ", food1Num:8, food2:"モーモーミルク", food2Num:7, food3:"あまいミツ", food3Num:9, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:87, category: "デザート・ドリンク", name: "あくまのキッスフルーツオレ", recipeLv: 65, fieldBonus: "85%", baseEnergy:4734, food1:"リラックスカカオ", food1Num:8, food2:"モーモーミルク", food2Num:9, food3:"とくせんリンゴ", food3Num:11, food4:"あまいミツ", food4Num:7, food5:"", food5Num:0}),
new Recipe({no:88, category: "デザート・ドリンク", name: "ふくつのジンジャークッキー", recipeLv: 65, fieldBonus: "85%", baseEnergy:4921, food1:"リラックスカカオ", food1Num:5, food2:"とくせんエッグ", food2Num:4, food3:"あまいミツ", food3Num:14, food4:"あったかジンジャー", food4Num:12, food5:"", food5Num:0}),
new Recipe({no:89, category: "デザート・ドリンク", name: "ネロリのデトックスティー", recipeLv: 65, fieldBonus: "85%", baseEnergy:5065, food1:"とくせんリンゴ", food1Num:15, food2:"あったかジンジャー", food2Num:11, food3:"あじわいキノコ", food3Num:9, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:90, category: "デザート・ドリンク", name: "ちからもちソイドーナツ", recipeLv: 65, fieldBonus: "85%", baseEnergy:5547, food1:"ワカクサ大豆", food1Num:16, food2:"リラックスカカオ", food2Num:7, food3:"ピュアなオイル", food3Num:12, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:91, category: "デザート・ドリンク", name: "だいばくはつポップコーン", recipeLv: 65, fieldBonus: "85%", baseEnergy:6048, food1:"ワカクサコーン", food1Num:15, food2:"ピュアなオイル", food2Num:14, food3:"モーモーミルク", food3Num:7, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:92, category: "デザート・ドリンク", name: "はやおきコーヒーゼリー", recipeLv: 65, fieldBonus: "85%", baseEnergy:6793, food1:"めざましコーヒー", food1Num:16, food2:"モーモーミルク", food2Num:14, food3:"あまいミツ", food3Num:12, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:93, category: "デザート・ドリンク", name: "かたやぶりコーンティラミス", recipeLv: 65, fieldBonus: "85%", baseEnergy:7125, food1:"めざましコーヒー", food1Num:14, food2:"ワカクサコーン", food2Num:14, food3:"モーモーミルク", food3Num:12, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:94, category: "デザート・ドリンク", name: "プリンのプリンアラモード", recipeLv: 65, fieldBonus: "85%", baseEnergy:7594, food1:"モーモーミルク", food1Num:10, food2:"とくせんリンゴ", food2Num:10, food3:"とくせんエッグ", food3Num:15, food4:"あまいミツ", food4Num:20, food5:"", food5Num:0}),
new Recipe({no:95, category: "デザート・ドリンク", name: "グラスミキサースムージー", recipeLv: 65, fieldBonus: "85%", baseEnergy:8165, food1:"つやつやアボカド", food1Num:18, food2:"あんみんトマト", food2Num:16, food3:"モーモーミルク", food3Num:14, food4:"", food4Num:0, food5:"", food5Num:0}),
new Recipe({no:96, category: "デザート・ドリンク", name: "おちゃかいコーンスコーン", recipeLv: 65, fieldBonus: "85%", baseEnergy:10925, food1:"とくせんリンゴ", food1Num:20, food2:"あったかジンジャー", food2Num:20, food3:"ワカクサコーン", food3Num:18, food4:"モーモーミルク", food4Num:9, food5:"", food5Num:0}),
new Recipe({no:97, category: "デザート・ドリンク", name: "フラワーギフトマカロン", recipeLv: 65, fieldBonus: "85%", baseEnergy:13834, food1:"リラックスカカオ", food1Num:25, food2:"とくせんエッグ", food2Num:25, food3:"あまいミツ", food3Num:17, food4:"モーモーミルク", food4Num:10, food5:"", food5Num:0}),
new Recipe({no:98, category: "デザート・ドリンク", name: "スパークスパイスコーラ", recipeLv: 65, fieldBonus: "85%", baseEnergy:17494, food1:"とくせんリンゴ", food1Num:35, food2:"あったかジンジャー", food2Num:20, food3:"ふといながねぎ", food3Num:20, food4:"めざましコーヒー", food4Num:12, food5:"", food5Num:0}),
new Recipe({no:99, category: "デザート・ドリンク", name: "ドオーのエクレア", recipeLv: 65, fieldBonus: "85%", baseEnergy:20885, food1:"リラックスカカオ", food1Num:30, food2:"モーモーミルク", food2Num:26, food3:"めざましコーヒー", food3Num:24, food4:"あまいミツ", food4Num:22, food5:"", food5Num:0}),
new Recipe({no:100, category: "デザート・ドリンク", name: "どきどきこわいかおパンケーキ", recipeLv: 65, fieldBonus: "85%", baseEnergy:24354, food1:"とくせんエッグ", food1Num:24, food2:"あんみんトマト", food2Num:29, food3:"あまいミツ", food3Num:32, food4:"ずっしりカボチャ", food4Num:18, food5:"", food5Num:0}),
new Recipe({no:101, category: "デザート・ドリンク", name: "みつあつめチョコワッフル", recipeLv: 65, fieldBonus: "85%", baseEnergy:25484, food1:"あまいミツ", food1Num:38, food2:"ワカクサコーン", food2Num:28, food3:"ピュアなオイル", food3Num:28, food4:"リラックスカカオ", food4Num:21, food5:"", food5Num:0}),










































];

        this.foods = [
            {name: "あじわいキノコ", power: 167},
            {name: "あったかジンジャー", power: 109},
            {name: "あまいミツ", power: 101},
            {name: "あんみんトマト", power: 110},
            {name: "おいしいシッポ", power: 342},
            {name: "げきからハーブ", power: 130},
            {name: "ずっしりカボチャ", power: 250},
            {name: "つやつやアボカド", power: 162},            
            {name: "とくせんエッグ", power: 115},
            {name: "とくせんリンゴ", power: 90},
            {name: "ピュアなオイル", power: 121},
            {name: "ふといながねぎ", power: 185},
            {name: "ほっこりポテト", power: 124},
            {name: "マメミート", power: 103},
            {name: "めざましコーヒー", power: 153},
            {name: "モーモーミルク", power: 98},
            {name: "リラックスカカオ", power: 151},
            {name: "ワカクサ大豆", power: 100},
            {name: "ワカクサコーン", power: 140}
        ];
        this.curryRecipes = this.getRecipesOf("カレー・シチュー"); 
        this.saladRecipes = this.getRecipesOf("サラダ");  
        this.sweetRecipes = this.getRecipesOf("デザート・ドリンク");   
    }
    

    getRecipesOf(category){        
        return (category == "") ? this.recipes : this.recipes.filter(r => r.category == category);
    }

    getRecipeOf(recipeName){
        return this.recipes.find(r => r.name == recipeName);
    }

    getIngredientsOf(recipeName){
        return this.getRecipeOf(recipeName).ingredients;        
    }
   
}


class Recipe{

    recipeBonusMap = RECIPE_BONUS_DATA;

    constructor(json){
        this.no = json.no;
        this.category = json.category;
        this.name = json.name;
        this.fieldBonus = json.fieldBonus;
        this.recipeLv = json.recipeLv;
        this.baseEnergy = json.baseEnergy;
        //this.energy = json.energy;
        this.setEnergy(json.recipeLv, json.fieldBonus);
        this.weekendCount = 0;
        this.ingredients = [new Ingredient(json.food1, json.food1Num)]
        if (json.food2 != "") this.ingredients.push(new Ingredient(json.food2, json.food2Num));
        if (json.food3 != "") this.ingredients.push(new Ingredient(json.food3, json.food3Num));
        if (json.food4 != "") this.ingredients.push(new Ingredient(json.food4, json.food4Num));
        if (json.food5 != "") this.ingredients.push(new Ingredient(json.food5, json.food5Num));

        this.totalFoodsCount = 0;
        this.ingredients.forEach(f => this.totalFoodsCount+= f.num);
    }

    setEnergy(lv, fieldBonusPercent){
        const fieldBonusNum = Number(fieldBonusPercent.match(/\d+(?=%)/)) / 100;
        this.energy = Math.floor(this.baseEnergy * (1 + this.recipeBonusMap[lv - 1]) * (1 + fieldBonusNum));
        this.fieldBonus = fieldBonusPercent;
        this.recipeLv = lv;
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
    constructor(name, num){
        this.name = (name == undefined) ? "" : name;
        this.num = (num == undefined) ? 0 : num;
    }


    getLi(){
        let el = document.createElement('li');
        let img = document.createElement('img');
        img.classList.add('ex-tiny');
        img.src = "img/food/" + this.name + ".png";
        el.appendChild(img);

        el.innerHTML += this.name + "x" + this.num;
        return el;
    }
}
