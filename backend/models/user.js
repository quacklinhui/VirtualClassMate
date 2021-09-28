import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  toDoList: [{ type: mongoose.Schema.Types.ObjectId, ref: "ToDoItem" }],
  level: Number,
  experience: Number,
  rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Room" }],
  avatarID: String,
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const User = mongoose.model("User", userSchema);
export default User;
