const { getDb } = require("../data/database");

class Product {
  constructor(title, summary, price, description, filename) {
    this.title = title;
    this.summary = summary;
    this.price = price;
    this.description = description;
    this.filename = filename;
  }

  async save() {
    await getDb().collection("products").insertOne(this);
  }

  static async find() {
    return await getDb().collection("products").find().toArray();
  }
}

module.exports = Product;
