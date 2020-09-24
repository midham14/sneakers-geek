const router = require('express').Router()
const AdminRouter = require('./adminRouter')
const { Controllers } = require('../controllers/index')
const LoginController = require('../controllers/login-controller')
const session = require('express-session')
const loginRouter = require('./login')
const registerRouter = require('./register')


router.use(session({
    secret: "sneakergeek",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 300000 }
}))



//ini home
router.get('/', Controllers.home)
// login
router.use('/login', loginRouter)
//register
router.use('/register', registerRouter)
//admin
router.use('/admin', AdminRouter)



module.exports = router