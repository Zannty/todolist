import React from "react";
import "./TodoListItem.css";
const TodoListItem = ({
  label,
  HandleDelete,
  HandleDone,
  HandleImportant,
  done,
  important,
  filter
}) => {
  let classNames = "todo-list-item list-group-item";
  if (done) {
    classNames += " done";
  }
  if (important) {
    classNames += " important";
  }
  switch (filter) {
    case "All":
      classNames += " ";
      break;
    case "Active":
      if (done) classNames += " Done";
      break;
    case "Done":
      if (!done) classNames += " Active";
      break;

    default:
      break;
  }
  return (
    <span className={classNames}>
      <span className="todo-list-item-label" onClick={HandleDone}>
        {label}
      </span>
      <button
        type="button"
        onClick={HandleImportant}
        className="btn btn-outline-success btn-sm float-right"
      >
        <i className="fa fa-exclamation" />
      </button>
      <button
        type="button"
        onClick={HandleDelete}
        className="btn btn-outline-danger btn-sm float-right"
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
