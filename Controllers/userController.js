const fs=require('fs');
const userModel=require('../Models/User');
const upload = require('../utils/upload');
exports.createUser=async(req,res,next) => {
    try{
     const {name,email}=req.body;
     let profilePicture='';
     if(!(req.file===undefined)){
         //if we are getting files in input then only store image in db
         profilePicture=req.file.filename;
        
     }
     console.log(profilePicture);
     const newUser=await userModel.create({name,email,profilePicture})
     res.status(201).json({
         status:"success",
         data:
         {
             newUser
         }
     })
    }
    catch(e){
      console.log(e);

    }
}
exports.getUsers=async(req,res,next) => {
    try{
        let users=await userModel.find();
        //if profile picture exits add localhost:8002 before it so that it can be fetch directly from server 
        users.forEach(element => {if(element.profilePicture!=='')element.profilePicture=`localhost:8002/${element.profilePicture}`});
        res.status(200).json({
            status:"success",
            data:{
                users
            }
        })
    }
    catch(e){
        console.log(e);
    }
}
exports.updateUser=async(req,res,next)=> {
    try{
    const updatedObject={...req.body,...req.file}
    const updateUser=await userModel.findByIdAndUpdate(req.params.id,updatedObject,{new:true});
    res.status(201).json({
        status:"success",
        data:{
            updateUser
        }
    })
}
catch(e){
    console.log(e);
}

}
exports.deleteUser=async(req,res,next) => {
    try{
    const deletedUser=await userModel.findByIdAndDelete(req.params.id);
    const deleteFile=fs.unlink(__dirname+'../public/uploads/'+deletedUser.profilePicture,()=> console.log("deleted success"));
    res.status(203).json({
        status:"success",
        data:null
    })}
    catch(e){
        console.log(dele)
    }
}