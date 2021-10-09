import express from "express";

import {
  getUsers,
  getUser,
  getUserByUsername,
  register,
  login,
  deleteUser,
  updateAvatar,
  searchUsers,
  addFriend,
  deleteFriend,
  createRoom,
  deleteRoom,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.get("/byUsername/:username", getUserByUsername);
router.post("/", register);
router.post("/login", login);
router.delete("/:id", deleteUser);

router.patch("/avatar/:id", updateAvatar);

router.get("/friend/:friend_name", searchUsers);
router.patch("/addFriend/:id", addFriend);
router.patch("/deleteFriend/:id", deleteFriend);

router.patch("/createRoom/:id", createRoom);
router.patch("/deleteRoom/:id", deleteRoom);
export default router;
