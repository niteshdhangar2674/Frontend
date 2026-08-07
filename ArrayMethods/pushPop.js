let arr = [1, 3, 5, 6, 7, 8];

for (let ele of arr) {
    console.log(ele);
}

console.log(arr);

console.log("---------------------------------------------------");
arr.push(9, 0, -1);
// arr.push(0);

for (let ele of arr) {
    console.log(ele);
}
console.log("---------------------------------------------------");


// lets print the array and emety of arr 

while (arr.length > 0) {
    console.log(arr.pop());
}
console.log(arr);


