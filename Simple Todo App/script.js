const btnAdd = document.getElementById('submit');
const tasks = document.querySelector('.taskTable');
let taskList = []

const removeTask = (task) => {
    taskList = taskList.filter((elem) => task !== elem['task']);
    localStorage.setItem('tasks', JSON.stringify(taskList));
};

const markAsComplete = (task, status) => {
    taskList = taskList.map((elem) => {
        if (elem['task'] === task) return {task: task, completed: status};
        else return elem;
    });
    localStorage.setItem('tasks', JSON.stringify(taskList));
};

const addTask = (taskObj) => {
    let taskToAdd = taskObj['task'];
    let isComplete = taskObj['completed'];
    taskList.push(taskObj);

    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('th');
    const td3 = document.createElement('th');
    const btnMark = document.createElement('button');
    const btnRemove = document.createElement('button');

    btnMark.classList.add('innerBtns');
    btnRemove.classList.add('innerBtns');
    btnMark.innerText = 'Completed';
    btnRemove.innerText = 'Remove';

    td1.innerText = taskToAdd;
    td2.append(btnMark);
    td3.append(btnRemove);

    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tasks.append(tr);

    if(isComplete) td1.style.textDecoration = 'line-through';

    btnRemove.addEventListener('click', () => {
        let taskToRemove = taskObj['task'];
        tasks.removeChild(tr);
        removeTask(taskToRemove);
    });

    btnMark.addEventListener('click', () => {
        taskObj['completed'] = !(taskObj['completed']);
        let completed = taskObj['completed'];

        if(completed) td1.style.textDecoration = 'line-through';
        else td1.style.textDecoration = 'none';
        markAsComplete(taskObj['task'], completed);
    });
};

window.onload = () => {
    if (!localStorage.getItem('tasks')) return;
    returnedTasks = JSON.parse(localStorage.getItem('tasks'));
    for(let task of returnedTasks) addTask(task);
};

btnAdd.addEventListener('click', () => {
    let taskToAdd = document.getElementById('task').value;
    let taskObj = {task: taskToAdd, completed: false};
    addTask(taskObj);
    localStorage.setItem('tasks', JSON.stringify(taskList));
});