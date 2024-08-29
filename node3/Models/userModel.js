const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        lowercase:true,
        trim:true

    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        validate:{
            validator:(value)=>{
                return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
            },
            message:'invalid email format'
        }

    },password:{
         type:String,
         required:true
    }
    
},{
    timestamps:true
})
module.exports=mongoose.model('User',userSchema);