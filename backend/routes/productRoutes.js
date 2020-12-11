import express from "express";

// * Import controllers
import {
  getProducts,
  getProductById,
} from "../controllers/productControler.js";

const router = express.Router();

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

export default router;
