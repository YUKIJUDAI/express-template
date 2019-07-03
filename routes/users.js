var express = require('express');
var router = express.Router();
var db = require("../utils/mysql");
var { log, logInfo, logError } = require("../utils/log");

// 增
router.post('/addUser', function (req, res, next) {
    db.query("INSERT INTO user (name) VALUES ('" + req.body.name + "')", function (err, data) {
        !err && res.send("添加成功");
    });
});

// 删
router.post('/delUser', function (req, res, next) {
    db.query("DELETE FROM user WHERE id =" + req.body.id, function (err, data) {
        !err && res.send("删除成功");
    });
});

// 改
router.post('/editUser', function (req, res, next) {
    db.query("UPDATE user SET name = '" + req.body.name + "' WHERE id =" + req.body.id, function (err, data) {
        !err && res.send("修改成功");
    });
});

// 查
router.get('/getUserList', function (req, res, next) {
    db.query("SELECT * FROM user", function (err, data) {
        res.json(data);
    });
});

module.exports = router;
