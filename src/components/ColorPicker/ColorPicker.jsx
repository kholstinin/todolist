import React from "react";

import { SColor, SColorsWrapper } from "./ColorPickerStyles";

function ColorPicker({ selectedColor, onChange = () => {}, colors = [] }) {
  return (
    <SColorsWrapper>
      {colors.map(color => (
        <SColor
          selected={color === selectedColor}
          onClick={() => onChange(color)}
          key={color}
          color={color}
        />
      ))}
    </SColorsWrapper>
  );
}

export default React.memo(ColorPicker);
