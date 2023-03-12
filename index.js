const express = require("express");
const database = require("./database/database");

const languagesRouter = require("./routers/languages.router");

const app = express();

app.use("/languages", languagesRouter);

app.get("/a", function (req, res) {
  res.json({ result: "Rest API" });
});

database
  .run()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
