import { getTravelsModel, createTravelModel, updateTravelModel, deleteTravelModel} from "../models/travel.models.js";


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

export const updateTravel = async (req, res) => {
     try {
          const {id} = req.params;
          const {destino} = req.query
          await updateTravelModel(id, destino);
          res.status(200).json({message: 'Viaje actualizado correctamente'});
     }catch(e){
               res.status(500).json({ error: 'Internal Server Error', mensaje: e.message });
               console.error(e);
          }
}

export const deleteTravel = async (req, res) => {
     try {
          const {id} = req.params;
          const deletedTravel = await deleteTravelModel(id);
          if(deletedTravel.length > 0){
               res.status(200).json({message: 'Viaje eliminado correctamente', viaje: deletedTravel[0]});
          }
          else {
               res.status(404).json({error: 'Viaje no encontrado'});
          }
     }catch(e){
          res.status(500).json({error: 'Internal Server Error', mensaje: e.message });
          console.error(e);
     }
}
