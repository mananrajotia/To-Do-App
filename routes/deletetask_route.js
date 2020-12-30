const express=require('express');
const router=express.Router();

console.log("welcome");

const deletetask=require('../controllers/deletetask_controller');
router.get('/delete_task/',deletetask.deletetask_controller);

module.exports=router;