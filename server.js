
// Creating our variables to incorporate the express, body-parser, and path node packages.
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Here, we are going to set up the express app.
var app = express();

// use port 3000
var PORT = process.env.PORT || 3000;

// Middleware for parsing json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

// This gives us access to the folders here for static applications.
app.use(express.static(path.join(__dirname, "/app/public")));

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});
