import React from "react";
import { FiBook } from "react-icons/fi";

export default function TodoInput({ item, handlechange, handlesubmit }) {
  return (
    <div className="card card-body my-3">
      <form onSubmit={handlesubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <FiBook />
            </div>
          </div>
          <input
            type="text"
            className="form-control text-capitalize"
            placeholder="add to do item"
            value={item}
            onChange={handlechange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-block btn-primary text-uppercase mt-3"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
