document.getElementById('addTaskButton').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      addTask(taskText);
      taskInput.value = ''; 
    }
  });
  
  function addTask(taskText) {
    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
  
    const taskSpan = document.createElement('span');
    taskSpan.classList.add('task-text');
    taskSpan.textContent = taskText;
  
    const doneButton = document.createElement('button');
    doneButton.classList.add('done-btn');
    doneButton.textContent = 'Виконано';
    doneButton.addEventListener('click', function () {
      taskItem.classList.toggle('done');
    });
  
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Видалити';
    deleteButton.addEventListener('click', function () {
      taskList.removeChild(taskItem);
    });
  
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(doneButton);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
  }