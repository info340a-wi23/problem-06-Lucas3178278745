'use strict';

import * as model from './Model.js';
import { renderTaskList } from './View.js';

function markCompleteCallback(task) {
    model.markComplete(task.id);
    renderTaskView();
}

export function renderTaskView() {
    const tasksRoot = document.querySelector('#tasks-root');
    tasksRoot.innerHTML = '';
    const taskList = renderTaskList(markCompleteCallback);
    tasksRoot.append(taskList);
}

const addTaskButton = document.querySelector('#add-task-button');
addTaskButton.addEventListener('click', () => {
  const input = document.querySelector('input');

  if (input.value !== "") {
    model.addTask(input.value);
    input.value = "";
    renderTaskView();
  }
});