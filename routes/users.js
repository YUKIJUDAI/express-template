const express = require('express');
const Sequelize = require('sequelize');

const router = express.Router();
const { User, UserExtend } = require("../sqlModule/index");
const { log, logInfo, logError } = require("../utils/log");

UserExtend.belongsTo(User);

// 增
router.post('/addUser', function (req, res, next) {
    User.create({ name: req.body.name }).then(data => {
        res.json({ msg: "添加成功" });
    }).catch(err => {
        logError.error(err);
        res.json({ msg: err.message });
    });
});

// 删
router.post('/delUser', function (req, res, next) {
    User.destroy({ where: { id: req.body.id } }).then(data => {
        res.json({ msg: "删除成功" });
    }).catch(err => {
        logError.error(err);
        res.json({ msg: err.message });
    });
});

// 改
router.post('/editUser', function (req, res, next) {
    User.update({ name: req.body.name }, { where: { id: req.body.id } }).then(data => {
        res.json({ msg: "修改成功" });
    }).catch(err => {
        logError.error(err);
        res.json({ msg: err.message });
    });
});

// 查
router.get('/getUserList', function (req, res, next) {
    UserExtend.findAll({
        include: [{
            model: User,
            attributes: ['name']
        }]
    }).then(data => {
        res.json(data);
    }).catch(err => {
        logError.error(err);
        res.json({ msg: err.message });
    });
});

module.exports = router;
