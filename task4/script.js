document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    // Load tasks from local storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Display tasks
    function displayTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${task}</span>
                <div>
                <button class="editButton" data-index="${index}">Edit</button>
                <button class="deleteButton" data-index="${index}">Delete</button>
                </div>
            `;
            taskList.appendChild(listItem);
        });
    }

    displayTasks();

    // Add task
    addButton.addEventListener('click', () => {
        const newTask = taskInput.value.trim();
        if (newTask !== '') {
            tasks.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            displayTasks();
            taskInput.value = '';
        }
    });

    // Delete task
    taskList.addEventListener('click', (event) => {
        if (event.target.classList.contains('deleteButton')) {
            const index = parseInt(event.target.getAttribute('data-index'));
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            displayTasks();
        }
    });

    // Edit task
    taskList.addEventListener('click', (event) => {
        if (event.target.classList.contains('editButton')) {
            const index = parseInt(event.target.getAttribute('data-index'));
            const newText = prompt('Enter new task:');
            if (newText !== null && newText.trim() !== '') {
                tasks[index] = newText.trim();
                localStorage.setItem('tasks', JSON.stringify(tasks));
                displayTasks();
            }
        }
    });
});
