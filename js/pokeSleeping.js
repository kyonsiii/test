class PokeSleeping{
    //htmlでインスタンス作成時に"pokesleeping"で作成される前提で作られています。
    constructor(){
        this.input_current = document.getElementById('current_power');
        this.input_target = document.getElementById('target_power');
        this.button_calc =  document.getElementById('button_calc');



    }

    setFields(el){

        el.appendChild(createField("waka", "ワカクサ本島", "9万～", "208万～", "463万～", "834万～", "1957万～"));
        el.appendChild(createField("cyan", "シアンの砂浜", "158万～", "352万～", "717万～", "1349万～", "3050万～"));        
        el.appendChild(createField("taup", "トープ洞窟", "183万～", "463万～", "994万～", "1957万～", "4371万～	"));
        el.appendChild(createField("uno", "ウノハナ雪原", "283万～", "717万～", "1547万～", "2878万～", "6570万～"));
        el.appendChild(createField("rapi", "ラピスラズリ湖畔", "316万～", "774万～", "1666万～", "3050万～", "6867万～"));
        el.appendChild(createField("gold", "ゴールド旧発電所", "602万～", "1436万～", "3050万～	", "4992万～", "9740万～	"));
        //el.appendChild(createField("", "", "", "", "", ""));
        //el.appendChild(createField("", "", "", "", "", ""));

        function createField(idName, fieldName, poke4, poke5, poke6, poke7, poke8){


            let thead = document.createElement("thead");
            thead.insertRow().insertCell().outerHTML = "<th>得点</th><th>出現</th><th>ボタン</th>"

            let tbody = document.createElement("tbody");
            insertTargetRow(tbody, 4, poke4);
            insertTargetRow(tbody, 5, poke5);
            insertTargetRow(tbody, 6, poke6);
            insertTargetRow(tbody, 7, poke7);
            insertTargetRow(tbody, 8, poke8);

            let t = document.createElement("table");
            t.classList.add("table_sleep");
            t.appendChild(thead);
            t.appendChild(tbody);

            let div = document.createElement("div");
            div.textContent = fieldName;
            div.id = idName;
            div.appendChild(t);
            return div;


            function insertTargetRow(tb, pokeNum, targ){
                let tr = tb.insertRow();
                tr.insertCell().textContent = targ;
                tr.insertCell().textContent = pokeNum;
                tr.insertCell().innerHTML = '<button class="button_set" onclick="pokesleeping.setTarget(this)">目標にセット</button>';
            }

        }
        return;
    }


    addButtonIntoTr(){
        let allRows = document.querySelectorAll('.table_sleep tbody > tr');
        allRows.forEach((r)=>{                    
            let b = document.createElement('button');
            b.textContent = "目標にセット";
            b.classList.add('button_set');
            b.setAttribute('onclick', 'pokesleeping.setTarget(this)');
            let td = r.insertCell();
            td.appendChild(b);
        });
    }

    dotEndToManYen(){
        if (/\.$/.test(this.input_current.value)){
            this.input_current.value = this.input_current.value.replace(/\.$/, "0000");
        }
    }

    calc(){
        this.dotEndToManYen();
        let powerNum = Number(this.input_current.value.replace(/,/g, ""));
        if (isNaN(powerNum) || powerNum == ""){
            alert("\"" + this.input_current.value + "\"" + "を数値に変換できません");
            return;
        }

        let targetNum = Number(this.input_target.value.replace(/,/g, ""));
        if (isNaN(targetNum) || targetNum == ""){
            alert("\"" + this.input_target.value + "\"" + "を数値に変換できません");
            return;
        }

        let maxPower = powerNum * 100;
        let powerPerMinute = maxPower / 510;
        let sleepMinutes = Math.ceil(targetNum / powerPerMinute);

        let hour = Math.floor(sleepMinutes / 60);
        let minutes = Math.ceil(sleepMinutes % 60);
        let finalScore = Math.floor((hour*60 + minutes) * powerPerMinute);

        let resStr = "<span class=\"target_highlight\">時間: " + String(hour).padStart(2, "0") + ":" + String(minutes).padStart(2, "0") + "(" + finalScore.toLocaleString() + ")</span>";

        let remain = (sleepMinutes > 510 || sleepMinutes < 0) ? 0 : 510 - sleepMinutes; 
        if (sleepMinutes > 510){
            resStr += "<br><span class=\"result_alert\">8時間半を超えています</span>";
        }
        else if (sleepMinutes < 90){
            resStr += "<br><span class=\"result_alert\">1時間半未満です</span>";
        }
        else{
            let remHour = Math.floor(remain / 60);
            let remMinutes = Math.ceil(remain % 60);
            let remFinal = Math.floor((remHour*60 + remMinutes) * powerPerMinute);
            resStr += "<br>残り: " + String(remHour).padStart(2, "0") + ":" + String(remMinutes).padStart(2, "0") + "(" + remFinal.toLocaleString() + ")";
            resStr += "<br>元気 +" + Math.floor(sleepMinutes / 510 * 100);
        }
        document.getElementById('calc_result').innerHTML= resStr;
        
        powerNum = (powerNum > 200000000000) ? 200000000000 : powerNum;
        targetNum = (targetNum > 200000000000) ? 200000000000 : targetNum;
        let c = powerNum.toString(32) + "," + targetNum.toString(32);
        setCookie("spow", c, 30);
    }


    

    filterField(rb){
        let el = document.getElementById(rb.value);
        let fieldTablesEl = document.getElementById('field_tables');
        let tables = fieldTablesEl.children;

        for (let t of tables) {
            t.style.display = (t == el) ? "" : "none";
        }
        fieldTablesEl.style.display = "";

        setCookie("sfld", rb.value, 7);
    }


    setTarget(button){
        let row = button.parentElement.parentElement;
        let num = Number(row.children[0].textContent.replace("万～", "0000")).toLocaleString();
        this.input_target.value = num;
        this.highlightRow(row);
    }


    highlightRow(row){
        let allRows = document.querySelectorAll('.table_sleep tr');
        allRows.forEach((r)=>{
            r.classList.remove('target_highlight');
        });
        
        row.classList.add('target_highlight');
    }

}