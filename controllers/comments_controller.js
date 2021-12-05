const Comment = require('../models/comment');
const Post=require('../models/post');

module.exports.create=function(req,res){
    Post.findById(req.body.post,function(err,post){
        if(post){
            Comment.create({
                content:req.body.content,
                post:req.body.post,
                user:req.user._id
            },function(err,comment){

                if(err){
                    console.log("error while creating actionn of comment");
                }
                console.log("done the action of commment");
                post.comment.push(comment);
                post.save();
                res.redirect('/');
            });
        }
    });
}