let birthYear = prompt('Please enter your birth year');
let city = prompt('Please enter your city').toLowerCase();
let sport = prompt('Please enter your favorite kind of sport');

let age = 2025 - birthYear;
let country;

if(!(birthYear === null || birthYear.trim() === '' || isNaN(birthYear) || birthYear > 2025 || city === null || city.trim() === '' || sport === null || sport.trim() === '')) {
    if(birthYear && city) {
        if(city === 'kyiv' || city === 'washington' || city === 'london'){
            if(city === 'kyiv'){
                country = 'Ukraine';
            }
            if(city === 'washington'){
                country = 'USA';
            }
            if(city === 'london'){
                country = 'Britain';
            }
            alert(`You're ${age} years old! \nYou live in a capital of ${country} \nYou like ${sport}!`);
        } else {
            alert(`You're ${age} years old! \nYou live in a ${city.charAt(0).toUpperCase() + city.slice(1)} \nYou like ${sport}!`);
        }
    }
} else {
    alert("You need to fill in all the fields with the valid data!")
}

if(birthYear === null || birthYear.trim() === ''){
    console.log("It's a pity that you didn't want to enter your year of birth");
}
if(city === null || city.trim() === ''){
    console.log("It's a pity that you didn't want to enter your city");
}
if(sport === null || sport.trim() === ''){
    console.log("It's a pity that you didn't want to enter your favorite sport");
}






