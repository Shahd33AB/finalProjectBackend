const express=require('express');
const router=express.Router()
const aboutMeController=require('../Controllers/aboutMeController')

router.get('/',aboutMeController.getAboutMe)
router.post('/',aboutMeController.createAboutMe)
router.put('/:id',aboutMeController.editAboutMe)
router.delete('/:id',aboutMeController.deleteAboutMe)
module.exports=router;