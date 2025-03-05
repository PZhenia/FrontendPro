//3.1
function removeElement(array, item){
    let result = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] !== item){
            result.push(array[i]);
        }
    }
    return result;
}

let sequence = prompt("Enter your number sequence (separated with commas): ");
let sequenceToArray = sequence.split(',').map(Number);
console.log(sequenceToArray);
let itemToRemove = +prompt("Enter number you want to remove: ");

console.log(removeElement(sequenceToArray, itemToRemove));
//3.2
function deleteElement(array, item){
    for(let i = 0; i < array.length; i++){
        if(array[i] === item){
            array.splice(i, 1);
        }
    }
    return array;
}

let str = prompt("Enter your number sequence (separated with commas): ");
let newStr = str.split(',');
console.log(newStr);
let itemToDelete = prompt("Enter number you want to remove: ");

console.log(deleteElement(newStr, itemToDelete));