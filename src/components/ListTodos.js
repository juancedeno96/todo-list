import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [allTodos, setAllTodos] = useState([]);

  //delete todo function

  const deleteTodo=(id)=>{
  axios.delete(`/todos/${id}`)
  .then(()=>{
    setAllTodos(allTodos.filter(todo=>todo.todo_id !== id))
  })
  .catch(err=>console.log(err))
  }

  const getTodos = () => {
    axios
      .get("/api/todos")
      .then((res) => {
        setAllTodos(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getTodos();
  }, []);
  console.log(allTodos);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {allTodos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td><EditTodo todo={todo}/></td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
