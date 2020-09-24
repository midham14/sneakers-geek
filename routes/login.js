const router = require('express').Router()
const session = require('express-session')
const LoginController = require('../controllers/login-controller')

router.get('/', LoginController.loginForm)
router.post('/', LoginController.login)

module.exports = router