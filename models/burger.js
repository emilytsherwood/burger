// Importing the connection.js file
var connectionFile = require('../config/connection.js');

// Create code that will call the query functions 
// Using burger specific input

// Serve index.handlebars to the root route
app.get("/", function(req, res) {
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) {
      throw err;
    }
    res.render("index", { burgers: data });
  });
});

app.post("/", function(req, res) {
  connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [
    req.body.burger_name, req.body.devoured
  ], function(err, result) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
});

app.delete("/:burger_name", function(req, res) {
  connection.query("DELETE FROM burgers WHERE burger_name = ?", [req.params.burger_name], function(err, result) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
});

// Exporting the file
module.exports = burger;