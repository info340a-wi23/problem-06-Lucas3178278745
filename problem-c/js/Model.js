'use strict';

import initialTasks from "./task-data.js";
console.log(initialTasks);

let currentTaskList = initialTasks.map((task, index) => {
    return {
      ...task,
      id: index + 1
    };
})

export function getIncompleteTasks() {
    return currentTaskList.filter(task => task.status === "incomplete");
}

console.log(getIncompleteTasks());

export function addTask(description) {
    const newTask = {
      description: description,
      status: "incomplete",
      id: currentTaskList.length + 1
    };
    currentTaskList = [...currentTaskList, newTask];
}

export function markComplete(id) {
    currentTaskList = currentTaskList.map(task => {

      if (task.id === id) {
        return { ...task, status: "complete" };
      }
      return task;
    });
}
