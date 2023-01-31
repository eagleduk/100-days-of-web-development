const { ObjectId } = require("mongodb");
const { getDb } = require("../data/database");

class Product {
  constructor(title, summary, price, description, filename) {
    this.title = title;
    this.summary = summary;
    this.price = price;
    this.description = description;
    this.filename = filename;
  }

  static async find() {
    return await getDb().collection("products").find().toArray();
  }

  static async findById(id) {
    const objectId = new ObjectId(id);
    const product = await getDb()
      .collection("products")
      .findOne({ _id: objectId });
    return product;
  }

  async save() {
    await getDb().collection("products").insertOne(this);
  }
}

module.exports = Product;
