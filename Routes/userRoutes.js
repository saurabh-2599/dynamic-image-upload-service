const userController=require('../Controllers/userController');
const upload=require('../utils/upload');
const express=require('express')
const router=express.Router();
router.route('/').post(upload.single('profilePicture'),userController.createUser).get(userController.getUsers);
router.route('/:id').patch(upload.single('profilePicture'),userController.updateUser).delete(userController.deleteUser);
module.exports=router;