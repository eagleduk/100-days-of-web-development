const Product = require("../models/product.model");

async function view(req, res, next) {
  try {
    const id = req.params;

    const product = await Product.findById(id);

    return res.render("product/view", { product });
  } catch (error) {
    next(error);
  }
}

async function addCart(req, res, next) {
  try {
    const { id } = req.params;
    let count = res.locals.cartCount;
    const carts = res.locals.carts;
    if (carts && carts[id]) {
      const product = carts[id];
      req.session.carts = {
        ...carts,
        [id]: {
          ...product,
          count: product.count + 1,
        },
      };
    } else {
      const product = await Product.findById(id);
      req.session.carts = {
        ...carts,
        [id]: { ...product, count: 1 },
      };
      count++;
    }

    return res.status(200).json({ count });
  } catch (error) {
    next(error);
  }
  return res.status(500).json();
}

module.exports = { view: view, addCart: addCart };
