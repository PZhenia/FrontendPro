import {getComments} from './api.js';

export function createPostElement(post){
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