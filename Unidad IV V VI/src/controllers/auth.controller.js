import { findUserByEmail } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import 'dotenv/config'


export const loginUser = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await findUserByEmail(email);
        if(user){
            if(bcrypt.compareSync(password, user.password)){
                const token = jwt.sign({email}, process.env.JWT_SECRET, {
                expiresIn: '60s'
                });
                res.status(200).json({token});
            }else{
                res.status(401).json({message: "No autorizado"});
            }
        }else{
            res.status(401).json({message: 'No autorizado'})
        }
    }catch(e){
        res.status(500).json({error: e.message})
    }
}