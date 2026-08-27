class Product {
    id: number;
    name: string;
    price: number;


    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

const product1 = new Product(101, "Milk", 89);

console.log(product1.id);
console.log(product1);
