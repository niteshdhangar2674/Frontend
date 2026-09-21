interface User {
    name: string;
    age: number;
    surname: string;
}

type User2 = {
    name: string;
    age: number;
    surname: string;
}

const user: User = {
    name: "nitesh",
    age: 32,
    surname: "Dhanar"
}

console.log(user);

