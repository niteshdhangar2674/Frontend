let arr = [19, 8, 1, 12, 3, 10, 4, 25];

arr.sort((a, b) => a - b);

console.log(arr);


let arr2 = [
    { name: "rahul", marks: 90 },
    { name: "Nitesh", marks: 98 },
    { name: "Mohan", marks: 85 },
    { name: "shyam", marks: 80 }
]

arr2.sort((a, b) => b.marks - a.marks);

console.log(arr2);