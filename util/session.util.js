function setSessionUser(req, isLogin, user, action) {
  req.session.isLogin = isLogin;
  req.session.loginUser = user;
  req.session.save(action);
}

function setInputData(req, inputData, action) {
  req.session.inputData = inputData;
  req.session.save(action);
}

module.exports = {
  setSessionUser,
  setInputData,
};
