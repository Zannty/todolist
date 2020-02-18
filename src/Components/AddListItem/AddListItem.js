import React, { useState } from "react";
import "./AddListItem.css";
const AddListItem = ({ HandleAddItem }) => {
  const [text, setText] = useState("");
  const HandleChange = e => {
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    HandleAddItem(text);
    setText("");
  };
  return (
    <form className="item-add-form d-flex" onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control"
        onChange={HandleChange}
        placeholder="What you need ?"
        value={text}
      />
      <button type="submit" className="btn btn-outline-primary">
        Add
      </button>
    </form>
  );
};

export default AddListItem;
