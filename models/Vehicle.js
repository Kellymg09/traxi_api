const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    // _id: { type: String, required: true },
    plate: { type: String, required: true },
    eco_number: { type: String, required: true },
    vim: { type: String, required: true },
    seats: { type: Number, required: true },
    sec: { type: String, required: true },
    sec_number: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    color: { type: String, required: true },
    lng: { type: Number, required: true },
    lat: { type: Number, required: true }
});

module.exports = mongoose.model("Vehicle", vehicleSchema, "vehicle");