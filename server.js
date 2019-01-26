var express = require("express");
var http = require("http");
var path = require("path");
const url = require("url");

const routes = require("./routes/index");
const Socket_Server = require("./socket_server");

var app = express();

//all environment
app.set("port", process.env.PORT || 3000);

app
  .use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .options("*", function(req, res, next) {
    res.end();
  });

app
  .use(function(req, res, next) {
    req.header("Access-Control-Allow-Origin", "*");
    req.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .options("*", function(req, res, next) {
    req.end();
  });

app.set("view engine", "ejs");
app.set("views", __dirname + "/views" + "/");

app.use(routes);

//get route from public directory
app.use(express.static(path.join(__dirname, "public")));
//access files inside src
app.use(express.static(__dirname + "/src"));

http.createServer(app).listen(app.get("port"), function() {
  console.log("Natanedu demo product");
  console.log("Express Server listening on port " + app.get("port"));

  const URL = process.env["URL"] || "http://localhost:3000";

  Socket_Server(URL, this);
});
