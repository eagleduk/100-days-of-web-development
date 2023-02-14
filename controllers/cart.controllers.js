function viewCart(req, res) {
  res.render("cart/cart.ejs");
}

function deleteCart(req, res) {
  const carts = res.locals.carts;
  let cartCount = res.locals.cartCount;
  const id = req.params.id;

  if (carts[id]) {
    delete carts[id];
    cartCount -= 1;
    res.locals.cartCount = cartCount;
  }
  return res.json({ carts, cartCount });
}

function updateCart(req, res) {
  const id = req.params.id;
  const value = req.body.value;

  const carts = res.locals.carts;
  carts[id].count = value;
  return res.json({ ...carts });
}

module.exports = {
  viewCart,
  deleteCart,
  updateCart,
};
