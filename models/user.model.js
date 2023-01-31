const bcryptjs = require("bcryptjs");

const { getDb } = require("../data/database");

class User {
  constructor(email, password, name, street, postalCode, city) {
    this.email = email;
    this.password = password;
    this.isAdmin = false;
    this.address = {
      street,
      postalCode,
      city,
    };
    this.name = name;
  }
  async signup() {
    const hashPassword = await bcryptjs.hash(this.password, 12);
    await getDb().collection("users").insertOne({
      email: this.email,
      password: hashPassword,
      address: this.address,
      name: this.name,
    });
  }
  async exist() {
    const result = await getDb()
      .collection("users")
      .findOne({ email: this.email });
    return result;
  }

  async compare(password) {
    const result = await bcryptjs.compare(this.password, password);
    return result;
  }
}

module.exports = User;
