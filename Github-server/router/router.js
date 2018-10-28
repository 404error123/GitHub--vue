var express = require('express')
var User = require('../models/user')
var Category = require('../models/categories')

var router = express.Router()

router.post('/login', function(req, res) {
    var body = req.body;
    User.findOne({
        nickname: body.name,
        password: body.pwd
    }).then(function(result) {
        var user, err_code, message;
        if(result) {
            if(!req.session.isLogin) {
                req.session.isLogin = 'user';
            }
            user = {
                imageUrl: result.imageURL,
                nickname: result.nickname,
                username: result.realname,
                website: result.website
            }
            err_code = 0,
            message = 'success';
        } else {
            err_code = 1;
            message = '用户名或密码错误';
            user = null;
        }
        res.status(200).json({
            err_code: err_code,
            message: message,
            data: JSON.stringify(user)
        })  
    }).catch(function(error) {
        console.log(error);
        res.status(500).json({
            err_code: 500,
            message: '错误'
        })
    }) 
})

router.get('/signout', function(req, res) {
    req.session.isLogin = '',
    res.status(200).json({
        err_code: 2,
        message: 'sign out'
    })
})

// 请求拦截，登录状态验证
router.all('*', function(req, res, next) {
    if(req.session.isLogin) {
        next();
    } else {
        res.status(200).json({
            err_code: 2,
            message: '重新登录'
        })
    }
})

router.get('/overview', function(req, res) {
    Category.find({ show: true }).then((request) => {
        var data = [];
        if(request) {
            for( req of request) {
                var a = {
                    title: req.title,
                    description: req.description,
                    type: req.type
                };
                data.push(a);
            }
        } else {
            data = null;
        }
        res.status(200).json({
            err_code: 1,
            message: 'success',
            data: JSON.stringify(data)
        })
    }).catch((error) => {
        console.log(error);
        res.status(200).json({
            err_code: 500,
            message: 'error'
        })
    })
})

module.exports = router