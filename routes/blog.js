const express = require("express");
const { ObjectId } = require("mongodb");

const { getDatabase } = require("../data/db");

const router = express.Router();

router.get("/", function (req, res) {
  res.redirect("/posts");
});

router.get("/posts", async function (req, res) {
  try {
    const posts = await getDatabase().collection("posts").find({}).toArray();
    res.render("posts-list", { posts });
  } catch {
    res.render("posts-list", { posts: [] });
  }
});

router.get("/new-post", async function (req, res) {
  try {
    const authors = await getDatabase()
      .collection("authors")
      .find({})
      .toArray();
    res.render("create-post", { authors });
  } catch {
    res.render("500");
  }
});

router.post("/new-post", async function (req, res) {
  try {
    const { title, summary, content, author } = req.body;
    const creator = await getDatabase()
      .collection("authors")
      .findOne({ _id: ObjectId(author) });

    const data = await getDatabase().collection("posts").insertOne({
      title,
      summary,
      content,
      date: new Date(),
      creator,
    });
    res.redirect("posts");
  } catch {
    res.render("500");
  }
});

router.get("/posts/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const post = await getDatabase()
      .collection("posts")
      .findOne({ _id: ObjectId(id) });

    res.render("post-detail", { post });
  } catch {
    res.render("500");
  }
});

router.get("/posts/:id/update", async function (req, res) {
  try {
    const { id } = req.params;
    const post = await getDatabase()
      .collection("posts")
      .findOne({ _id: ObjectId(id) });

    res.render("update-post", { post });
  } catch {
    res.render("500");
  }
});

router.post("/posts/:id/update", async function (req, res) {
  try {
    const {
      params: { id },
      body: { title, summary, content },
    } = req;
    await getDatabase()
      .collection("posts")
      .updateOne({ _id: ObjectId(id) }, { $set: { title, summary, content } });
    res.redirect("/posts");
  } catch {
    res.render("500");
  }
});

router.post("/posts/:id", async function (req, res) {
  try {
    const { id } = req.params;
    await getDatabase()
      .collection("posts")
      .deleteOne({ _id: ObjectId(id) });
    res.redirect("/posts");
  } catch {
    res.render("500");
  }
});

module.exports = router;
