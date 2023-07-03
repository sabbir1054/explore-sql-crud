const connection = require("./connection");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/employees", (req, res) => {
  connection.query("select * from employee", (error, rows) => {
    if (error) {
      console.log(error);
    } else {
      res.send(rows);
      console.log(rows);
    }
  });
});

app.listen(3000, () => console.log("Express server is running on port"));
