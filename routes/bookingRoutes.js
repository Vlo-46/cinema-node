const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.get('/movies/:movieId/seats', bookingController.getBookingsByMovie);
router.post('/book', bookingController.bookSeat);

module.exports = router;
