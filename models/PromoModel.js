const {Schema, model} = require('mongoose')

const Promo = new Schema({

    userData:{type:String},
    date:{type:Date},
    code:{type:String, required:true},
    description:{type:String},
    isActive:{type:Boolean},
    isActivate:{type:Boolean}

})

module.exports = model('Promo', Promo)