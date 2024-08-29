const express=require('express');
const router=express.Router()
const coursesController=require('../Controllers/coursesController')
router.post('/',coursesController.createCourse)
router.get('/',coursesController.getCourse)
router.delete('/:id',coursesController.deleteCourse)
router.put('/:id',coursesController.editCourse)
module.exports=router;