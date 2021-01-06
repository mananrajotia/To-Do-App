const db=require("../config/mongoose");
const task=require("../models/todo_schema");

const index_controller=function(req,res){
    //return res.render("home",{title:"page"});
    task.find({}, 
        function(err,tasks){
            if(err){
                console.log("Error fetching tasks from db!");
                return;
            }
            return res.render("home",{title:"Task Master", tasks:tasks});
        })
};

module.exports.index_controller=index_controller;