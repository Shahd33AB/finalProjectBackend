const express=require('express');
const router=express.Router()
const projectsController=require('../Controllers/projectsController')
router.post('/',projectsController.createProject)
router.get('/',projectsController.getProject)
router.delete('/:id',projectsController.deleteProject)
router.put('/:id',projectsController.editProject)
module.exports=router;