const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authenticateUser = require('../middleware/authenticateUser');
const authorize = require('../middleware/authorize');

// Apply authentication middleware to all admin routes
router.use(authenticateUser);

// Apply authorization middleware to admin-specific routes
router.put('/buses/:id', authorize('admin'), adminController.updateBusInfo);
router.delete('/buses/:id', authorize('admin'), adminController.deleteBus);
router.get('/buses/:id', authorize('admin'), adminController.getBusInfo);

module.exports = router;