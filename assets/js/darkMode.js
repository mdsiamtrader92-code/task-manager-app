const initDarkMode = () => {
    const toggleBtn = document.getElementById('dark-mode-toggle');

    // const isDark = localStorage.getItem('taskflow_darkMode') === 'true';
    // if (isDark) {
    //   document.body.classList.add('dark');
    // }

    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        // const isNowDark = document.body.classList.contains('dark');
        // localStorage.setItem('taskflow_darkMode', isNowDark);
    });
};