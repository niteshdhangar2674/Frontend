let arr: number[] = [12, 34, 45, 67, 8, 9, 0];

let arr1: number[] | string[] = ['a', 'd', 'c'];

let arr3: (number | string)[] = [1, 3, 5, 'a', 6, 'b'];

type User1 = {
    id: number;
    name: string;
    age: number;
    email: string;
}
let userArr: User1[] = [
    {
        id: 1,
        name: "nitesh",
        age: 22,
        email: "nitesh@gmail"
    },
    {
        id: 2,
        name: "rohit",
        age: 22,
        email: "rohit@gmail"
    },
    {
        id: 3,
        name: "mohit",
        age: 22,
        email: "mohit@gmail"
    },
    {
        id: 1,
        name: "sohan",
        age: 22,
        email: "sohan@gmail"
    },
]