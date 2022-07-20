const express = require("express");

const router = express.Router();

//get all Todos
router.get("/", (req, res) => {
  res.json({ msg: "GET all Todos" });
});

//get one Todo
router.get("/:id", (req, res) => {
  res.json({ msg: "GET one Todo" });
});

//add a Todo
router.post("/", (req, res) => {
  res.json({ msg: "POST a new Todo" });
});

//delete a Todo
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a new Todo" });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a new Todo" });
});

module.exports = router;
