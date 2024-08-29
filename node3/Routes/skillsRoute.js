const express=require('express');
const router=express.Router()
const skillsController=require('../Controllers/skillsController')
router.post('/',skillsController.createSkill)
router.get('/',skillsController.getSkill)
router.delete('/:id',skillsController.deleteSkill)
router.put('/:id',skillsController.editSkill)

module.exports=router;