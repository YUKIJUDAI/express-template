var path = require('path');
var express = require('express');
var router = express.Router();

//允许跨域
router.all("*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", " 3.2.1");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

/* GET home page. */
router.get("/", function(req, res, next) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
});

module.exports = router;
