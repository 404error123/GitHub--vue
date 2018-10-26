var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/github', {useNewUrlParser:true}, function(err){
    　　if(err){
    　　　　console.log('Connection Error:' + err)
    　　}else{
    　　　　console.log('Connection success!') }
    })

var Schema = mongoose.Schema

var userSchema = new Schema({
    nickname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    realname: {
        type: String
    },
    imageURL: {
        type: String,
        default: '/public/img/hd1.png'
    },
    website: {
        type: String
    }
})

module.exports = mongoose.model('User', userSchema)
