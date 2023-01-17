const express = require("express");
const csurf = require("csurf");
const expressSession = require("express-session");

const sessionStoreConfig = require("./config/session");
const { connectToDatabase } = require("./data/database");

const publicRouter = require("./routers/public.router");
const errorHandler = require("./middlewares/error.middleware");
const createCsrfToken = require("./middlewares/csrf.middleware");
const loginCheckMiddleware = require("./middlewares/auth.middleware");

const app = express();
const port = 3000;

app.set("view engine", "ejs"); // 사용할 view engine 설정
app.set("views", "./views"); // view engine base path 설정

app.use("/static", express.static("public"));

// app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(expressSession(sessionStoreConfig()));
app.use(csurf());

app.use(createCsrfToken);
app.use(loginCheckMiddleware);

app.use((req, res, next) => {
  console.log(res.locals);
  next();
});

app.use(publicRouter);

app.use(errorHandler);

connectToDatabase().then(function () {
  app.listen(port);
});
