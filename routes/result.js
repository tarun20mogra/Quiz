var express = require('express');
var router = express.Router();
var fs = require('fs');
//var app=express();

console.log("inside Result.js");
/* GET other page. */
router.get('/', function(req, res, next) {
  console.log("i am in result.js");
    res.send('../views/result.html');
});


module.exports = router;

