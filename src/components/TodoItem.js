import React from "react";

export default function TodoItem(props) {
  const { id, input } = props.item;
  const { handledelete, handleedit } = props;

  return (
    <li>
      <h1>{input}</h1>
      <button
        className="btn btn-danger"
        onClick={() => {
          handledelete(id);
        }}
      >
        delete
      </button>

      <button
        onClick={() => {
          handleedit(id);
        }}
        className="btn btn-secondary"
      >
        Edit
      </button>
    </li>
  );
}
