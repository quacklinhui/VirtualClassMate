import mongoose from 'mongoose';

const chatSchema = mongoose.Schema({
    room: {type: mongoose.Schema.Types.ObjectId, ref: 'Room'},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    message: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Chat = mongoose.model('Chat', chatSchema);
export default Chat;