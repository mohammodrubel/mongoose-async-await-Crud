const mongoose = require('mongoose')
const userSchemas =  mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    mobileNumber:Number,
    address:{
        type:String,
        required:true
    }
})

module.exports = userSchemas