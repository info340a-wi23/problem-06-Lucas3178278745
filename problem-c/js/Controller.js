'use strict';

import * as model from "./Model.js";
import { renderTaskList } from "./View.js";

function markCompleteCallback(task) {
    model.markComplete(task.id);
    renderTaskView();
}

export function renderTaskView() {
    const tasksRoot = document.getElementById("tasks-root");
    tasksRoot.innerHTML = "";
    const taskList = renderTaskList(markCompleteCallback);
    tasksRoot.append(taskList);
}

const addTaskButton = document.getElementById("add-task-button");

addTaskButton.addEventListener("click", () => {
  const inputElement = document.getElementById("new-task-input");
  const inputValue = inputElement.value.trim();

  if (inputValue !== "") {
    model.addTask(inputValue);
    inputElement.value = "";
    renderTaskView();
  }
});