const Sequelize = require('sequelize');
var sequelize = require("../utils/mysql");

const UserModule = sequelize.define(
    "user",
    {
        id: {
            type: Sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING(25),
            validate: {
                is: {
                    args: ["^[a-z]+$", 'i'],
                    msg: "只允许添加字母"
                }
            }
        },
    },
    {
        timestamps: false,
        tableName: "user",
        underscored: true
    }
);

module.exports = UserModule;