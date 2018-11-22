var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('home', {title: 'Express'});
});

router.get('/home', function(req, res) {
    res.render('home', {title: 'Express'});
});
router.get('/login', function(req, res) {
    res.render('login', {title: 'Express'});
});

module.exports = router;