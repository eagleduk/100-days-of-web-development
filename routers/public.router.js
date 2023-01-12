const express = require("express");

const publicController = require("../controllers/public.controller");

const router = express.Router();

router.get("/efjei", function (req, res) {});

router.get("/", publicController.getHome);

router.get("/signup", publicController.getSignup);

router.post("/signup", publicController.signup);

router.get("/login", publicController.getLogin);

router.post("/login", publicController.login);

module.exports = router;
