import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// user registrasi
export const register = async (req, res) => {
  // hashing password
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      photo: req.body.photo,
    });

    await newUser.save();

    res.status(200).json({ succes: true, message: "Succesfully Created" });
  } catch (err) {
    res
      .status(500)
      .json({ succes: false, message: "Failed to create. Try Again" });
  }
};

// user login
export const login = async (req, res) => {
  try {
  } catch (err) {}
};
