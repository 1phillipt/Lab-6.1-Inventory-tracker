import { PhysicalProduct } from "./models/PhysicalProduct.ts";
import { DigitalProduct } from "./models/DigitalProduct.ts";
import { calculateTax } from "./utils/taxCalculator.ts";
import { Product } from "./models/Product.ts";


const myProducts: Product[] = [
    new PhysicalProduct("myproduct123", "Laptop", 1200, 2),
    new DigitalProduct("myDigitalProduct123", "Ebook", 19.99,12)
]


type ProductDetail = {
  product: Product;
  tax: number;
};

const itemWithTaxPrice: ProductDetail[] = myProducts.map(product => {
  const tax = calculateTax(product)-product.price;

  return {
    product,
    tax
  };
});

itemWithTaxPrice.forEach(item => console.log(item));
