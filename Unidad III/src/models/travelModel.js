import pool from '../../db/config.js';

export const getTravelsModel = async () => {
    const sqlQuery = 'select * from viajes'
    const response = await pool.query(sqlQuery);
    return response.rows;
}