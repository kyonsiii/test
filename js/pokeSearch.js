class PokeSearch{

    
    initialize(pokedex){
        this.pokedex = pokedex;
        this.pokemons = this.pokedex.pokemons;
        
        this.resultTable = document.getElementById("result");
        this.resultTBody = this.resultTable.tBodies[0];
        this.button_reset =  document.getElementById('button_reset');
        this.box_specialty = document.getElementById('select_specialty');
        this.box_sleeptype = document.getElementById('select_sleeptype');
        this.box_skill = document.getElementById('select_skill');
        this.check_onlyFullyEvolved = document.getElementById("option_only_fully_evolved");

        

    }



    getBerryImgElementOf(berry){
        let el = document.createElement("img");
        el.name = berry;
        el.src = "img/berry/" + el.name + ".png";
        return el;
    }

    getFoodImgElementOf(food){
        let el = document.createElement("img");
        el.name = food;
        el.src = "img/food/" + el.name + ".png";
        return el;
    }


    setSkillListTo(listEl){
        let op1 = document.createElement("option");
        op1.value = "----"
        op1.textContent = op1.value;
        listEl.appendChild(op1)

        for (let i = 0; i < this.pokedex.skillList.length; i++){
            let op = document.createElement("option");
            op.value = this.pokedex.skillList[i];
            op.textContent = op.value;
            listEl.appendChild(op);
        }
    }
    
    
    reset(ignoreSpecialtySelection = false, ignoreSkillSelection = false, ignoreFullyEvolved = false, ignoreSetResult = false){
        this.resultTBody.innerHTML = "";
        if (!ignoreSpecialtySelection) this.box_specialty.options[0].selected = true;
        if (!ignoreSkillSelection) this.box_skill.options[0].selected = true;
        if (!ignoreFullyEvolved) this.check_onlyFullyEvolved.checked = true;  

        this.selectIcon(null, ignoreSetResult);
    }
    
    

    
    getBerryIconOf(berryName){
        let a = document.getElementById('berry_buttons').children;
        for (let i = 0; i < a.length; i++){
            if (a[i].name == berryName) return a[i];
        }
        return null;
    }
    
    
    selectIcon(el, ignoreSetResult = false){
        let fieldButtonDisabled = false;

        if (el != null){
            if (el.parentNode.id == "field_buttons"){
                fieldButtonDisabled = (el.value == "ON");
                Array.from(document.getElementById('field_buttons').children).forEach(c => this.changeIconStyle(c, false)); 
            }
        }

        if (el == null){
            Array.from(document.getElementById('berry_buttons').children).forEach(c => this.changeIconStyle(c, false));
            Array.from(document.getElementById('food_buttons').children).forEach(c => this.changeIconStyle(c, false));
            Array.from(document.getElementById('field_buttons').children).forEach(c => this.changeIconStyle(c, false));
        }
        else if (el.style.margin == "" || el.style.margin == "4px"){
            el.style.margin = "0px";
            el.style.border = "4px solid blue";
            el.value = "ON";
        }
        else {
            el.style.margin = "4px";
            el.style.border = "";
            el.value = "";
        }
        
        if (fieldButtonDisabled){
            this.reset(true, true, true, false, false);
            return;
        }
        if (!ignoreSetResult) this.setResult();
    }
    
    
    changeIconStyle(el, turnOn){
        if (turnOn){
            el.style.margin = "0px";
            el.style.border = "4px solid blue";
            el.value = "ON";
        }
        else{
            el.style.margin = "4px";
            el.style.border = "";
            el.value = "";
        }
    }
    
    
    setResult(){
        const onlyFullyEvolved = this.check_onlyFullyEvolved.checked;
        const selectedField = Array.from(document.getElementById('field_buttons').children).find(c => c.value == "ON");  
        const selectedBerries = Array.from(document.getElementById('berry_buttons').children).filter(c => c.value == "ON").map(c => c.name);
        const selectedFoods = Array.from(document.getElementById('food_buttons').children).filter(c => c.value == "ON").map(c => c.name);    
          
        const ignoreSpecialty = (this.box_specialty.value == "----");
        const ignoreSleepType = (this.box_sleeptype.value == "----");
        const ignoreBerry = (selectedBerries == "");
        const ignoreFood = (selectedFoods == "");
        const ignoreSkill = (this.box_skill.value == "----");
        const ignoreField = (selectedField == undefined);
        const fieldInfo = (ignoreField) ? null : (() => {
            const map = new Map();
            POKE_DATA_FIELD.filter(x => x.fieldName == selectedField.name).forEach(x => {
                if (!map.has(x.name)) map.set(x.name, x.name);
            });
            return map;
        })();

        const results = this.pokemons.filter(p => (!onlyFullyEvolved || (p.fullyEvolved && onlyFullyEvolved))
                                             && (ignoreSpecialty || p.specialty == this.box_specialty.value || p.specialty == "オール")
                                             && (ignoreSleepType || p.sleepType == this.box_sleeptype.value)
                                             && (ignoreBerry || selectedBerries.includes(p.berry))
                                             && (ignoreFood || p.existAllInFoodList(selectedFoods))
                                             && (ignoreSkill || p.skill.indexOf(this.box_skill.value) > -1)
                                             && (ignoreField || fieldInfo.has(p.searchName)));
    
        this.resultTBody.innerHTML = "";
        
        for (let res of results) {
            this.resultTBody.appendChild(this.createTr(res));
        }
    }


    createTr(poke) {
        let r = document.createElement("tr");
        let c;

        c = r.insertCell();
        c.innerHTML = "<a href=\"https://wikiwiki.jp/poke_sleep/" + poke.name + "\">" + ("No." + poke.no + " ") + poke.name + "</a>" 
        + "<br>" + "<img src=\"img/poke/" + String(poke.no).padStart(3, '0') + ".png\" class=\"normal\">" + poke.sleepType + " - " + poke.specialty
        + "<br>" + poke.skill + "<br>"
        + poke.sec
        + "<p>"

        + "<span class=\"indicator_text\">きのみSPow/日:</span>" + poke.berrySEnergyLvMaxDay.toLocaleString()          
        + "<br><span class=\"indicator_text\">食材Pow/日:</span>" + poke.foodEnergyLvMaxDay.toLocaleString()
        + "<br><strong><span class=\"indicator_text\" style='margin-bottom:0.5em;'>Pow合計/日:</span>" + (poke.berrySEnergyLvMaxDay + poke.foodEnergyLvMaxDay).toLocaleString() + "</strong>"
        + "<br><span class=\"indicator_text\">食材拾い/日:</span>" + poke.foodOtetsudaiCountDay + "回"    
        + "<br><span class=\"indicator_text\">スキル発動/日:</span>" + poke.skillExpectionDay.toFixed(1) + "回"
        + "<br><span class=\"indicator_text\">食材確率:</span>"+ (poke.foodRate * 100).toFixed(1) + "%"
        + "<br><span class=\"indicator_text\">スキル確率:</span>"+ (poke.skillRate * 100).toFixed(1) + "%"
        + "<br><span class=\"indicator_text\">きのみRank</span> " + poke.getIndicatorBarOf(poke.rankOfBerry)//poke.indicatorChar.repeat(poke.berryIndicator)
        + "<br><span class=\"indicator_text\">食材Rank</span> " + poke.getIndicatorBarOf(poke.rankOfFood)//poke.indicatorChar.repeat(poke.foodIndicator)
        + "<br><span class=\"indicator_text\">スキルRank</span> " + poke.getIndicatorBarOf(poke.rankOfSkill)//poke.indicatorChar.repeat(poke.skillIndicator)
        + "</p>";

        c = r.insertCell();
        c.innerHTML = "<img src=\"img/berry/" + poke.berry + ".png\" class=\"tiny\">" + poke.berry 
                    + "<br><br>" + "<img src=\"img/food/" + poke.foods[0].name + ".png\" class=\"tiny\"><b>" + "(確定)</b>" 
                    + (poke.foods.length <= 1 ? "" : "<br>" + "<img src=\"img/food/" + poke.foods[1].name + ".png\" class=\"tiny\">")
                    + (poke.foods.length <= 2 ? "" : "<br>" + "<img src=\"img/food/" + poke.foods[2].name + ".png\" class=\"tiny\">");

        return r;
    }
}

  














