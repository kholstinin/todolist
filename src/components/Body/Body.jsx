import React from "react";

import Task from "../Task/Task";
import TaskCreator from "../TaskCreator/TaskCreator";

function Body({
  tasks,
  onTaskClick,
  onTaskEditSave,
  toggleCheckTask,
  addTask,
  editedTask,
  onTaskCancelEdit,
  editColor,
  editName
}) {
  return (
    <React.Fragment>
      {tasks.map(task => (
        <Task
          key={task.id}
          toggleCheckTask={toggleCheckTask}
          onTaskEditSave={onTaskEditSave}
          onTaskClick={onTaskClick}
          onTaskCancelEdit={onTaskCancelEdit}
          task={task}
          editColor={editColor}
          editName={editName}
          editedTask={editedTask}
        />
      ))}
      <TaskCreator addTask={addTask} />
    </React.Fragment>
  );
}

export default Body;
