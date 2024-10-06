class Test{
    constructor(){
        this.names = ["AAA", "BBB", "CCC"];
    }

     // 配列のようにインデックスでアクセスできるようにする
    [Symbol.iterator]() {
        return this.names[Symbol.iterator]();
    }
    
    // インデックスアクセスのための実装
    [Symbol.unscopables]() {
        return { names: true };
    }
}

let t = new Test();

