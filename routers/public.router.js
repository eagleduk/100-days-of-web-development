const express = require("express");

const publicController = require("../controllers/public.controller");

const router = express.Router();

router.get("/", publicController.getHome);

router.get("/401", function (req, res) {
  return res.render("401.ejs");
});

router.get("/403", function (req, res) {
  return res.render("403.ejs");
});

router.get("/signup", publicController.getSignup);

router.post("/signup", publicController.signup);

router.get("/login", publicController.getLogin);

router.post("/login", publicController.login);

router.post("/logout", publicController.logout);

module.exports = router;
