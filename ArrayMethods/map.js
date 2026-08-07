let arr = [12, 32, 45, 56, 67, 90];

let arr2 = arr.map(ele => ele + 1);

// console.log(arr2);


let employees = [
    { name: "Nitesh", salary: 100000 },
    { name: "rohan", salary: 80000 },
    { name: "sohan", salary: 75000 }
]

let newList = employees.map(em => {
    // let pre = (em.salary * 10) / 100;
    // return { name: em.name, salary: em.salary + pre };

    em.salary = em.salary * 1.1;
    return em;
});

console.log(newList);