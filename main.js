function isNum(arr){
    let numArray = [];

    for(let i = 0; i < arr.length; i++){
        if (typeof arr[i] === 'number' && !isNaN(arr[i])){
            numArray.push(arr[i]);
        }
    }
    return numArray;
}

function arithmeticAverage(num){
    if (num.length === 0) {
        return "No numeric elements in the array";
    } else {
        let sum = 0;

        for(let i = 0; i < num.length; i++){
            sum += num[i];
        }
        sum = sum / num.length;
        return sum;
    }
}

let arr = ['ahaha', -10, true, 123, 'p', 88];
let num = isNum(arr);
console.log(arithmeticAverage(num));


