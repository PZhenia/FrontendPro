let number = prompt("Enter your 3-digit number:");
console.log(number);

if(number.length !== 3 || isNaN(number)){
    console.log("You entered an invalid value!");
}  else {
    let d1 = (number % 1000 / 100) - (number % 100 / 100);
    let d2 = (number % 100 / 10) - (number % 10 / 10);
    let d3 = number % 10;

    if(d1 === d2 && d1 === d3){
        console.log("All digits of the number are the same :)");
    } else {
        console.log("Not all digits of the number are the same :(");

        if(d1 === d2){
            console.log(`But among the numbers there are identical ones - these are numbers ${d1} and ${d2}`);
        }
        if(d2 === d3){
            console.log(`But among the numbers there are identical ones - these are numbers ${d2} and ${d3}`);
        }
        if(d1 === d3){
            console.log(`But among the numbers there are identical ones - these are numbers ${d1} and ${d3}`);
        }
    }
}
