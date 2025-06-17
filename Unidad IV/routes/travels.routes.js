import { Router } from "express";
import { getAllTravels, createTravel, updateTravel, deleteTravel } from "../src/controllers/travel.controllers.js"

export const router = Router();

router.get('/travels', getAllTravels);
router.post('/travel', createTravel);
router.put('/travel/:id', updateTravel);
router.delete('/travel/:id',deleteTravel);