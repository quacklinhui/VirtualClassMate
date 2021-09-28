import User from "../models/user.js";
import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

import { sha256, sha224 } from "js-sha256";

export const login = async (req, res) => {
  try {
    const email = req.body.email;
    const hashPassword = sha256.update(req.body.password).hex();
    const user = await User.findOne({ email: email });
    console.log(user);
    if (user.password == hashPassword) {
      res.status(200).json(user);
    } else {
      res.status(200).json({ status: false, source: "password" }); // wrong password
    }
  } catch (error) {
    res.status(200).json({ status: false, source: "email" }); // email does not exist
    //res.status(404).json({ message: error.message });
  }
};

export const register = async (req, res) => {
  //const username = req.body.username;
  const email = req.body.email;
  const hashPassword = sha256.update(req.body.password).hex();
  const avatarID = req.body.avatarID;
  //const date = Date.parse(req.body.date);

  // check if the email exists
  try {
    const user = await User.findOne({ email: email });
    res.status(200).json({ status: false, source: "email" }); // email exists
  } catch (error) {
    //res.status(200).json({status: false, source: email}); // email does not exist
    const newUser = new User({
      //username: username,
      password: hashPassword,
      email: email,
      avatarID: avatarID,
      // level: 0,
      // experience: 0,
    });

    newUser
      .save()
      .then(() => res.json("User added!"))
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

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const removedUser = await User.deleteOne({ _id: id });
    res.status(200).json(removedUser);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// Patch cannot get req.body
export const updateAvatar = async (req, res) => {
  try {
    const newAvatar = req.body.newAvatar;
    const userId = req.params.id;
    console.log(newAvatar);
    console.log(userId);
    const updateResponse = await User.updateOne(
      { _id: userId },
      { $set: { avatarID: newAvatar } }
    );
    res.status(200).json(updateResponse);
  } catch (e) {
    console.error(`Unable to update Avatar: ${e}`);
    return { error: e };
  }
};
