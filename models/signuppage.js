const mongoose=require('mongoose');

const signUp=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    DOB:{
        type:number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
},{
    timestamps:true
}
)