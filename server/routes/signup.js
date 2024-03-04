const express = require('express')
const router = express.Router()
const signup = require('../models/signup')
const {json}= require('body-parser')
const bcrypt = require('bcrypt')

    
router.post('/', async (req,res) =>{
    const {username,password ,role} = req.body

    try {
        const existinguser= await signup.findOne({username})
        if(existinguser){
            res.status(400).json({message:"user already exists"})
        }

        const hashPassword = await bcrypt.hash(password,10)
        const user = new signup({
            username,
            password:hashPassword,
            role
        })

        const result = await user.save()
        
        res.status(200).json({result:result, message:"user created successfully"})

        // res.status(200).json({message:"user created"})
    } catch (error) {
        res.status(400).json({message:error.message})
    }




});

module.exports = router