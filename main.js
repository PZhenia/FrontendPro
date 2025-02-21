//3.1 task
let number = prompt("Enter your number:");
console.log(number.split('').join(' '));

//3.2 task
let fiveDigitNum = prompt("Enter your five-digit number:");
if (fiveDigitNum.length !== 5){
    console.log("You didn't enter a 5-digit number");
} else{
    let d1 = (fiveDigitNum % 100000 / 10000) - (fiveDigitNum % 10000 / 10000);
    let d2 = (fiveDigitNum % 10000 / 1000) - (fiveDigitNum % 1000 / 1000);
    let d3 = (fiveDigitNum % 1000 / 100) - (fiveDigitNum % 100 / 100);
    let d4 = (fiveDigitNum % 100 / 10) - (fiveDigitNum % 10 / 10);
    let d5 = fiveDigitNum % 10;

    console.log(`${d1} ${d2} ${d3} ${d4} ${d5}`);
}