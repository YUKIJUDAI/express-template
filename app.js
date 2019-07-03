var express = require('express');
var path = require('path');

var app = express();

//日志
var log4js = require('log4js');
var { log, logInfo, logError } = require("./utils/log");
app.use(log4js.connectLogger(log));
app.use(log4js.connectLogger(logInfo));
app.use(log4js.connectLogger(logError));

// 用JSON有效负载解析传入的请求
app.use(express.json());
// 用URL编码的有效负载解析传入的请求
app.use(express.urlencoded({ extended: false }));

// cookie
var cookieParser = require('cookie-parser');
app.use(cookieParser());

// html模板
var ejs = require('ejs');
app.engine('html', ejs.__express);
app.set('view engine', 'html');

// 静态资源
app.use(express.static(path.join(__dirname, 'public')));

// post 解析
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// 路由
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
