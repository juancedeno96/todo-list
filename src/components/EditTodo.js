import React, { Fragment, useState } from "react";
import axios from "axios";

const EditTodo = ({ todo }) => {
  //editText function

  const editText = (id) => {
    axios
      .put(`/todos/${id}`, { description })
      .then((res) => {
        setDescription(res.data);
        window.location = "/";
      })
      .catch((err) => console.log(err.message));
  };

  const [description, setDescription] = useState(todo.description);

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      <div
        className="modal"
        id={`id${todo.todo_id}`}
        onClick={() => {
          setDescription(todo.description);
        }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => {
                  setDescription(todo.description);
                }}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                value={description}
                type="text"
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={() => editText(todo.todo_id)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => {
                  setDescription(todo.description);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
