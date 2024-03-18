const express = require('express')
const router = express.Router()
const Job = require('../models/job');
const { json } = require('body-parser');

// Modify your router to handle filtering
router.get('/', async (req, res) => {
    try {
        let query = {};
        const { jobType, experienceLevel } = req.query;

        if (jobType && jobType.length > 0) {
            query.jobType = { $in: jobType };
        }

        if (experienceLevel && experienceLevel.length > 0) {
            query.experienceLevel = { $in: experienceLevel };
        }

        const jobs = await Job.find(query);
        res.status(200).json({ jobs });
    } catch (error) {
        res.status(400).json({ message: error.message, msg:"Something went wrong" });
    }
});


router.post('/', async (req, res) => {
    const { title, description, company, location, salary, requirements, deadline, date, jobType, experienceLevel } = req.body;

    const job = new Job({
        title,
        description,
        company,
        location,
        salary,
        requirements,
        deadline,
        date,
        status: 'pending',
        jobType, // Add jobType
        experienceLevel // Add experienceLevel
    });

    try {
        const newJob = await job.save();
        res.status(200).json({ job: newJob, message: "New Job Added" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});




router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const { title, description, company, location, salary, requirements, deadline, date, status,jobType ,experienceLevel } = req.body;

    try {
        // Find the job by ID and update its details
        const job = await Job.findByIdAndUpdate(id, { title, description, company, location, salary, requirements, deadline, date, status,jobType ,experienceLevel }, { new: true });
        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }

        res.status(200).json({ job, message: "Job updated" });
    } catch (error) {
        res.status(400).json({ message: "Error updating job" });
    }
});



router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const job = await Job.findByIdAndDelete(id)
        if (!job) {
            res.status(400).json({ message: "job not found" })
        }
        res.status(200).json({ message: "job deleted" })
    } catch (error) {
        res.status(400).json({ message: "error deleting job" })

    }
})


module.exports = router

