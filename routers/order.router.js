const express = require("express");
const {
  orderCarts,
  order,
  orderFail,
  orderSuccess,
} = require("../controllers/order.controller");

const router = express.Router();

router.get("/", order);

router.post("/", orderCarts);

router.get("/success", orderSuccess);

router.get("/fail", orderFail);

module.exports = router;
