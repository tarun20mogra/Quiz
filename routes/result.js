var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET other page. */
router.get('/', function(req, res, next) {
    res.send('../views/result.html');
});


module.exports = router;

