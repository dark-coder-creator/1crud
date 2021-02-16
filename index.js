const express=require("express");
var bodyParser=require('body-parser')
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const pool=require("./db")
app.use(express.urlencoded({ extended: false }));
app.post("/todo",async(req,res)=>{
    try {
      const {name,role,description}=req.body
      const newTodo=await pool.query("INSERT INTO todo (name,role,description) VALUES ($1,$2,$3) RETURNING *",[name,role,description]);
      res.json(newTodo)
      
    }
    catch(err) {
      console.error(err.message)
    }
  })
  app.get("/todo",async(req,res)=>{
    try {
      const allTodos=await pool.query("SELECT todo_id,role FROM  todo");
      res.json(allTodos.rows)
    }
    catch(err) {
      console.error(err.message)
    }
  })
app.listen(3002,()=>{
    console.log("app is listening on port")
})