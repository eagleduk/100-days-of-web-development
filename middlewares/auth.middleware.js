function loginCheckMiddleware(req, res, next) {
  const { isLogin, loginUser } = req.session;
  res.locals.isLogin = isLogin;
  res.locals.isAdmin = loginUser?.isAdmin;
  if (isLogin) res.locals.loginUser = loginUser;

  next();
}

module.exports = loginCheckMiddleware;
