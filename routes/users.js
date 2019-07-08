var express = require('express');
const Sequelize = require('sequelize');

var router = express.Router();
var sequelize = require("../utils/mysql");
var { log, logInfo, logError } = require("../utils/log");

const UserModule = sequelize.define(
    "user",
    {
        id: {
            type: Sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
        },
        name: Sequelize.STRING(25),
    },
    {
        timestamps: false,
        tableName: "user"
    }
);

// 增
router.post('/addUser', function (req, res, next) {
    UserModule.create({ name: req.body.name }).then(data => {
        res.json({ msg: "添加成功" });
    });
});

// 删
router.post('/delUser', function (req, res, next) {
    UserModule.destroy({ where: { id: req.body.id } }).then(data => {
        res.json({ msg: "删除成功" });
    })
});

// 改
router.post('/editUser', function (req, res, next) {
    UserModule.update({ name: req.body.name }, { where: { id: req.body.id } }).then(data => {
        res.json({ msg: "修改成功" });
    });
});

// 查
router.get('/getUserList', function (req, res, next) {
    UserModule.findAll().then(data => {
        res.json(data);
    });
});

module.exports = router;
