const fs = require("fs");
const path = require("path");

const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

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
    `<form action="/store-user" method="POST"><label>Username: </label><input type="text" name="username" /><button>Submit</button></form>`
  );
});

app.post("/store-user", function (req, res) {
  const username = req.body.username;

  const usersFile = path.join(__dirname, "data", "users.json");
  const userText = fs.readFileSync(usersFile);
  const userJSON = JSON.parse(userText);
  userJSON.push(username);

  fs.writeFileSync(usersFile, JSON.stringify(userJSON));

  res.send("<h1>User Stored!! </h1>");
});

app.get("/users", function (req, res) {
  const usersFile = path.join(__dirname, "data", "users.json");
  const userText = fs.readFileSync(usersFile);
  const userJSON = JSON.parse(userText);

  let text = "<ul>";

  userJSON.forEach((user) => (text += "<li>" + user + "</li>"));

  text += "</ul>";

  res.send(text);
});

app.listen(3000);
