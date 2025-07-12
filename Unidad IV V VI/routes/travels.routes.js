import { Router } from "express";
import { getAllTravels, createTravel, updateTravel, deleteTravel, getLimitTravels,
     getFormatTravels, GetPaginateTravels, getTravelsFilter, pageNotfound,
     getAllTravelsHateoas
    } from "../src/controllers/travel.controller.js"
import { verifyToken } from "../middleware/verifyTokens.middleware.js";


export const travelRouter = Router();

travelRouter.get('/travels', verifyToken, getAllTravels);
travelRouter.post('/travel', createTravel);
travelRouter.put('/travel/:id', updateTravel);
travelRouter.delete('/travel/:id',deleteTravel);
travelRouter.get('/travels_limit', getLimitTravels);
travelRouter.get('/travels_limit_orderby', getFormatTravels);
travelRouter.get('/travels_paginate', GetPaginateTravels);
travelRouter.get('/travels_filter', getTravelsFilter);
travelRouter.get('/travelsHateoas', getAllTravelsHateoas);


travelRouter.use(pageNotfound);