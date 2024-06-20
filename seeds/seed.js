const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Room = require('../models/Room');

dotenv.config();

const seedRooms = [
    {name: 'Green Room', color: 'green'},
    {name: 'Blue Room', color: 'blue'},
    {name: 'Red Room', color: 'red'},
];

mongoose.connect(`${process.env.MONGODB_URI}`, {})
    .then(async () => {
        console.log('Connected to MongoDB');

        await Room.deleteMany({});

        await Room.insertMany(seedRooms);

        console.log('Database seeded');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });
