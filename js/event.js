class PokeEvent{
    constructor(){

        const tmp = new Date();
        this.today = new Date(tmp.getFullYear(), tmp.getMonth(), tmp.getDate());
        this.Youbi = {0: "日", 1: "月", 2: "火", 3: "水", 4: "木", 5: "金", 6: "土"}
        this.dataField = document.getElementById("event_schedule");

    }





    setDateCellsToColumn(column, count, withDateStr){
        for (let i = 0; i < count; i++){
            let el = document.createElement("event_cell");
            let d = new Date(this.today);
            d.setDate(d.getDate() + i);
            let dateStr = (d.getMonth() + 1) + "/" + d.getDate();
            let youbi = this.Youbi[d.getDay()];
            el.dataset.date = dateStr;
            if (youbi == "日"){
                el.className = "sunday";
            }
            if (withDateStr) el.innerHTML = dateStr + "<br>(" + youbi+ ")";

            column.appendChild(el);
        }
    }



    addEntry(startDateStr, endDateStr, endAtPreviousDayEnd, presetItems, label, ...params){
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


        let panel = document.createElement("event_panel");
        let titleEl = document.createElement("h3");
        let ulEl = document.createElement("ul");
        titleEl.textContent = label;
        [...Array.from(presetItems), ...params].forEach(x =>{
            let li = document.createElement("li");
            li.textContent = x;
            ulEl.appendChild(li);
        });

        panel.appendChild(titleEl);
        panel.appendChild(ulEl);

        let diffHours = (endDate - startDate) / (1000 * 60 * 60);
        panel.style.height = (diffHours * 0.5) + "em";
        let cell = this.getCellOf(column, startDate);

        if (cell != undefined){
            cell.appendChild(panel);
            panel.style.marginTop = (startDate.getHours() * 0.5) + "em";
        }
        this.dataField.appendChild(column);
        console.log(panel.offsetTop);
        let panelBottom = panel.offsetTop + panel.offsetHeight;
        let fieldBottom = this.dataField.offsetTop + this.dataField.offsetHeight;
        
        if (panelBottom > fieldBottom){
            panel.style.height = (fieldBottom - panel.offsetTop + 50)+ "px";
            panel.classList.add("over_calendar");
        }
    }

    getCellOf(column, startDate){
        let date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        let dateStr = (date.getMonth() + 1) + "/" + date.getDate();
        return Array.from(column.children).find(cell => cell.dataset.date == dateStr);
    }

}
