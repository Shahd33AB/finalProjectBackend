const mongoose=require('mongoose');
const skillsschema=new mongoose.Schema({
    name:{type:String,
        required:true,
        trim: true 

    },
    type: {
        type: String,
        enum: ['Technical', 'Soft'],
        required: true
      },
      proficiency: {
        type: Number,  
        min: 1,
        max: 5,
       
      }
},{
    timestamps:true
})

module.exports=mongoose.model("Skill",skillsschema)

