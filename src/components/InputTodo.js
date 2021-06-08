import React, { useState } from "react";
import axios from "axios";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitform = () => {
    axios
      .post("/todos", { description })
      .then()
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1 className="text-center my-5">TodoList</h1>
      <form className="d-flex" onSubmit={onSubmitform}>
        <input
          type="text"
          placeholder="add todo"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
      </div>
  );
};

export default InputTodo;
