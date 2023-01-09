const express = require("express");
const authController = require("../controllers/auth-controllers");

const router = express.Router();

router.get("/signup", authController.getSingup);

router.get("/login", authController.getLogin);

router.post("/signup", authController.postSignup);

router.post("/login", authController.postLogin);

router.post("/logout", authController.postLogout);

module.exports = router;
