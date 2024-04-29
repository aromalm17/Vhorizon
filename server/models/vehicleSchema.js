const mongoose = require("mongoose")

const vehicleSchema = new mongoose.Schema({

    vehicle_type: {
        type: String,
        enum: ['car', 'bike'],
        required: true
    },
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    pricePerDay: {
        type: Number,
        required: true
    },
    make: {
        type: String,
        required: true
    },
    availability: {
        type: String,
        enum: ['avilable', 'not-available'],
    },
    location: {
        type: String,
        required: true
    },
    carType: {
        type: String,
        enum: ['Sedan', 'SUV', 'Hatchback', 'Luxury Car', 'Convertible', 'Coupe', 'Minivan', 'Van'],
        required: true
    },
    biketype: {
        type: String,
        enum: ['withGear', 'withoutGear'],
        required: true
    },
    fuerType: {
        type: String,
        enum: ['diesel', 'electric', 'petrol', 'hybrid'],
        required: true
    }
});



module.exports = vehicle = mongoose.model("vehicles", vehicleSchema)