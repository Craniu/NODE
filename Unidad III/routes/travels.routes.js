import { Router } from "express";
import { getAllTravels } from "../src/controllers/travelsController.js";

export const router = Router();

router.get('/travels', getAllTravels);


