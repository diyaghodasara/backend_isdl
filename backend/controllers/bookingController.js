// bookingController.js
const Booking = require('../models/Bookings'); // Import your Booking model

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
   const { busId, seatNo } = req.body;
   console.log(busId,seatNo);
    // Assuming you have a Booking model with fields like busId and seatNo
    const booking = new Booking({
      busId,
      seatNo,
      // Add other fields as needed
    });

    // Save the booking to the database
    await booking.save();

    // Respond with success
    return res.status(201).json({ success: true, message: 'Booking created successfully',booking:booking });
  } catch (error) {
    console.error('Error creating booking:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
