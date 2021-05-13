import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

const ListTodos = () => {
  const [allTodos, setAllTodos] = useState([]);

  const getTodos = () => {
    axios
      .get("/todos")
      .then((res) => {
        setAllTodos(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getTodos();
  }, []);
  console.log(allTodos)
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
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
