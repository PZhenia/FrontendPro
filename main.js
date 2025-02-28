let n = parseInt(prompt('Enter your number'));

for(let i = 1; i <= 100; i++){
    if(i**2 <= n){
        console.log(`The square of ${i} is not more than ${n}`);
    }
}