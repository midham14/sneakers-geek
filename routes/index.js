const router = require('express').Router()
const AdminRouter = require('./adminRouter')
const { Controllers } = require('../controllers/index')
const LoginController = require('../controllers/login-controller')


//ini test
router.get('/', Controllers.home)


//admin
router.use('/admin', AdminRouter)


router.get('/login', LoginController.loginForm)

module.exports = router