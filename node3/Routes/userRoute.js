const express=require('express');
const router=express.Router()
const userController=require('../Controllers/userController')
const auth=require('../config/auth')
router.post('/',userController.createUser)
router.get('/',auth,userController.getUsers)
router.post('/login',userController.login)

module.exports=router;