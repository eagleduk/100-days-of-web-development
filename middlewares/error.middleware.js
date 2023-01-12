function errorHandler(error, req, res, next) {
  console.log("errorHandler", error);
  res.render("500");
}

module.exports = errorHandler;
