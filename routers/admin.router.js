const express = require("express");
const {
  products,
  product,
  createProduct,
  viewProduct,
} = require("../controllers/admin.controller");

const router = express.Router();

router.get("/products", products);

router.get("/product", product);

router.post("/product", createProduct);

router.get("/product/:id", viewProduct);

module.exports = router;
