function calculate(a, b, operation) {
    return operation(a, b);
}

let sum = calculate(10, 5, function (x, y) {
    return x + y;
});

console.log(sum);


// function math(p,q,operation1){
//     return operation1(p,q);
// }
// let subtract = math(10,5, function(l,m){
//     return l-m;
// });
// console.log(subtract)