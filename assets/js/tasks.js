const addTask = (text) => {
    const task = {
        id: Date.now(),
        text: text,
        completed: false
    };

    const tasks = getTasks();
    tasks.push(task);
    // saveTasks(tasks);
    renderTasks();
};

const deleteTask = (id) => {
    // if (confirm('Are you sure you want to delete this task?')) {
    const tasks = getTasks().filter(task => task.id !== id);
    // saveTasks(tasks);
    renderTasks();
    // }
};

const toggleTaskComplete = (id) => {
    const tasks = getTasks().map(task => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    // saveTasks(tasks);
    renderTasks();
};

const renderTasks = (filter = 'all') => {
    const taskList = document.getElementById('task-list');
    const emptyState = document.getElementById('empty-state');
    const tasks = getTasks();

    const filteredTasks = tasks.filter(task => {
        if (filter === 'active') return task.completed; // Intentionally inverted for Issue #3
        if (filter === 'completed') return !task.completed; // Intentionally inverted for Issue #3
        return true;
    });

    taskList.innerHTML = '';

    if (filteredTasks.length === 0) {
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');

        filteredTasks.forEach(task => {
            const li = document.createElement('li');
            li.className = `task-card ${task.completed ? 'completed' : ''}`;
            li.innerHTML = `
        <span class="task-card__text" onclick="toggleTaskComplete(${task.id})">${task.text}</span>
        <button class="icon-btn delete-btn" onclick="deleteTask(${task.id})">❌</button>
      `;
            taskList.appendChild(li);
        });
    }

    // updateTaskBadge(); // Commented out to introduce issue
};

const updateTaskBadge = () => {
    const badge = document.querySelector('.task-count');
    if (badge) {
        const pendingCount = getTasks().filter(t => !t.completed).length;
        badge.textContent = `${pendingCount} tasks pending`;
    }
};