const mongoose=require ('mongoose')
const contactschema=new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
      },
      linkedin: {
        type: String,
        required: true,
        match: [/^https?:\/\/(www\.)?linkedin\.com\/.+$/, 'Please enter a valid LinkedIn URL']
      },
    
      github: {
        type: String,
        required: true,
        match: [/^https?:\/\/(www\.)?github\.com\/.+$/, 'Please enter a valid GitHub URL']
      }
    },{
        timestamps:true
      });

      module.exports=mongoose.model('ContactMe',contactschema)

  