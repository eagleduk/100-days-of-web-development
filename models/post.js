const mongodb = require("mongodb");

const db = require("../data/database");

const ObjectId = mongodb.ObjectId;

class Post {
  constructor(title, content, id) {
    // 필수 값이 아닌 매개변수를 뒤로 배정한다.
    this.title = title;
    this.content = content;
    if (id) {
      this.id = new ObjectId(id);
    }
  }

  async save() {
    let result;
    if (this.id) {
      result = await db
        .getDb()
        .collection("posts")
        .updateOne(
          { _id: this.id },
          { $set: { title: this.title, content: this.content } }
        );
    } else {
      result = await db.getDb().collection("posts").insertOne({
        title: this.title,
        content: this.content,
      });
    }
    return result;
  }

  async update() {
    const result = await db
      .getDb()
      .collection("posts")
      .updateOne(
        { _id: this.id },
        { $set: { title: this.title, content: this.content } }
      );
    return result;
  }

  async delete() {
    const result = await db
      .getDb()
      .collection("posts")
      .deleteOne({ _id: this.id });
    return result;
  }

  async delete(id) {
    const postId = new ObjectId(id);
    const result = await db
      .getDb()
      .collection("posts")
      .deleteOne({ _id: postId });
    return result;
  }

  async find() {
    const result = await db.getDb().collection("posts").find().toArray();
    return result;
  }

  async view(id) {
    const postId = new ObjectId(id);
    const result = await db
      .getDb()
      .collection("posts")
      .findOne({ _id: postId });
    return result;
  }
}

module.exports = Post;
