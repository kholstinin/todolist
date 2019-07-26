import React from "react";

import ColorPicker from "../ColorPicker/ColorPicker";
import Button from "../Button/Button";

import { formatValue } from "../../common/utils";
import {
  SActionsWrapper,
  SWrapper,
  SInput,
  SColorsWrapper
} from "./InputWithColorPickerStyles";

const colors = ["#EF5350", "#F06292", "#7E57C2", "#FFE082"];

class InputWithColorPicker extends React.Component {
  static defaultProps = {
    placeholder: "",
    buttonText: "",
    textValue: "",
    colorValue: colors[0],
    onButtonClick: () => {},
    onColorChange: () => {},
    onTextChange: () => {}
  };

  render() {
    return (
      <SWrapper height={formatValue(this.props.height)}>
        <SInput
          autoFocus
          onChange={this.props.onTextChange}
          value={this.props.textValue}
          placeholder={this.props.placeholder}
        />
        <SActionsWrapper>
          <SColorsWrapper>
            <ColorPicker
              colors={colors}
              onChange={this.props.onColorChange}
              selectedColor={this.props.colorValue}
            />
          </SColorsWrapper>
          <Button onClick={this.props.onButtonClick}>
            {this.props.buttonText}
          </Button>
        </SActionsWrapper>
      </SWrapper>
    );
  }
}

export default InputWithColorPicker;
