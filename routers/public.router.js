const express = require("express");

const router = express.Router();

router.get("/", function (req, res) {
  return res.send("<h1>Hello! world</h1>");
});

router.get("/signup", function (req, res) {
  res.render("signup");
});

router.post("/signup", function (req, res) {
  console.log(req.body);
});

module.exports = router;
