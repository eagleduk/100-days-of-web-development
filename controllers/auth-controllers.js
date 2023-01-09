const bcrypt = require("bcryptjs");

const User = require("../models/user");
const vaildationSession = require("../util/validation-session");
const vaildation = require("../util/validation");

function getSingup(req, res) {
  const sessionErrorData = vaildationSession.getSessionErrorData(req, {
    email: "",
    confirmEmail: "",
    password: "",
  });

  res.render("signup", {
    inputData: sessionErrorData,
  });
}

function getLogin(req, res) {
  const sessionErrorData = vaildationSession.getSessionErrorData(req, {
    email: "",
    password: "",
  });
  res.render("login", {
    inputData: sessionErrorData,
  });
}

async function postSignup(req, res) {
  const userData = req.body;
  const enteredEmail = userData.email; // userData['email']
  const enteredConfirmEmail = userData["confirm-email"];
  const enteredPassword = userData.password;

  if (
    !vaildation.signupVaildation(
      enteredEmail,
      enteredConfirmEmail,
      enteredPassword
    )
  ) {
    vaildationSession.flashErrorsToSession(
      req,
      {
        message: "Invalid input - please check your data.",
        email: enteredEmail,
        confirmEmail: enteredConfirmEmail,
        password: enteredPassword,
      },
      function () {
        res.redirect("/signup");
      }
    );
    return;
  }

  const user = new User(enteredEmail, enteredPassword);
  const existingUser = await user.exist();

  if (existingUser) {
    vaildationSession.flashErrorsToSession(
      req,
      {
        message: "User exists already!",
        email: enteredEmail,
        confirmEmail: enteredConfirmEmail,
        password: enteredPassword,
      },
      function () {
        res.redirect("/signup");
      }
    );
    return;
  }

  await user.save();

  res.redirect("/login");
}

async function postLogin(req, res) {
  const userData = req.body;
  const enteredEmail = userData.email;
  const enteredPassword = userData.password;

  const user = new User(enteredEmail, enteredPassword);
  const existingUser = await user.exist();

  if (!existingUser) {
    vaildationSession.flashErrorsToSession(
      req,
      {
        message: "Could not log you in - please check your credentials!",
        email: enteredEmail,
        password: enteredPassword,
      },
      function () {
        res.redirect("/login");
      }
    );
    return;
  }

  const passwordsAreEqual = await user.compare(existingUser.password);

  if (!passwordsAreEqual) {
    vaildationSession.flashErrorsToSession(
      req,
      {
        message: "Could not log you in - please check your credentials!",
        email: enteredEmail,
        password: enteredPassword,
      },
      function () {
        res.redirect("/login");
      }
    );
    return;
  }

  vaildationSession.isAuthenticatedUser(req, true, {
    id: existingUser._id,
    email: existingUser.email,
  });

  req.session.save(function () {
    res.redirect("/admin");
  });
}

function postLogout(req, res) {
  vaildationSession.isAuthenticatedUser(req, false, null);
  res.redirect("/");
}

module.exports = {
  getSingup,
  getLogin,
  postSignup,
  postLogin,
  postLogout,
};
