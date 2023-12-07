const asyncHandler = require('express-async-handler');
const Bus = require('../models/Buses');

// Update a specific bus by ID
const updateBusInfo = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { text } = req.body;

    try {
        const updatedBus = await Bus.findByIdAndUpdate(
            id,
            { text },
            { new: true, runValidators: true }
        );

        if (!updatedBus) {
            return res.status(404).json({ error: 'Bus not found' });
        }

        res.status(200).json(updatedBus);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete a specific bus by ID
const deleteBus = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const deletedBus = await Bus.findByIdAndDelete(id);

        if (!deletedBus) {
            return res.status(404).json({ error: 'Bus not found' });
        }

        res.status(200).json({ message: 'Bus deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Read a specific bus by ID
const getBusInfo = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const bus = await Bus.findById(id);

        if (!bus) {
            return res.status(404).json({ error: 'Bus not found' });
        }

        res.status(200).json(bus);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = {
    updateBusInfo,
    deleteBus,
    getBusInfo,
};
