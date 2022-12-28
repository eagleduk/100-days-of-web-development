const express = require("express");
const bcrypt = require("bcryptjs");

const db = require("../data/database");

const hashSalt = bcrypt.genSaltSync(10);
const router = express.Router();

router.get("/", function (req, res) {
  res.render("welcome");
});

router.get("/signup", function (req, res) {
  res.render("signup");
});

router.get("/login", function (req, res) {
  res.render("login");
});

router.post("/signup", async function (req, res) {
  const { email, "confirm-email": confirm, password } = req.body;

  if (!email || !confirm || !password || email !== confirm) {
    console.log("login validation error");
    return res.redirect("/signup");
  }

  const existUser = await db.getDb().collection("users").findOne({ email });

  if (existUser) {
    console.log("Exist User");
    return res.redirect("/signup");
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
  console.log(email, password);

  const user = await db.getDb().collection("users").findOne({ email });

  if (user) {
    const compare = bcrypt.compareSync(password, user.password);
    console.log(compare);
    if (compare) {
      return res.redirect("/admin");
    }
    return res.redirect("/login");
  }
  return res.redirect("/signup");
});

router.get("/admin", function (req, res) {
  res.render("admin");
});

router.post("/logout", function (req, res) {});

module.exports = router;
