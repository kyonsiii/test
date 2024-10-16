const mask_sleep_inputFlag  = 0b000000010000000000000000;
const mask_sleep_uto        = 0b000000001111111100000000;
const mask_sleep_suya       = 0b000000000000000011111111;
class PokeSleepingCalc{
    //WEBページで初期化時にcalcでインスタンスが作成されることを前提にしています。
    constructor(){

    }
    

    //睡眠記録関連(初期化用)
    addInputRowsToTable(){
        let calcTableEl = document.getElementById('calc_table');
        let tbody = calcTableEl.tBodies[0];

        for (let i = 1; i <= 30; i++){
            let r = tbody.insertRow();
            r.id = "calc_row_" + i;
            let c1 = r.insertCell();
            c1.textContent = i + "回前";

            let c2 = r.insertCell();
            c2.innerHTML = '<input type="text" class="calc_sleep_input" />';
            
            let c3 = r.insertCell();
            c3.innerHTML = (i == 1) ? '<button tabindex="-1" onclick="calc.offsetCalcRowValue(false);" class="smaller">↓</button> <button tabindex="-1" onclick="calc.offsetCalcRowValue(true);"  class="smaller">↑</button>'
                                     : "";
        }
    }


    //睡眠記録関連(ボタンで呼び出すもの)
    showRatioCalcResult(){
        let targTb = document.getElementById('calc_target');
        if (targTb.value == "") {
            this.showCurrentRatio();
            return;
        }

        this.recalcRatioOf(targTb);
        let values = targTb.value.split('-').map(v => parseInt(v, 10));
        let ratios = this.getCurrentRatio();
        
        let uto_diff  = Math.round((values[0] - ratios[0]) * 10) / 10;
        let suya_diff = Math.round((values[1] - ratios[1]) * 10) / 10;
        let gusu_diff = Math.round((values[2] - ratios[2]) * 10) / 10;
        let diff_max = Math.max(uto_diff, suya_diff, gusu_diff);
        let maxType = (diff_max == uto_diff)  ? "「うとうと」 になる可能性が高い"
                    : (diff_max == suya_diff) ? "「すやすや」 になる可能性が高い"
                                              : "「ぐっすり」 になる可能性が高い";
        let mes = values[0] + "(" + this.numberToSignedNumber(uto_diff) + ") - "
                + values[1] + "(" + this.numberToSignedNumber(suya_diff) + ") - "
                + values[2] + "(" + this.numberToSignedNumber(gusu_diff) + ")"
                + "\n" + maxType;  

        setCookie("srcd", this.recordsToCookieValue(), 30);
        alert(mes);
    }


    showCurrentRatio(){
        let x = this.getCurrentRatio();
        setCookie("srcd", this.recordsToCookieValue(), 30);
        alert(x[0] + "-" + x[1] + "-" + x[2]);
    }


    numberToSignedNumber(num){
        return (num >= 0) ? "▲" + num : "▽" + Math.abs(num);
    }


    offsetCalcRowValue(reverseMode){
        let iStart = (reverseMode) ?  1 : 30;
        let iEnd   = (reverseMode) ? 30 :  1;
        let iStep  = (reverseMode) ? +1 : -1;

        for (let i = iStart; i != iEnd; i += iStep){
            let row = document.getElementById('calc_row_'+ i);
            let prevRow = document.getElementById('calc_row_'+ (i + iStep));

            row.getElementsByTagName('input')[0].value = prevRow.getElementsByTagName('input')[0].value;      
        }
        
        document.getElementById('calc_row_'+ iEnd).getElementsByTagName('input')[0].value = '';
    }


    getSleepRecordsToClipboard(){
        navigator.clipboard.writeText(recordsToCookieValue());
    }


    setSleepRecordsFromTextBox(){
        let tb = document.getElementById('import_text');
        this.setRecordsToInputBoxesFromCookieValue(tb.value);
        tb.value = "";
    }


    setRecordsToInputBoxesFromCookieValue(c){
        let arr = c.match(/.{4}/g).map(s => parseInt(s, 32));
        for (let i = 0; i < 30; i++){
            let n = arr[i];
            let value = "";
            if (bitToNum(n, mask_sleep_inputFlag) == 0){
                //何もしない
            }
            else{
                let uto  = bitToNum(n, mask_sleep_uto);
                let suya = bitToNum(n, mask_sleep_suya);
                uto = (uto > 100) ? 100 : uto;
                suya = (suya > 100) ? 100 : suya;
                suya = ((uto + suya) > 100) ? 0 : (100 - uto);
                let gusu = 100 - uto - suya;
                value = uto + "-" + suya + "-" + gusu;
            }
            let tb = document.getElementById("calc_row_" + (i + 1)).getElementsByTagName("input")[0];
            tb.value = value;
        }
    }


    recordsToCookieValue(){
        let records = this.createRecords();
        let valueList = [];
        let n = 0;
        for (let i = 0; i < records.length; i++){
            n = 0;
            if (records[i] == ""){
                //何もしない
            }
            else{
                let nums = records[i].split("-").map(n => Number(n));
                n += numToBit(1, mask_sleep_inputFlag);
                n += numToBit(nums[0], mask_sleep_uto);
                n += numToBit(nums[1], mask_sleep_suya);
            }
            valueList.push(n.toString(32).padStart(4, "0"));
        }

        return valueList.join("");
    }



    

    //睡眠記録関連(その他)
    createRecords(){
        this.recalcSleepRecords();
        let values = [];
        for (let i = 1; i <= 30; i++){
            let r = document.getElementById('calc_row_' + i);
            let tmp = r.getElementsByTagName('input')[0].value;
            values.push(tmp);
        }
        return values;
    }


    recalcSleepRecords(){
        for (let i = 1; i <= 30; i++){
            let r = document.getElementById('calc_row_' + i);
            let tb = r.getElementsByTagName('input')[0];
            if (tb.value != "") this.recalcRatioOf(tb);
        }
    }


    recalcRatioOf(tb){           
        let tmp = tb.value.replace(/[ \._-]/g, "-");
        let numbers = tmp.split('-').map(n => parseInt(n, 10));
        let uto = numbers[0];
        let suya = numbers[1];
        let gusu = 100 - uto - suya;
        if (gusu < 0) gusu = NaN;
        tb.value = uto + "-" + suya + "-" + gusu;     
    }


    getCurrentRatio(){
        this.recalcSleepRecords();
        let cnt  = 0;
        let uto  = 0;
        let suya = 0;
        let gusu = 0;

        for (let i = 1; i <= 30; i++){
            let r = document.getElementById('calc_row_' + (i));
            let tb = r.getElementsByTagName('input')[0];
            
            if (tb.value == ""){

            }
            else {
                let values = tb.value.split('-').map(v => parseInt(v, 10));
                uto  += values[0];
                suya += values[1];
                gusu += values[2];
                cnt++;
            }
        }

        uto  = Math.round((uto  / cnt) * 10) / 10;
        suya = Math.round((suya / cnt) * 10) / 10;
        gusu = Math.round((100 - uto - suya) * 10) / 10;

        return [uto, suya, gusu];
    }

}