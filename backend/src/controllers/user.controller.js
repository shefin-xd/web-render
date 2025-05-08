import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    const Users = await User.find({}).select("-password");
    res.status(200).json(Users);
  } catch (error) {
    console.error("Error in getUsers: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

