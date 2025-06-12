import { getTravelsModel, createTravelModel } from "../models/travelModel.js";

export const getAllTravels = async (req, res) => {   
   try{
        const travels = await getTravelsModel();
        res.json({travels})
   }catch(e){
        console.error(e);
        res.status(500).json({error: 'Internal Server Error'});
   }
}

export const createTravel = async (req, res) => {
     try {
          const { destino, presupuesto } = req.body;
          if (destino && presupuesto) {
               const newTravel = await createTravelModel(destino, presupuesto);
               res.status(201).json({ travel: newTravel });
          }else{
               res.status(400).json({ error: 'Destino y presupuesto son requeridos' });
          }
     }catch(e) {
          res.status(500).json({ error: 'Internal Server Error', mensaje: e.message });
          console.error(e);
     }
     
} 