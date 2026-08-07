let student = [

    { name: "Nitesh", age: 22, marks: 90 },

    { name: "Rohit", age: 21, marks: 80 },

    { name: "Mohit", age: 20, marks: 60 }

];


let highMarks = student.filter(student => student.marks >= 70).map(ele => ele.name);

// console.log(highMarks);



let names = student.map((obj) => {

    return obj.name;

});

// console.log(student.filter(ele => ele.marks < 33).length > 0 ? "yes!" : "no!");



// console.log(names);


let employees = [{
    name: "nitesh",
    salary: 100000,
},
{
    name: "Rohit",
    salary: 100000,
},
{
    name: "Mohit"
}
]
let sums = employees.map(ele => ele.salary).reduce((sum, curr) => {
    return sum + curr;
})


console.log(sums);