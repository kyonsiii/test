class PokeDB{
    constructor(){
        this.resultTable;
        this.resultTBody;
        this.button_reset;
        this.box_specialty;
        this.box_skill;
        this.pokemons;
    }

    
    initialize(pokedex){
        this.pokedex = pokedex;
        this.pokemons = this.pokedex.pokemons;
        
        this.resultTable = document.getElementById("result");
        this.resultTBody = this.resultTable.tBodies[0];
        this.button_reset =  document.getElementById('button_reset');
        this.box_specialty = document.getElementById('select_specialty');
        this.box_skill = document.getElementById('select_skill');
    
        this.button_reset.addEventListener("click", () =>{this.reset();});
        this.box_specialty.addEventListener("change", ()=>{this.setResult();});    
        this.box_skill.addEventListener("change", ()=>{this.setResult();});
        

    }

    setFoodImgListTo(listEl){        
        for (let i = 0; i < this.pokedex.foodList.length; i++){
            let img = this.getFoodImgElementOf(this.pokedex.foodList[i]);
            img.setAttribute("onclick", "pokedb.selectIcon(this)");
            listEl.appendChild(img);
        }
    }


    setBerryImgListTo(listEl){
        for (let i = 0; i < this.pokedex.berryList.length; i++){
            let img = this.getBerryImgElementOf(this.pokedex.berryList[i].name);
            img.setAttribute("onclick", "pokedb.selectIcon(this)");
            listEl.appendChild(img);
        }
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
    
    
    reset(onlyTBody, ignoreSetResult = false, ignoreSpecialtySelection = false, ignoreSkillSelection = false){
        this.resultTBody.innerHTML = "";
        if (onlyTBody) return;
    
        if (!ignoreSpecialtySelection) this.box_specialty.options[0].selected = true;
        if (!ignoreSkillSelection) this.box_skill.options[0].selected = true;
        this.selectIcon(null, ignoreSetResult);
    }
    
    
    selectField(el){
        let fieldName = el.name;
        this.reset(false, true, true, true);
        
        if (fieldName == "シアン"){
            this.selectIcon(this.getBerryIconOf("オレンのみ"), true);
            this.selectIcon(this.getBerryIconOf("シーヤのみ"), true);
            this.selectIcon(this.getBerryIconOf("モモンのみ"));
        }
        else if (fieldName == "トープ"){
            this.selectIcon(this.getBerryIconOf("ヒメリのみ"), true);
            this.selectIcon(this.getBerryIconOf("フィラのみ"), true);
            this.selectIcon(this.getBerryIconOf("オボンのみ"));
        }
        else if (fieldName == "ウノハナ"){
            this.selectIcon(this.getBerryIconOf("キーのみ"), true);
            this.selectIcon(this.getBerryIconOf("チーゴのみ"), true);
            this.selectIcon(this.getBerryIconOf("ウイのみ"));
        }
        else if (fieldName == "ラピス"){
            this.selectIcon(this.getBerryIconOf("ドリのみ"), true);
            this.selectIcon(this.getBerryIconOf("クラボのみ"), true);
            this.selectIcon(this.getBerryIconOf("マゴのみ"));
        }
        else if (fieldName == "ゴールド"){
            this.selectIcon(this.getBerryIconOf("ウブのみ"), true);
            this.selectIcon(this.getBerryIconOf("ブリーのみ"), true);
            this.selectIcon(this.getBerryIconOf("ベリブのみ"));
        }
    }
    
    getBerryIconOf(berryName){
        let a = document.getElementById('berry_buttons').children;
        for (let i = 0; i < a.length; i++){
            if (a[i].name == berryName) return a[i];
        }
        return null;
    }
    
    
    selectIcon(el, ignoreSetResult = false){
        if (el == null){
            Array.from(document.getElementById('berry_buttons').children).forEach(c => this.changeIconStyle(c, false));
            Array.from(document.getElementById('food_buttons').children).forEach(c => this.changeIconStyle(c, false));
        }
        else if (el.style.margin == "" || el.style.margin == "4px"){
            el.style.margin = "0px";
            el.style.border = "4px solid blue";
            el.value = "ON";
        }
        else{
            el.style.margin = "4px";
            el.style.border = "";
            el.value = "";
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
        let selectedBerries = Array.from(document.getElementById('berry_buttons').children).filter(c => c.value == "ON").map(c => c.name).join("");
        let selectedFoods = Array.from(document.getElementById('food_buttons').children).filter(c => c.value == "ON").map(c => c.name).join("");    

        let ignoreSpecialty = (this.box_specialty.value == "----");
        let ignoreBerry = (selectedBerries == "");
        let ignoreFood = (selectedFoods == "");
        let ignoreSkill = (this.box_skill.value == "----");
        let results = this.pokemons.filter(p => (ignoreSpecialty || p.specialty == this.box_specialty.value)
                                             && (ignoreBerry || selectedBerries.includes(p.berry))
                                             && (ignoreFood || p.containsFood(selectedFoods))
                                             && (ignoreSkill || p.skill.indexOf(this.box_skill.value) > -1));
    
        this.reset(true);
    
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
        + "<br><span class=\"indicator_text\">きのみRank</span> " + poke.getIndicatorBarOf(poke.rankOfBerry)//poke.indicatorChar.repeat(poke.berryIndicator)
        + "<br><span class=\"indicator_text\">食材Rank</span> " + poke.getIndicatorBarOf(poke.rankOfFood)//poke.indicatorChar.repeat(poke.foodIndicator)
        + "<br><span class=\"indicator_text\">スキルRank</span> " + poke.getIndicatorBarOf(poke.rankOfSkill)//poke.indicatorChar.repeat(poke.skillIndicator)
        + "</p>";

        c = r.insertCell();
        c.innerHTML = "<img src=\"img/berry/" + poke.berry + ".png\" class=\"tiny\">" + poke.berry 
                    + "<br><br>" + "<img src=\"img/food/" + poke.food1 + ".png\" class=\"tiny\"><b>" + "(確定)</b>" 
                    + "<br>" + "<img src=\"img/food/" + poke.food2 + ".png\" class=\"tiny\">" 
                    + (poke.food3 == "" ? "" : "<br>" + "<img src=\"img/food/" + poke.food3 + ".png\" class=\"tiny\">");

        return r;
    }
}

  














