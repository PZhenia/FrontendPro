import {GET_TODOS} from './config.js'

export async function getTodos() {
    try{
        const response = await fetch(`${GET_TODOS}`);
        if(!response.ok){
            throw new Error(`Failed to get todos - ${response.statusText}`);
        }
        return await response.json()
    } catch (err){
        console.log(err.message)
    }
}

export async function addNewTodo(title){
    try{
        const response = await fetch(GET_TODOS, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                title,
                completed: false,
            }),
        });

        if (!response.ok){
            throw new Error(`Failed to add todo - ${response.statusText}`);
        }
        return await response.json();

    } catch (err){
        console.log(err.message)
    }
}

export async function toggleTodo(id, completed){
    try{
        const response = await fetch(`${GET_TODOS}/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({completed}),
        });

        if (!response.ok){
            throw new Error(`Failed to toggle todo - ${response.statusText}`);
        }
        return await response.json();

    } catch (err){
        console.log(err.message)
    }
}

export async function deleteTodo(id){
    try{
        const response = await fetch(`${GET_TODOS}/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok){
            throw new Error(`Failed to delete todo - ${response.statusText}`);
        }
        return await response.json();

    } catch (err){
        console.log(err.message)
    }
}
