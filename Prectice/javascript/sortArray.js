let arr = [1, 5, 3, 4, 9, 6, 7, 8];

let sort = arr.sort();

// console.log(sort);

let arr2 = [13, 25, 3, 24, 19, 61, 17, 18];

arr2.sort((a, b) => a - b);

// console.log(arr2);

let student = [
    { name: "Nitesh", marks: 98 },
    { name: "rohan", marks: 90 },
    { name: "sohan", marks: 86 }
]

student.sort((a, b) => a.marks - b.marks);

console.log(student);