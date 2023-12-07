const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BusSchema = new Schema({

    busType: {
        type: String
    },
    busID: {
        type: String
    },
    destination: {
        type: String
    },
    totalSeats: {
        type: String
    },
    availableSeats: {
        type: String
    },
    pricePerSeat: {
        type: String
    },
    date: {
        type: String
    },
    time:{
        type: String
    },}
    )

const bus = mongoose.model('bus', BusSchema)

module.exports = bus;