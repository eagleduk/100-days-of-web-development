const express = require("express");
const database = require("./database/database");

const languagesRouter = require("./routers/languages.router");
const todoRouter = require("./routers/todos.router");

const app = express();

app.use(express.json());

app.use("/languages", languagesRouter);
app.use("/todos", todoRouter);

app.get("/", function (req, res) {
  res.json({ result: "Rest API" });
});

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send("Server something broke!");
});

database
  .run()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
