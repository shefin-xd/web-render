import User from "../models/user.model.js";

export const adminRoute = async (req, res, next) => {
  try {
    
    if (req.user && req.user.role === "admin") {
      next();
    } else {
      return res.status(401).json({ message: "Access denied - Admin only" });
    }
    
  } catch (error) {
    console.log("Error in adminRoute middleware: ", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
