const Post=require('../models/post');
const comments=require('../models/comment');

module.exports.create=function(req,res){
    Post.create({
        content:req.body.content,
        user:req.user._id
    },
    function(err,post){
        if(err){
            console.log('err in storing poat at database'); 
            return;
        }
        return res.redirect('back');
    });
}
module.exports.destroy=function(req,res){
    Post.findById(req.params.id,function(err,post){
        if(post.user==req.user.id){
            post.remove();
            comments.deleteMany({post:req.params.id},function(err){
                return res.redirect('back');
            });
        }
        else{
            return res.redirect('back');
        }
    });
}