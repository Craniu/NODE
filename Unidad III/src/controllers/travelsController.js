import { getTravelsModel } from "../models/travelModel.js";

export const getAllTravels = async (req, res) => {   
   try{
        const travels = await getTravelsModel();
        res.json({travels})
   }catch(e){
        console.error(e);
        res.status(500).json({error: 'Internal Server Error'});
   }
}