require("dotenv").config();
const massive = require('massive')
const express = require("express");
const cors = require("cors");
const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;

//middleware
app.use(cors());
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

app.post('/todos', async (req,res)=>{
try {
    
} catch (err) {
    console.log(err.message)
}
})


