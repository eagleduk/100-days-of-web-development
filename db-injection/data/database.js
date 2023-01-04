const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  database: "security",
  user: "root",
  password: "your-pw",
  multipleStatements: true, // 한번에 여러 SQL 명령을 수행
});

module.exports = pool;
