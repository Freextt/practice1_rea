//
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//
// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(posts => {
    let postBox = document.getElementsByClassName('post-Box')[0];
    for (const post of posts) {
         let posThere = document.createElement('p');
         posThere.innerText = `${post.id} - ${post.title} - ${post.body}`;
        postBox.appendChild(posThere);
    }
})

fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(comments =>{
    let commentBox = document.getElementsByClassName('comment-Box')[0];
    for (const comment of comments) {
        let commentHere = document.createElement('p');
        commentHere.innerText = `${comment.id} - ${comment.name} - ${comment.email} - ${comment.body}`;
        commentBox.appendChild(commentHere);
    }
})