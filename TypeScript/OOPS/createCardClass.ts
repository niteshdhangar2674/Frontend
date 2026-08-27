import { Product1 } from "./Class-2";

class Card {
    items: Product1[];

    constructor() {
        this.items = [];
    }


    addProduct(product: Product1): void {
        this.items.push(product);
    }

    getProduct(): Product1[] {
        return this.items;
    }

    totalPrice(): number {
        return this.items.reduce((accu, curr) => {
            return accu + curr.price;
        }, 0)
    }

}


const card = new Card();
card.addProduct(new Product1(101, "iphone15", 89000))

console.log(card.getProduct());
