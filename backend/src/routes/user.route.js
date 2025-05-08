import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { adminRoute } from "../middleware/admin.middleware.js";
import { getUsers, getAdmins } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/get-users", protectRoute, adminRoute, getUsers);
router.get("/get-admins", protectRoute, adminRoute, getAdmins);

export default router;
