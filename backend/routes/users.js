import express from "express";
import {
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../controllers/userController.js";
const router = express.Router();

router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getSingleUser); // Route for single tour by ID
router.get("/", getAllUser); // Route for all tours

export default router;
