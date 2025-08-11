import express from "express";
import { seedUser } from "../controllers/seed.controller.js";
const router = express.Router();

router.get("/", seedUser);

export default router;
