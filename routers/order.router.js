const express = require("express");
const { orderCarts, order } = require("../controllers/order.controller");

const router = express.Router();

router.get("/", order);

router.post("/", orderCarts);

module.exports = router;
