CREATE DATABASE plan_de_viajes;
\c plan_de_viajes;
CREATE TABLE viajes (id SERIAL, destino VARCHAR(50) NOT NULL, presupuesto INT NOT NULL);