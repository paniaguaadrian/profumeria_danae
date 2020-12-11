import express from "express";

// * Import controllers
import { authUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/login", authUser);

export default router;
