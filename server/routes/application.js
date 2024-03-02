const multer = require('multer');
const express = require('express');
const router = express.Router();
const Application = require('../models/applicant');
const Job = require('../models/job');
const fs = require('fs');

// Define Multer storage options
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Keep original file name
    }
});

// Multer upload configuration
const upload = multer({ storage: storage });

// POST route for applying to a job with resume and cover letter
router.post('/:jobId/apply', upload.fields([{ name: 'resume', maxCount: 1 }, { name: 'coverLetter', maxCount: 1 }]), async (req, res) => {
    const jobId = req.params.jobId;
    const { name, email } = req.body;
    const resumeFile = req.files['resume'] ? req.files['resume'][0] : null;
    const coverLetterFile = req.files['coverLetter'] ? req.files['coverLetter'][0] : null;

    try {
        // Find the job by ID to check its status
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }

        // Check if the job status is closed
        if (job.status === 'closed') {
            return res.status(403).json({ message: "Applications are closed for this job" });
        }

        // Check if both resume and cover letter files exist
        if (!resumeFile || !coverLetterFile) {
            let message = '';
            if (!resumeFile && !coverLetterFile) {
                message = "Resume and cover letter are required";
            } else if (!resumeFile) {
                message = "Resume is required";
            } else {
                message = "Cover letter is required";
            }
            return res.status(400).json({ message });
        }

        // Process the application normally if everything is valid

        const resumeData = {
            data: fs.readFileSync(resumeFile.path),
            contentType: 'application/pdf'
        };

        const coverLetterData = {
            data: fs.readFileSync(coverLetterFile.path),
            contentType: 'text/plain'
        };

        const applicant = new Application({
            jobId,
            name,
            email,
            resume: resumeData,
            coverLetter: coverLetterData
        });

        const savedApplicant = await applicant.save();

        // Update the job with the applicant's details
        job.applicants.push(savedApplicant._id);
        await job.save();

        res.status(200).json({ message: "Application submitted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error applying for job" });
    }
});




module.exports = router;
