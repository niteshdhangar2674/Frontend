let arr = [1, 2, 4, 5, 6, 7, 8, 9];

arr.forEach((e, idx) => {
    console.log(idx, " ", e);
})


let students = [
    { name: "Nitesh", marks: 98 },
    { name: "Rohan", marks: 96 },
    { name: "sohan", marks: 90 },
    { name: "Mohan", marks: 80 }
]
let marks = [];
students.forEach(student => marks.push(student.marks));

console.log(marks);