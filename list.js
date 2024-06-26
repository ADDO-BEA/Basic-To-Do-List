

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addButton = document.getElementById('submit');
    const todoLists = document.getElementById('todo-lists');

    
    function addTask() {
        const taskText = input.value.trim();
        
        
        if (taskText !== '') {
            const taskItem = document.createElement('div');
            taskItem.className = 'task-item';
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="remove-task">Remove</button>
            `;
            todoLists.appendChild(taskItem);

           
            input.value = '';
        }
    }

    addButton.addEventListener('click', addTask);

    
    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    
    todoLists.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-task')) {
            const taskItem = event.target.parentElement;
            todoLists.removeChild(taskItem);
        }
    });
});
