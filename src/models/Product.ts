 export class Product {
    sku: string;
    name : string;
    price: number;
    

    constructor(sku:string, name:string, price:number){

        this.sku = sku;
        this.name = name;
        this.price = price;
    }

    displayDetails(){
        return `Product name ${this.name} with sku ${this.sku} and price ${this.price}`;
        
    }

    getPriceWithTax() :number {

        return this.price*0.07 + this.price;

    }

}