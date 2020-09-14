var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");

// Create instance of express app
var app = express();

// We will serve js and html in ejs
app.set("view engine", "ejs");

// Send css, images, other static files
//app.use(express.static("views"));
app.use(express.static(__dirname + "/views"));

// Give server access to the user input
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", __dirname + "/views");
app.use(logger("dev"));

app.get("/", function (request, response) {
  //response.send("<h1> Prep for Prep</h1>");
  response.render("home.ejs");
});

app.post("/", function (request, response) {
  // Send back a page with information on it
  var region = request.body.region;
  response.render("results.ejs", { data: region });
});

var port = 8080;

app.listen(port, function () {
  console.log("App running on port " + port);
});
