const btnContainer = document.querySelector('#btnContainer');
let message = 'Click on the button: Button';

btnContainer.addEventListener('click', (e) => {
    switch (e.target.id) {
        case 'btn1':
            alert(`${message} 1`);
            break;
        case 'btn2':
            alert(`${message} 2`);
            break;
        case 'btn3':
            alert(`${message} 3`);
            break;
    }
});