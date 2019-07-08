const Sequelize = require('sequelize');
var sequelize = require("../utils/mysql");

const UserExtendModule = sequelize.define(
    "user_extend",
    {
        id: {
            type: Sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: Sequelize.INTEGER(10),
        },
        age: {
            type: Sequelize.INTEGER(3),
        },
    },
    {
        timestamps: false,
        tableName: "user_extend",
        underscored: true
    }
);

module.exports = UserExtendModule;