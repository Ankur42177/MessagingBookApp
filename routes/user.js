const express=require('express');
const router=express.Router();
const passport=require('passport');

const userController=require('../controllers/user_controller');
router.get('/userprofile',passport.checkAuthentication,userController.profile);
router.get('/signin',userController.Signin);
router.get('/signup',userController.Signup);
router.post('/create',userController.create);
//use passport as amiddleware to authenticate
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/user/Signin'},
),userController.createSession)

router.get('/Signout',userController.destroySession);
router.post('/create-post',userController.createPost);



module.exports=router;
