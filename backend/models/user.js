import mongoose, { Schema } from "mongoose";

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    toDoList: [{type: Schema.Types.ObjectId, ref: 'ToDoItem'}],
    level: Number,
    experience: Number,
    rooms: [{type: Schema.Types.ObjectId, ref: 'Room'}],
    avatarID: String,
    friends: [{type: Schema.Types.ObjectId, ref: 'User'}]
});

const User = mongoose.model('User', userSchema);
export default User;