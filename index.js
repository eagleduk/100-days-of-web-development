require("dotenv").config();
const express = require("express");
const csurf = require("csurf");
const expressSession = require("express-session");
const multer = require("multer");

const sessionStoreConfig = require("./config/session");
const { connectToDatabase } = require("./data/database");

const publicRouter = require("./routers/public.router");
const productRouter = require("./routers/product.router");
const adminRouter = require("./routers/admin.router");
const cartRouter = require("./routers/cart.router");
const orderRouter = require("./routers/order.router");

const errorHandler = require("./middlewares/error.middleware");
const createCsrfToken = require("./middlewares/csrf.middleware");
const loginCheckMiddleware = require("./middlewares/auth.middleware");
const protectMiddleware = require("./middlewares/protect.middleware");
const {
  cartCheckMiddleware,
  cartUpdateMiddleware,
} = require("./middlewares/cart.middleware");

const app = express();
const port = 3000;

const upload = multer({ dest: "./uploads/" });

app.set("view engine", "ejs"); // 사용할 view engine 설정
app.set("views", "./views"); // view engine base path 설정

app.use("/static", express.static("public"));
app.use("/images", express.static("uploads"));

// app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(expressSession(sessionStoreConfig()));
app.use(upload.single("image"));
app.use(csurf());

app.use(createCsrfToken);
app.use(loginCheckMiddleware);
app.use(cartUpdateMiddleware);
app.use(cartCheckMiddleware);

app.use((req, res, next) => {
  console.log(res.locals);
  next();
});

app.use(publicRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);
app.use(protectMiddleware);
app.use("/order", orderRouter);
app.use("/admin", adminRouter);

app.use(errorHandler);

connectToDatabase().then(function () {
  app.listen(port);
});
