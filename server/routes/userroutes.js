const express = require('express');
const router = express.Router();
const login = require('../models/signup');
const { json } = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

router.post('/', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await login.findOne({ username });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ username: user.username }, process.env.SECRET_KEY);

        res.status(200).json({ message: "Login success", token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(400).json({ message: "Internal server error" });
    }
});

module.exports = router;
