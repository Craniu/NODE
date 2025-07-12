import { getTravelsModel, createTravelModel, updateTravelModel, 
     deleteTravelModel, limitTravelModel, formatTravelModel, paginateTravelsModel,
     travelsFilterModel
} from "../models/travel.models.js";
import HATEOAS from "../helpers/hateoas.js";

export const pageNotfound = async (req,res) => {
     res.status(404).send('La ruta solicitada no existe.');
}
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

export const getLimitTravels = async (req,res) => {
     try{
          const {limit} = req.query;
          const result = await limitTravelModel(limit);
          res.status(200).json({travels: result});
     }catch(e){
          res.status(500).json({error: 'Internal Server Error', mensaje: e.message });
          console.error(e);
     }
}

export const getFormatTravels = async (req,res) => {
     try{
          const {order_by, limit} = req.params;
          const result = await formatTravelModel(order_by, limit)
          res.status(200).json({travels: result});
     }catch(e){
          res.status(500).json({error: 'Internal Server Error', mensaje: e.message});
          console.log(e);
     }
}

export const GetPaginateTravels = async (req,res) =>{
    try{
          const {order_by, limit, page} = req.query;
          const result = await paginateTravelsModel({order_by, limit, page})
          res.status(200).json({travels: result});
     }catch(e){
          res.status(500).json({error: 'Internal Server Error', mensaje: e.message});
          console.log(e);
     }
}

export const getTravelsFilter = async (req,res) =>{
     try{
          const filters = req.query;
          const result = await travelsFilterModel(filters);
          res.status(200).json({result});
     }catch(e){
          res.status(500).json({error: 'internal Server Error', mensaje: e.message});
          console.log(e.message);
     }
}

export const getAllTravelsHateoas = async (req, res) => {
     try{
          const data = await getTravelsModel();
          const viajesHateoas = await HATEOAS ('viajes', data);
          res.status(200).json({viajes: viajesHateoas});
     }catch(e){
          console.log('error', e);
          res.status(500).json({error: e.message});
     }
}