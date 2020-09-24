const { User } = require('../models')
const session = require('express-session')

class LoginController {
    static loginForm(req, res) {
        if (req.query.err) {
            res.render('login', { errorLogin: true })
        } else {
            res.render('login', { errorLogin: false })
        }
    }

    static login(req, res) {
        User.findOne({
            where: {
                name: req.body.name,
                password: req.body.password
            }
        })
            .then(data => {
                if (data === null) {
                    res.redirect('/login?err=true')
                } else {
                    req.session.isLogin = true
                    req.session.name = data.name
                    res.redirect('/')
                }
            })
            .catch(err => {
                res.send(err)
            })
    }

    static logout(req, res) {
        req.session.isLogin = false
        res.redirect(`/login`)
    }
}

module.exports = LoginController