//importing routers
const userRouter=require('./Routes/userRoutes');
const uploadRouter=require('./Routes/uploadRoutes');
const express=require('express');
//creating a server
const app=express()
//using body parser middleware;
app.use(express.static('./public/uploads'));    
//app.use(express.urlencoded({ extended: false,limit: '5mb' }))
app.use(express.json());
app.use('/api/user',userRouter);
app.use('/api/uploads',uploadRouter);
module.exports=app;