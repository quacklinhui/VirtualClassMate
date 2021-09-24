import Room from '../models/room.js';

export const getRoom = async (req, res) => {
    const { id } = req.params;

    try {
        const room = await Room.findById(id);
        console.log(room);
        res.status(200).json(room);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getRooms = async (req, res) => {

    try {
        const rooms = await Room.find();

        res.status(200).json(rooms);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createRoom = async (req, res) => {
    const body = req.body;
    const newRoom = new Room(body);
    try {
        await newRoom.save();

        res.status(201).json(newRoom);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const manageAccess = async (req, res) => {
    
}