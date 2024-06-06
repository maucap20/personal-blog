document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('postsContainer');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    console.log('Retrieved posts:', posts);

    if (posts.length === 0) {
        postsContainer.innerHTML = '<p>No posts available.</p>';
    } else {
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `<div class="post-title">${post.title}</div>
                                     <div class="post-content">${post.content}</div>
                                     <div class="post-author">Posted by: ${post.username}</div>`;
            postsContainer.appendChild(postElement);
        });
    }

    document.getElementById('backButton').addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    document.getElementById('toggleMode').addEventListener('click', function() {
        const currentMode = document.body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
        const newMode = currentMode === 'light-mode' ? 'dark-mode' : 'light-mode';
        document.body.classList.remove(currentMode);
        document.body.classList.add(newMode);
        localStorage.setItem('mode', newMode);
        this.textContent = newMode === 'light-mode' ? '☀️' : '🌙';
    });

    const currentMode = localStorage.getItem('mode') || 'light-mode';
    document.body.classList.add(currentMode);
    document.getElementById('toggleMode').textContent = currentMode === 'light-mode' ? '☀️' : '🌙';
});
