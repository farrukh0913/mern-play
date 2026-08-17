import User from "../models/User.js";
import bcrypt from "bcrypt";

// LOGIN user
export const loginUser = async (req, res) => {
let { email, password } = req.body;

  const user = await User.findOne({ email });

  console.log("Login attempt for email:", email);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  console.log("User found:", user);

  // const isPasswordValid = await bcrypt.compare(password, user.password);

  // if (!isPasswordValid) {
  //   return res.status(401).json({
  //     message: "Invalid password",
  //   });
  // }

  res.json({
    message: "Login successful",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      authenticated: true,
    },
  });
};