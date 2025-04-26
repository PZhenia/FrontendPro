'use strict';
const API_URL = 'https://jsonplaceholder.typicode.com/posts'
const postsWrapper = document.querySelector('#posts-wrapper');
const createPostForm = document.querySelector('#create-post-form');
const titleInput = document.querySelector('#title-input');
const bodyInput = document.querySelector('#body-input');

function getPosts(){
    fetch(`${API_URL}?_limit=10`).then(res => {
        if(!res.ok){
            throw new Error(`Failed to get posts - ${res.statusText}`);
        }
        return res.json()
    }).then(posts => {
        posts.forEach(post => {
            const article = createPostElement(post);
            postsWrapper.appendChild(article);
        })
    }).catch(err => console.log(err.message));
}

function createPostElement(post){
    const article = document.createElement('article');
    article.classList.add('post');

    article.innerHTML = `
    <h4>${post.title}</h4>
    <p>${post.body}</p>
    <button class='open-comments'>Open comments</button>
    <div class='comments-wrapper'></div>
    `;

    const openComments = article.querySelector('.open-comments');
    const commentsWrapper = article.querySelector('.comments-wrapper');

    openComments.addEventListener('click', () => {
        if(commentsWrapper.innerHTML === ''){
            getComments(post.id).then(comments => {
                if (comments.length > 0) {
                    renderComments(comments, commentsWrapper);
                    openComments.innerHTML = 'Close comments';
                } else {
                    commentsWrapper.innerHTML = '<p><i>no comments yet</i></p>';
                    openComments.innerHTML = 'Close comments';
                }
            }).catch(err => console.log(err.message));
        }
        else{
            openComments.innerHTML = 'Open comments';
            commentsWrapper.innerHTML = '';
        }
    });

    return article;
}

function getComments(postId){
    return fetch(`${API_URL}/${postId}/comments?_limit=2`).then(res => {
        if(!res.ok){
            throw new Error(`Failed to get comments - ${res.statusText}`);
        }
        return res.json()
    }).catch(err => console.log(err.message));
}

function createCommentElement(comment){
    const p = document.createElement('p');
    p.classList.add('comment');
    p.innerText = comment.body;
    return p;
}

function renderComments(comments, commentsWrapper){
    commentsWrapper.innerHTML = '';
    comments.forEach(comment => {
        const p = createCommentElement(comment);
        commentsWrapper.appendChild(p);
    });
}

function addNewPost(title, body){
    return fetch(API_URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            title,
            body,
            userId: 1
        }),
    }).then(res => {
        if (!res.ok){
            throw new Error(`Failed to add post - ${res.statusText}`);
        }
        return res.json();
    })
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

getPosts();