const mongoose = require('mongoose');

const postSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'

    },
    // to make fetching of an comment on a post fast that's why we made a array of comments of object  id in the post

comment:[
    {
    type:mongoose.Schema.Types.ObjectId,
    ref:'Comment'
    }
]
},
    {
        timestamps:true
    }
);
 const Post=mongoose.model('Post',postSchema);
 module.exports=Post;