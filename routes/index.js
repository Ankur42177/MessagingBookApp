const express = require('express');
const router=express.Router();

const homeController=require('../controllers/home_controller');
console.log("router is Loaded");
router.get('/',homeController.home);
router.use('/user',require('./user'));
router.use('/post',require('./post'));
router.use('/comments',require('./comments'));

module.exports=router;