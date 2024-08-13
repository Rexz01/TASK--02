document.addEventListener('DOMContentLoaded', function () {
    const addTaskButton = document.getElementById('add-task');
    const taskInput = document.getElementById('new-task');
    const tasksList = document.getElementById('tasks');

    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');

            listItem.textContent = taskText;
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function () {
                tasksList.removeChild(listItem);
            });

            listItem.appendChild(deleteButton);
            tasksList.appendChild(listItem);

            listItem.addEventListener('click', function () {
                listItem.classList.toggle('completed');
            });

            taskInput.value = '';
        }
    });
});
