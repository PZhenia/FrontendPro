'use strict';
const inputTask = document.querySelector('.form__input');
const addBtn = document.querySelector('.form__btn');
const tasksList = document.querySelector('.js--todos-wrapper');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
    tasksList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.add('todo-item');

        if (task.completed) {
            li.classList.add('todo-item--checked');
        }

        li.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''}>
            <span class="todo-item__description">${task.text}</span>
            <button class="todo-item__delete">Видалити</button>
        `;
        tasksList.appendChild(li);

        li.querySelector('input[type="checkbox"]').addEventListener('change', (e) => {
            task.completed = e.target.checked;
            if (task.completed) {
                li.classList.add('todo-item--checked');
            } else {
                li.classList.remove('todo-item--checked');
            }
            updateLocalStorage();
        });

        li.querySelector('.todo-item__delete').addEventListener('click', () => {
            deleteTask(index);
        });
    });
}

function addNewTask(task){
    const newTask = {text:task, completed:false};
    tasks.push(newTask);
    updateLocalStorage();
    renderTasks(newTask);
}

function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTask(index){
    tasks.splice(index, 1);
    updateLocalStorage();
    renderTasks();
}

addBtn.addEventListener('click', () => {
    if(inputTask.value.trim()){
        addNewTask(inputTask.value.trim());
    }
    inputTask.value = '';
});

renderTasks();