const passport=require('passport');

const LocalStrategy=require('passport-local').Strategy;
const User=require('../models/user');
//authentication using passport
passport.use(new LocalStrategy({
usernameField:'email'
},
function(email, password,done) {
//find the usser and stablish identity
User.findOne({email:email},function(err,user){
    if(err){
        console.log('err in finding the user =>passport');
        return done(err);
    }
    if(!user||user.password!=password){
        console.log('invalid useernme or passpword');
        return done(null,false);//indicates authentication not done till now
    }
    return done(null,user);
})
}
));

//serializing the user to decide which key is to be kept in cookies

passport.serializeUser(function(user,done){
    done(null,user.id);
});



//deserializing the user from the key in the cokkies ||in the server side to match with database collections
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log('error in finding user->passort deseraalizing');
            return done(err);
        }
        return done(null,user);
    });

});

// check if user is authenticated
passport.checkAuthentication=function(req,res,next){
   // if the user is signed in ,then pass on the request to next function(controller's actions) 
    if(req.isAuthenticated()){
        return next();
    }
    //if the user not signed in
    return res.redirect('/user/Signin');

}
passport.setAuthenticatedUser=function(req,res,next){
if(req.isAuthenticated()){
    //req,user contains the current signedin user from the session
    //cookie and we are just sending this to the locals for the views
    res.locals.user=req.user;
}
next();

}

module.exports=passport;