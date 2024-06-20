const Room = require('../models/Room');
const Movie = require('../models/Movie');
const Booking = require('../models/Booking');

const createRoom = async (roomData) => {
    const room = new Room(roomData);
    return await room.save();
};

const getAllRooms = async () => {
    return await Room.find();
};

const deleteRoom = async (roomId) => {
    await Movie.deleteMany({ room: roomId });
    await Booking.deleteMany({ movie: { $in: (await Movie.find({ room: roomId })).map(movie => movie._id) } });
    return await Room.findByIdAndDelete(roomId);
};

module.exports = {
    createRoom,
    getAllRooms,
    deleteRoom
};
