const stripe = require("stripe")(process.env.STRIPE_TEST_APP_KEY);

const Order = require("../models/order.model");
const Product = require("../models/product.model");

async function order(req, res) {
  const { loginUser } = req.session;
  const orders = await Order.findByUserId(loginUser._id);

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
        status: order.status,
        _id: order._id,
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

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: Object.entries(carts).map(([id, product]) => {
      return {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price_data: {
          currency: "KRW",
          product_data: {
            name: product.title,
          },
          unit_amount: product.price,
        },
        quantity: product.count,
      };
    }),
    mode: "payment",
    success_url: "http://localhost:3000/order/success",
    cancel_url: "http://localhost:3000/order/fail",
  });

  res.redirect(303, session.url);
}

function orderSuccess(req, res) {
  res.render("order/success");
}

function orderFail(req, res) {
  res.render("order/fail");
}

module.exports = {
  order,
  orderCarts,
  orderSuccess,
  orderFail,
};
