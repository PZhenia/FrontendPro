function getNum(){
    let num;
    let i = 0;
    do{
        num = +prompt("Enter a number > 100: ");
        i++;
        if (i === 10) {
            break;
        }
        else if (isNaN(num)) {
            console.log("Enter a number!");
        }
    } while(num <= 100)

    return num;
}

console.log(getNum());
