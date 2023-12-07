const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");
//const {isAdmin, isAuthenticated, isSignedIn} = require("../controllers/auth");

router.post("/stripePayment", paymentController.makePayment);

module.exports = router;
