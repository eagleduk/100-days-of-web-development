const express = require("express");
const uuid = require("uuid");
const resData = require("../util/restaurant-data");

const router = express.Router();

router.get("/recommend", function (req, res) {
  res.render("recommend");
});

router.post("/recommend", function (req, res) {
  const restaurant = req.body;
  restaurant.id = uuid.v4();

  const restaurants = resData.getRestaurantData();
  restaurants.push(restaurant);

  resData.setRestaurantData(restaurants);

  res.redirect("/confirm");
});

router.get("/restaurants", function (req, res) {
  const restaurants = resData.getRestaurantData();
  res.render("restaurants", {
    numberOfRestaurants: restaurants.length,
    restaurants: restaurants,
  });
});

router.get("/restaurants/:id", function (req, res) {
  const id = req.params.id;

  const restaurants = resData.getRestaurantData();

  const [restaurant] = restaurants.filter((restaurant) => restaurant.id === id);

  return restaurant
    ? res.render("restaurants-detail", {
        restaurant,
      })
    : res.status(404).render("404");
});

router.get("/confirm", function (req, res) {
  res.render("confirm");
});

module.exports = router;
