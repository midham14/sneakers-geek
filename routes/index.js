const router = require('express').Router()
const session = require('express-session')
const Controller = require('../controllers/index')

const loginRouter = require('./login')
const registerRouter = require('./register')

// router.use((req, res, next) => {
//     console.log(`middleware`)
//     next()
// })

router.use(session({
    secret: "sneakergeek",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 3000 }
}))


router.use('/login', loginRouter)
router.use('/register', registerRouter)

//ini test
router.get('/', Controller.home)


module.exports = router