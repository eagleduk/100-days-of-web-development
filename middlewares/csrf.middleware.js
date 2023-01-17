function createCsrfToken(req, res, next) {
  const token = req.csrfToken();
  res.locals.csrf = token;
  next();
}

module.exports = createCsrfToken;
