import { Router } from "express";
import { getAllTravels, createTravel, updateTravel, deleteTravel, getLimitTravels,
     getFormatTravels, GetPaginateTravels, getTravelsFilter, pageNotfound
    } from "../src/controllers/travel.controllers.js"

export const router = Router();

router.get('/travels', getAllTravels);
router.post('/travel', createTravel);
router.put('/travel/:id', updateTravel);
router.delete('/travel/:id',deleteTravel);
router.get('/travels_limit', getLimitTravels);
router.get('/travels_limit_orderby', getFormatTravels);
router.get('/travels_paginate', GetPaginateTravels);
router.get('/travels_filter', getTravelsFilter);

router.use(pageNotfound);