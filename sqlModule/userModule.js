const Sequelize = require('sequelize');
var sequelize = require("../utils/mysql");

class User extends Sequelize.Model { };
User.init(
    {
        id: { type: Sequelize.INTEGER(10), primaryKey: true, autoIncrement: true },
        name: { type: Sequelize.STRING(25), validate: { is: { args: ["^[a-z]+$", 'i'], msg: "只允许添加字母" } } },
    },
    {
        sequelize,
        timestamps: false,
        modelName: "user",
        tableName: "user",
        underscored: true
    }
);

module.exports = User;