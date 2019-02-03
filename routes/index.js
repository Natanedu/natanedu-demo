var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  res.render("home", { title: "Express" });
});

router.get("/home", function(req, res) {
  res.render("home", { title: "Express" });
});

router.get("/student/dashboard", function(req, res) {
  res.render("studentdashb", { title: "Express" });
});

router.get("/teacher/dashboard", function(req, res) {
  res.render("teacherdashb", { title: "Express" });
});

router.get("/webrtc", function(req, res) {
  res.render("webrtc", { title: "Express" });
});

// Route to conferences room
router.get("/room/:type/:id", function(req, res) {
  var id=req.params.id;
  var type=req.params.type;
  res.render("course", { id:id,type,type });
});

router.get("/videocall", function(req, res) {
  res.render("videocall", { title: "Express" });
});

router.get("/student/search_lecture", function(req, res) {
  res.render("searchlecture", { title: "Express" });
});

router.get("/student/search_page", function(req, res) {
  res.render("searchpage", { title: "Express" });
});

//Admin routes
router.get("/owner/login", function(req, res) {
  res.render("owner", { title: "Express" })
});

router.get("/owner/dashboard", function(req, res) {
  res.render("ownerdashboard", { title: "Express" });
});

module.exports = router;
