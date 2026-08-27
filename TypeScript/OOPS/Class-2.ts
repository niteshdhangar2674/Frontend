export class Product1 {
    id: number;
    name: string;
    price: number;


    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    displayProduct(): void {
        console.log(this.name + " : " + this.price);
    }

    applyDiscount(precentage: number) {
        this.price = this.price - (this.price / 100) * precentage;
    }
}

const prod = new Product1(101, "Milk", 89);

// console.log(typeof prod);

prod.displayProduct();

prod.applyDiscount(15);

prod.displayProduct();

