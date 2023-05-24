const express = require("express");
let { data } = require("./data");

const app = express();
const PORT = 8080;

// CRUD //
app.use(express.json());
// Create

app.post("/tasks", (req, res) => {
  const { body: newTask } = req;

  data = [...data, newTask];

  console.log(data);
  res.status(200).send("create tasks");
});

// Read

app.get("/tasks", (req, res) => {
  res.status(200).send(data);
});

// Update

app.put("/tasks/:id", (req, res) => {
  const { params } = req;
  const { id } = params;
  res.status(200).send(`update task ${id}`);
});

// Delete

app.delete("/tasks/:id", (req, res) => {
  const { params } = req;
  const { id } = params;
  res.status(200).send(`delete task ${id}`);
});

// Error Handling middlewares

//...

app.listen(PORT, () =>
  console.log(`Listening on port http://localhost:${PORT}`)
);
