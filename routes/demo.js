const express = require("express");
const bcrypt = require("bcryptjs");

const db = require("../data/database");
const { getDb } = require("../data/database");

const hashSalt = bcrypt.genSaltSync(10);
const router = express.Router();

router.get("/", function (req, res) {
  res.render("welcome");
});

router.get("/signup", function (req, res) {
  let signupData = req.session.signupData;

  if (!signupData) {
    signupData = {
      email: "",
      confirm: "",
      password: "",
    };
  }
  req.session.signupData = null;

  res.render("signup", { signupData });
});

router.get("/login", function (req, res) {
  res.render("login");
});

router.post("/signup", async function (req, res) {
  const { email, "confirm-email": confirm, password } = req.body;

  if (!email || !confirm || !password || email !== confirm) {
    req.session.signupData = {
      email,
      confirm,
      password,
      message: "Check your input data.",
    };
    req.session.save(function () {
      res.redirect("/signup");
    });
    return;
  }

  const existUser = await db.getDb().collection("users").findOne({ email });

  if (existUser) {
    console.log("Exist User");
    req.session.signupData = {
      email,
      confirm,
      password,
      message: "Exist User Data.",
    };
    req.session.save(function () {
      res.redirect("/signup");
    });
    return;
  }

  const hashPassword = bcrypt.hashSync(password, hashSalt);

  const user = {
    email,
    password: hashPassword,
  };
  await db.getDb().collection("users").insertOne(user);

  return res.redirect("/login");
});

router.post("/login", async function (req, res) {
  const { email, password } = req.body;

  const user = await db.getDb().collection("users").findOne({ email });

  if (!user) {
    return res.redirect("/login");
  }
  const compare = bcrypt.compareSync(password, user.password);
  if (!compare) {
    return res.redirect("/login");
  }
  req.session.user = { id: user._id, email: user.email };
  req.session.save(function () {
    res.redirect("/admin");
  });
});

router.get("/admin", async function (req, res) {
  // session ticket check
  if (!req.session.user) {
    return res.status(401).render("401");
  }
  const user = await db
    .getDb()
    .collection("users")
    .findOne({ _id: req.session.user.id });

  if (!user || !user.isAdmin) {
    return res.status(403).render("403");
  }
  res.render("admin");
});

router.get("/profile", function (req, res) {
  // session ticket check
  if (!req.session.user) {
    return res.status(401).render("401");
  }
  res.render("profile");
});

router.post("/logout", function (req, res) {
  req.session.user = null;
});

module.exports = router;
