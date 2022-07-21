const mongoose = require("mongoose");
const Todo = require("../models/todoModel");

// get all Todos

const getTodos = async (req, res) => {
  const todos = await Todo.find({}).sort({ createdAt: -1 });
  res.status(200).json(todos);
};

// get a single Todo

const getTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Todo" });
  }
  const todo = await Todo.findById(id);

  if (!todo) {
    return res.status(404).json({ error: "No such Todo" });
  }
  res.status(200).json(todo);
};

// create a new Todo

const createTodo = async (req, res) => {
  const { title, author, content } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!author) {
    emptyFields.push("author");
  }
  if (!content) {
    emptyFields.push("content");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all required fields", emptyFields });
  }
  // add a new document to the DB
  try {
    const todo = await Todo.create({ title, author, content });
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a Todo

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Todo" });
  }
  const todo = await Todo.findOneAndDelete({ _id: id });
  if (!todo) {
    return res.status(404).json({ error: "No such Todo" });
  }
  res.status(200).json(todo);
};

// update a Todo

const updateTodo = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Todo" });
  }
  const todo = await Todo.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!todo) {
    return res.status(404).json({ error: "No such Todo" });
  }
  res.status(200).json(todo);
};

module.exports = {
  createTodo,
  getTodos,
  getTodo,
  deleteTodo,
  updateTodo,
};
