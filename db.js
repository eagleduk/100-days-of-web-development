const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

const database = client.db("blog");

module.exports = { database };
