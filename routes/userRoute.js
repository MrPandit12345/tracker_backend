const express = require('express')
const { loginController, registerController } = require('../controllers/userControler')

// Router
const router = express.Router()

// routers
// POST|| Login
router.post('/login',loginController)

// Post || Register
router.post('/register',registerController)

module.exports = router