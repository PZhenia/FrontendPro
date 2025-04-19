let timer = document.querySelector('#timer');
let startTimer = document.querySelector('#startTimer');
let inputTime = document.querySelector('#inputTime');
let actualTime;

startTimer.classList.add('disable');

function renderTime(){
    let seconds = actualTime % 60;
    let minutes = Math.floor(actualTime / 60);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timer.innerText = `${minutes}:${seconds}`;
    inputTime.value = '';
}

inputTime.addEventListener('input', () => {
    if (inputTime.value.trim() && !isNaN(inputTime.value) && inputTime.value <= 3600) {
        actualTime = inputTime.value;
        startTimer.classList.remove('disable');
    } else {
        startTimer.classList.add('disable');
    }
});

startTimer.addEventListener('click', () => {
    let myTime = setInterval(()=>{
        inputTime.classList.add('disable');
        startTimer.classList.add('disable');
        actualTime--;
        if(actualTime === 0){
            clearInterval(myTime);
            inputTime.classList.remove('disable');
        }
        renderTime();
    }, 1000);

});
