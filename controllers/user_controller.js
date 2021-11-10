const User=require('../models/user');
module.exports.profile=function(req,res){
    return res.render('profile',{title:"userprofile"});
}
module.exports.Signup=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/user/userprofile');
    }
    return res.render('user_sign_up',{title:"MessageBook||SignUp"});
}
module.exports.Signin=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/user/userprofile');
    }
    return res.render('user_sign_in',{title:"MessageBook||SignIn"});
}
//get the sign up form
module.exports.create=function(req,res){
    //later write code
    if(req.body.password!=req.body.confirmPassword){
        return res.redirect('back');
    }

    User.findOne({email:req.body.email},function(err,user){
      if(err){
     console.log('err in finding user in signing up');
     return}
     if(!user){
         User.create(req.body,function(err,user){
             if(err){
                 console.log('error in creating user while signing up');
                 return}
                 return res.redirect('/user/Signin');
             })
     }
     else{
         return res.redirect('back');
     }

      });
}
//sign in controller for the sign in session
module.exports.createSession=function(req,res){
//later write code

return res.redirect('/');
}
// signout controller in authentication session
module.exports.destroySession=function(req,res){
    req.logout();

    return res.redirect('/');
}
module.exports.createPost=function(req,res){
    return res.redirect('/user/userprofile');
}