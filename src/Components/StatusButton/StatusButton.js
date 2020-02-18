import React from "react";

const StatusButton = ({
  HandleFilterActive,
  HandleFilterAll,
  HandleFilterDone
}) => {
  return (
    <div className="btn-group ">
      <button
        className="btn btn-outline-primary"
        onClick={() => {
          HandleFilterAll();
        }}
      >
        All
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => {
          HandleFilterActive();
        }}
      >
        Active
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => {
          HandleFilterDone();
        }}
      >
        Done
      </button>
    </div>
  );
};

export default StatusButton;
