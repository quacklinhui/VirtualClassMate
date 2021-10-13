import Chat from '../models/chat.js';
import mongoose from 'mongoose';

export const getMessages = async (req, res) => {
    const { roomID } = req.params;

    try {
        const messages = await Chat.find({
            room: mongoose.Types.ObjectId(roomID)
        })
        res.status(200).json(messages);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const sendMessage = async (req, res) => {
    const roomID = mongoose.Types.ObjectId(req.params.roomID);
    const userID = mongoose.Types.ObjectId(req.body.userID);
    const message = req.body.message;
    try {
        const newMessage = new Chat({ room: roomID, user: userID, message: message, createdAt: new Date() });
        await newMessage.save();

        res.status(201).json(newMessage);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}