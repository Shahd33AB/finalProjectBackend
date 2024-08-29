const mongoose=require('mongoose')
const projectsschema= new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true 
    },
    description: {
        type: String,
      
    },
    githubLink: {
        type: String,
        required: true,
        trim: true,
        match: /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_\-]+\/[a-zA-Z0-9_\-]+$/
      }
},{
    timestamps:true
})
module.exports=mongoose.model('Project',projectsschema)