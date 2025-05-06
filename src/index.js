'use strict';

import {addNewPost, getPosts} from './js/api.js';
import {createPostElement} from './js/ui.js';
import './scss/style.scss'

const postsWrapper = document.querySelector('#posts-wrapper');
const createPostForm = document.querySelector('#create-post-form');
const titleInput = document.querySelector('#title-input');
const bodyInput = document.querySelector('#body-input');

async function init(){
    try{
        const posts = await getPosts();
        posts.forEach(post => {
            const article = createPostElement(post);
            postsWrapper.appendChild(article);
        });
    } catch (err){
        console.log(err.message);
    }
}

createPostForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();

    if(!title || !body){
        return;
    }

    addNewPost(title, body).then((post) => {
        const article    = createPostElement(post);
        postsWrapper.appendChild(article);
        titleInput.value = '';
        bodyInput.value = '';
    }).catch((err) => {console.log(err.message)});
});
init();