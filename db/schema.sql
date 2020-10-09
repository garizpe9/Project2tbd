CREATE DATABASE fish_db;
USE fish_db;

CREATE TABLE fish_db
(
    id int NOT NULL AUTO_INCREMENT,
    common_name varchar(100) NOT NULL,
    scientific_name varchar(100) NOT NULL,
    max_size float NOT NULL,
    temp_low int,
    temp_high int,
    ph_low float,
    ph_high float,
    min_tank int,
    aggressive BOOLEAN,
    schooling BOOLEAN,
    min_group int,
    tank_level varchar(50),
    lifespan int,
    PRIMARY KEY (id)
);