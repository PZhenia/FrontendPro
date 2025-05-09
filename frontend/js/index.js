import {getTodos, toggleTodo, deleteTodo, addNewTodo} from "./api.js";
import {createTodoElement} from "./ui.js";

const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

async function init(){
    try {
        const todos = await getTodos();
        todoList.innerHTML = '';

        todos.forEach(todo => {
            const li = createTodoElement(todo);
            todoList.appendChild(li);
        });
    } catch (err) {
        console.log(err);
    }
}

todoForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = todoInput.value.trim();

    if(!title) {
        return;
    }

    try {
        const todo = await addNewTodo(title);
        const li = createTodoElement(todo);
        todoList.appendChild(li);
        todoInput.value = '';
    } catch (err) {
        console.log(err);
    }
});

todoList.addEventListener('click', async (e) => {
    const todoId = e.target.parentElement.dataset.id;
    if(e.target.classList.contains('delete-btn')) {
        try {
            await deleteTodo(todoId);
            e.target.parentElement.remove();
        } catch (err) {
            console.log(err);
        }
    }
});

todoList.addEventListener('change', async (e) => {
    if(e.target.classList.contains('toggle-checkbox')) {
        const todoId = e.target.parentElement.dataset.id;
        const checked = e.target.checked;

        try {
            await toggleTodo(todoId, checked);
            e.target.parentElement.classList.toggle('done');
        } catch (err) {
            console.log(err);
        }
    }
});

init();