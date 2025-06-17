import {pool} from '../../DB/config.js';

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

export const updateTravelModel = async (id, destino) => {
    const sqlQuery = {
        text: 'update viajes set destino = $2 where id = $1 returning *',
        values: [id, destino]
    }
    const resultado = await pool.query(sqlQuery);
    return resultado.rows;
}

export const deleteTravelModel = async (id) => {
    const sqlQuery = {
        text: 'delete from viajes where id = $1 returning *',
        values: [parseInt(id)]
    }
    const resultado = await pool.query(sqlQuery);
    return resultado.rows;
}
