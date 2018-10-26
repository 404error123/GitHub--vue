var express = require('express')
var User = require('./models/user')

var router = express.Router()

router.post('/login', function(req, res) {
    var body = req.body;
    User.findOne({
        nickname: body.name,
        password: body.pwd
    }).then(function(result, error) {
        if(error){
            return res.status(200).json({
                err_code: 500,
                message: '错误'
            })
        }
        if(result) {
            if(!req.session) {
                req.session.isLogin = 'user';
            }
            const user = {
                imageUrl: result.imageURL,
                nickname: result.nickname,
                username: result.realname,
                website: result.website
            }
            return res.status(200).json({
                err_code: 0,
                message: 'success',
                data: JSON.stringify(user)
            })
        } else {
            return res.status(200).json({
                err_code: 1,
                message: '用户名或密码错误'
            })
        }     
    }).catch(function(error) {
        console.log(error)
    }) 
})

router.get('/signout', function(req, res) {
    req.session.isLogin = '',
    res.status(200).json({
        err_code: 2,
        message: 'sign out'
    })
})

router.get('/overview', function(req, res) {
    if(req.session) {
        var data = [
            { title: 'Demo', des: '这是第一个测试', category: 'css' },
            { title: 'Demo', des: '这是第二个测试', category: 'js' },
            { title: 'Demo', des: '这是第三个测试', category: 'css' },
            { title: 'Demo', des: '这是第四个测试', category: 'css' },
            { title: 'Demo', des: '这是第五个测试', category: 'html' },
            { title: 'Demo', des: '这是第六个测试', category: 'css' },                
        ];
        res.status(200).json({
            err_code: 1,
            message: 'success',
            data: JSON.stringify(data)
        })
    }
})

module.exports = router