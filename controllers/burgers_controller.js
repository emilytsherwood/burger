//requiring express
var app = require ('express');
//importing the burger.js file
var burgerFile = require ('../models/burger.js');
//creating the router for the app
var router = express.Router();

router.get('/', function (req, res) {
	res.send('/burger');
});


