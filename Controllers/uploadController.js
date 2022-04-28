const mongoClient = require('mongodb').MongoClient;
const mongoose=require('mongoose')
exports. uploadImageDynamic=async(req,res,next) =>
{  
   const profilePicture=req.file.filename;
   console.log(profilePicture);
   console.log(req.params);
   let collections=req.params.entity;
   const entityId=req.params.id;
   if(entityId){
       
        mongoClient.connect(process.env.db,async function(err,db){
            if(err){
                throw new Error(err);
            }
            // using native mongodb query instead of mongoose here because of flexibility to use any of entity(collection Name);
            //database object
            const dbo=db.db('uploader')
            console.log(collections);
        
            await dbo.collection(collections).updateOne({"_id":mongoose.Types.ObjectId(entityId)},{$set:{"profilePicture":profilePicture}});
        })
       res.send("upload successful")
       
}
}