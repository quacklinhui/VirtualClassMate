import Room from '../models/room.js';

export const getRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        console.log(rooms);
        res.status(200).json(rooms);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createRoom = (req, res) => {
    res.send("Create a room");
}