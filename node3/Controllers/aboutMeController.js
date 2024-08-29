const AboutMe=require('../Models/aboutMeModel')


exports.createAboutMe=async(req,res)=>{
    try{
    const about= await AboutMe.create(req.body)
    res.status(200).json(about)}
    catch(err){
        res.status(400).send(err.message)
    }
}

exports.getAboutMe= async (req,res)=>{
    try{
    const about = await AboutMe.find()
    res.status(200).json(about)}
    catch(err){
        res.status(400).send(err.message)
    }
}

exports.editAboutMe=async(req,res)=>{
    try{
    const {id}=req.params
    const about=await AboutMe.findByIdAndUpdate(id,{ name: req.body.name,
        bio: req.body.bio,
        email: req.body.email,
       } ,{new:true})
        res.status(200).json(about)}
        catch(err){
            res.status(400).json(err.message)
        }
}

exports.deleteAboutMe=async (req,res)=>{
    try{
    const{id}=req.params
    await AboutMe.findByIdAndDelete(id)
   res.status(200).json({msg:'AboutMe deleted successfully'})
    }
    catch(err){
        res.status(400).json(err.message)
    }

}