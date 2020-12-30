const index_controller=function(req,res){
    return res.render("home",{title:"page"});
};

module.exports.index_controller=index_controller;