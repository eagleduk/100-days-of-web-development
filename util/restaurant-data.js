const path = require("path");
const fs = require("fs");

const dataFile = path.join(__dirname, "..", "data", "restaurants.json");

function getRestaurantData() {
  const fileData = fs.readFileSync(dataFile);
  const jsonData = JSON.parse(fileData);
  return jsonData;
}

function setRestaurantData(restaurants) {
  fs.writeFileSync(dataFile, JSON.stringify(restaurants));
}

module.exports = { getRestaurantData, setRestaurantData };
