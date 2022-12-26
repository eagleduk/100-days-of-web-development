const express = require("express");
const multer = require("multer");

const { getDb } = require("../data/database");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

router.get("/", async function (req, res) {
  const users = await getDb()
    .collection("users")
    .find({}, { sort: { date: -1 } })
    .toArray();

  res.render("profiles", { users });
});

router.get("/new-user", function (req, res) {
  res.render("new-user");
});

router.post("/profiles", upload.single("image"), async function (req, res) {
  const {
    file,
    body: { username },
  } = req;

  await getDb().collection("users").insertOne({
    username,
    file,
    date: new Date(),
  });

  res.redirect("/");
});

module.exports = router;
