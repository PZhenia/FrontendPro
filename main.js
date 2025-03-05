function sum(x){
    let total = x;
    return function(y){
        total += y;
        return total;
    }
}
let result = sum(4);
console.log(result(6));
console.log(result(10));
console.log(result(7));
