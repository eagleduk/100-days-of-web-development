const express = require("express");
const { viewCart } = require("../controllers/cart.controllers");

const router = express.Router();

router.get("/", viewCart);

module.exports = router;
