import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    const adminId = req.user._id;
    const filteredUsers = await User.find({ _id: { $ne: adminId } }).select("-password");
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsers: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

