const { getDb } = require("../data/database");

const { ObjectId } = require("mongodb");
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

  static async updateStatus(id, status) {
    await getDb()
      .collection("orders")
      .updateOne({ _id: new ObjectId(id) }, { $set: { status } });
  }

  static async findByUserId(id) {
    const orders = await getDb()
      .collection("orders")
      .find({
        "user._id": id,
      })
      .sort({ time: -1 })
      .toArray();
    return orders;
  }

  static async findAll() {
    const orders = await getDb()
      .collection("orders")
      .find()
      .sort({ time: -1 })
      .toArray();
    return orders;
  }
}

module.exports = Order;
