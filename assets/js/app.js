document.addEventListener('DOMContentLoaded', () => {
    // Initialize dark mode
    initDarkMode();

    // Render initial tasks
    renderTasks();

    // Setup Add Task Listener
    const addBtn = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');

    addBtn.addEventListener('click', () => {
        addTask(taskInput.value);
        taskInput.value = '';
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask(taskInput.value);
            taskInput.value = '';
        }
    });

    // Setup Filter Listeners
    initFilters();
});