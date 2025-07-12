CREATE DATABASE plan_de_viajes;
\c plan_de_viajes;
CREATE TABLE viajes (
    id SERIAL, 
    destino VARCHAR(50) NOT NULL, 
    presupuesto INT NOT NULL
    );


CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    create_at TIMESTAMP NOT NULL DEFAULT NOW(),
    update_at TIMESTAMP NOT NULL DEFAULT NOW()
);