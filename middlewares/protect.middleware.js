function routeProtect(req, res, next) {
  if (!res.locals.isLogin) {
    console.log("Unauthorized");
    return res.redirect("/401");
  }
  console.log(req.path);
  if (req.path.startsWith("/admin") && !res.locals.isAdmin) {
    console.log("Forbidden");
    return res.redirect("/403");
  }
  next();
}

module.exports = routeProtect;
