var express = require('express');
var router = express.Router();

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

//---------------------Get Final Page--------------------//
router.get('/views/leavePage.html', function(req, res, next) {
    res.render('leavePage.html');
});


module.exports = router;
