CREATE  DATABASE todo_database;

CREATE TABLE todo(
    todo_id  SERIAL PRIMARY KEY  ,
    name VARCHAR(255),
    role VARCHAR(255),
    description VARCHAR(255) 
);


[
    {
        "id": 1,
        "name": "Raj",
        "role": "Manager",
        "description": " Maintains staff by recruiting, selecting, orienting, and training employees"
    }
  
]
