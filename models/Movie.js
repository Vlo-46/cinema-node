const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    poster: { type: String, required: true },
    schedule: [{ type: Date, required: true }],
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true }
});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;