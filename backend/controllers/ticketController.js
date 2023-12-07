// Assuming you have a Booking model
const Booking = require('../models/Bookings');

exports.findBus = async (req, res) => {
  try {
    const { userId, busId } = req.body;
    console.log(userId, busId);
    // Find all bookings for the given user and bus, sorted by createdAt in descending order
    const allBookings = await Booking.find({ userId, busId })
      // .sort({ createdAt: -1 })
      // .populate('busId'); // Assuming there is a reference to the busId in the Booking model

    console.log(allBookings);

    if (allBookings.length > 0 && allBookings[0]) {
      const lastBookedBus = allBookings[0]; // Get the latest booked bus
      res.status(200).json({ success: true, latestBookedBus: lastBookedBus });
    } else {
      res.status(404).json({ success: false, message: 'No booked buses found for the user and bus' });
    }
  } catch (error) {
    console.error('Error finding latest booked bus:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};