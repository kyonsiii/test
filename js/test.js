class Test{
    
    setMypokeToPokeFoodMap(){
        const mil = this.mypokeInfoList;
        console.log({mil: mil});
        Object.keys(this.pokeFoodMap).forEach(f => {
            let max = arr.map(x => ({pokemon: x, count: x.comb.getExpectionOf(f), json: x.json}))
                          .reduce((prev, cur) => (cur.count > prev.count) ? cur : prev);
            
            this.pokeFoodMap[f].MyPoke = (max.count == 0) ? null : 
                { no: max.json.no ,
                  name: max.json.name +  this.createIdentifierOf(max.json) + " Lv" + max.json.lv, 
                  count: max.count}
        });
    }
}