const mysql = require("mysql2");
const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "employeeDB",
});

mysqlConnection.connect((err) => {
  if (err) {
    console.log("Error in DB connection" + JSON.stringify(err, undefined, 2));
  } else {
    console.log("DB connected Successfully");
  }
});

module.exports = mysqlConnection;
