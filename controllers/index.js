const AdminController = require('./admin-controller')

class Conntrollers {
    static home(req, res) {
        res.render('index')
    }
}

module.exports = {
    Conntrollers,
    AdminController
}
