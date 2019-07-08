const express = require('express');
const Sequelize = require('sequelize');

const router = express.Router();
const { UserModule, UserExtendModule } = require("../sqlModule/index");
const { log, logInfo, logError } = require("../utils/log");

UserModule.hasMany(UserExtendModule);
UserExtendModule.belongsTo(UserModule, { foreignKey: 'user_id' });

// 增
router.post('/addUser', function (req, res, next) {
    UserModule.create({ name: req.body.name }).then(data => {
        res.json({ msg: "添加成功" });
    }).catch(err => {
        logError.error(err);
        res.json({ msg: err.message });
    });
});

// 删
router.post('/delUser', function (req, res, next) {
    UserModule.destroy({ where: { id: req.body.id } }).then(data => {
        res.json({ msg: "删除成功" });
    }).catch(err => {
        logError.error(err);
        res.json({ msg: err.message });
    });
});

// 改
router.post('/editUser', function (req, res, next) {
    UserModule.update({ name: req.body.name }, { where: { id: req.body.id } }).then(data => {
        res.json({ msg: "修改成功" });
    }).catch(err => {
        logError.error(err);
        res.json({ msg: err.message });
    });
});

// 查
router.get('/getUserList', function (req, res, next) {
    UserModule.findAll().then(data => {
        res.json(data);
    }).catch(err => {
        logError.error(err);
        res.json({ msg: err.message });
    });
});

module.exports = router;
