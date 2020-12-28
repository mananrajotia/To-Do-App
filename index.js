const express=require('express');
const port=8000;
const index_route=require('./routes/index');

const app=express();

app.get('/',index_route);

app.listen(port,function(err)
{
    if(err)
    console.log("Error firing up the server!");
    else
    console.log("Server up on port "+port);
})
