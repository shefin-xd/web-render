import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { adminRoute } from "../middleware/admin.middleware.js";
import { getUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/users", protectRoute, adminRoute, getUsers);

export default router;
