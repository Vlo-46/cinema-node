const roomService = require('../services/roomService');

const createRoom = async (req, res) => {
    try {
        const room = await roomService.createRoom(req.body);
        res.status(201).send(room);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getAllRooms = async (req, res) => {
    try {
        const rooms = await roomService.getAllRooms();
        res.status(200).send(rooms);
    } catch (error) {
        res.status(500).send(error);
    }
};

const deleteRoom = async (req, res) => {
    try {
        await roomService.deleteRoom(req.params.roomId);
        res.status(200).send({ message: 'Room and related movies and bookings deleted successfully' });
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createRoom,
    getAllRooms,
    deleteRoom
};
