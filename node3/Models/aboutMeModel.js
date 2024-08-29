const mongoose=require ('mongoose')
const aboutschema=new mongoose.Schema({
    name: {
    type: String,
    required: true,
    trim: true 
  },
  bio: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  }

},{
  timestamps:true
});

module.exports=mongoose.model('AboutMe',aboutschema)

