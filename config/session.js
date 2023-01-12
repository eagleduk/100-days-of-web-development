const session = require("express-session");
const store = require("express-mongodb-session");

function createSessionStore() {
  const MongoDBStore = store(session);
  return new MongoDBStore({
    uri: "mongodb://localhost:27017/",
    databaseName: "online-shop",
    collection: "sessions",
  });
}

function sessionStoreConfig() {
  return {
    secret: "online-shop",
    store: createSessionStore(),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
    resave: false,
    saveUninitialized: false,
  };
}

module.exports = sessionStoreConfig;
