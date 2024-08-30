import express from "express";
import {
  createBooking,
  getBooking,
  getAllBooking,
} from "../controllers/bookingController.js"; // Adjust path as needed

const router = express.Router();

router.post("/", createBooking);
router.get("/:id", getBooking);
router.get("/", getAllBooking);

export default router;
