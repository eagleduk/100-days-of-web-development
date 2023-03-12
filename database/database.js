const { MongoClient } = require("mongodb");

function getDB() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);
  return client;
}

async function run() {
  try {
    await getDB().connect();
    // database and collection code goes here
    // find code goes here
    // iterate code goes here
  } finally {
    // Ensures that the client will close when you finish/error
    await getDB().close();
  }
}

module.exports = { getDB, run };
