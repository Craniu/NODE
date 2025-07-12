import {pool} from '../../DB/config.js';
import bcrypt from 'bcryptjs';

export const createUserModel = async (nombre, apellido, email, password) => {
    const hashedPassword = bcrypt.hashSync(password);
    const resultado = await pool.query(
        'INSERT INTO usuarios (nombre, apellido, email, password) VALUES ($1, $2, $3, $4) RETURNING nombre,apellido, email',
        [nombre, apellido, email, hashedPassword]
    );
    return resultado.rows[0];
} 

export const findUserByEmail = async (email) => {
    const resultado = await pool.query({
        text: 'SELECT * FROM usuarios WHERE email = $1',
        values: [email]
    });
    return resultado.rows[0];
}

