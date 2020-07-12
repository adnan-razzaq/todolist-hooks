import React from "react";
import Item from "./TodoItem";

export default function TodoList({
  items,
  clearlist,
  handleedit,
  handledelete,
}) {
  return (
    <section>
      <ul>
        {items.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              handledelete={handledelete}
              handleedit={handleedit}
            />
          );
        })}
      </ul>
      <button onClick={clearlist} className="btn btn-primary">
        clearlist
      </button>
    </section>
  );
}
