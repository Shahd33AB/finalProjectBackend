const mongoose=require('mongoose');

const connectDb=async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/portfolioDB')
    console.log('mongo connected');
    
}
module.exports=connectDb