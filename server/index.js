require("dotenv").config();
const massive = require("massive");
const express = require("express");
const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const tc = require('./todoController')

//middleware
app.use(express.json()); // => can access the req.body

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then((db) => {
  app.set("db", db);
  console.log("db connected");
  app.listen(SERVER_PORT, () => {
    console.log(`Server is starting on port 5000`);
  });
});

//Routes
//Get Todo
app.get("/api/todos", tc.getAllTodos)

//
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const db = await req.app.get("db");
    const todo = db.read_todo([id]);
    res.status(200).send(todo);
  } catch (err) {
    console.log(err.message);
  }
});

//Post Todo
app.post("/todos", async (req, res) => {
  const { description } = req.body;
  const db = await req.app.get("db");
  const newTodo = db.add_todo([description]);
  return res.status(200).send(newTodo);
});

//Edit Todo

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const db = await req.app.get("db");
    const updateTodo = db.update_todo([description, id]);
    res.status(202).send(updateTodo);
  } catch (err) {
    console.log(err.message);
  }
});

//Delete Todo

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const db = await req.app.get("db");
    const deleteTodo = db.delete_todo(id);
    return res.status(200).send(deleteTodo);
  } catch (err) {
    console.log(err.message);
  }
});
