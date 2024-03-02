// Assuming you have already configured Passport.js in your application
const passport = require('passport');

// Example authentication middleware using Passport.js
const authenticateUser = (req, res, next) => {
    // Passport.js adds the isAuthenticated() method to request object
    if (req.isAuthenticated()) {
        return next(); // User is authenticated, proceed to the next middleware
    } else {
        // User is not authenticated, return unauthorized status
        return res.status(401).json({ message: "Unauthorized access" });
    }
};

module.exports = authenticateUser;