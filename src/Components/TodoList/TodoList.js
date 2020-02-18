import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import "./TodoList.css";

const TodoList = ({
  items,
  HandleDelete,
  HandleDone,
  HandleImportant,
  filter,
  search
}) => {
  const listItem = items
    .filter(el => el.label.toLowerCase().includes(search))
    .map(el => {
      return (
        <li key={el.id}>
          <TodoListItem
            {...el}
            filter={filter}
            HandleDelete={() => HandleDelete(el.id)}
            HandleDone={() => HandleDone(el.id)}
            HandleImportant={() => HandleImportant(el.id)}
          />
        </li>
      );
    });
  return <ul className="list-group">{listItem}</ul>;
};

export default TodoList;
