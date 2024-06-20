const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.post('/movies', movieController.createMovie);
router.get('/movies', movieController.getAllMovies);
router.get('/rooms/:roomId/movies', movieController.getMoviesByRoom);
router.delete('/movies/:movieId', movieController.deleteMovie);

module.exports = router;
