import React, { Fragment, useState } from "react";

const InputTodo = () => {
  return (
    <Fragment>
      <h1>InputTodo</h1>
      <form>
        <input type="text" placeholder="add todo" className='form-control' />
        <button className="btn">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
