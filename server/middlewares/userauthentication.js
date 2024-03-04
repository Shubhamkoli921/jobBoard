// authMiddleware.js

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const authenticateUser = (req, res, next) => {
    // Check if the authorization header is present
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized: Missing or invalid token' });
    }

    // Extract the token from the authorization header
    const token = authHeader.split(' ')[1];

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        // Attach the decoded user information to the request object
        req.user = decoded;
        next(); // Proceed to the next middleware
    } catch (error) {
        // Token verification failed
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};

module.exports = authenticateUser;
