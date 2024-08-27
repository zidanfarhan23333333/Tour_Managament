import express from "express";
import {
  createTour,
  updateTour,
  deleteTour,
  getAllTour,
  getSingleTour,
  getTourBySearch,
  getFeaturedTour,
  getTourCount,
} from "../controllers/tourController.js";

const router = express.Router();

// Define routes
router.post("/", createTour);
router.put("/:id", updateTour);
router.delete("/:id", deleteTour);
router.get("/:id", getSingleTour); // Route for single tour by ID
router.get("/", getAllTour); // Route for all tours
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);

export default router;
