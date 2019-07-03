var mysql = require("mysql");
var mysqlConfig = require("../config/mysql_config");
var { log, logInfo, logError } = require("../utils/log");

// 使用连接池，避免开太多的线程，提升性能
var pool = mysql.createPool(mysqlConfig);

/**
 * 封装query之sql带不占位符func
 */
function query(sql, callback) {
    pool.getConnection(function (err, connection) {
        connection.query(sql, function (err, rows) {
            callback(err, rows);
            //释放链接
            connection.release();
        });
    });
}

/**
 * 封装query之sql带占位符func
 */
function queryArgs(sql, args, callback) {
    pool.getConnection(function (err, connection) {
        connection.query(sql, args, function (err, rows) {
            callback(err, rows);
            //释放链接
            connection.release();
        });
    });
}

//exports
module.exports = {
    query: query,
    queryArgs: queryArgs
};