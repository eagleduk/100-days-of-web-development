const User = require("../models/user.model");
const Product = require("../models/product.model");

const { setSessionUser, setInputData } = require("../util/session.util");
const { signupValidate } = require("../util/validate.util");

async function getHome(req, res) {
  const products = await Product.find();
  return res.render("home", { products });
}

function getSignup(req, res) {
  const inputData = { ...req.session.inputData };
  req.session.inputData = null;
  return res.render("signup", { inputData });
}

async function signup(req, res, next) {
  const { email, cEmail, password, name, street, postalCode, city } = req.body;
  if (
    !signupValidate(email, cEmail, password, name, street, postalCode, city)
  ) {
    setInputData(
      req,
      {
        email,
        cEmail,
        name,
        street,
        postalCode,
        city,
        message: "Check input.",
      },
      function () {
        res.redirect("signup");
      }
    );
    return;
  }
  try {
    const user = new User(email, password, name, street, postalCode, city);
    await user.signup();

    return res.redirect("/login");
  } catch (err) {
    next(err);
  }
}

function getLogin(req, res) {
  const inputData = { ...req.session.inputData };
  req.session.inputData = null;
  return res.render("login", { inputData });
}

async function login(req, res, next) {
  const { email, password } = req.body;

  const user = new User(email, password);
  try {
    const existUser = await user.exist();

    if (!existUser) {
      setInputData(
        req,
        {
          email,
          message: "Check User.",
        },
        function () {
          res.redirect("/login");
        }
      );
      return;
    }

    const compare = await user.compare(existUser.password);

    if (!compare) {
      setInputData(
        req,
        {
          email,
          message: "Check User.",
        },
        function () {
          res.redirect("/login");
        }
      );
      return;
    }

    setSessionUser(req, true, existUser, function () {
      res.redirect("/");
    });
    return;
  } catch (err) {
    next(err);
  }
}

function logout(req, res) {
  setSessionUser(req, false, null, function () {
    res.redirect("/");
  });
  return;
}

module.exports = {
  getHome,
  getSignup,
  signup,
  getLogin,
  login,
  logout,
};
