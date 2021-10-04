CREATE TABLE modificable(
id int NOT NULL AUTO_INCREMENT PRIMARY KEY
);
ALTER TABLE modificable RENAME TO modif;
ALTER TABLE modif ADD nombre varchar(255) NOT NULL;
ALTER TABLE modif
ADD edad int NOT NULL, 
ADD barrio varchar(255) NOT NULL;
ALTER TABLE modif RENAME TO clientes;
ALTER TABLE clientes DROP barrio;
ALTER TABLE clientes ADD barrio varchar(255);
ALTER TABLE clientes MODIFY barrio varchar(20) NOT NULL;
ALTER TABLE clientes CHANGE barrio zona varchar(20) NOT NULL;
INSERT INTO clientes(nombre, edad, zona)
VALUES
("carlos", 23, "caballito"),
("rebekka", 35, "flores"),
("laura", 21, "palermo"),
("juan", 56, "almagro"),
("carla", 43, "nuñez")
;
INSERT INTO clientes(nombre, edad, zona)
VALUES
("juan2", 28, "caballito"),
("rocky", 30, "floresta"),
("lau", 20, "lugano"),
("julian", 46, "almagro"),
("carlin", 44, "nuñez")
;
SELECT* FROM clientes;

