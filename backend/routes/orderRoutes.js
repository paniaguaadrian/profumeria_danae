import express from "express";
const router = express.Router();

// * Import controllers
import { addOrderItems } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addOrderItems);

export default router;
