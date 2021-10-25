const express=require('express');
const cookieParser=require('cookie-parser');
const app= express();
const port=7000;
const expressLayout= require('express-ejs-layouts');
const db= require('./config/mongoose');
//used for session cookie
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');


app.use(express.urlencoded());
app.use(cookieParser());
app.use(expressLayout);
app.use(express.static('./assets'));

//setup a view engine 
app.set('view engine','ejs');
app.set('views','./views');
//

// adding a middleware for seesion cookie in passport to encrypte the userid

app.use(session({
    name:'MessageBook',
    //todo change the secret before deployment in production mode
    secret:'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxage:(1000*60*100)
    }

}));
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);
//extract styles and sub-pages into the layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//use express router 
app.use('/',require('./routes/index'));


app.listen(port,function(err){
    if(err){
        console.log("error:",err);
    
    // using interpolation technique 
    // console.log(`error in running server on the port:${err}`)
    }
    console.log(`server is up and runnning ont the port:${7000}`);

})