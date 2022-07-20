const express = require("express");
const {
  createTodo,
  getTodo,
  getTodos,
  deleteTodo,
  updateTodo,
} = require("../controllers/todoController");

const router = express.Router();

//get all Todos
router.get("/", getTodos);

//get one Todo
router.get("/:id", getTodo);

//add a Todo
router.post("/", createTodo);

//delete a Todo
router.delete("/:id", deleteTodo);

router.patch("/:id", updateTodo);

module.exports = router;
