const express = require("express");
const { view } = require("../controllers/product.controller");

const router = express.Router();

router.get("/:id", view);

module.exports = router;
