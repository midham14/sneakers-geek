const AdminController = require('./admin-controller')
const {Product} = require('../models')
const session = require('express-session')

class Controllers {
    static home(req, res) {
        if (req.session.isLogin == true) {
            // res.render('index', {
            //     username: req.session.name
            // })
            Product.findAll()
            .then(data=>{
                res.render('homeBuyer',{data,username: req.session.name})
            }).catch(err=>res.send(err))
        }
        else {
            res.redirect('/login')
        }
       
     }
}


module.exports = {
    Controllers,
    AdminController
}
