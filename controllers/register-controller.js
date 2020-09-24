const { User } = require('../models')

class RegisterController {
    static registerForm(req, res) {
        res.render('register')
    }

    static register(req, res) {
        let user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            level: "user"
        }
        User.create(user)
            .then(data => {
                res.redirect('/login')
            })
            .catch(err => {
                res.send(err)
            })
    }

}

module.exports = RegisterController