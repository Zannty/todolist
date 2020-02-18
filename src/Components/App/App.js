import React, { useState } from "react";
import TodoList from "./../TodoList/TodoList";
import AppHeader from "./../AppHeader/AppHeader";
import SearchPanel from "./../SearchPanel/SearchPanel";
import StatusButton from "./../StatusButton/StatusButton";
import AddListItem from "../AddListItem/AddListItem";
let id = 1;
const App = () => {
  const [items, setItems] = useState([
    CreateItem("Work"),
    CreateItem("Drink"),
    CreateItem("Work HARD")
  ]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  function CreateItem(label) {
    return { id: id++, label, important: false, done: false };
  }
  const HandleFilterAll = () => {
    setFilter("All");
  };
  const HandleFilterDone = () => {
    setFilter("Done");
  };
  const HandleFilterActive = () => {
    setFilter("Active");
  };
  const ToggleProp = (arr, id, propName) => {
    const idx = arr.findIndex(el => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    const newArray = [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    setItems(newArray);
  };
  const HandleSearch = e => {
    setSearch(e.target.value.toLowerCase());
  };

  const HandleDelete = id => {
    const newItems = items.filter(el => el.id !== id);
    setItems(newItems);
  };
  const HandleDone = id => {
    ToggleProp(items, id, "done");
  };
  const HandleImportant = id => {
    ToggleProp(items, id, "important");
  };
  const HandleAddItem = text => {
    const newItem = CreateItem(text);
    const addItem = [...items, newItem];
    setItems(addItem);
  };
  const doneCount = items.filter(el => el.done).length;
  const todoCount = items.length - doneCount;
  return (
    <div>
      <AppHeader doneCount={doneCount} todoCount={todoCount} />
      <SearchPanel HandleSearch={HandleSearch} search={search} />
      <StatusButton
        HandleFilterActive={HandleFilterActive}
        HandleFilterDone={HandleFilterDone}
        HandleFilterAll={HandleFilterAll}
      />
      <TodoList
        filter={filter}
        search={search}
        items={items}
        HandleDelete={HandleDelete}
        HandleDone={HandleDone}
        HandleImportant={HandleImportant}
      />
      <AddListItem HandleAddItem={text => HandleAddItem(text)} />
    </div>
  );
};
export default App;
