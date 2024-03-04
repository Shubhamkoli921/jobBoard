// const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const login = require('../models/signup')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config();



router.post("/login", async(req,res)=>{
    const {username,password} = req.body
    try {
       const user = await login.findOne({username})
       if(!user){
           return res.status(400).json({message:"user not found"})
       }

       const isPassword = await bcrypt.compare(password,user.password)
       if(!isPassword){
           return res.status(400).json({message:"invalid password"})
       }

       const token = jwt.sign({username:user.username,userId:user._id,role:user.role},process.env.SECRET_KEY)
       res.status(200).json({message:"login success",token})
    } catch (error) {
        res.status(400).json({message:error.message})
    }

})

router.get('/logout', (req, res) => {
    // req.logout();
    res.status(200).json({ message: 'Logout successful' });
});


module.exports = router