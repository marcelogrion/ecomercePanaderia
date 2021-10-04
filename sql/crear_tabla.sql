CREATE TABLE productos(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    seccion varchar(255) NOT NULL,
    producto varchar(255) NOT NULL,
    cantidad int NOT NULL,
    precio decimal NOT NULL,
    foto varchar(255) DEFAULT "",
    deposito varchar(255) NOT NULL
);
