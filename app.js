const express = require("express");

const app = express();

app.get("/currenttime", function (req, res) {
  res.send(
    "<h1>" +
      new Intl.DateTimeFormat("ko", {
        hourCycle: "h23",
        dateStyle: "medium",
        timeStyle: "medium",
      }).format() +
      "</h1>"
  );
});

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

app.listen(3000);
