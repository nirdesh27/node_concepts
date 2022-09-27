//function which takes another function as input or return function
const circumference = function (radius){
    return 2*Math.PI * radius;
}

const diameter = function (radius){
    return 2* radius;
}
// const calculate = function (arr, logic){
//     const output = [];
//     for(let i=0;i<arr.length ;i++){
//         output.push(logic(arr[i]));
//     }
//     return output;
// }
Array.prototype.calculate = function (logic){
    const output = [];
    for(let i=0;i<this.length ;i++){
        output.push(logic(this[i]));
    }
    return output;
}
let radius=[1,2,5];
//console.log(radius.map(area))
//console.log(calculate(radius, area));
console.log(radius.calculate(diameter));