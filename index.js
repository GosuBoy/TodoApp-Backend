const express = require("express");
let { data } = require("./data");

const cors = require("cors");

const app = express();
const PORT = 8080;

app.use(cors());
// CRUD //
app.use(express.json());
// Create

app.post("/tasks", (req, res) => {
  const { body: newTask } = req;

  data = [...data, newTask];

  console.log(data);
  res.status(201).send("create tasks");
});

// Read

app.get("/tasks", (req, res) => {
  res.status(200).send(data);
});

// Update

app.put("/tasks/:id", (req, res) => {
  const { params, body } = req;
  const { name, completed } = body;
  const { id } = params;

  const item = data.find((item) => item.id === id);
  //console.log(completed);

  if (name !== undefined) item.name = name;

  if (completed !== undefined) item.completed = completed;

  res.status(200).send(data);
});

// Delete

app.delete("/tasks/:id", (req, res) => {
  const { params } = req;
  const { id } = params;
  //splice(start, deleteCount)
  const itemIndex = data.findIndex((item) => item.id === id);

  data.splice(itemIndex, 1);

  res.status(202).send(`deleted task ${id}`);
});

// Error Handling middlewares

//...
app.use((req, res, next) => {
  next({
    statusCode: 404,
    message: "Route Not Found",
  });
});

app.use((err, req, res, next) => {
  const { statusCode, message } = err;

  res.status(statusCode);
  res.json({
    message,
  });
});

app.listen(PORT, () =>
  console.log(`Listening on port http://localhost:${PORT}`)
);
