const fs=require('fs');
let products=[];
let prod='';

module.exports = class Product{
    constructor(t){
        this.title=t;
    }

    save(){
        products.push(this);
        // console.log(products);
        const prod = JSON.stringify(products);
        fs.writeFileSync('database/data.txt',prod);
    }

    static fetchAll() {
        const prod=JSON.parse(fs.readFileSync('database/data.txt'));
        products=[...prod];
        return prod;
    }
}