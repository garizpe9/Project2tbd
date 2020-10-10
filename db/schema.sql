CREATE DATABASE fish_db;
USE fish_db;

CREATE TABLE fish
(
    id int NOT NULL AUTO_INCREMENT,
    common_name text NOT NULL,
    scientific_name varchar(100) NOT NULL,
    max_size float NOT NULL,
    temp_low FLOAT NOT NULL,
    temp_high FLOAT NOT NULL,
    ph_low FLOAT NOT NULL,
    ph_high FLOAT NOT NULL,
    min_tank FLOAT NOT NULL,
    aggressive BOOLEAN,
    schooling BOOLEAN,
    min_group int NOT NULL,
    tank_level varchar(50),
    lifespan int NOT NULL,
    image_link,
    PRIMARY KEY(id)
);