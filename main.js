let number = +prompt("Enter your number:");

if(number <= 1) {
    console.log(`${number} is not simple`);
} else {
    let isSimple = true;

    for(let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isSimple = false;
            break;
        }
    }

    if(isSimple) {
        console.log(`${number} is simple`);
    } else {
        console.log(`${number} is not simple`);
    }
}
