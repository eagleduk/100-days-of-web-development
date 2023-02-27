const Product = require("../models/product.model");

function cartCheckMiddleware(req, res, next) {
  const { carts } = req.session;
  res.locals.carts = carts;
  res.locals.cartCount = carts ? Object.keys(carts).length : 0;
  next();
}

async function cartUpdateMiddleware(req, res, next) {
  const { carts } = req.session;
  for (const id in req.session.carts) {
    const product = await Product.findById(id);
    if (product) {
      req.session.carts[id] = {
        ...carts[id],
        ...product,
      };
    } else {
      delete req.session.carts[id];
    }
  }
  next();
}

module.exports = { cartCheckMiddleware, cartUpdateMiddleware };
