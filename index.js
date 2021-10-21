const express=require('express');
const app= express();
const port=7000;
//use express router 
app.use('/',require('./routes/index'));
//setup a view engine 
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){
    if(err){
        console.log("error:",err);
    
    // using interpolation technique 
    // console.log(`error in running server on the port:${err}`)
    }
    console.log(`server is up and runnning ont the port:${7000}`);

})