var mongoose = require('mongoose')

var Schema = mongoose.Schema

var categorySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    type: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    show: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Category', categorySchema)
