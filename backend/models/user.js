import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    toDoList: [{type: Schema.Types.ObjectId, ref: 'ToDoItem'}],
    level: Number,
    experience: Number,
    rooms: [{type: Schema.Types.ObjectId, ref: 'Room'}],
    avatarID: String
});

const User = mongoose.model('User', userSchema);
export default User;