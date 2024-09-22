class PokeCook{
    //Initialize
    constructor(recipes){
        this.recipes = recipes;
        this.recipe_table = document.getElementById('recipe_table');
        this.checkBox_without_advanced = document.getElementById('without_advanced');
        this.checkBox_only_advanced = document.getElementById('only_advanced');
        this.selectBox_food = document.getElementById('select_food');
    }


    setTableRows(){
        for (let r of this.recipes){
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
        el.setAttribute('recipe_name', recipe.recipeName);
        el.setAttribute('recipe_total', recipe.totalFoodsCount);
        el.setAttribute('recipe_power', recipe.recipePower);
        el.innerHTML = recipe.recipeName + " /計" + recipe.totalFoodsCount + "個 [" + recipe.recipePower.toLocaleString() + "]"
        c.appendChild(el);

        let el2 = document.createElement('div');
        el2.classList.add('recipe_detail');
        //el2.innerHTML = "<img class=\"normal\" src=\"img/recipe/" + recipe.recipeName + ".png\">" + recipe.getFoodsStr();

        let img = document.createElement('img');
        img.classList.add("normal");
        img.src = "img/recipe/" + recipe.recipeName + ".png";

        let list = document.createElement('ul');
        list.classList.add("ingredients");
        recipe.allFoods.map(f => f.getLi()).forEach(f => list.appendChild(f));
        
        let btn = document.createElement('button');
        btn.value = recipe.recipeName;
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


    getCheckedRadioButtonOf(el){
        let buttons = el.querySelectorAll('input[type="radio"]');
        return Array.from(buttons).find(b => b.checked);
    }


    setTarget(sender, rb){
        rb = rb ?? this.getCheckedRadioButtonOf(document.getElementById('current_recipe_type'));//rbがnullの時はレシピの種類以外から呼び出されている
        let rows = document.querySelectorAll('#recipe_table tbody > tr');

        if (this.checkBox_without_advanced.checked && this.checkBox_only_advanced.checked){
            if (sender == this.checkBox_without_advanced){
                this.checkBox_only_advanced.checked = false;
            }
            else{
                this.checkBox_without_advanced.checked = false;
            }
        }

        //レシピの種類をフィルター
        for (let r of rows) {
            let recipe = this.getRecipeOf(r.getElementsByClassName('recipe_title')[0].getAttribute('recipe_name'));
            r.style.display = (rb.value == "all") ? ""
                            : (rb.value != recipe.category) ? "none"
                            : "";
        }

        //上位食材が含まれているかどうかのフィルター
        let visibleRows = Array.from(rows).filter(r => r.style.display == "");
        for (let r of visibleRows) {
            let recipe = this.getRecipeOf(r.getElementsByClassName('recipe_title')[0].getAttribute('recipe_name'));
            r.style.display = (this.checkBox_without_advanced.checked && recipe.hasAnyAdvancedFood) ? "none" 
                            : (this.checkBox_only_advanced.checked && !recipe.hasAnyAdvancedFood) ? "none"
                            : "";
        }

        //なべの数のフィルター
        let moreThanMode = this.getCheckedRadioButtonOf(document.getElementById('recipe_limit_type')).value == "more";
        visibleRows = visibleRows.filter(r => r.style.display == "");
        let nabeNum = this.getCheckedRadioButtonOf(document.getElementById('recipe_limit')).value;
        for (let r of visibleRows){
            let recipe = this.getRecipeOf(r.getElementsByClassName('recipe_title')[0].getAttribute('recipe_name'));
            r.style.display = (moreThanMode) ? recipe.moreThan(nabeNum) ? "" : "none"
                                            : recipe.lessThan(nabeNum) ? "" : "none";
        }

        //選択した食材が含まれているかの確認
        if (this.selectBox_food.value != "----"){
            visibleRows = visibleRows.filter(r => r.style.display == "");
            for (let r of visibleRows){
                let recipe = this.getRecipeOf(r.getElementsByClassName('recipe_title')[0].getAttribute('recipe_name'));
                r.style.display = (recipe.containsFood(this.selectBox_food.value)) ? "" : "none";
            }
        }
        
    }


    getRecipeOf(recipeName){
        return this.recipes.find(r => recipeName.includes(r.recipeName));
    }


    showWeekendSchedule(){
        let dic = {};
        let title = "";

        this.recipes.forEach(r =>{
            if (r.weekendCount > 0){
                title += r.recipeName + "x" + r.weekendCount + "<br>"
                r.ingredients.forEach(x => {
                    if (x.food != ""){
                        if (dic[x.food]){
                            dic[x.food] += (x.num * r.weekendCount);
                        } else {
                            dic[x.food] = (x.num * r.weekendCount);
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