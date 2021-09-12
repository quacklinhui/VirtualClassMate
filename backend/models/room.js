import mongoose from 'mongoose';

const roomSchema = mongoose.Schema({
    users: [{type: Schema.Types.ObjectId, ref: 'User'}],
    toDoList: [{type: Schema.Types.ObjectId, ref: 'ToDoItem'}],
    chat: [{type: Schema.Types.ObjectId, ref: 'Chat'}]
});

const Room = mongoose.model('Room', roomSchema);
export default Room;