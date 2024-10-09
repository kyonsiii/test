class PokeReport{
    constructor(pokedex){
        this.pokedex = pokedex;
        this.combinationsInitialized = false;
    }

    initialize(){
        this.pokedex.pokemons.forEach(p => p.setFoodCombinations());
        this.combinationsInitialized = true;
    }

    createReport(foodName, min = 0, onlyFullyEvolved = false){
        if (!this.combinationsInitialized){
            alert("食べ物組み合わせが生成されていません。初期化をしてから実行してください。")
            return null;
        }

        let targetPokemons = this.pokedex.pokemons.filter(p => (!onlyFullyEvolved || p.fullyEvolved) && p.containsFood(foodName));

        let tbody = document.createElement("tbody");
        tbody.id = "report_result";

        let pokeAndComb = [];
        for (let i = 0; i < targetPokemons.length; i++){
            let p = targetPokemons[i]
            p.foodCombinations.forEach(c => {
                if (c.contains(foodName, min)){
                    pokeAndComb.push({poke: p, comb: c});
                }                
            });
        }
        
        let sorted = pokeAndComb.sort((a, b) => b.comb.getExpectionOf(foodName) - a.comb.getExpectionOf(foodName));
        sorted.forEach(x => {
            let r = document.createElement("tr");
            x.comb.insertResultTo(r, foodName, x.poke)
            tbody.appendChild(r);
        });
        return tbody;
    }

 

    selectIcon(el){
        Array.from(document.getElementById('food_buttons').children).forEach(c => this.changeIconStyle(c, false));
        if (el.style.margin == "" || el.style.margin == "4px"){
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
}