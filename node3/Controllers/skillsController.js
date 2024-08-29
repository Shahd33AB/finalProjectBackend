const Skill=require('../Models/skillsModel')
exports.createSkill =async(req,res)=>{
    try{
    const skill=await Skill.create(req.body)
      res.status(201).json(skill)
}
catch(err){
    res.status(400).send(err.message) 
}
}


exports.getSkill =async(req,res)=>{
    try{
    const skill=await Skill.find()
      res.status(200).json(skill)
}
catch(err){
    res.status(400).send(err.message) 
}
}

exports.deleteSkill=async(req,res)=>{
    try{
        const {id}=req.params
          await Skill.findByIdAndDelete(id)
       res.status(200).json({msg:'skill deleted successfully'})
    }
    catch(err){
        res.status(400).send(err.message)
    }
}

exports.editSkill=async(req,res)=>{
    try{
    const {id}=req.params
    const updatedSkill=await Skill.findByIdAndUpdate(id,{name:req.body.name,type:req.body.type,proficiency:req.body.proficiency},{new:true});
        res.status(200).json(updatedSkill)}
        catch(err){
            res.status(400).json(err.message)
        }
}