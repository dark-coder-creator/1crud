CREATE  DATABASE todo_database;

CREATE TABLE todo(
    todo_id  SERIAL PRIMARY KEY  ,
    name VARCHAR(255),
    role VARCHAR(255),
    description VARCHAR(255) 
);
