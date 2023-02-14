const express = require("express");
const {
  viewCart,
  deleteCart,
  updateCart,
} = require("../controllers/cart.controllers");

const router = express.Router();

router.get("/", viewCart);

router.delete("/:id", deleteCart);

router.patch("/:id", updateCart);

module.exports = router;
