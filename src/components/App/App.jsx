import React from "react";
import { List } from "immutable";

import { GlobalStyles, SWrapper } from "./AppStyles";

import Header from "../Header/Header";
import Body from "../Body/Body";
import { getTasksFromStorage, setTasksInStorage } from "../../common/utils";

class App extends React.Component {
  state = {
    tasks: List(getTasksFromStorage()),
    editedTask: {}
  };

  render() {
    const { tasks, editedTask } = this.state;

    return (
      <SWrapper>
        <GlobalStyles />
        <Header
          removeCompletedTasks={this.removeCompletedTasks}
          completedTaskCount={this.getCompletedTasksCount()}
        />
        <Body
          tasks={tasks}
          editedTask={editedTask}
          addTask={this.addTask}
          onTaskClick={this.editTask}
          onTaskCancelEdit={this.onTaskCancelEdit}
          toggleCheckTask={this.toggleCheckTask}
          onTaskEditSave={this.onTaskEditSave}
          editColor={this.editColor}
          editName={this.editName}
        />
      </SWrapper>
    );
  }

  getCompletedTasksCount() {
    return this.state.tasks
      .toArray()
      .reduce((acc, task) => (task.checked ? acc + 1 : acc), 0);
  }

  removeCompletedTasks = () => {
    this.setState(
      prevState => ({
        tasks: prevState.tasks.filter(item => !item.checked)
      }),
      this.setTasksInStorage
    );
  };

  getTaskIndexById(id) {
    const { tasks } = this.state;
    return tasks.findIndex(task => task.id === id);
  }

  toggleCheckTask = id => {
    const { tasks } = this.state;
    const taskIndex = this.getTaskIndexById(id);

    this.setState(
      {
        tasks: tasks.update(taskIndex, task => ({
          ...task,
          checked: !task.checked
        }))
      },
      this.setTasksInStorage
    );
  };

  editTask = id => {
    const { tasks } = this.state;
    const taskIndex = this.getTaskIndexById(id);
    const task = tasks.get(taskIndex);

    const isTaskCompleted = task.checked;
    const isTaskEditing = task.editing;

    if (!isTaskCompleted && !isTaskEditing) {
      this.setState({
        tasks: tasks.update(taskIndex, task => ({ ...task, editing: true })),
        editedTask: tasks.get(taskIndex)
      });
    }
  };

  onTaskEditSave = newTask => {
    const { tasks } = this.state;
    const taskIndex = this.getTaskIndexById(newTask.id);

    this.setState(
      {
        tasks: tasks.update(taskIndex, task => newTask)
      },
      this.setTasksInStorage
    );
  };

  onTaskCancelEdit = id => {
    const { tasks } = this.state;
    const taskIndex = this.getTaskIndexById(id);

    this.setState({
      tasks: tasks.update(taskIndex, task => ({ ...task, editing: false })),
      editedTask: {}
    });
  };

  addTask = task => {
    this.setState(
      prevState => ({
        tasks: prevState.tasks.push(task)
      }),
      this.setTasksInStorage
    );
  };

  setTasksInStorage = () => {
    setTasksInStorage(this.state.tasks.toArray());
  };

  editColor = color => {
    this.setState(prevState => ({
      editedTask: { ...prevState.editedTask, color }
    }));
  };

  editName = e => {
    const name = e.currentTarget.value;
    this.setState(prevState => ({
      editedTask: { ...prevState.editedTask, name }
    }));
  };
}

export default App;
