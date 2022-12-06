const express = require("express");

const app = express();

app.use(express.urlencoded());

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
  res.send(
    `<form action="/store-user" method="POST"><label>Username</label><input type="text" name="username" /><button>Submit</button></form>`
  );
});

app.post("/store-user", function (req, res) {
  const username = req.body.username;
  console.log(username);
  res.send("<h1>User Stored!! </h1>");
});

app.listen(3000);
