const express = require("express");
const {
  products,
  product,
  createProduct,
  viewProduct,
  updateProduct,
  deleteProduct,
  order,
  updateOrderStatus,
} = require("../controllers/admin.controller");

const router = express.Router();

router.get("/products", products);

router.get("/product", product);

router.post("/product", createProduct);

router.get("/product/:id", viewProduct);

router.post("/product/:id", updateProduct);

router.delete("/product/:id", deleteProduct);

router.get("/order", order);

router.patch("/order/:id", updateOrderStatus);

module.exports = router;
