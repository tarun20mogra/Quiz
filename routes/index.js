var express = require('express');
var router = express.Router();
console.log("inside indexjs");
//-------------------- GET home page. -----------------------------//
router.get('/', function(req, res, next) {
    res.render('index.html');
});
//-------------------------- Get Result Page ---------------------//
router.get('/views/result.html', function(req, res, next) {

    res.render('result.html');
});

//---------------------Get Back the Home Page--------------------//
router.get('/views/index.html', function(req, res, next) {
    res.render('index.html');
});

module.exports = router;
