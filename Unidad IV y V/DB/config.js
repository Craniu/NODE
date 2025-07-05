import pg from 'pg';
import 'dotenv/config';

export const pool = new pg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  allowExitOnIdle: true,
});

pool.query("Select now()", (err, res) => {
    if (err){
        console.log("Error al conectarse a la DB:", err.message)
   }else{
    console.log("Conectado a la BD correctamente:", res.rows[0].now);
   }
})