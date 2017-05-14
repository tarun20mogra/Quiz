var express = require('express');
var router = express.Router();
/*Get Index Page*/
router.get('/', function(req, res, next) {
    res.send("../views/index.html");
});
module.exports = router;