const Product = require("../models/product.model");

async function products(req, res) {
  const products = await Product.find();
  return res.render("admin/product/products", { products });
}

function product(req, res) {
  return res.render("admin/product/add");
}

async function createProduct(req, res, next) {
  try {
    const {
      body: { title, summary, price, description },
      file: { filename },
    } = req;

    const product = new Product(title, summary, price, description, filename);
    await product.save();

    return res.redirect("/admin/products");
  } catch (err) {
    next(err);
  }
}

async function viewProduct(req, res, next) {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    return res.render("admin/product/view", { product: product });
  } catch (err) {
    next(err);
  }
}

async function updateProduct(req, res, next) {
  try {
    const {
      params: { id },
      body: { title, summary, price, description },
      file,
    } = req;

    const product = new Product(
      title,
      summary,
      price,
      description,
      file?.filename
    );

    await product.update(id);
    return res.redirect(`/admin/product/${id}`);
  } catch (err) {
    next(err);
  }
}

async function deleteProduct(req, res, next) {
  try {
    const {
      params: { id },
    } = req;

    await Product.delete(id);
    res.status(200).json({ result: true, message: "success" });
  } catch (err) {
    res.status(500).json({ result: false, message: err.message });
  }
}

module.exports = {
  products: products,
  product: product,
  createProduct: createProduct,
  viewProduct: viewProduct,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct,
};
