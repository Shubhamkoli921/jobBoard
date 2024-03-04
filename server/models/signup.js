const mongoose = require('mongoose')

const Signup = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['recruiter','user'],
        default:'user'
    }
})

const sign = mongoose.model('signup',Signup)

module.exports = sign