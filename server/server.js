const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const authenticateUser = require('./middlewares/userauthentication');

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log("error connecting to MongoDB", error);
    });

const jobroute = require('./routes/jobroute');
// const userroutes = require('./routes/userroutes');
const signup = require('./routes/signup');
const application = require('./routes/application');
const login = require('./routes/login');

app.use('/job', authenticateUser, jobroute);
app.use('/auth', login);
app.use('/signup', signup);
app.use('/job', authenticateUser, application);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on this http://localhost:${PORT} port`);
});
