const mongoose = require('mongoose');

const RentalSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    vehicleId: {
        type: String,
        required: true
    },
    rentalStart: {
        type: Date,
        required: true
    },
    rentalEnd: {
        type: Date,
        required: true
    },
    totalCost: {
        type: Number,
        required: true
    },
    paymentStatus: {
        type: String,
        enum: ['success', 'pending'],
        default: 'pending'
    }
});

module.exports = rentel = mongoose.model('RentalSchema', RentalSchema);