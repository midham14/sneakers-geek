const AdminController = require('./admin-controller')
const {Product} = require('../models')

class Controllers {
    static home(req, res) {
        Product.findAll()
            .then(data=>{
                res.render('homeBuyer',{data})
            }).catch(err=>res.send(err))
    }
}

module.exports = {
    Controllers,
    AdminController
}
