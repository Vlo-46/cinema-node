const movieService = require('../services/movieService');

const createMovie = async (req, res) => {
    try {
        const movie = await movieService.createMovie(req.body);
        res.status(201).send(movie);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getAllMovies = async (req, res) => {
    try {
        const movies = await movieService.getAllMovies();
        res.status(200).send(movies);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getMoviesByRoom = async (req, res) => {
    try {
        const movies = await movieService.getMoviesByRoom(req.params.roomId);
        res.status(200).send(movies);
    } catch (error) {
        res.status(500).send(error);
    }
};

const deleteMovie = async (req, res) => {
    try {
        await movieService.deleteMovie(req.params.movieId);
        res.status(200).send({ message: 'Movie and related bookings deleted successfully' });
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createMovie,
    getAllMovies,
    getMoviesByRoom,
    deleteMovie
};
