const Course=require('../Models/coursesModel')
exports.createCourse=async(req,res)=>{
    try{
    const course= await Course.create(req.body)
    res.status(201).json(course)}
    catch(err){
        res.status(400).send(err.message)
    }
}

exports.getCourse=async (req,res)=>{
    try{
    const course=await Course.find()
    res.status(200).json(course)}
    catch(err){
        res.status(400).send(err.message)
    }
}

exports.deleteCourse= async (req, res) => {
    try {
        const { id } = req.params; 
        await Course.findByIdAndDelete(id); 

        res.status(200).json({msg:'Course deleted successfully'});
    } catch (err) {
        res.status(400).json(err.message);
    }
};

exports.editCourse=async(req,res)=>{
    try{
      const{id}=req.params
   const updatedCourse= await Course.findByIdAndUpdate(id,{title:req.body.title,description:req.body.description,
        startDate:req.body.startDate,endDate:req.body.endDate,category:req.body.category},{new:true})
        res.status(200).json(updatedCourse)}
        catch(err){
            res.status(400).json(err.message)
        }
}