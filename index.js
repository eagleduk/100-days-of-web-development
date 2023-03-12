const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.json({ result: "Rest API" });
});

app.listen(3000);
