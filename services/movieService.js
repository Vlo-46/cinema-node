const Movie = require('../models/Movie');
const Booking = require('../models/Booking');

const createMovie = async (movieData) => {
    const movie = new Movie(movieData);
    await movie.save();

    const seats = [];
    for (let row = 1; row <= 3; row++) {
        for (let number = 1; number <= 10; number++) {
            seats.push({
                movie: movie._id,
                seat: { row, number },
                isBooked: false
            });
        }
    }

    await Booking.insertMany(seats);
    return movie;
};

const getAllMovies = async () => {
    return await Movie.find().populate('room');
};

const getMoviesByRoom = async (roomId) => {
    return await Movie.find({ room: roomId });
};

const deleteMovie = async (movieId) => {
    await Booking.deleteMany({ movie: movieId });
    return await Movie.findByIdAndDelete(movieId);
};

module.exports = {
    createMovie,
    getAllMovies,
    getMoviesByRoom,
    deleteMovie
};
