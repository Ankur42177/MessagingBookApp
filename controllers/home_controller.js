module.exports.home=function(req,res){
    console.log(req.cookies);
    res.cookie('ank',909);//changing cookie at a server side in response which goes to browser
   
    return res.render('home',{title:"ankurmessagebook"});
}