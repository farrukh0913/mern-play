import User from "../models/User.js";
import bcrypt from "bcrypt";

// GET all users
export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// GET single user
export const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.json(user);
};

// CREATE user
export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  res.status(201).json(user);
};

// UPDATE user
export const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json(user);
};

// DELETE user
export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);

  res.json({
    message: "User deleted",
  });
};
