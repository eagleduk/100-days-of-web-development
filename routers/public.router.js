const express = require("express");

const publicController = require("../controllers/public.controller");

const router = express.Router();

router.get("/", publicController.getHome);

router.get("/signup", publicController.getSignup);

router.post("/signup", publicController.signup);

router.get("/login", publicController.getLogin);

router.post("/login", publicController.login);

router.get("/logout", publicController.logout);

module.exports = router;
