const {Schema, model} = require('mongoose')

const LogModel = new Schema({
    from:{type:String},
    date:{type:Date},
    description:{type:String},
})

module.exports = model('log', LogModel)