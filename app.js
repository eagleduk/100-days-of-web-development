const path = require("path");
const session = require("express-session");
const mongoDBSession = require("connect-mongodb-session");

const express = require("express");

const db = require("./data/database");
const demoRoutes = require("./routes/demo");

const app = express();

const MongoDBStore = mongoDBSession(session);
const store = new MongoDBStore({
  url: "mongodb://localhost:27017",
  databaseName: "auth-demo",
  collection: "sessions",
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

app.use(async function (req, res, next) {
  const loginUser = req.session.user;
  if (!loginUser) {
    return next();
  }
  const userData = await db
    .getDb()
    .collection("users")
    .findOne({ _id: loginUser.id });
  console.log(userData);
  if (userData) {
    res.locals.isAuth = true;
    res.locals.isAdmin = userData.isAdmin;
  }
  next();
});

app.use(demoRoutes);

app.use(function (error, req, res, next) {
  res.render("500");
});

db.connectToDatabase().then(function () {
  app.listen(3000);
});
