const express = require("express");

const languagesController = require("../controllers/languages.controller");

const router = express.Router();

router.get("/", languagesController.randomLanguages);

module.exports = router;
