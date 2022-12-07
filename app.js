const path = require("path");
const fs = require("fs");

const express = require("express");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/confirm", function (req, res) {
  res.render("confirm");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/recommend", function (req, res) {
  res.render("recommend");
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
  res.render("restaurants");
});

app.listen(3000);
