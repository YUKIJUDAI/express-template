var express = require('express');
const Sequelize = require('sequelize');

var router = express.Router();
var sequelize = require("../utils/mysql");
var { log, logInfo, logError } = require("../utils/log");

const UserModule = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    name: Sequelize.STRING(25),
}, { timestamps: false });

// 增
// router.post('/addUser', function (req, res, next) {
//     db.queryArgs("INSERT INTO user (name) VALUES (?)", [req.body.name], function (err, data) {
//         !err && res.send("添加成功");
//     });
// });

// 删
// router.post('/delUser', function (req, res, next) {
//     db.queryArgs("DELETE FROM user WHERE id = ?", [req.body.id], function (err, data) {
//         !err && res.send("删除成功");
//     });
// });

// 改
// router.post('/editUser', function (req, res, next) {
//     db.queryArgs("UPDATE user SET name = ? WHERE id = ?", [req.body.name, req.body.id], function (err, data) {
//         !err && res.send("修改成功");
//     });
// });

// 查
router.get('/getUserList', function (req, res, next) {
    UserModule.findAll().then(data => {
        log.info(data);
        res.json(users);
    });
});

module.exports = router;
