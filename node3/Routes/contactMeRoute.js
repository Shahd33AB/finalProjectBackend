const express=require('express');
const router=express.Router()
const contactMeController=require('../Controllers/contactMeController')

router.get('/',contactMeController.getContact)
router.post('/',contactMeController.createContact)
router.put('/:id',contactMeController.editContact)
router.delete('/:id',contactMeController.deleteContact)
module.exports=router;