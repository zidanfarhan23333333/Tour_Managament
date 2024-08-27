import Tour from "../models/Tour.js";

// Create a new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();
    res.status(200).json({
      success: true,
      message: "Successfully Created",
      data: savedTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create tour, try again",
      error: err.message,
    });
  }
};

export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully Updated",
      data: updatedTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update tour, try again",
      error: err.message,
    });
  }
};

export const deleteTour = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedTour = await Tour.findByIdAndDelete(id);

    if (!deletedTour) {
      return res.status(404).json({
        success: false,
        message: "Tour not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Successfully Deleted",
      data: deletedTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete tour, try again",
      error: err.message,
    });
  }
};

export const getSingleTour = async (req, res) => {
  const id = req.params.id;

  try {
    const tour = await Tour.findById(id);

    res.status(200).json({
      success: true,
      message: "Successfully ",
      data: tour,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
      error: err.message,
    });
  }
};

export const getAllTour = async (req, res) => {
  // Pagination
  const page = parseInt(req.query.page) || 0;
  const limit = 8;
  console.log("Page:", page);

  try {
    const tours = await Tour.find({})
      .skip(page * limit)
      .limit(limit);

    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Successfully retrieved tours",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Tours not found",
      error: err.message,
    });
  }
};

export const getTourBySearch = async (req, res) => {
  console.log("Received query parameters:", req.query); // Debugging line

  try {
    const { city = "", distance, maxGroupSize } = req.query;

    const query = {};
    if (city) query.city = new RegExp(city, "i");
    if (distance) query.distance = { $gte: parseInt(distance) };
    if (maxGroupSize) query.maxGroupSize = { $gte: parseInt(maxGroupSize) };

    const tours = await Tour.find(query);

    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Successfully retrieved tours",
      data: tours,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error retrieving tours",
      error: err.message,
    });
  }
};

// searchTour
export const getFeaturedTour = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true }).limit(8);

    res.status(200).json({
      success: true,
      message: "Successfully retrieved tours",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Tours not found",
      error: err.message,
    });
  }
};

// get tour counts

export const getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount(); // Use estimatedDocumentCount for counting documents

    res.status(200).json({
      success: true,
      data: tourCount,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch tour count",
      error: err.message,
    });
  }
};
