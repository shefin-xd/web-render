import User from "../models/user.model.js";

export const isAdmin = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const role = await User.findById(userId).select("role");

    const admin = (role == "admin") ? true : false;

    if (!admin) {
      return res.status(401).json({ message: "Access denied - Admin only" });
    }

    next();
  } catch (error) {
    console.log("Error in isAdmin middleware: ", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
