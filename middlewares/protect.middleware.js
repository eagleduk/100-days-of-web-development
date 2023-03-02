function routeProtect(req, res, next) {
  if (!res.locals.isLogin) {
    return res.redirect("/401");
  }
  if (req.path.startsWith("/admin") && !res.locals.isAdmin) {
    return res.redirect("/403");
  }
  next();
}

module.exports = routeProtect;
