import { createUserModel } from "../models/user.model.js";


export const registerUser = async (req, res) => {
    try{
        const {nombre, apellido, email, password} = req.body;
        const user = await createUserModel(nombre, apellido, email, password);
        res.status(201).json({message: 'Usuario creado exitosamente', user});
    }catch(e){
        console.error(e);
        res.status(500).json({message: 'Error al crear el usuario'});
    }
}