Create a new directory for the project and initialize it with npm:
mkdir inventory-tracker
cd inventory-tracker
npm init -y

Install TypeScript and other dependencies- npm install typescript @types/node --save-dev

Create a tsconfig.json file: npx tsc --init

set the folder similar to this folder 
structure inventory-tracker/
├── src/
│   ├── models/
│   │   ├── Product.ts
│   │   ├── PhysicalProduct.ts
│   │   └── DigitalProduct.ts
│   ├── utils/
│   │   └── taxCalculator.ts
│   └── main.ts
└── tsconfig.json

followed the instruction from the assignment.

products.ts contains product class with properties sku, name and price assigs the values with constructor. Has fucntions displayDetails that returns string with details of that product and getPriceWithTax that returns number and calculates price with tax.

DigitalProduct expends products and has its own property fileSize, calls super and passes argument that it gets from DigitalProducts's constructor, and assigns the filesize value. has getPriceWithTax function but does not have tax. has getformattedFileSize function that returns the size of the file.

same with PhysicalProduct class instead of file it has weight and has  getPriceWithTax with return number and calculates actual tax.

main class creates myProducts array with two element. for the product detail I  created type productDetail so it contain tax detail. itemWithTaxPrice is an array variable  that uses this Type. It loops around the myProducts and calls tax function and inserts this type to array variable.