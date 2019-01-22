var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  res.render("home", { title: "Express" });
});

router.get("/home", function(req, res) {
  res.render("home", { title: "Express" });
});

router.get("/student/login", function(req, res) {
  res.render("studentlogin", { title: "Express" });
});

router.get("/student/signup", function(req, res) {
  res.render("studentsignup", { title: "Express" });
});

router.get("/teacher/login", function(req, res) {
  res.render("teacherlogin", { title: "Express" });
});

router.get("/teacher/signup", function(req, res) {
  res.render("teachersignup", { title: "Express" });
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

router.get("/videocall", function(req, res) {
  res.render("videocall", { title: "Express" });
});

router.get("/student/search_lecture", function(req, res) {
  res.render("searchlecture", { title: "Express" });
});

router.get("/student/search_page", function(req, res) {
  res.render("searchpage", { title: "Express" });
});

module.exports = router;
