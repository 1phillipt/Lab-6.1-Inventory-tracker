import { Product } from "./Product.ts";

export class DigitalProduct extends Product {
    fileSize: number;

    constructor(sku: string, name: string, price: number, fileSize: number){
        super(sku, name, price);
        this.fileSize = fileSize;

    }
    getPriceWithTax() :number {
        return this.price; //no tax
    }

    get formattedFileSize(): string{
        return `${this.fileSize} MB`
    }
}

