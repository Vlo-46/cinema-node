const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const roomRoutes = require('./routes/roomRoutes');
const movieRoutes = require('./routes/movieRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

app.use('/api', roomRoutes);
app.use('/api', movieRoutes);
app.use('/api', bookingRoutes);

mongoose.connect(`${process.env.MONGODB_URI}`, {});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
