const log4js = require("log4js");

log4js.configure("config/log4js_config.json");

const log = log4js.getLogger();
const logInfo = log4js.getLogger("info");
const logError = log4js.getLogger("error");

module.exports = { log, logInfo, logError };