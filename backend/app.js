var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
var passport = require('passport');
const cors = require('cors');
const verifyToken = require('./middleware/verifyToken');
require('dotenv').config();

// const bodyparser=require("")

const app = express();


// Login and Register 
require('./auth/auth');
const login = require('./routes/login')
const loggedInPage = require('./routes/loggedInUser');
// ----------------------------------------------------

const searchRoute = require('./routes/search');

const registerRouter = require('./routes/register');
const stripeRoute = require("./routes/stripePayment");
const bookingRoute = require("./routes/booking")
const ticketRoute = require("./routes/ticket")
//--------------------------------------------------------


//DB Config
//connect to mongo
//---------------------------------------------
mongoose.connect(process.env.MongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch(err => {
        throw err
    })
//---------------------------------------------


const router = express.Router();
const userController = require('./controllers/userController');

// Define user routes
//router.get('/buses', userController.getAllBuses);
router.get('/search-buses', userController.searchBuses);

module.exports = router;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use('/', login);
//app.use('/booking', bookingRoute);
app.use('/', registerRouter);  // To register page 
app.use('/user', passport.authenticate('jwt', { session: false }), loggedInPage); //To Secure Route
app.use('/', searchRoute);
app.use('/', stripeRoute);
app.use('/', bookingRoute);
app.use('/', ticketRoute);
//verifying token

app.get('/api/user', verifyToken, (req, res) => {
    const userData = req.user;  
    res.json({ user: userData });
  });
  

module.exports = {app, router};
