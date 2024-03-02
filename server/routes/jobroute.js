const express = require('express')
const router = express.Router()
const Job = require('../models/job');
const { json } = require('body-parser');

router.get('/',async (req,res)=>{
    try {
        const jobs= await Job.find()
        res.status(200).json({jobs:jobs})

    } catch (error) {
        res.status(400).json({message:error.message})
    }
});

router.post('/',async(req,res)=>{
    const job = new Job({
        title:req.body.title,
        description:req.body.description,
        company:req.body.company,
        location:req.body.location,
        salary:req.body.salary,
        requirements:req.body.requirements,
        deadline:req.body.deadline,
        date:req.body.date,
        status:'pending',
    })

    try {
        const newJob = await job.save();
        res.status(200).json({ job: newJob, message: "New Job Added" });

    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

  

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const { title, description, company, location, salary, requirements, deadline, date, status } = req.body;

    try {
        // Find the job by ID and update its details
        const job = await Job.findByIdAndUpdate(id, { title, description, company, location, salary, requirements, deadline, date, status }, { new: true });
        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }

        res.status(200).json({ job, message: "Job updated" });
    } catch (error) {
        res.status(400).json({ message: "Error updating job" });
    }
});



router.delete('/:id',async(req,res)=>{
    const id = req.params.id
    try {
        const job = await Job.findByIdAndDelete(id)
        if(!job){
            res.status(400).json({message:"job not found"})
        }
        res.status(200).json({message:"job deleted"})
    } catch (error) {
        res.status(400).json({message:"error deleting job"})
        
    }
})


module.exports = router

