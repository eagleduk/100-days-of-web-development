const { getDb } = require("../data/database");

class Order {
  constructor(user) {
    this.user = user;
  }
  addProducts(carts) {
    this.products = Object.entries(carts).map(([id, product]) => {
      return { id, count: product.count };
    });
  }

  async save() {
    const data = {
      ...this,
      time: Date.now(),
      status: "pending",
    };
    await getDb().collection("orders").insertOne(data);
  }

  static async find(id) {
    const orders = await getDb()
      .collection("orders")
      .find({
        "user._id": id,
      })
      .sort({ time: -1 })
      .toArray();
    return orders;
  }
}

module.exports = Order;
