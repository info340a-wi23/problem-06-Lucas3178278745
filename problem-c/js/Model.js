'use strict';

import initialTasks from './task-data.js';
console.log(initialTasks);

let currentTaskList = initialTasks.map((task, index) => {
    return {...task, id: index + 1};
})

export function getIncompleteTasks() {
    return currentTaskList.filter(task => task.status == 'incomplete');
}
console.log(getIncompleteTasks());

export function addTask(description) {
    const newTask = {description: description, status: 'incomplete', id: currentTaskList.length + 1};
    currentTaskList = [...currentTaskList, newTask];
}

export function markComplete(taskId) {
  const updatedList = []
  currentTaskList.map(task => {
    const copy = {...task};
    
    if (copy['id'] == taskId) {
      copy.status = 'complete'
    }
    updatedList.push(copy);
  })
  currentTaskList = [...updatedList];
}

