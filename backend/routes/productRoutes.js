import express from "express";

// * Import controllers
import {
  getProducts,
  getProductById,
  deleteProduct,
} from "../controllers/productController.js";

// * Middleware
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getProducts);
router.route("/:id").get(getProductById).delete(protect, admin, deleteProduct);

export default router;
