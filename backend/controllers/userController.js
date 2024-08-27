import User from "../models/User.js";

// Create a new User
export const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();
    res.status(200).json({
      success: true,
      message: "Successfully Created",
      data: savedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create User, try again",
      error: err.message,
    });
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully Updated",
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update User, try again",
      error: err.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Successfully Deleted",
      data: deletedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete User, try again",
      error: err.message,
    });
  }
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);

    res.status(200).json({
      success: true,
      message: "Successfully ",
      data: user,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
      error: err.message,
    });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).json({
      success: true,

      message: "Successfully retrieved Users",
      data: Users,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Users not found",
      error: err.message,
    });
  }
};
