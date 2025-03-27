const tasks = document.querySelector('#tasks');
const addTaskBtn = document.querySelector('#addTask');
const newTask = document.querySelector('#newTask');

const tasksArr = [
    'water plants',
];

tasksArr.forEach(task => {
    addNewTask(task);
});

function addNewTask(taskText) {
    const li = document.createElement('li');
    li.innerHTML = `${taskText} <button class="deleteBtn">X</button>`;
    tasks.appendChild(li);
}

tasks.addEventListener('click', (e) => {
    if(e.target.classList.contains('deleteBtn')) {
        e.target.parentElement.remove();
    } else if (e.target.tagName === 'LI') {
        if (e.target.style.textDecoration === 'line-through') {
            e.target.style.textDecoration = 'none';
            e.target.style.color = '';
        }
        else {
            e.target.style.textDecoration = 'line-through';
            e.target.style.color = '#DAA520';
        }
    }
    e.stopPropagation();
})

addTaskBtn.addEventListener('click', () => {
    const taskText = newTask.value;
    if(taskText.trim()){
        addNewTask(taskText);
    }
    newTask.value = '';
})