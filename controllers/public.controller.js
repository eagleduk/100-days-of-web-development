const User = require("../models/user");

function getHome(req, res) {
  return res.render("home");
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

async function login(req, res) {
  const { email, password } = req.body;

  const user = new User(email, password);

  const existUser = await user.exist();

  if (!existUser) {
    return res.redirect("/login");
  }

  const compare = await user.compare(existUser.password);

  if (!compare) {
    return res.redirect("/login");
  }

  req.session.isLogin = true;
  req.session.loginUser = existUser;
  req.session.save(function () {
    res.redirect("/");
  });
}

function logout(req, res) {
  req.session.isLogin = false;
  req.session.loginUser = null;
  req.session.save(function () {
    res.redirect("/");
  });
}

module.exports = {
  getHome,
  getSignup,
  signup,
  getLogin,
  login,
  logout,
};
