-- Selects
SELECT * FROM viajes;
SELECT * FROM viajes WHERE id = $1;

--Deletes
DELETE FROM viajes where id = $1;

--Updates
UPDATE viajes  SET destino = $1 WHERE id = $2 RETURNING *;
UPDATE viajes SET DESTINO = $1, PRESUPUESTO = $2 WHERE ID = $3 RETURNING *;

-- Inserts
INSERT INTO viajes (destino, presupuesto) VALUES ($1, $2) RETURNING *;
