const { json } = require('express')
const Project=require('../Models/projectsModel')

exports.createProject=async(req,res)=>{
    try{
  const project=await Project.create(req.body)
  res.status(201).json(project)}
  catch(err){
    res.status(400).send(err.message)
  }
}

exports.getProject=async (req,res)=>{
    try{
    const project=await Project.find()
    res.status(200).json(project)}
    catch(err){
        res.status(400).send(err.message)
    }
}

exports.editProject=async(req,res)=>{
    try{
    const {id}=req.params
    const updatedProject=await Project.findByIdAndUpdate(id,{name:req.body.name,description:req.body.description
        ,githubLink:req.body.githubLink},{new:true});
        res.status(200).json(updatedProject)}
        catch(err){
            res.status(400).json(err.message)
        }
}


exports.deleteProject=async(req,res)=>{
    try{
    const {id}=req.params
    await Project.findByIdAndDelete(id)
    res.status(200).json({msg:"project deleted successfully"})
}
    catch(err){
        res.status(400).json(err.message)
    }

}