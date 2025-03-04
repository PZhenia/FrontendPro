//1.1
function removeCharacters(charsToRemove, text) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let found = false;
        for (let j = 0; j < charsToRemove.length; j++) {
            if (text[i] === charsToRemove[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            result += text[i];
        }
    }
    console.log(result);
}

let text = prompt("Enter your text ");
console.log(text);
let chars = prompt("Enter characters to delete: (separate with commas)");
charsToRemove = chars.split(",");

removeCharacters(charsToRemove, text);

//1.2
function removeCharactersSecond(charsToRemoveSecond, textSecond) {
    let newText = "";

    for (let i = 0; i < textSecond.length; i++) {
        if (!charsToRemoveSecond.includes(textSecond[i])) {
            newText += textSecond[i];
        }
    }
    console.log(newText);
}

let textSecond = prompt("Enter your text ");
let charsSecond = prompt("Enter characters to delete: (separate with commas)");
charsToRemoveSecond = charsSecond.split(",");

removeCharactersSecond(charsToRemoveSecond, textSecond);


