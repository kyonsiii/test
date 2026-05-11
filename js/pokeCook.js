//クッキー用
//          mask_template     = 0b0000000000000000;
const mask_recipe_max         = 0b00000111111111100000000000000000;//前はadvancedとmorelessの間のビット使ってた
const mask_recipe_type_select = 0b00000000000000011000000000000000;//この2bitのあとの2bitはもともと上位食材ON/OFFで使用していたが現在はレベルアップが簡単になったので判定を削除
const mask_recipe_max_select  = 0b00000000000000000001110000000000;//

//const mask_recipe_food        = 0b00000000000000000000000111111000;ボタン式に変更したから使うのやめた
//

class PokeCook{
    //Initialize
    
    constructor(recipes){
        this.recipes = recipes;
        this.recipe_table = document.getElementById('recipe_table');
    }

    recalcRecipeInfo75(){
        this.recalcRecipeInfo(65, "75%", true, true);
    }


    recalcRecipeInfo(recipeLv, fieldBonusPercent, descendingMode, removeButtons = false){
        this.recipes.forEach(x => x.setEnergy(recipeLv, fieldBonusPercent));
        this.setTarget(null, null);
        this.setTableRows(descendingMode);

        if (removeButtons){
            const b = document.getElementsByTagName("button");
            Array.from(b).forEach(x => x.remove());
        }
    }



    setCookieValue(){
        let n = 0;      
        n += numToBit(this.getCurrentMaxManualInputNum(), mask_recipe_max);
        n += numToBit(this.getCurrentRecipeTypeNum(), mask_recipe_type_select);
        n += numToBit(this.getCurrentMaxIndex(), mask_recipe_max_select);
        //n += numToBit(this.getFoodListIndex(), mask_recipe_food);       リストボックスやめた   
        setCookie("cinf", n.toString(32), 30);
    }

    getCurrentMaxIndex(){
        return Array.from(document.querySelectorAll('#recipe_limit [type="radio"]'))
                     .indexOf(document.querySelector('#recipe_limit input:checked'));
    }

    getCurrentMaxManualInputNum(){
        return this.refreshTextBoxOfManualInput();
    }

    getCurrentRecipeTypeNum(){    
        return this.getIndexIn("#current_recipe_type input", "#current_recipe_type input:checked");
    }

    getIndexIn(areaSelector, targetSelector){
        let area = document.querySelectorAll(areaSelector);
        let target = document.querySelector(targetSelector);
        return Array.from(area).indexOf(target);
    }


    setOptionsFromCookie(c){
        if (c == null) return;

        let n = parseInt(c, 32);
        document.querySelectorAll("#current_recipe_type input")[bitToNum(n, mask_recipe_type_select)].checked = true;        
        document.querySelectorAll('#recipe_limit [type="radio"]')[bitToNum(n, mask_recipe_max_select)].checked = true;
        document.getElementById("recipe_limit_manual").value = bitToNum(n, mask_recipe_max);
        
        this.setTarget(null, null)        
    }

 
    setTableRows(descendingMode = false){
        const sample = this.recipes[0];
        document.getElementById("bonus_info").textContent = "レシピLv" + sample.recipeLv + "、フィールドボーナス+" + sample.fieldBonus + "で計算";

        this.recipe_table.tBodies[0].innerHTML = "";
        let list = descendingMode ? this.recipes.sort((a, b) => b.energy - a.energy) : this.recipes
        for (let r of list){
            this.recipe_table.tBodies[0].appendChild(this.createTr(r));
        }
    }


