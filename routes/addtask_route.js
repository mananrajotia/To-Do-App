const express=require('express');
const router=express.Router();

const addtask=require('../controllers/addtask_controller');
router.post('/add_task',addtask.addtask_controller);

module.exports=router;