const Sequelize = require('sequelize');
var sequelize = require("../utils/mysql");

class UserExtend extends Sequelize.Model { };
UserExtend.init(
    {
        id: {
            type: Sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
        },
        project_name: {
            type: Sequelize.INTEGER(3),
        },
    },
    {
        sequelize,
        timestamps: false,
        modelName: "user_extend",
        tableName: "user_extend",
        underscored: true
    }
);

module.exports = UserExtend;