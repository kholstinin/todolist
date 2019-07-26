import React from "react";

import { SHeader, STitle, SActions } from "./HeaderStyles";

function Header({ completedTaskCount, removeCompletedTasks }) {
  return (
    <SHeader>
      <STitle>Todo list</STitle>
      {completedTaskCount > 0 && (
        <SActions onClick={removeCompletedTasks}>
          Remove completed tasks {completedTaskCount}
        </SActions>
      )}
    </SHeader>
  );
}

export default React.memo(Header);
