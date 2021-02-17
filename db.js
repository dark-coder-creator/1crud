const Pool=require("pg").Pool;
const pool=new Pool({
    "user": "postgres",
    "password" : "ramanmenon",
    "host" : "localhost",
    "port" : 5432,
    "database" : "todo_database"
})
module.exports=pool;
{
  "name":"Raj",
  "role":"Manager",
  "description":" Maintains staff by recruiting, selecting, orienting, and training employees"
}
