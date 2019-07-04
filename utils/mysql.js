var mysql = require("mysql");
var Sequlize = require("sequelize");
var mysqlConfig = require("../config/mysql_config");
var { log, logInfo, logError } = require("../utils/log");


const sequelize = new Sequlize(
    mysqlConfig.database,
    mysqlConfig.user,
    mysqlConfig.password,
    {
        host: mysqlConfig.host,
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
)
sequelize.authenticate()
    .then(() => {
        log.info("数据库连接成功");
    })
    .catch(err => {
        logError.error(err);
    });

module.exports = sequelize;  
