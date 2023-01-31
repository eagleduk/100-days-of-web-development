const Product = require("../models/product.model");

async function products(req, res) {
  const products = await Product.find();
  return res.render("admin/products", { products });
}

function product(req, res) {
  return res.render("admin/addProduct");
}

async function createProduct(req, res) {
  const {
    body: { title, summary, price, description },
    file: { filename },
  } = req;

  const product = new Product(title, summary, price, description, filename);
  await product.save();

  return res.render("admin/addProduct");
}

async function viewProduct(req, res) {
  const { id } = req.params;
  const product = await Product.findById(id);
  return res.render("admin/viewProduct", { product: product });
}

module.exports = {
  products: products,
  product: product,
  createProduct: createProduct,
  viewProduct: viewProduct,
};
