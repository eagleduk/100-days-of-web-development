const { ObjectId } = require("mongodb");
const { getDb } = require("../data/database");

class Product {
  constructor(title, summary, price, description, filename) {
    this.title = title;
    this.summary = summary;
    this.price = price;
    this.description = description;
    if (filename) this.filename = filename;
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

  async update(id) {
    const objectId = new ObjectId(id);
    await getDb()
      .collection("products")
      .updateOne({ _id: objectId }, { $set: this });
  }

  static async delete(id) {
    const objectId = new ObjectId(id);
    await getDb().collection("products").deleteOne({ _id: objectId });
  }
}

module.exports = Product;
