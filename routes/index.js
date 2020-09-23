const router = require('express').Router()
const session = require('express-session')
const Controller = require('../controllers/index')
const LoginController = require('../controllers/login-controller')
const RegisterController = require('../controllers/register-controller')

// router.use((req, res, next) => {
//     console.log(`middleware`)
//     next()
// })

router.use(session({
    secret: "sneakergeek",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30000 }
}))

//ini test
router.get('/', Controller.home)

router.get('/login', LoginController.loginForm)
router.post('/login', LoginController.login)

router.get('/register', RegisterController.registerForm)
router.post('/register', RegisterController.register)



module.exports = router