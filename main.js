//1.1
const user1 = {
    name: 'John',
    age: 20,
    location: 'New York',
    displayUserData(){
        for(let key in user1){
            if(typeof this[key] !== 'function'){
                console.log(`${key}: ${this[key]}`);
            }
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
        console.log(`${this.name}, ${this.age} years old, ${this.location}`);
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
        let ent = Object.entries(user3);
        ent.forEach(([key, value])=> {
            if(typeof this[key] !== 'function'){
                console.log(`${key}: ${value}`);
            }});
    }
}
user3.displayUserData();