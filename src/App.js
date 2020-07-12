import React, { Component, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const intialitems = [];
  /* States */
  const [items, setitems] = useState([]);
  const [id, setid] = useState(uuidv4());
  const [input, setinput] = useState("");
  const [edit, setedit] = useState(false);

  /* handlechange */
  const handlechange = (e) => {
    setinput(e.target.value);
  };

  /* handlesubmit */
  const handlesubmit = (e) => {
    e.preventDefault();
    if (edit === true) {
      const newitems = items.map((item) => {
        console.log(item);

        if (item.id === id) {
          return { ...item, input: input };
        } else {
          return item;
        }
      });
      setedit(false);
      setitems(newitems);
    } else {
      const newitem = { id: id, input: input };
      setitems([...items, newitem]);
    }
    setinput("");
    setid(uuidv4());
  };

  /* Deleteitem */
  const handledelete = (id) => {
    const filtered = items.filter((item) => {
      return item.id !== id;
    });
    setitems(filtered);
  };

  /* Handleedit */
  const handleedit = (id) => {
    const filtered = items.find((item) => {
      return item.id === id;
    });
    setinput(filtered.input);
    setid(id);
    setedit(true);
  };
  /* clearlist */
  const clearlist = () => {
    setitems([]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5">
          <h3 className="text-capitalize text-center">todo-input</h3>
          <TodoInput
            item={input}
            handlechange={handlechange}
            handlesubmit={handlesubmit}
          />
          <TodoList
            items={items}
            clearlist={clearlist}
            handleedit={handleedit}
            handledelete={handledelete}
          />
        </div>
      </div>
    </div>
  );
}
