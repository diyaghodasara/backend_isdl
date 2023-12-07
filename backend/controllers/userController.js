// Import necessary modules
const User = require('../models/User'); // Import the User model

// Controller to find user by email
exports.findUserByEmail = async (req, res) => {
  try {
    const { email } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      // If user not found, send an error response
      return res.status(404).json({ success: false, message: 'User not found with the provided email' });
    }

    // If user found, send the user details as a response
    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.error('Error finding user by email:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Export the router
//module.exports = router;
