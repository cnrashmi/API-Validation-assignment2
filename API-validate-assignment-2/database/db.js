const mysql = require("mysql2/promise");

async function createDataBaseConnection() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'api',
    });
    console.log("MySQL Connected");
    return connection;
  } catch (err) {
    console.error("Database Connection Failed", err);
  }
}

module.exports = createDataBaseConnection;
