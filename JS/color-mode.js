const toggle = document.getElementById('dark-mode-toggle');

toggle.checked = false;

toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});
