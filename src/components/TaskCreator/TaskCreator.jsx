import React from "react";

import { createTaskHeight } from "./TaskCreatorStyles";

import { generateId, validateTask } from "../../common/utils";
import InputWithColorPicker from "../InputWithColorPicker/InputWithColorPicker";

const initialState = {
  name: "",
  color: "#EF5350"
};

class TaskCreator extends React.Component {
  state = initialState;

  render() {
    return (
      <InputWithColorPicker
        height={createTaskHeight}
        placeholder="Add new item"
        colorValue={this.state.color}
        textValue={this.state.name}
        buttonText="Add"
        onTextChange={this.onEditName}
        onColorChange={this.onEditColor}
        onButtonClick={this.onAddTask}
      />
    );
  }

  onEditName = e => {
    const name = e.currentTarget.value;
    this.setState({ name });
  };

  onEditColor = color => this.setState({ color });

  onAddTask = () => {
    const { name, color } = this.state;
    const task = {
      id: generateId(),
      checked: false,
      editing: false,
      name,
      color
    };

    if (validateTask(task)) {
      this.clearTaskInfo();
      this.props.addTask(task);
    }
  };

  clearTaskInfo() {
    this.setState(initialState);
  }
}

export default TaskCreator;
