const express=require('express');
const cookieParser=require('cookie-parser');
const app= express();
const port=7000;
const expressLayout= require('express-ejs-layouts');
const db= require('./config/mongoose');
app.use(express.urlencoded());
app.use(cookieParser());
app.use(expressLayout);
app.use(express.static('./assets'));
//use express router 
app.use('/',require('./routes/index'));
//setup a view engine 
app.set('view engine','ejs');
app.set('views','./views');
//extract styles and sub-pages into the layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


app.listen(port,function(err){
    if(err){
        console.log("error:",err);
    
    // using interpolation technique 
    // console.log(`error in running server on the port:${err}`)
    }
    console.log(`server is up and runnning ont the port:${7000}`);

})