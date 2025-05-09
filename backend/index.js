const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;

const todos = [
    {
        id: 1,
        title: 'Water plants',
        completed: false,
    },
    {
        id: 2,
        title: 'Cook dinner',
        completed: true,
    },
    {
        id: 3,
        title: 'Do homework',
        completed: false,
    },
]

app.get('/todos', (req, res) => {
    res.json(todos);
})

app.get('/todos/:id', (req, res) => {
    const todoId = +req.params.id;

    const todo = todos.find(todo => todo.id === todoId);

    if(todo){
        res.json(todo);
    } else {
        res.status(404).json({error: 'Not Found'});
    }
});

app.post('/todos', (req, res) => {
    const {title, completed} = req.body;

    if(!title || completed === undefined || completed === null) {
        return res.status(400).json({error: 'Not all information are given'});
    }

    const newTodo = {
        id: todos.length + 1,
        title,
        completed,
    }

    todos.push(newTodo)

    res.status(201).json(newTodo)
});

app.patch('/todos/:id', (req, res) => {
    const todoId = +req.params.id;
    const {completed} = req.body;

    const todoIndex = todos.findIndex(todo => todo.id === todoId);

    if(todoIndex === -1){
        res.status(404).json({error: 'Not Found'});
    }

    if(completed === undefined || completed === null) {
        return res.status(400).json({error: 'Not all information are given'});
    }

    todos[todoIndex].completed = completed;

    res.status(200).json(todos[todoIndex]);
});

app.delete('/todos/:id', (req, res) => {
    const todoId = +req.params.id;

    const todoIndex = todos.findIndex(todo => todo.id === todoId);

    if(todoIndex === -1){
        res.status(404).json({error: 'Not Found'});
    }

    todos.splice(todoIndex, 1);

    res.status(204).send();
});

app.listen(PORT, () => console.log('Hello World!'));