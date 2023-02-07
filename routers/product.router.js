const express = require("express");

const { view, addCart } = require("../controllers/product.controller");

const router = express.Router();

router.get("/:id", view);

router.post("/:id", addCart);

module.exports = router;
