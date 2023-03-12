const Mongodb = require("mongodb");
const database = require("../database/database");

class Todo {
  constructor(text, id) {
    this.text = text;
    this.id = id;
  }

  static async list() {
    const todos = await database
      .getDB()
      .db("api")
      .collection("todo")
      .find()
      .toArray();
    return todos;
  }

  async create() {
    const todo = await database
      .getDB()
      .db("api")
      .collection("todo")
      .insertOne({ text: this.text });
    return {
      id: todo.insertedId,
      text: this.text,
    };
  }

  async patch() {
    const dbId = new Mongodb.ObjectId(this.id);
    await database
      .getDB()
      .db("api")
      .collection("todo")
      .updateOne({ _id: dbId }, { $set: { text: this.text } });
  }

  async remove() {
    const dbId = new Mongodb.ObjectId(this.id);

    await database
      .getDB()
      .db("api")
      .collection("todo")
      .deleteOne({ _id: dbId });
  }
}

module.exports = Todo;
