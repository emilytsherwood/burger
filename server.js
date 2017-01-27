// Requiring express, body-parser and method-override
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var emily = require('./controllers/burgers_controller.js');

var app = express();
var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

// Telling the app what engine we are going to use
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// Using that engine
app.set("view engine", "handlebars");

app.use('/', emily);

app.listen(PORT, function(){
	console.log("Listening on: " + PORT);
});


