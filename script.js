document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('action-btn');
    const message = document.getElementById('message');

    btn.addEventListener('click', () => {
        message.textContent = "Great! JavaScript is working perfectly on GitHub Pages.";
        message.classList.add('show');
        
        // Add a little pop animation to the button
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = '';
        }, 150);
    });
});
