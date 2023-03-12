const database = require("../database/database");

const randomLanguages = async (req, res, next) => {
  console.log("ERE");
  const quotes = await database
    .getDB()
    .db("api")
    .collection("languages")
    .find({})
    .toArray();
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomLanguages = quotes[randomIndex];

  res.json({ language: randomLanguages.language });
};

module.exports = {
  randomLanguages,
};
