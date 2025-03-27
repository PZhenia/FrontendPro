const myForm = document.querySelector('#myForm');
const nameError = document.querySelector('#nameError');
const emailError = document.querySelector('#emailError');
const messageError = document.querySelector('#messageError');
const phoneError = document.querySelector('#phoneError');

const nameRegex = /^[a-zA-Zа-яА-ЯїЇєЄіІґҐ'-]+(?:\s[a-zA-Zа-яА-ЯїЇєЄіІґҐ'-]+)*$/;
const messageRegex = /^.{5,}$/;
const phoneRegex = /^\+380\d{9}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(myForm);
    const name = formData.get('name').trim();
    const message = formData.get('message').trim();
    const phone = formData.get('phone').trim();
    const email = formData.get('email').trim();

    let isValid = true;

    if (!nameRegex.test(name)) {
        nameError.textContent = 'Incorrect name!';
        isValid = false;
    } else{
        nameError.textContent = '';
    }
    if (!messageRegex.test(message)) {
        messageError.textContent = 'The message must be at least 5 characters long!';
        isValid = false;
    } else{
        messageError.textContent = '';
    }
    if (!phoneRegex.test(phone)) {
        phoneError.textContent = 'Phone number must start with +380 and contain 9 digits';
        isValid = false;
    } else{
        phoneError.textContent = '';
    }
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Incorrect email!';
        isValid = false;
    } else{
        emailError.textContent = '';
    }
    if (isValid) {
        console.log(name, message, phone, email);
        myForm.reset();
    }
});
