const session = require('express-session')

class Conntrollers {
    static home(req, res) {

        if (req.session.isLogin == true) {
            res.render('index', {
                username: req.session.name
            })
        }
        else {
            res.redirect('/login')
        }
    }
}

module.exports = Conntrollers
