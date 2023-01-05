const Post = require("../models/post");

const vaildationSession = require("../util/validation-session");
const vaildation = require("../util/validation");

function getHome(req, res) {
  res.render("welcome");
}

async function getAdmin(req, res) {
  if (!res.locals.isAuth) {
    return res.status(401).render("401");
  }

  // const posts = await new Post().find();
  const posts = await Post.fetchAll();

  const sessionErrorData = vaildationSession.getSessionErrorData(req, {
    title: "",
    content: "",
  });

  res.render("admin", {
    posts: posts,
    inputData: sessionErrorData,
  });
}

async function createPost(req, res) {
  const enteredTitle = req.body.title;
  const enteredContent = req.body.content;

  if (!vaildation.postInVaildation(enteredTitle, enteredContent)) {
    vaildationSession.flashErrorsToSession(
      req,
      {
        message: "Invalid input - please check your data.",
        title: enteredTitle,
        content: enteredContent,
      },
      function () {
        res.redirect("/admin");
      }
    );
    return; // or return res.redirect('/admin'); => Has the same effect
  }

  const post = new Post(enteredTitle, enteredContent);
  await post.save();

  res.redirect("/admin");
}

async function getSinglePost(req, res) {
  // const post = await new Post().view(req.params.id);
  const post = new Post(null, null, req.params.id);
  await post.fetch();

  if (!post.title || !post.content) {
    return res.render("404"); // 404.ejs is missing at this point - it will be added later!
  }

  const sessionErrorData = vaildationSession.getSessionErrorData(req, {
    title: post.title,
    content: post.content,
  });

  res.render("single-post", {
    post: post,
    inputData: sessionErrorData,
  });
}

async function updatePost(req, res) {
  const enteredTitle = req.body.title;
  const enteredContent = req.body.content;

  if (!vaildation.postInVaildation(enteredTitle, enteredContent)) {
    vaildationSession.flashErrorsToSession(
      req,
      {
        message: "Invalid input - please check your data.",
        title: enteredTitle,
        content: enteredContent,
      },
      function () {
        res.redirect(`/posts/${req.params.id}/edit`);
      }
    );
    return;
  }

  const post = new Post(enteredTitle, enteredContent, req.params.id);
  // await post.update();
  await post.save();

  res.redirect("/admin");
}

async function deletePost(req, res) {
  const post = new Post(null, null, req.params.id);
  await post.delete1();

  // const post = new Post().delete2(req.params.id);

  res.redirect("/admin");
}

module.exports = {
  getHome,
  getAdmin,
  createPost,
  getSinglePost,
  updatePost,
  deletePost,
};
