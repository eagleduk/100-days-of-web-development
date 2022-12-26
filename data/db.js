const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";

let database;

async function connect() {
  const client = await MongoClient.connect(uri);
  database = client.db("blog");
}

function getDatabase() {
  if (database) {
    return database;
  }
  throw new Exception("DataBase is not connected!!");
}

module.exports = { connect, getDatabase };
