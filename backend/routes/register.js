var express = require('express');
var router = express.Router();
var User = require('../models/User.js');
var bcrypt = require('bcryptjs');
var moment = require('moment');
var bodyParser = require('body-parser');


router.get('/register', (req, res) => {
    // Simple GET request handling
    res.send("Register Here");
});

// Body-Parser middleware for parsing JSON
var jsonParser = bodyParser.json();

router.post('/register', jsonParser, async (req, res) => {
    // Validate email format using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(req.body.email)) {
        // Return a 400 status with an error message for invalid email format
        console.log({error})
        return res.status(400).json({ error: 'Invalid email format' });
        
    }

    // Validate phone number length
    const phoneNumber = req.body.mobile;
    if (isNaN(phoneNumber) || phoneNumber.length !== 10) {
        // Return a 400 status with an error message for invalid phone number format
        return res.status(400).json({ error: 'Invalid phone number format. It should be 10 digits.' });
    }

    // Hash Password 
    const hashPassword = await bcrypt.hash(req.body.password, 10);

    // Create a user object with validated and hashed data
    let user = {
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
        mobile: req.body.mobile,
    };

    // Create a new User instance with the user object
    let newUser = new User(user);

    // Save the new user to the database
    newUser.save((err, result) => {
        if (err) {
            // Log any errors and return a 500 status with an error message
            console.log(err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            // Return a 201 status with the saved user data in case of success
            res.status(201).json(result);
        }
    });
});

module.exports = router;
