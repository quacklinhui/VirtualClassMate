import Chat from '../models/chat.js';
import mongoose from 'mongoose';

export const sendMessage = async (req, res) => {
    const roomID = mongoose.Types.ObjectId(req.params.roomID);
    const userID = mongoose.Types.ObjectId(req.body.userID);
    const message = req.body.message;
    try {
        const newMessage = new Chat({ room: roomID, user: userID, message: message });
        await newMessage.save();

        res.status(201).json(newMessage);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}