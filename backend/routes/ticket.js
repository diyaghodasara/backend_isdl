const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/ticket', bookingController.fetchDetails);
//console.log("routed to the correct place {$ busController.searchBuses}")
module.exports = router;
