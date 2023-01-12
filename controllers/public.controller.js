const User = require("../models/user");

function getHome(req, res) {
  return res.send("<h1>Hello! world</h1>");
}

function getSignup(req, res) {
  res.render("signup");
}

async function signup(req, res) {
  const { email, password, name, street, postalCode, city } = req.body;
  const user = new User(email, password, name, street, postalCode, city);
  await user.signup();

  return res.redirect("/login");
}

function getLogin(req, res) {
  res.render("login");
}

function login(req, res) {}

module.exports = {
  getHome,
  getSignup,
  signup,
  getLogin,
  login,
};
