import express from "express";

import {
  getUsers,
  register,
  login,
  deleteUser,
  updateAvatar,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", register);
router.post("/login", login);
router.delete("/:id", deleteUser);
router.patch("/avatar/:id", updateAvatar);
export default router;
