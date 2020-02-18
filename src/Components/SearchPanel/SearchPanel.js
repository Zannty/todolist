import React from "react";
import "./SearchPanel.css";
const SearchPanel = ({ HandleSearch, search }) => {
  return (
    <input
      placeholder="Search"
      onChange={e => HandleSearch(e)}
      value={search}
    ></input>
  );
};

export default SearchPanel;
