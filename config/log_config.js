var log4js = require("log4js");

log4js.configure("config/log4js_config.json");

var log = log4js.getLogger();
var logInfo = log4js.getLogger("info");
var logError = log4js.getLogger("error");

module.exports = { log, logInfo, logError };