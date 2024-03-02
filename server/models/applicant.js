const mongoose = require('mongoose')

const applicantSchema = new mongoose.Schema({
    jobId:{
        type:mongoose.Schema.Types.ObjectId,'ref':'job'
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    resume:{
        data:Buffer,
        contentType:String

    },
    coverLetter:{
        data:Buffer,
        contentType:String
    },
    date:{
        type:Date,
        default:Date.now
    }
})


module.exports = mongoose.model('applicant',applicantSchema)
