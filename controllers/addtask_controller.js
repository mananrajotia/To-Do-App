const db=require("../config/mongoose");
const task=require("../models/todo_schema");

const addtask_controller=function(req, res){
    task.create(req.body, 
    function(err, newtask){
        if(err){
            console.log('Error in adding task!')
            return;
        }
        console.log("Added task!");
        return res.redirect('back');
    })
};

module.exports.addtask_controller=addtask_controller;