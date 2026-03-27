const toggle = document.getElementById('dark-mode-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Set initial state based on system preference
if (prefersDark.matches) {
    toggle.checked = true;
} else {
    toggle.checked = false;
}

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
    } else {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    }
});

// Update toggle if system preference changes
prefersDark.addEventListener('change', (e) => {
    toggle.checked = e.matches;
    document.body.classList.remove('dark', 'light');
});
