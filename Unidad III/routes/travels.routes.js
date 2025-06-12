import { Router } from "express";
import { getAllTravels, createTravel } from "../src/controllers/travelsController.js";

export const router = Router();

router.get('/travels', getAllTravels);

router.post('/travel', createTravel);
