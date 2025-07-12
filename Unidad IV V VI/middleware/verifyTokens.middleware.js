import jwt from 'jsonwebtoken';
import 'dotenv/config'

export const verifyToken = async (req, res, next) => {
    try{
        const token = req.header('Authorization');
        if(!token){
            return res.status(400).json({message: "Token invalido"});
        }
        console.log({token_duro: token})
        const [bearer, tokenValue] = token.split(' ');
        if(bearer !== 'Bearer' || !tokenValue) {
            return res.status(400).json({message: "Formato de token invalido"});
        }
        const decoded = jwt.verify(tokenValue, process.env.JWT_SECRET)
        console.log({decoded: decoded})
        req.user = decoded.email
        next();
    }catch(e){
        return res.status(400).json({message: 'el token es invalido'})
    }
}