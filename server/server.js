var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var _ = require("underscore");
var randomString = require("randomstring");
var portNumber = 3000;

var users = require("./users");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/index.html", function(req, res){
	var user = _.find(users, { username: req.body.username, password: req.body.password });
	if(user){
		var token = randomString.generate();
		user.token = token;
		res.redirect("index.html?token=" + token);
	}
	else res.redirect("login.html?error=wrong_username_or_password");
});

app.use(express.static(path.join(__dirname, "../public")));

app.listen(portNumber);

console.log("Server is running on port " + portNumber + "...");