const dotenv=require('dotenv');
dotenv.config({path:'./config.env'})
const app=require('./app.js')
const mongoose=require('mongoose');
mongoose.connect(process.env.db).then(() => console.log("connection successful")).catch(err => console.log("connection failed"+err));
app.listen(8002,() => console.log("server has been started"));