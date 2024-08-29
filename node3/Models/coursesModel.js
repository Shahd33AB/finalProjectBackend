const mongoose=require('mongoose')
const coursesschema= new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true  
    },
    description: {
        type: String,
        
    },
  
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date
    },
    category: {
        type: String,
       
    },
},{
    timestamps:true
})
module.exports=mongoose.model('Course',coursesschema)