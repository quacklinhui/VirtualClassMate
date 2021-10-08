import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  password: String,
  email: String,
  toDoList: [{ type: mongoose.Schema.Types.ObjectId, ref: "ToDoItem" }],
  level: Number,
  experience: Number,
  rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Room" }],
  avatarID1: String,
  avatarID2: String,
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

userSchema.index({ username: "text" });
const User = mongoose.model("User", userSchema);
export default User;
