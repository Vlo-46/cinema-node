const bookingService = require('../services/bookingService');

const getBookingsByMovie = async (req, res) => {
    try {
        const bookings = await bookingService.getBookingsByMovie(req.params.movieId);
        res.status(200).send(bookings);
    } catch (error) {
        res.status(500).send(error);
    }
};

const bookSeat = async (req, res) => {
    try {
        const { movie, seat } = req.body;
        const booking = await bookingService.bookSeat(movie, seat);
        res.status(200).send(booking);
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    getBookingsByMovie,
    bookSeat
};
