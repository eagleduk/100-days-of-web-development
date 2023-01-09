const path = require("path");

const express = require("express");
const session = require("express-session");
const csrf = require("csurf");

const db = require("./data/database");

const sessionConfig = require("./config/sessionConfig");

const authRouts = require("./routes/auth");
const blogRoutes = require("./routes/blog");

const csrfMiddleware = require("./middlewares/csrf-token-middleware");
const authMiddleware = require("./middlewares/auth-middleware");

const app = express();

const sessionStore = sessionConfig.createSessionStore(session);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use(session(sessionConfig.createSession(sessionStore)));
app.use(csrf());

app.use(csrfMiddleware);
app.use(authMiddleware);

app.use(authRouts);
app.use(blogRoutes);

app.use(function (error, req, res, next) {
  res.render("500");
});

db.connectToDatabase().then(function () {
  app.listen(3000);
});
