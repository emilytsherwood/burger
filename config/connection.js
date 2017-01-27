// File that will setup the connection from Node to MySQL
// Requiring mysql
var mysql = require ('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("Error Connecting: " + err.stack);
    return;
  }
  console.log("Connected as id " + connection.threadId);
});

//exporting the connection
module.exports = connection;