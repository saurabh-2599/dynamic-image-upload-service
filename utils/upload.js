const multer=require('multer');
const { v4: uuidv4 } = require('uuid');
//defining where to store image
const storage=multer.diskStorage({
    destination:(request,file,callback)=> {
        callback(null,'__dirname+/../public/uploads')
    },
    filename:(request,file,callback)=> {
        callback(null,file.originalname+uuidv4())
    }
})
//upload parameters for multer
const upload=multer({
    storage:storage,
    limits: { fileSize: 2*1024*1024}
})


module.exports=upload;