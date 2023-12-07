const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    seatNo: {
        type: String,
        //required: true,
        //unique: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        //ref: 'User',
        //required: true
    },
    busId: {
        type: Schema.Types.ObjectId,
        //ref: 'Bus',
       // required: true
    },
    date: {
        type: String,
        //default: Date.now
    },
    username: {
        type: String,
    },
    time: {
        type:String,
    },
    busNo:{
        type: String,
    },

});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;