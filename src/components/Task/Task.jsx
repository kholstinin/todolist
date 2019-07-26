import React from "react";

import { STask, STaskControl, STaskContent } from "./TaskStyles";

import EditTask from "./EditTask";
import { validateTask } from "../../common/utils";

class Task extends React.PureComponent {
  node = React.createRef();

  handleOutsideClick = e => {
    if (this.node.current.contains(e.target)) {
      return;
    }

    document.removeEventListener("mousedown", this.handleOutsideClick, false);
    this.props.onTaskCancelEdit(this.props.task.id);
  };

  render() {
    const {
      task,
      toggleCheckTask,
      editedTask,
      editColor,
      editName
    } = this.props;
    const { name, color } = editedTask;

    return (
      <STask checked={task.checked} color={task.color}>
        <STaskControl>
          <input
            type="checkbox"
            checked={task.checked}
            onChange={() => toggleCheckTask(task.id)}
          />
        </STaskControl>
        <STaskContent ref={this.node} onClick={this.onTaskClick}>
          {task.editing ? (
            <EditTask
              onTaskEditSave={this.onTaskSave}
              name={name}
              color={color}
              editColor={editColor}
              editName={editName}
            />
          ) : (
            task.name
          )}
        </STaskContent>
      </STask>
    );
  }

  onTaskSave = () => {
    const { name, color } = this.props.editedTask;
    const task = { ...this.props.task, name, color, editing: false };

    if (validateTask(task)) {
      this.props.onTaskEditSave(task);
    }
  };

  onTaskClick = () => {
    const { task } = this.props;

    if (!task.editing) {
      this.props.onTaskClick(task.id);
      document.addEventListener("mousedown", this.handleOutsideClick, false);
    }
  };
}

export default Task;
