import Booking from "../models/booking.js"; // Adjust path as needed

export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBooking = await newBooking.save();
    res.status(200).json({
      success: true,
      message: "Your tour is booked",
      data: savedBooking,
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const getBooking = async (req, res) => {
  const id = req.params.id;
  console.log(`Received request for booking ID: ${id}`);

  try {
    const book = await Booking.findById(id);
    if (!book) {
      return res
        .status(404)
        .json({ success: false, message: "Booking not found" });
    }
    res.status(200).json({ success: true, message: "Successful", data: book });
  } catch (error) {
    console.error("Error fetching booking:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const getAllBooking = async (req, res) => {
  try {
    const books = await Booking.find();
    res.status(200).json({ success: true, message: "Successful", data: books });
  } catch (error) {
    console.error("Error fetching all bookings:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
