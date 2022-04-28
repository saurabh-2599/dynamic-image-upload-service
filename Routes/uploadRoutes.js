const uploadController=require('../Controllers/uploadController.js');
const upload=require('../utils/upload');
const express=require('express')
const router=express.Router();
router.route('/:entity/:id?').patch(upload.single("profilePicture"),uploadController.uploadImageDynamic)
module.exports=router;