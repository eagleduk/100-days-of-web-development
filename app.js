const path = require("path");
const fs = require("fs");

const express = require("express");
const uuid = require("uuid");

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
  restaurant.id = uuid.v4();

  const dataFile = path.join(__dirname, "data", "restaurants.json");
  const fileData = fs.readFileSync(dataFile);
  const jsonData = JSON.parse(fileData);
  jsonData.push(restaurant);

  fs.writeFileSync(dataFile, JSON.stringify(jsonData));

  res.redirect("/confirm");
});

app.get("/restaurants", function (req, res) {
  const dataFile = path.join(__dirname, "data", "restaurants.json");
  const fileData = fs.readFileSync(dataFile);
  const jsonData = JSON.parse(fileData);
  res.render("restaurants", {
    numberOfRestaurants: jsonData.length,
    restaurants: jsonData,
  });
});

app.get("/restaurants/:id", function (req, res) {
  const id = req.params.id;

  const dataFile = path.join(__dirname, "data", "restaurants.json");
  const fileData = fs.readFileSync(dataFile);
  const jsonData = JSON.parse(fileData);

  const [restaurant] = jsonData.filter((restaurant) => restaurant.id === id);

  return restaurant
    ? res.render("restaurants-detail", {
        restaurant,
      })
    : res.status(404).render("404");
});

app.use(function (req, res) {
  res.status(404).render("404");
});

app.use(function (err, req, res, next) {
  res.status(500).render("500");
});

app.listen(3000);
