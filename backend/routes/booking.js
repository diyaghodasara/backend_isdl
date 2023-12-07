const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");
//const {isAdmin, isAuthenticated, isSignedIn} = require("../controllers/auth");

router.post("/booking", bookingController.createBooking);

module.exports = router;