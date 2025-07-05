import {pool} from '../../DB/config.js';
import format from 'pg-format';

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


export const limitTravelModel = async (limit=5) => {
    const sqlQuery = {
        text: 'select * from viajes order by id desc limit $1',
        values: [parseInt(limit)]
    }
    const resultado = await pool.query(sqlQuery);
    return resultado.rows;
}

export const formatTravelModel = async (order_by = 'id_ASC', limit = 10 ) => {
    const [atribute, direction] = order_by.split('_');
    const sqlQuery = format(
        'select * from viajes order by %s %s limit %s ',
        atribute,
        direction,
        limit
    )
    const resultado = await pool.query(sqlQuery);
    console.log(sqlQuery);
    return resultado.rows
}

export const paginateTravelsModel = async ({order_by = 'id_ASC', limit = 10, page= 1}) =>{
    const [atribute, direction] = order_by.split('_');
    const offset = (page -1) * limit;
    const formatQuery = format(
        'select * from viajes order by %s %s limit %s offset %s',
        atribute,
        direction,
        limit,
        offset
    )
    const resultado = await pool.query(formatQuery);
    console.log(formatQuery);
    return resultado.rows;
}