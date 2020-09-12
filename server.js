var express = require("express");
var logger = require("morgan");

// Create instance of express app
var app = express();

// We will serve js and html in ejs
app.set("view engine", ejs);

app.use(logger("dev"));

app.get("/", function (request, response) {
  response.send("<h1> Prep for Prep</h1>");
});

var port = 8080;

app.listen(port, function () {
  console.log("App running on port " + port);
});
