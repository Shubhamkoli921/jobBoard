const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    salary: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    requirements: [{
        type: String
    }],
    deadline: {
        type: Date
    },
    status: {
        type: String,
        default: "open",
        enum: ['open', 'closed', 'pending'],
        required: true
    },
    applicants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'applicant'
    }],
    jobType: {
        type: String,
        enum: ['fulltime', 'remote', 'parttime']
    },
    experienceLevel: {
        type: String,
        enum: ['entrylevel', 'intermediate', 'experience']
    }
});


const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
