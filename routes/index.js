const express=require('express');
const router=express.Router();

const home_controller=require('../controllers/index_controller');
router.get('/',home_controller.index_controller);

module.exports=router;