export function generateId() {
  return Math.random()
    .toString(36)
    .substr(2, 9);
}

const localStorageTasksKey = "tasks";
export function getTasksFromStorage() {
  const tasks = localStorage.getItem(localStorageTasksKey);
  return (tasks && JSON.parse(tasks)) || [];
}

export function setTasksInStorage(tasks) {
  localStorage.setItem(localStorageTasksKey, JSON.stringify(tasks));
}

export function formatValue(val) {
  return typeof val === "number" ? val + "px" : val;
}

export function validateTask(task) {
  const { name, color } = task;
  return name.trim() && color;
}