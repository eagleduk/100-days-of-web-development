const express = require("express");
const {
  products,
  product,
  createProduct,
} = require("../controllers/admin.controller");

const router = express.Router();

router.get("/products", products);

router.get("/product", product);

router.post("/product", createProduct);

module.exports = router;