    createTr(recipe){
        let r = document.createElement("tr");
        let c;
        c = r.insertCell();

        let el = document.createElement('div');
        el.classList.add('recipe_title');
        el.setAttribute('recipe_type', recipe.category);
        el.setAttribute('recipe_name', recipe.name);
        el.setAttribute('recipe_ingredients', recipe.ingredients.map(x => x.name).join(","));
        el.setAttribute('recipe_total', recipe.totalFoodsCount);
        el.setAttribute('recipe_power', recipe.energy);
        el.innerHTML = recipe.name + " /計" + recipe.totalFoodsCount + "個 [" + recipe.energy.toLocaleString() + "]"
        c.appendChild(el);

        let el2 = document.createElement('div');
        el2.classList.add('recipe_detail');
        //el2.innerHTML = "<img class=\"normal\" src=\"img/recipe/" + recipe.recipeName + ".png\">" + recipe.getFoodsStr();

        let img = document.createElement('img');
        img.classList.add("normal");
        img.src = "img/recipe/" + recipe.name + ".png";

        let list = document.createElement('ul');
        list.classList.add("ingredients");
        recipe.ingredients.map(f => f.getLi()).forEach(f => list.appendChild(f));
        
        let btn = document.createElement('button');
        btn.value = recipe.name;
        btn.classList.add('recipe_weekend'); 
        btn.textContent = "0個 作成";
        btn.addEventListener('click', () =>{
            recipe.weekendCount++;
            btn.textContent = recipe.weekendCount + "個 作成";
            btn.style.backgroundColor = '#C1FFFF';
        });
        list.appendChild(btn);

        el2.appendChild(img);
        el2.appendChild(list);
        
        c.appendChild(el2);
        return r;
    }


    setTarget(sender, rb){
        rb = rb ?? this.getCheckedRadioButtonOf(document.getElementById('current_recipe_type'));//rbがnullの時はレシピの種類以外から呼び出されている
        let rows = document.querySelectorAll('#recipe_table tbody > tr');

        //レシピの種類をフィルター
        for (let r of rows) {
            r.style.display = (rb.value == "all") ? ""
                            : (rb.value != r.getElementsByClassName('recipe_title')[0].getAttribute('recipe_type')) ? "none"
                            : "";
        }

        //なべの数のフィルター
        let visibleRows = Array.from(rows).filter(r => r.style.display == "");
        let moreThanMode = document.getElementById("recipe_limit_less").checked ? false : true;        
        let nabeNum = document.getElementById("recipe_limit_nolimit").checked ? 9999 : this.refreshTextBoxOfManualInput();          
        for (let r of visibleRows){
            let total = Number(r.getElementsByClassName('recipe_title')[0].getAttribute('recipe_total'));
            r.style.display = (nabeNum == 9999) ? ""
                             : (moreThanMode) ? (total >= nabeNum) ? "" : "none"
                                              : (total <= nabeNum) ? "" : "none";
        }
      

       
        //選択した食材が含まれているかの確認
        const selectedFoods = Array.from(document.querySelectorAll("#food_buttons .selected")).map(el => el.name);
        visibleRows = visibleRows.filter(r => r.style.display == "");
        for (let r of visibleRows){
            let ingredients =  r.getElementsByClassName('recipe_title')[0].getAttribute('recipe_ingredients');
            r.style.display = (selectedFoods.length == 0) ? ""
                             : (selectedFoods.every(sf => ingredients.includes(sf))) ? "" : "none";
        }

        this.setCookieValue();
        return;
    }

    getCheckedRadioButtonOf(el){
        let buttons = el.querySelectorAll('input[type="radio"]');
        return Array.from(buttons).find(b => b.checked);
    }

    refreshTextBoxOfManualInput(){
        let tb = document.getElementById("recipe_limit_manual");
        let n = parseInt(tb.value);
        n = (Object.is(n, NaN)) ? 0 : n;
        tb.value = n;
        return n;
    }
   


    showWeekendSchedule(){
        let dic = {};
        let title = "";

        this.recipes.forEach(r =>{
            if (r.weekendCount > 0){
                title += r.name + "x" + r.weekendCount + "<br>"
                r.ingredients.forEach(x => {
                    if (x.name != ""){
                        if (dic[x.name]){
                            dic[x.name] += (x.num * r.weekendCount);
                        } else {
                            dic[x.name] = (x.num * r.weekendCount);
                        }
                    }
                });
            }
        });

        let resultEl = document.getElementById('weekend');
        resultEl.innerHTML = "";        
        
        let titleEl = document.createElement('span');
        titleEl.innerHTML= title;
        titleEl.style.fontWeight = 600;
        let titleRow = document.createElement('tr');
        titleRow.insertCell().appendChild(titleEl);
        titleRow.insertCell();
        resultEl.appendChild(titleRow);

        for (let k in dic){
            let img = document.createElement('img');
            img.classList.add("ex-tiny");
            img.src = "img/food/" + k + ".png";
            let r = document.createElement('tr');
            let c = r.insertCell();
            c.appendChild(img);
            c.innerHTML += k;

            r.insertCell().textContent = dic[k];
            resultEl.appendChild(r);
        }
    }
}