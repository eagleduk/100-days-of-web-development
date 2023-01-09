const bcrypt = require("bcryptjs");

const db = require("../data/database");

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  static async find(email) {
    const result = await db.getDb().collection("users").findOne({ email });
    return result;
  }

  async exist() {
    const result = await db
      .getDb()
      .collection("users")
      .findOne({ email: this.email });
    return result;
  }

  async compare(existPassword) {
    const result = await bcrypt.compare(this.password, existPassword);
    return result;
  }

  async save() {
    const hashedPassword = await bcrypt.hash(this.password, 12);
    await db.getDb().collection("users").insertOne({
      email: this.email,
      password: hashedPassword,
    });
  }
}

module.exports = User;
