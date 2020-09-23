const router = require('express').Router()
const AdminRouter = require('./adminRouter')
const { Conntrollers } = require('../controllers/index')
const LoginController = require('../controllers/login-controller')


//ini test
router.get('/', Conntrollers.home)


//admin
router.use('/admin', AdminRouter)


router.get('/login', LoginController.loginForm)

module.exports = router