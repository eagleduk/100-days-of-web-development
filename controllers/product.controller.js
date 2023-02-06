const Product = require("../models/product.model");

async function view(req, res, next) {
  const id = req.params;

  const product = await Product.findById(id);

  res.render("product/view", { product });
}

module.exports = { view: view };
