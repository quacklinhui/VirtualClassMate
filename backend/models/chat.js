import mongoose from 'mongoose';

const chatSchema = mongoose.Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    message: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Chat = mongoose.model('Chat', chatSchema);
export default Chat;