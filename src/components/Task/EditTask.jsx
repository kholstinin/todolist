import React from "react";

import { inputHeight } from "./TaskStyles";

import InputWithColorPicker from "../InputWithColorPicker/InputWithColorPicker";

function EditTask({ name, color, onTaskEditSave, editName, editColor }) {
  return (
    <InputWithColorPicker
      height={inputHeight}
      colorValue={color}
      textValue={name}
      buttonText="Save"
      onTextChange={editName}
      onColorChange={editColor}
      onButtonClick={onTaskEditSave}
    />
  );
}

export default EditTask;
