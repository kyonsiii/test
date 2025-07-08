class PokeEvent{
    constructor(){
        
        const tmp = new Date();
        this.today = new Date(tmp.getFullYear(), tmp.getMonth(), tmp.getDate());
        this.Youbi = {0: "日", 1: "月", 2: "火", 3: "水", 4: "木", 5: "金", 6: "土"}
        this.dataField = document.getElementById("event_schedule");

        this.EventItems = {
            /*ポケモンのピックアップ*/
            pickup_other_sleep_type
             : "ほかの睡眠タイプ出現",
            pickup_goodsleepday
             : "ピィ/ピッピ/ピクシー 中ピックアップ",
            pickup_undiscovered
             : "未発見のポケモンの出現率UP",

            /*睡眠リサーチ関係*/
            yumenokakera_150percent
             : "リサーチのゆめのかけら1.5倍",


            /*料理関係*/
            nabe_capacity
             : "なべの容量1.5倍(日曜3倍)",
            /*○○関係*/
            /*○○関係*/
            /*○○関係*/

            /*グッドスリープデー関係*/
            sleep_point_bonus_goodsleepday
             : "スリープポイントが1日前/後に+500pt、当日は+1000pt",
            sleep_exp_bonus_goodsleepday
             : "睡眠Expが1日前/後に2倍、当日は3倍",
            sleep_power_bonus_goodsleepday
             : "睡眠パワーが1日前/後に2倍、当日は3倍",


        }

        this.EventPresets = {
             "" : {
                items:[

                ]
             },
            グッドスリープデー : {
                items: [
                    this.EventItems["pickup_undiscovered"],
                    this.EventItems["pickup_goodsleepday"],
                    this.EventItems["sleep_power_bonus_goodsleepday"],
                    this.EventItems["sleep_exp_bonus_goodsleepday"],
                    this.EventItems["sleep_point_bonus_goodsleepday"]
                ]
            },
            もうすぐ2周年キャンペーン : {
                items: [
                    this.EventItems["pickup_other_sleep_type"],
                    this.EventItems["yumenokakera_150percent"],
                    this.EventItems["nabe_capacity"],
                    "ニャオハ・ホゲータ・クワッス 中ピックアップ"
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

   

    addEntry(startDateStr, endDateStr, presetKey, label, ...params){
        let tmpStartDate = new Date(startDateStr);
        let startDate = (this.today > tmpStartDate) ? this.today : tmpStartDate;
        let endDate = new Date(endDateStr);
        
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
        alert(panel.style.height);

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
