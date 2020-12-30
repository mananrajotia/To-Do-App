const db=require("../config/mongoose");
const task=require("../models/todo_schema");

const deletetask_controller=function(req, res){
    task.findOneAndDelete(req.query.id, 
    function(err){
        if(err){
            console.log('Error in deleting task!')
            return;
        }
        console.log("Task deleted!");
        return res.redirect('back');
    })
};

module.exports.deletetask_controller=deletetask_controller;