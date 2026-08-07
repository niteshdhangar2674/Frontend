let student = [
    { name: "Nitesh", marks: 98 },
    { name: "Rohan", marks: 96 },
    { name: "Mohan", marks: 90 }
]
let marks = [];
student.forEach((obj) => {
    marks.push(obj.marks);
})

console.log(marks);