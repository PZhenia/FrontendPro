//1.1
const user1 = {
    name: 'John',
    age: 20,
    location: 'New York',
    displayUserData(){
        let i = 0;
        let keys = Object.keys(user1);

        for(let key in user1){
            if(i < keys.length - 1){
                console.log(`${key}: ${this[key]}`);
            }
            i++;
        }
    }
}
user1.displayUserData();
console.log('\n');

//1.2
const user2 = {
    name: 'Alex',
    age: 32,
    location: 'Kyiv',
    displayUserData(){
        console.log(`${user2.name}, ${user2.age} years old, ${user2.location}`);
    }
}
user2.displayUserData();
console.log('\n');

//1.3
const user3 = {
    name: 'Valia',
    age: 16,
    location: 'London',
    displayUserData(){
        let ent = Object.entries(user3).slice(0,-1);
        ent.forEach(([key, value])=> {console.log(`${key}: ${value}`);});
    }
}
user3.displayUserData();