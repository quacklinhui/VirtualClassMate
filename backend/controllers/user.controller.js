import User from "../models/user.js";
import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

import { sha256, sha224 } from "js-sha256";

export const login = async (req, res) => {
  try {
    //const username = req.body.username;
    const email = req.body.email;
    const hashPassword = sha256.update(req.body.password).hex();
    const user = await User.findOne({ email: email });
    if (user != null) {
      if (user.password == hashPassword) {
        res.status(200).json(user); // login successfull
      } else {
        res.status(200).json({ status: false, source: "password" }); // wrong password
      }
    } else {
      res.status(200).json({ status: false, source: "email" }); // email does not exist
    }
  } catch (error) {
    res.status(400).json("Error when finding users! Error: " + error);
  }
};

// 2 default avatar IDs are hard coded
export const register = async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const hashPassword = sha256.update(req.body.password).hex();
  // const avatarID1 = req.body.avatarID1;
  // const avatarID2 = req.body.avatarID2;
  //const date = Date.parse(req.body.date);

  let is_username_exist = false;
  let is_email_exist = false;

  try {
    // check if the username exists
    let user = await User.findOne({ username: username });
    if (user != null) {
      res.status(200).json({ status: false, source: "username" }); // username exists
      is_username_exist = true;
      return;
    }
  } catch (error) {
    res.status(400).json("Error when finding users! Error: " + error);
    return;
  }

  try {
    // check if the email exists
    let user = await User.findOne({ email: email });
    if (user != null) {
      res.status(200).json({ status: false, source: "email" }); // email exists
      is_email_exist = true;
      return;
    }
  } catch (error) {
    res.status(400).json("Error when finding users! Error: " + error);
    return;
  }

  // add new user
  if (!is_username_exist && !is_email_exist) {
    const newUser = new User({
      username: username,
      password: hashPassword,
      email: email,
      avatarID1: "animal1",
      avatarID2: "hat1",
      // level: 0,
      // experience: 0,
    });
    newUser
      .save()
      .then(() => res.json(newUser)) // register successfull
      .catch((err) =>
        res.status(400).json("Cannot add the user! Error: " + err)
      );
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findOne({ _id: userId });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const removedUser = await User.deleteOne({ _id: id });
    res.status(200).json(removedUser);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export const updateAvatar = async (req, res) => {
  try {
    const avatarID1 = req.body.avatarID1;
    const avatarID2 = req.body.avatarID2;
    const userId = req.params.id;
    const updateResponse = await User.updateOne(
      { _id: userId },
      { $set: { avatarID1: avatarID1, avatarID2: avatarID2 } }
    );
    res.status(200).json(updateResponse);
  } catch (e) {
    console.error(`Unable to update Avatar: ${e}`);
    return { error: e };
  }
};

// friend will not be added if it is already in the friend list
export const addFriend = async (req, res) => {
  try {
    const newFriendId = req.body.newFriendId;
    const userId = req.params.id;
    let friendDic = {};
    try {
      friendDic = await User.findOne(
        {
          _id: userId,
        },
        { friends: 1 }
      );
    } catch (e) {
      console.error(`Unable to find the user's Friends: ${e}`);
      return { error: e };
    }
    let newFriendArray = friendDic.friends;
    if (!newFriendArray.includes(newFriendId)) {
      newFriendArray.push(newFriendId);
      const updateResponse = await User.updateOne(
        { _id: userId },
        { $set: { friends: newFriendArray } }
      );
      res.status(200).json(updateResponse);
    } else {
      res.status(200).json({ status: false, reason: "Friend already exists" });
    }
  } catch (e) {
    console.error(`Unable to update Friends: ${e}`);
    return { error: e };
  }
};

// friend will not be deleted if it is not in the friend list
export const deleteFriend = async (req, res) => {
  try {
    const oldFriendId = req.body.oldFriendId;
    const userId = req.params.id;
    let friendDic = {};
    try {
      friendDic = await User.findOne(
        {
          _id: userId,
        },
        { friends: 1 }
      );
    } catch (e) {
      console.error(`Unable to find the user's Friends: ${e}`);
      return { error: e };
    }
    let newFriendArray = friendDic.friends;
    if (newFriendArray.includes(oldFriendId)) {
      newFriendArray.pop(oldFriendId);
      const updateResponse = await User.updateOne(
        { _id: userId },
        { $set: { friends: newFriendArray } }
      );
      res.status(200).json(updateResponse);
    } else {
      res.status(200).json({ status: false, reason: "Friend does not exist" });
    }
  } catch (e) {
    console.error(`Unable to update Friends: ${e}`);
    return { error: e };
  }
};

export const searchUsers = async (req, res) => {
  try {
    const friend_name = req.params.friend_name;
    const users = await User.find({
      username: new RegExp("^" + friend_name + ".*", "i"), // use regular express for case-insensitive matching
    }).limit(7); // limit the returned results to be <= 7
    res.status(200).json(users);
  } catch (e) {
    console.error(`Unable to find Users: ${e}`);
    return { error: e };
  }
};

// assume that this function is called after the room object has been created
// the new room's id is needed
export const createRoom = async (req, res) => {
  try {
    const newRoomId = req.body.newRoomId;
    const userId = req.params.id;
    let roomDic = {};
    try {
      roomDic = await User.findOne(
        {
          _id: userId,
        },
        { rooms: 1 }
      );
    } catch (e) {
      console.error(`Unable to find the user's Rooms: ${e}`);
      return { error: e };
    }
    let newRoomArray = roomDic.rooms;
    newRoomArray.push(newRoomId);
    const updateResponse = await User.updateOne(
      { _id: userId },
      { $set: { rooms: newRoomArray } }
    );
    res.status(200).json(updateResponse);
  } catch (e) {
    console.error(`Unable to update Rooms: ${e}`);
    return { error: e };
  }
};

// the deleted room's id is needed
export const deleteRoom = async (req, res) => {
  try {
    const oldRoomId = req.body.oldRoomId;
    const userId = req.params.id;
    let roomDic = {};
    try {
      roomDic = await User.findOne(
        {
          _id: userId,
        },
        { rooms: 1 }
      );
    } catch (e) {
      console.error(`Unable to find the user's Rooms: ${e}`);
      return { error: e };
    }
    let newRoomArray = roomDic.rooms;
    newRoomArray.pop(oldRoomId);
    const updateResponse = await User.updateOne(
      { _id: userId },
      { $set: { rooms: newRoomArray } }
    );
    res.status(200).json(updateResponse);
  } catch (e) {
    console.error(`Unable to update Rooms: ${e}`);
    return { error: e };
  }
};
