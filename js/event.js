class PokeEvent{
    constructor(){

        const tmp = new Date();
        this.today = new Date(tmp.getFullYear(), tmp.getMonth(), tmp.getDate());
        this.Youbi = {0: "日", 1: "月", 2: "火", 3: "水", 4: "木", 5: "金", 6: "土"}
        this.dataField = document.getElementById("event_schedule");

        this.EventItems = {
            /*ポケモンのピックアップ*/
            pickup_shiny
             : "色違い出現率アップ",
            pickup_other_sleep_type
             : "ほかの睡眠タイプ出現",
            pickup_goodsleepday
             : "ピィ/ピッピ/ピクシー 中ピックアップ",
            pickup_undiscovered
             : "未発見のポケモンの出現率UP",
            pickup_darkrai
             : "ダークライ 特別ピックアップ",

            /*睡眠リサーチ関係*/
            sleep_exp_bonus_150percent
             : "睡眠EXP1.5倍",
            sleep_candy_150percent
             : "アメ獲得量1.5倍",
            sleep_yumenokakera_150percent
             : "リサーチのゆめのかけら1.5倍",
            sleep_get_chance
             : "チャンス1匹確定(1回目のみ)",
            sleep_hunger_change
             : "おやつで満腹になりにくい",


            /*料理関係*/
            cooking_capacity
             : "なべの容量1.5倍(日曜3倍)",
            cooking_power_150percent
             : "料理エナジー1.5倍",

            /*スキル関係*/
            main_skill_150percent
             : "メインスキル発動率1.5倍",

            /*その他関係*/
            mini_candy_boost
             : "ミニアメブースト",
            dream_gift
             : "ドリームギフト(1日1回)",


            /*○○関係*/

            /*グッドスリープデー関係*/
            goodsleepday_point_bonus
             : "スリープポイントが1日前/後に+500pt、当日は+1000pt",
            goodsleepday_exp_bonus
             : "睡眠Expが1日前/後に2倍、当日は3倍",
            goodsleepday_power_bonus
             : "睡眠パワーが1日前/後に2倍、当日は3倍",


        }

        this.EventPresets = {
             "" : {
                items:[
                ]
             },

            "グッドスリープデー" : {
                items: [
                    this.EventItems["pickup_undiscovered"],
                    this.EventItems["pickup_goodsleepday"],
                    this.EventItems["goodsleepday_power_bonus"],
                    this.EventItems["goodsleepday_exp_bonus"],
                    this.EventItems["goodsleepday_point_bonus"]
                ]
            },

            "ニュームーンデー" : {
                items: [
                    this.EventItems["pickup_darkrai"],
                    this.EventItems["pickup_shiny"],
                    this.EventItems["sleep_hunger_change"]
                ]
            },

            "もうすぐ2周年キャンペーン" : {
                items: [
                    this.EventItems["pickup_other_sleep_type"],
                    this.EventItems["sleep_yumenokakera_150percent"],
                    this.EventItems["cooking_capacity"],
                    "ニャオハ・ホゲータ・クワッス 中ピックアップ"
                ]
            },

            "2周年フェスティバル前半" : {
                items:[
                    this.EventItems["pickup_other_sleep_type"],
                    this.EventItems["sleep_get_chance"],
                    this.EventItems["main_skill_150percent"],
                    this.EventItems["sleep_exp_bonus_150percent"],
                    this.EventItems["sleep_candy_150percent"],
                    this.EventItems["dream_gift"]
                ]
            },

            "2周年フェスティバル後半" : {
                items:[
                    this.EventItems["pickup_other_sleep_type"],
                    this.EventItems["cooking_power_150percent"],
                    this.EventItems["mini_candy_boost"]
                ]
            }
        }
    }





    setDateCellsToColumn(column, count, withDateStr){
        for (let i = 0; i < count; i++){
            var el = document.createElement("event_cell");
            var d = new Date(this.today);
            d.setDate(d.getDate() + i);
            var dateStr = (d.getMonth() + 1) + "/" + d.getDate();
            var youbi = this.Youbi[d.getDay()];
            el.dataset.date = dateStr;
            if (youbi == "日"){
                el.className = "sunday";
            }
            if (withDateStr) el.innerHTML = dateStr + "<br>(" + youbi+ ")";

            column.appendChild(el);
        }
    }



    addEntry(startDateStr, endDateStr, endAtPreviousDayEnd, presetKey, label, ...params){
        let tmpStartDate = new Date(startDateStr);
        let startDate = (this.today > tmpStartDate) ? this.today : tmpStartDate;
        let endDate = new Date(endDateStr);
        if (endAtPreviousDayEnd){
            endDate.setDate(endDate.getDate() - 1);
            endDate.setHours(23, 59, 0);
        }

        if (endDate < this.today) return;

        let column = document.createElement("event_column");
        this.setDateCellsToColumn(column, 30, false);

        let preset = this.EventPresets[presetKey];
        if (preset == undefined){
            alert(`Preset:${presetKey} is not found`);
            return;
        }

        let panel = document.createElement("event_panel");
        let titleEl = document.createElement("h3");
        let ulEl = document.createElement("ul");
        titleEl.textContent = label;
        [...Array.from(preset.items), ...params].forEach(x =>{
            let li = document.createElement("li");
            li.textContent = x;
            ulEl.appendChild(li);
        });

        panel.appendChild(titleEl);
        panel.appendChild(ulEl);

        let diffHours = (endDate - startDate) / (1000 * 60 * 60);
        panel.style.height = (diffHours * 0.5) + "em";

        var cell = this.getCellOf(column, startDate);

        if (cell != undefined){
            cell.appendChild(panel);
            panel.style.marginTop = (startDate.getHours() * 0.5) + "em";
        }
        this.dataField.appendChild(column);
    }

    getCellOf(column, startDate){
        var date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        var dateStr = (date.getMonth() + 1) + "/" + date.getDate();
        return Array.from(column.children).find(cell => cell.dataset.date == dateStr);
    }

}
