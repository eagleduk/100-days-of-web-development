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
      req.session.carts = {
        ...carts,
        [id]: {
          count: carts[id].count + 1,
        },
      };
    } else {
      req.session.carts = {
        ...carts,
        [id]: { count },
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
