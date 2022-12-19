const path = require("path");

const express = require("express");

const routeRestaurant = require("./routes/restaurants");
const defaultRestaurant = require("./routes/default");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use("/", defaultRestaurant);
app.use("/", routeRestaurant);

app.use(function (req, res) {
  res.status(404).render("404");
});

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).render("500");
});

app.listen(3000);
