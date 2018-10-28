var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var router = require('./router/router');

var app = express();

app.use(bodyParser.json());

app.use(session({
    secret: 'itcast',
    resave: true,
    rolling: true,
    cookie: {
        maxAge: 60*1000*60*24
    },
    saveUninitialized: false 
}))
// 设置跨域
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, accept, content-type, xxxx");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(router);

app.use(function(err, req, res, next) {
    res.status(500).json({
        err_code: 500,
        message: err.message
    })
}),

app.listen(5000, function () {
    console.log('running...')
})