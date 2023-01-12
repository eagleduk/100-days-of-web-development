function createCsrfToken(req, res, next) {
  res.locals.csrf = req.csrfToken();
  next();
}

module.exports = createCsrfToken;
