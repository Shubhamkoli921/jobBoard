const Express = require('express')
const bodyParser = require('body-parser')
const Mongoose = require('mongoose')
const app = Express()

app.use(bodyParser.json())

Mongoose.connect('mongodb+srv://shubhamkk922:HWBIQBneTx4nfkTG@jobboard.ryppst8.mongodb.net/?retryWrites=true&w=majority&appName=JobBoard')
.then(() => {
    console.log('Connected to MongoDB')
}).catch((error) => {
    console.log("error connecting to MongoDB",error)

})

const jobroute = require('./routes/jobroute')
app.use('/job',jobroute)

const userroutes = require('./routes/userroutes')
app.use('/login',userroutes)

const signup = require('./routes/signup')
app.use('/signup',signup)


const application = require('./routes/application')
app.use('/job',application)

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
