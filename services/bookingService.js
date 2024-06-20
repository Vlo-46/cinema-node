const Booking = require('../models/Booking');

const getBookingsByMovie = async (movieId) => {
    return await Booking.find({ movie: movieId });
};

const bookSeat = async (movieId, seat) => {
    return await Booking.findOneAndUpdate(
        { movie: movieId, 'seat.row': seat.row, 'seat.number': seat.number },
        { $set: { isBooked: true } },
        { new: true, upsert: true }
    );
};

module.exports = {
    getBookingsByMovie,
    bookSeat
};
