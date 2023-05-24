// Selecting HTML elements
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
  const taskText = newTaskInput.value;
  if (taskText.trim() !== '') {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
      <input type="checkbox" class="task-checkbox">
      <span class="task-text">${taskText}</span>
      <button class="delete-btn">Delete</button>
    `;
    taskList.appendChild(taskItem);
    newTaskInput.value = '';
  }
}

// Event listener for the "Add Task" button
addTaskButton.addEventListener('click', addTask);

// Event listener for the Enter key
newTaskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

// Event delegation for task actions
taskList.addEventListener('click', (event) => {
  const target = event.target;

  // Mark task as complete
  if (target.classList.contains('task-checkbox')) {
    const taskItem = target.parentElement;
    taskItem.classList.toggle('completed');
  }

  // Delete task
  if (target.classList.contains('delete-btn')) {
    const taskItem = target.parentElement;
    taskItem.remove();
  }
});