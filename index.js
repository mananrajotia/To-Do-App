const express=require('express');
const port=8000;

const app=express();

app.listen(port,function(err)
{
    if(err)
    console.log("Error firing up the server!");
    else
    console.log("Server up on port "+port);
})
