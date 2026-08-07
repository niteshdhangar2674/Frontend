let students = [
    { name: "Nitesh", marks: 98 },
    { name: "Rohan", marks: 96 },
    { name: "sohan", marks: 90 },
    { name: "Mohan", marks: 80 }
]

let marks = students.map(student => student.marks);

console.log(marks);