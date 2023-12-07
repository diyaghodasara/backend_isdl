// routes/search.js
const express = require('express');
const router = express.Router();
const busController = require('../controllers/busController');

router.post('/search', busController.searchBuses);
//console.log("routed to the correct place {$ busController.searchBuses}")
module.exports = router;
