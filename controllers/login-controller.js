const { User } = require('../models')

class LoginController {
    static loginForm(req, res) {
        res.render('login')
    }
}

module.exports = LoginController