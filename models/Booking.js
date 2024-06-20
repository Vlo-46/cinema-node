const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
    seat: {
        row: { type: Number, required: true },
        number: { type: Number, required: true }
    },
    isBooked: { type: Boolean, default: false }
});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;