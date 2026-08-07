let arr = ['A', 'B', 'C', 'A', 'D', 'B', 'A', 'C'];

// let ans = [];

// for (let ele of arr) {
//     if (!ans.includes(ele)) ans.push(ele);
// }

// console.log(ans);

let obj = {};

for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] == undefined) obj[arr[i]] = 1;
}
console.log(obj);