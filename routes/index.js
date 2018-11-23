var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('home', {title: 'Express'});
});

router.get('/home', function(req, res) {
    res.render('home', {title: 'Express'});
});

router.get('/studentlogin', function(req, res) {
    res.render('studentlogin', {title: 'Express'});
});

router.get('/teacherlogin', function(req, res) {
    res.render('teacherlogin', {title: 'Express'});
});


module.exports = router;