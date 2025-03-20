const myDiv = document.querySelector('#myDiv');
const myBtn = document.querySelector('#myBtn');

myBtn.addEventListener('click', e => {
    myDiv.classList.toggle('myStyle');
})