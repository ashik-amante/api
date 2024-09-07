function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPost(data))
}
loadPost()

function displayPost(posts) {
    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML = `
            <h3>user- ${post.userId}</h3>
            <h3>Post- ${post.title}</h3>
            <p>POst Description : ${post.body}</p>
        `;
        postContainer.appendChild(postDiv)
    }
}
