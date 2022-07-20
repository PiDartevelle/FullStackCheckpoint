require("dotenv").config();
const express = require("express");

const app = express();
const mongoose = require("mongoose");
const todosRoutes = require("./routes/todos");

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/todos", todosRoutes);

// connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listening for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB and istening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
