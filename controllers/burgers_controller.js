//requiring express
var app = require ('express');
//importing the burger.js file
var burgerFile = require ('../models/burger.js');
//creating the router for the app
var router = express.Router();

router.get('/', function (req, res) {
	res.send('/burger');
});

// Create code that will call the query functions 
// Using burger specific input

//ALL ROUTER CODE HERE

// Serve index.handlebars to the root route
app.get("/", function(req, res) {
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) {
      throw err;
    }
    res.render("index", { burgers: data });
  });
});
// Query functions
app.post("/burger/", function(req, res) {
  connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?)", [
    req.body.burger_name, req.body.devoured
  ], function(err, result) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
});

app.delete("/burger/:burger_name", function(req, res) {
  connection.query("DELETE FROM burgers WHERE burger_name = ?", [req.params.burger_name], function(err, result) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
});
