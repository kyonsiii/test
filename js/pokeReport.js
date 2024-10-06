class PokeReport{
    constructor(pokedex){
        this.pokedex = pokedex;
    }

    createReport(foodName, min = 0){
        let targetPokemons = this.pokedex.pokemons.filter(p => p.containsFood(foodName));

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
            r.appendChild(this.createPokemonAndFoodTd(x.poke, x.comb));
            x.comb.insertResultTo(foodName, r);
            tbody.appendChild(r);
        });
        return tbody;
    }

    createPokemonAndFoodTd(poke, combination){
        let el = document.createElement("td");
        let img = document.createElement("img");
        img.src = "img/poke/" + String(poke.no).padStart(3, '0') + ".png"
        img.classList.add("tiny");
        el.appendChild(img);

        let lv = document.createElement("span");
        lv.textContent = (combination.code.length == 2 ) ? "Lv30" : "Lv60";
        el.appendChild(lv);

        for (let i = 0; i < combination.code.length; i++){
            let c = combination.code[i];
            let fImg = document.createElement("img");
            let food = (c == "A") ? poke.food1
                      : (c == "B") ? poke.food2 : poke.food3;
            fImg.src = "img/food/" + food + ".png";
            fImg.classList.add("ex-tiny");
            el.appendChild(fImg);
        }
        
        return el;

    }
}