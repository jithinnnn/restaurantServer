const express = require('express')
const userController = require('../Controllers/userController')

const router = new express.Router()

//register api
router.post('/register',userController.register)

//login api
router.post('/login',userController.login)



module.exports = router