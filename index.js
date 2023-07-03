const connection = require("./connection");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.post("/employees", (req, res) => {
  const data = req.body;
  const info = [data.name, data.salary];
  connection.query(
    "INSERT INTO employee(name,salary) values(?)",
    // [[req.body.name, req.body.salary]],
    [info],
    (error, rows) => {
      if (error) {
        console.log(error);
      } else {
        res.send(rows);
        console.log(rows);
      }
    }
  );
});
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
app.get("/employees/:id", (req, res) => {
  connection.query(
    `select * from employee where id=${req.params.id}`,
    (error, rows) => {
      if (error) {
        console.log(error);
      } else {
        res.send(rows);
        console.log(rows);
      }
    }
  );
});
app.delete("/employees/:id", (req, res) => {
  connection.query(
    `delete from employee where id=${req.params.id}`,
    (error, rows) => {
      if (error) {
        console.log(error);
      } else {
        res.send(rows);
        console.log(rows);
      }
    }
  );
});
app.patch("/employees/:id", (req, res) => {
  connection.query(
    `UPDATE employee SET ? WHERE id=${req.params.id}`,
    [req.body],
    (error, rows) => {
      if (error) {
        console.log(error);
      } else {
        res.send(rows);
        console.log(rows);
      }
    }
  );
});

app.listen(3000, () => console.log("Express server is running on port"));
