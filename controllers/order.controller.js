const Order = require("../models/order.model");
const Product = require("../models/product.model");

async function order(req, res) {
  const { loginUser } = req.session;
  const orders = await Order.find(loginUser._id);

  const result = await Promise.all(
    orders.map(async function (order) {
      const rr = await Promise.all(
        order.products.map(async function (product) {
          const { id, count } = product;
          const p = await Product.findById(id);
          return {
            ...p,
            count,
          };
        })
      );
      return {
        time: order.time,
        products: rr,
      };
    })
  );
  return res.render("order/order", { orders: result });
}

async function orderCarts(req, res) {
  const { carts } = res.locals;
  const { loginUser } = res.locals;

  const order = new Order(loginUser);
  order.addProducts(carts);
  await order.save();

  req.session.carts = null;

  return res.redirect("/order");
}

module.exports = {
  order,
  orderCarts,
};
