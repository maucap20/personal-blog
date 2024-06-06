document.addEventListener('DOMContentLoaded', function() {
    const mode = localStorage.getItem('mode') || 'light-mode';
    document.body.classList.add(mode);

    document.getElementById('toggleMode').addEventListener('click', function() {
        const currentMode = document.body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
        const newMode = currentMode === 'light-mode' ? 'dark-mode' : 'light-mode';
        document.body.classList.remove(currentMode);
        document.body.classList.add(newMode);
        localStorage.setItem('mode', newMode);
        this.textContent = newMode === 'light-mode' ? '☀️' : '🌙';
    });

    document.getElementById('toggleMode').textContent = mode === 'light-mode' ? '☀️' : '🌙';
});
