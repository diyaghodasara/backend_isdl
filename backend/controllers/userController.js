const asyncHandler = require('express-async-handler');
const Bus = require('../models/Buses');

const getAllBuses = asyncHandler(async (req, res) => {
    const buses = await Bus.find();
    res.status(200).json({ buses });
});

const searchBuses = asyncHandler(async (req, res) => {
    const { source, destination } = req.query;

    if (!source || !destination) {
        return res.status(400).json({ error: 'Source and destination are required for search.' });
    }

    const filteredBuses = await Bus.find({ source, destination });
    res.json(filteredBuses);
});

module.exports = {
    getAllBuses,
    searchBuses,
};
