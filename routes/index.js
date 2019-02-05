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
router.get("/room/:type/:hash", function(req, res) {
  var hash=req.params.hash;
  var type=req.params.type;
  var id=req.params.id;
  if(req.params.teacher){
    var teacher=req.params.teacher;
    var price=req.params.price;
    res.render("course", { id:hash,type:type,lecture:id,teacher:teacher,price:price });
  }else{
    res.render("course", { id:hash,type:type,lecture:id });
  }
  
  
  
});

router.get("/videocall", function(req, res) {
  res.render("videocall", { title: "Express" });
});

//Admin routes
router.get("/owner/login", function(req, res) {
  res.render("owner", { title: "Express" })
});

/*
router.get("/owner/dashboard", function(req, res) {
  res.render("ownerdashboard", { title: "Express" });
});
*/

module.exports = router;
