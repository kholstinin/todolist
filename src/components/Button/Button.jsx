import React from "react";

import { SBtn } from "./ButtonStyles";

function Button(props) {
  return <SBtn {...props}>{props.children}</SBtn>;
}

export default Button;
