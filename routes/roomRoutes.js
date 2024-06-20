const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

router.post('/rooms', roomController.createRoom);
router.get('/rooms', roomController.getAllRooms);
router.delete('/rooms/:roomId', roomController.deleteRoom);

module.exports = router;
