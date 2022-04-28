const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    profilePicture:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})
const userModel=mongoose.model('User',userSchema);
module.exports=userModel;