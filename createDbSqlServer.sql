create database MambaTeam;
use MambaTeam;

create table JugadoresNac (
    idJugador INT PRIMARY KEY IDENTITY(1,1),
    nombre NVARCHAR(100) NOT NULL,
    posicion NVARCHAR(50) NOT NULL,
    equipo NVARCHAR(100) NOT NULL,
    dorsal INT
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
    equipo NVARCHAR(100) NOT NULL,
    dorsal INT
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

INSERT INTO JugadoresNac (nombre, posicion, equipo, dorsal)
VALUES ('Carlos Martínez', 'Base', 'Real Madrid', 7);

INSERT INTO JugadoresNac (nombre, posicion, equipo, dorsal)
VALUES ('Javier López', 'Alero', 'FC Barcelona', 12);

INSERT INTO EstadisticasJugadorNac (idJugador, puntos, valoracion, rebotes, asistencias, porLibres, por2Pts, por3Pts)
VALUES (1, 14.3, 18.5, 3.2, 6.1, 82.5, 54.2, 38.7);

INSERT INTO EstadisticasJugadorNac (idJugador, puntos, valoracion, rebotes, asistencias, porLibres, por2Pts, por3Pts)
VALUES (2, 11.8, 15.2, 5.4, 2.7, 76.3, 49.8, 41.2);

INSERT INTO JugadoresArag (nombre, posicion, equipo, dorsal)
VALUES ('Diego Sánchez', 'Escolta', 'Casademont Zaragoza', 9);

INSERT INTO JugadoresArag (nombre, posicion, equipo, dorsal)
VALUES ('Álvaro Pérez', 'Pívot', 'Stadium Casablanca', 15);

INSERT INTO EstadisticasJugadorArag (idJugador, puntos, libres, porLibres, dosPts, tresPts)
VALUES (1, 10.7, 2.3, 78.4, 52.1, 34.6);

INSERT INTO EstadisticasJugadorArag (idJugador, puntos, libres, porLibres, dosPts, tresPts)
VALUES (2, 8.9, 1.8, 71.2, 48.7, 29.3);
