const Contact = require("../Models/contactMeModel")

exports.createContact = async(req,res)=>{
    try{
    const contact = await Contact.create(req.body)
    res.status(201).json(contact)}
    catch(err){
        res.status(400).send(err.message)

            }
}

exports.getContact=async(req,res)=>{
    try{
    const contact = await Contact.find()
    res.status(200).json(contact)}
    catch(err){
        res.status(400).send(err.message)
    }
}

exports.editContact=async(req,res)=>{
    try{
    const {id}=req.params
    const contact=await Contact.findByIdAndUpdate(id,{email:req.body.email,linkedin:req.body.linkedin
,github:req.body.github},{new:true})
        res.status(200).json(contact)}
        catch(err){
            res.status(400).json(err.message)
        }

}

exports.deleteContact=async(req,res)=>{
    try{
    const {id}=req.params
     await Contact.findByIdAndDelete(id)
     res.status(200).json({msg:'Contact deleted successfully'})}
     catch(err){
        res.status(400).json(err.message)
     }

}