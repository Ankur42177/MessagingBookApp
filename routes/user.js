const express=require('express');
const router=express.Router();

const userController=require('../controllers/user_controller');
router.get('/userprofile',userController.profile);
router.get('/signin',userController.Signin);
router.get('/signup',userController.Signup);
router.post('/create',userController.create);

module.exports=router;