const express=require('express');
const port=8000;
const index_route=require('./routes/index');
const addtask_route=require('./routes/addtask_route');
const deletetask_route=require('./routes/deletetask_route');
const db=require("./config/mongoose");
const task=require("./models/todo_schema");

const app=express();

app.set("view engine","ejs");
app.set("views","./views");

app.use(express.urlencoded({extended:true}));
app.use(express.static("assets"));

app.get('/',index_route);
app.post('/add_task',addtask_route);
app.get('/delete_task/',deletetask_route);

app.listen(port,function(err)
{
    if(err)
    console.log("Error firing up the server!");
    else
    console.log("Server up on port "+port);
})
