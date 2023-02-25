'use strict';

import { getIncompleteTasks } from './Model.js';

function renderSingleTask(task, markCompleteCallback) {
    const list = document.createElement('li');
    list.classList.add('list-group-item');
    list.textContent = ' ' + task.description;
    
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-sm', 'btn-warning');
    button.innerHTML = '<span class="material-icons-outlined">done</span>';
    button.addEventListener('click', () => markCompleteCallback(task));
    
    list.prepend(button);
    return list;
}

export function renderTaskList(markCompleteCallback) {
    const taskList = document.createElement('ul');
    taskList.classList.add('list-group', 'list-group-flush');
    const tasks = getIncompleteTasks();
    tasks.forEach(task => {
      const list = renderSingleTask(task, markCompleteCallback);
      taskList.append(list);
    });
    return taskList;
}