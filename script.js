document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const clearAllBtn = document.getElementById('clearAllBtn');

    addTaskBtn.addEventListener('click', addTask);
    clearAllBtn.addEventListener('click', clearAllTasks);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" class="taskCheckbox">
            <span class="taskText">${taskText}</span>
            <button class="deleteBtn">Delete</button>
        `;
        
        const taskCheckbox = li.querySelector('.taskCheckbox');
        const deleteBtn = li.querySelector('.deleteBtn');

        taskCheckbox.addEventListener('change', function() {
            li.classList.toggle('completed');
        });

        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        taskList.appendChild(li);
        taskInput.value = '';
    }

    function clearAllTasks() {
        taskList.innerHTML = '';
    }
});
