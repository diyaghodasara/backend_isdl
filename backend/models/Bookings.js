const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    seatNo: {
        type: String,
        //required: true,
        //unique: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        //required: true
    },
    busId: {
        type: Schema.Types.ObjectId,
        ref: 'Bus',
       // required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;