import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { adminRoute } from "../middleware/admin.middleware.js";
import { getUsers, toggleAdmin, deleteUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/get-users", protectRoute, adminRoute, getUsers);

router.patch("/:id", protectRoute, adminRoute, toggleAdmin);

router.delete("/:id", protectRoute, adminRoute, deleteUser);

export default router;
