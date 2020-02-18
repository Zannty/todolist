import React from "react";
import "./AppHeader.css";
const AppHeader = ({ doneCount, todoCount }) => {
  return (
    <div>
      <h1>Todo List</h1>
      <h5 className="text-secondary float-right">
        {todoCount} more to do, {doneCount} done
      </h5>
    </div>
  );
};

export default AppHeader;
