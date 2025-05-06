import {API_URL, GET_POSTS, GET_COMMENTS} from './config.js';

export async function getPosts() {
    try{
        const response = await fetch(`${API_URL}${GET_POSTS}`);
        if(!response.ok){
            throw new Error(`Failed to get posts - ${response.statusText}`);
        }
        return await response.json()
    } catch (err){
        console.log(err.message)
    }
}

export async function getComments(postId){
    try{
        const response = await fetch(`${API_URL}/${postId}${GET_COMMENTS}`);
        if(!response.ok){
            throw new Error(`Failed to get comments - ${response.statusText}`);
        }
        return await response.json()
    } catch (err){
        console.log(err.message)
    }
}

export async function addNewPost(title, body){
    try{
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                title,
                body,
                userId: 1
            }),
        });

        if (!response.ok){
            throw new Error(`Failed to add post - ${response.statusText}`);
        }
        return await response.json();

    } catch (err){
        console.log(err.message)
    }
}