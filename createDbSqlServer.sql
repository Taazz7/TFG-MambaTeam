create database MambaTeam;
use MambaTeam;

create table Equipos (
    idEquipo INT PRIMARY KEY IDENTITY(1,1),
    nombre NVARCHAR(100) NOT NULL,
    victorias INT DEFAULT 0,
    derrotas INT DEFAULT 0
);

create table Staff (
    idStaff INT PRIMARY KEY IDENTITY(1,1),
    nombre NVARCHAR(100) NOT NULL,
    puesto NVARCHAR(50) NOT NULL,
    equipo NVARCHAR(100) NOT NULL
);

create table JugadoresNac (
    idJugador INT PRIMARY KEY IDENTITY(1,1),
    nombre NVARCHAR(100) NOT NULL,
    posicion NVARCHAR(50) NOT NULL,
    idEquipo INT,
    dorsal INT,
    FOREIGN KEY (idEquipo) REFERENCES Equipos(idEquipo)
);

create table EstadisticasJugadorNac (
    idJugador INT PRIMARY KEY,
    puntos float,
    valoracion float,
    rebotes float,
    asistencias float,
    porLibres float,
    por2Pts float, 
    por3Pts float,
    FOREIGN KEY (idJugador) REFERENCES JugadoresNac(idJugador)
);

create table JugadoresArag (
    idJugador INT PRIMARY KEY IDENTITY(1,1),
    nombre NVARCHAR(100) NOT NULL,
    posicion NVARCHAR(50) NOT NULL,
    idEquipo INT,
    dorsal INT
    FOREIGN KEY (idEquipo) REFERENCES Equipos(idEquipo)
);

create table EstadisticasJugadorArag (
    idJugador INT PRIMARY KEY,
    puntos float,
    libres float,
    porLibres float,
    dosPts float,
    tresPts float,
    FOREIGN KEY (idJugador) REFERENCES JugadoresArag(idJugador)
);

/* EQUIPOS */
INSERT INTO Equipos (nombre, victorias, derrotas)
VALUES ('Nacional A1', 9, 4);
INSERT INTO Equipos (nombre, victorias, derrotas)
VALUES ('Nacional A2 Femenino', 14, 0);
INSERT INTO Equipos (nombre, victorias, derrotas)
VALUES ('Nacional A2 Masculino', 4, 7);
INSERT INTO Equipos (nombre, victorias, derrotas)
VALUES ('2 Aragonesa', 8, 5);
INSERT INTO Equipos (nombre, victorias, derrotas)
VALUES ('3 Aragonesa', 10, 1);

/* STAFF */
INSERT INTO Staff (nombre, puesto, equipo)
VALUES ('MARIO SERANO', 'PRESIDENTE', 'DIRECCION GENERAL');
INSERT INTO Staff (nombre, puesto, equipo)
VALUES ('FERNANDO SERANO', 'VICEPRESIDENTE', 'AREA MEDICA');
INSERT INTO Staff (nombre, puesto, equipo)
VALUES ('ISABEL ASENSIO', 'FISIOTERAPIA', 'DIRECCION GENERAL');
INSERT INTO Staff (nombre, puesto, equipo)
VALUES ('DAVID VIJUESCA', 'ENTRENADOR PRINCIPAL', 'NACIONAL A1');
INSERT INTO Staff (nombre, puesto, equipo)
VALUES ('MARCO ANTONIO DOMINGUEZ', 'ENTRENADOR AYUDANTE', 'NACIONAL A1');
INSERT INTO Staff (nombre, puesto, equipo)
VALUES ('SERGIO FRANCES', 'ENTRENADOR PRINCIPAL', 'NACIONAL A2 FEMENINO');
INSERT INTO Staff (nombre, puesto, equipo)
VALUES ('ADRIAN LLEYDA', 'ENTRENADOR PRINCIPAL', 'NACIONAL A2 MASCULINO');
INSERT INTO Staff (nombre, puesto, equipo)
VALUES ('LUIS MONTAÑES', 'ENTRENADOR AYUDANTE', 'NACIONAL A2 MASCULINO');
INSERT INTO Staff (nombre, puesto, equipo)
VALUES ('JAVIER GARCIA', 'ENTRENADOR PRINCIPAL', '2 ARAGONESA');
INSERT INTO Staff (nombre, puesto, equipo)
VALUES ('JAVIER GARCIA', 'ENTRENADOR AYUDANTE', '2 ARAGONESA');
INSERT INTO Staff (nombre, puesto, equipo)
VALUES ('DAVID SOLANAS', 'ENTRENADOR PRINCIPAL', '3 ARAGONESA');

/* JUGADORES NACIONAL A1 12 FICHAS */
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('EDUARDO JIMENEZ', 'PIVOT', 1, 1);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('DANIEL SANZ', 'BASE', 1, 8);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('NACHO SERRANO', 'ESCOLTA', 1, 11);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('NACHO SANZ', 'ALA PIVOT', 1, 13);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('MARCOS FRANCO ', 'ESCOLTA', 1, 14);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('NATANEL JIMENEZ', 'ALA PIVOT', 1, 15);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('JORGE GARCIA', 'BASE', 1, 16);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('LORIEN ALLUE', 'ALERO', 1, 18);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('YASSINE KHERRAB', 'PIVOT', 1, 22);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('ALVARO LINACERO', 'ALERO', 1, 23);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('LUIS ANDRES', 'ESCOLTA', 1, 32);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('JAIME GASCON', 'PIVOT', 1, 95);

