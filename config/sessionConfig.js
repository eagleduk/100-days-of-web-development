const mongodbStore = require("connect-mongodb-session");

function createSessionStore(session) {
  const MongoDBStore = mongodbStore(session);

  return new MongoDBStore({
    uri: "mongodb://localhost:27017",
    databaseName: "auth-demo",
    collection: "sessions",
  });
}

function createSession(sessionStore) {
  return {
    secret: "super-secret",
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      maxAge: 2 * 24 * 60 * 60 * 1000,
    },
  };
}

module.exports = {
  createSessionStore,
  createSession,
};
