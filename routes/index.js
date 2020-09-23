const router = require('express').Router()
const Controller = require('../controllers/index')
const LoginController = require('../controllers/login-controller')

//ini test
router.get('/', Controller.home)

router.get('/login', LoginController.loginForm)

module.exports = router