/* JUGADORES NACIONAL A2 FEMENINO 11 FICHAS */
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('PAULA GALLAN', 'ALERO', 2, 4);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('SOFIA MORENO', 'ALERO', 2, 5);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('SARA LOPEZ', 'ALA PIVOT', 2, 6);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('MARIA JABAL', 'BASE', 2, 10);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('ALBA AZNAR', 'PIVOT', 2, 12);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('PUERTO ARTAL', 'BASE', 2, 14);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('LAIA PALAGUERRI', 'ESCOLTA', 2, 15);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('VANESA ASO', 'PIVOT', 2, 16);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('ALICIA SANCHEZ', 'ALA PIVOT', 2 , 22);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('JULIA PLOU', 'ESCOLTA', 2, 21);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('CARMEN URRIES', 'ALERO', 2, 23);

/* JUGADORES NACIONAL A2 MASCULINO 15 FICHAS */
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('NATHAN ABUY', 'ALERO', 3, 0);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('JOEL CEA', 'BASE', 3, 1);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('LUIS MONTAÑES', 'ESCOLTA', 3, 3);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('LUIS BAQUEDANO', 'PIVOT', 3, 4);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('ALEJANDRO FISAC', 'BASE', 3, 5);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('JAVIER GARCIA', 'ESCOLTA', 3, 7);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('SERGIO RUIZ', 'ALA PIVOT', 3, 9);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('MARIO MOLINA', 'ESCOLTA', 3, 10);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('SERGIO MONTAÑES', 'BASE', 3, 11);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('ISRAEL CEA', 'ALERO', 3, 14);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('PAU RODRIGUEZ', 'ESCOLTA', 3, 17);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('SERGIO LLES', 'ALERO', 3, 20);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('JORGE BELTRAN', 'PIVOT', 3 , 24);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('CARLOS CANO', 'PIVOT', 3, 34);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('NACHO AUSERE', 'ALA PIVOT', 3, 44);

/* JUGADORES 2 ARAGONESA 16 FICHAS */
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('JOSE LUIS MUÑOZ', 'ALERO', 4, 1);
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('LUIS MONTAÑES', 'ESCOLTA', 4, 3);
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('AMIT EGIDO', 'ALA PIVOT', 4, 4);
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('WILVER VELOZ', 'PIVOT', 4, 6);
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('MILO GONZALEZ', 'BASE', 4, 8);
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('QUIQUE GARCIA', 'ALA PIVOT', 4, 13);
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('MARIO AGUILA', 'ALA PIVOT', 4, 16);
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('PAU RODRIGUEZ', 'ESCOLTA', 4, 17);
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('ALVARO RODRIGUEZ', 'ALERO', 4, 19);
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('EZEQUIEL DE LOS SANTOS', 'BASE', 4, 21);
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('IKER ESTEVE', 'PIVOT', 4, 25);
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('DIEGO ARCOS', 'ESCOLTA', 4, 27);
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('DANIEL COXI', 'PIVOT', 4, 35);
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('IÑAKO LASA', 'ALA PIVOT', 4, 41);
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('JOEL LOPEZ', 'ALERO', 4, 47);
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('DIEGO LEIRO', 'ALERO', 4 , 50);

/* JUGADORES 3 ARAGONESA 16 FICHAS */
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('JESUS URRIZA', 'BASE', 5, 0);
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('JOSE LUIS MUÑOZ', 'ALA PIVOT', 5, 1);
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('SAMUEL ARTIGAS', 'PIVOT', 5, 3);
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('PABLO FUMANAL', 'ALA PIVOT', 5, 7);
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('MARIO SERRANO', 'ESCOLTA', 5, 8);
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('NACHO SERRANO', 'ESCOLTA', 5 , 11);
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('ENRIQUE ESTAUN', 'PIVOT', 5, 13);
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('SAMUEL FONDEVILA', 'ESCOLTA', 5, 15);
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('JOSE ANTONIO VALLESPIN', 'PIVOT', 5, 16);
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('SERGIO FRANCES', 'BASE', 5, 17);
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('PABLO GAMBAU', 'ALERO', 5, 24);
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('ERIC CAMARERO', 'ALA PIVOT', 5, 30);
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('JUAN ASENSIO', 'ALA PIVOT', 5, 33);
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('NACHO AUSERE', 'ALA PIVOT', 5, 44);
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('DIEGO SERRANO', 'ALERO', 5, 71);
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('ANGEL BENITO', 'ALERO', 5, 75);



INSERT INTO EstadisticasJugadorNac (idJugador, puntos, valoracion, rebotes, asistencias, porLibres, por2Pts, por3Pts)
VALUES (1, 14.3, 18.5, 3.2, 6.1, 82.5, 54.2, 38.7);
INSERT INTO EstadisticasJugadorNac (idJugador, puntos, valoracion, rebotes, asistencias, porLibres, por2Pts, por3Pts)
VALUES (2, 11.8, 15.2, 5.4, 2.7, 76.3, 49.8, 41.2);

INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('Diego Sánchez', 'Escolta', 1, 9);
INSERT INTO JugadoresArag (nombre, posicion, idEquipo, dorsal)
VALUES ('Álvaro Pérez', 'Pívot', 2, 15);

INSERT INTO EstadisticasJugadorArag (idJugador, puntos, libres, porLibres, dosPts, tresPts)
VALUES (1, 10.7, 2.3, 78.4, 52.1, 34.6);
INSERT INTO EstadisticasJugadorArag (idJugador, puntos, libres, porLibres, dosPts, tresPts)
VALUES (2, 8.9, 1.8, 71.2, 48.7, 29.3);
