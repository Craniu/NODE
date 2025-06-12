import { text } from 'express';
import pool from '../../db/config.js';

export const getTravelsModel = async () => {
    const sqlQuery = 'select * from viajes'
    const response = await pool.query(sqlQuery);
    console.log(response.rows);
    return response.rows;
}

export const createTravelModel = async (destino, presupuesto) => {
    const sqlQuery = {
        text: 'insert into viajes (destino, presupuesto) values ($1, $2) returning *',
        values: [destino, presupuesto]
    }
    const resultado = await pool.query(sqlQuery);
    return resultado.rows;
}