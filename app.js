const path = require("path");
const fs = require("fs");

const express = require("express");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  const htmlFile = path.join(__dirname, "views", "index.html");
  res.sendFile(htmlFile);
});

app.get("/confirm", function (req, res) {
  const htmlFile = path.join(__dirname, "views", "confirm.html");
  res.sendFile(htmlFile);
});

app.get("/about", function (req, res) {
  const htmlFile = path.join(__dirname, "views", "about.html");
  res.sendFile(htmlFile);
});

app.get("/recommend", function (req, res) {
  const htmlFile = path.join(__dirname, "views", "recommend.html");
  res.sendFile(htmlFile);
});

app.post("/recommend", function (req, res) {
  const restaurant = req.body;

  const dataFile = path.join(__dirname, "data", "restaurants.json");
  const fileData = fs.readFileSync(dataFile);
  const jsonData = JSON.parse(fileData);
  jsonData.push(restaurant);

  fs.writeFileSync(dataFile, JSON.stringify(jsonData));

  res.redirect("/confirm");
});

app.get("/restaurants", function (req, res) {
  const htmlFile = path.join(__dirname, "views", "restaurants.html");
  res.sendFile(htmlFile);
});

app.listen(3000);
