function cartCheckMiddleware(req, res, next) {
  const { carts } = req.session;
  res.locals.carts = carts;
  res.locals.cartCount = carts ? Object.keys(carts).length : 0;
  next();
}

module.exports = cartCheckMiddleware;
