import mongoose from 'mongoose';

const roomSchema = mongoose.Schema({
    name: String,
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    members: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    toDoList: [{type: mongoose.Schema.Types.ObjectId, ref: 'ToDoItem'}],
    chat: [{type: mongoose.Schema.Types.ObjectId, ref: 'Chat'}]
});

const Room = mongoose.model('Room', roomSchema);
export default Room;