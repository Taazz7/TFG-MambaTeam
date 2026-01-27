create database MambaTeam;
use MambaTeam;

create table Equipos (
    idEquipo INT PRIMARY KEY IDENTITY(1,1),
    nombre NVARCHAR(100) NOT NULL,
    victorias INT DEFAULT 0,
    derrotas INT DEFAULT 0
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


INSERT INTO Equipos (nombre, victorias, derrotas)
VALUES ('Lobos Zaragoza', 12, 5);
INSERT INTO Equipos (nombre, victorias, derrotas)
VALUES ('Tigres del Ebro', 8, 9);

INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('Carlos Martínez', 'Base', 1, 7);
INSERT INTO JugadoresNac (nombre, posicion, idEquipo, dorsal)
VALUES ('Javier López', 'Alero', 2, 12);

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
