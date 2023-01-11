const express = require("express");

const publicRouter = require("./routers/public.router");

const app = express();
const port = 3000;

app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs"); // 사용할 view engine 설정
app.set("views", "./views"); // view engine base path 설정

app.use(publicRouter);

app.listen(port);
