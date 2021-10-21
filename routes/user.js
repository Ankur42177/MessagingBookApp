const express=require('express');
const router=express.Router();

const userController=require('../controllers/user_controller');
router.get('/userprofile',userController.profile);
module.exports=router;