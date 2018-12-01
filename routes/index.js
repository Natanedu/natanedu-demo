var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('home', {title: 'Express'});
});

router.get('/home', function(req, res) {
    res.render('home', {title: 'Express'});
});

router.get('/student/login', function(req, res) {
    res.render('studentlogin', {title: 'Express'});
});

router.get('/student/signup', function(req, res) {
    res.render('studentsignup', {title: 'Express'});
});

router.get('/teacher/login', function(req, res) {
    res.render('teacherlogin', {title: 'Express'});
});

router.get('/teacher/signup', function(req, res) {
    res.render('teachersignup', {title: 'Express'});
});

module.exports = router;