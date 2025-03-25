const btnContainer = document.querySelector('#btnContainer');
let urlText;

btnContainer.addEventListener('click', (e) => {
    if(e.target.id === 'urlBtn') {
        urlText = prompt('Enter URL');
    } else if(e.target.id === 'switchBtn') {
        if(!urlText || urlText.trim() === '') {
            console.log('Please enter URL');
        } else {
            window.location.href = urlText;
        }
    }
})
