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

export const deleteUser = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (!user) {
			return res.status(400).json({ message: "User not found" });
		}
    
		await Product.findByIdAndDelete(req.params.id);
    
		res.status(200).json({ message: "Account deleted successfully" });
  } catch (error) {
    console.log("error in delete profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const toggleAdmin = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (user) {
      if (user.role === "admin") {
        user.role = "user"
      } else if (user.role === "user") {
        user.role = "admin"
      }
			const updatedUser = await user.save();
			res.json(updatedUser);
		} else {
			res.status(400).json({ message: "Product not found" });
		}
	} catch (error) {
		console.log("error in toggleAdmin controller", error);
		res.status(500).json({ message: "Internal server error" });
  }
};

