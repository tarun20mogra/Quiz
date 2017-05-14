var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET Final page. */
router.get('/', function(req, res, next) {
   res.send('../views/leavePage.html');
});
module.exports = router;