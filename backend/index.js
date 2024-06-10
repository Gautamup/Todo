const exp = require("constants");
const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors");
const { verifyTodo } = require("./types");
const { todoId } = require("./types");
const { todo } = require("./todo_db");

app.use(express.json());

app.use(cors());

app.post("/todos", async (req, res) => {
  const payLoad = req.body;

  if (!verifyTodo.safeParse(payLoad)) {
    res.status(404).json({
      msg: "Wrong inputs",
    });
    return;
  }

  //put in mongodb data base
  await todo.create({
    title: payLoad.title,
    description: payLoad.description,
    completed: false,
  });

  res.json({
    msg: "Data added",
  });
});

app.get("/todos", async (req, res) => {
  //show todo from mongodb
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.put("/completed", async (req, res) => {
  const payLoad = req.body;

  if (!todoId.safeParse(payLoad)) {
    res.status(404).json ({
      msg: "Wrong inputs",
    });
    return;
  }

  await todo.update({
      _id: req.body.id,
    } , {
      completed: true,
    }
  );

  res.json({
    msg: "Task is completed",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
