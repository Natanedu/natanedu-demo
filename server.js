const express = require("express");
const http = require("http");
const path = require("path");

const routes = require("./routes/index");

var app = express();

//all environment
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", __dirname + "/views" + "/");

app.use(routes);

//get route from public directory
app.use(express.static(path.join(__dirname, "public")));
//access files inside src
app.use(express.static(__dirname + "/src"));

var server = http.createServer(app).listen(app.get("port"), function() {
  console.log("Natanedu demo product");
  console.log("Express Server listening on port " + app.get("port"));
});
