const AdminController = require('./admin-controller')
const { Product, User, Purchased } = require('../models')
const session = require('express-session')
const { static } = require('express')

class Controllers {
    static home(req, res) {
        if (req.session.isLogin == true) {
            let objUser = {
                id: req.session.id,
                name: req.session.name,
                email: req.session.email,
                level: req.session.level,
                address: req.session.address
            }

            Product.findAll()
                .then(data => {
                    res.render('homeBuyer', { data, objUser })
                }).catch(err => res.send(err))
        }
        else {
            res.redirect('/login')
        }
    }

    static checkout(req, res) {
        if (req.session.isLogin == true) {
            let objUser = {

                id: req.session.userId,
                name: req.session.name,
                email: req.session.email,
                level: req.session.level,
                address: req.session.address
            }

            let idProduct = req.params.id
            Product.findByPk(idProduct)
                .then(data => {
                    // res.send(objUser)
                    res.render('checkout', { data, objUser })
                })
                .catch(err => {
                    res.send(err)
                })
        }
    }

    static CreateBill(req, res) {
        let purchased = null
        let idProduct = req.params.id

        Product.findByPk(idProduct)
            .then(data => {
                purchased = {
                    UserId: req.session.userId,
                    ProductId: idProduct,
                    paid: true
                }
                return Purchased.create(purchased)
            })
            .then(data => {
                console.log(`produk berhasil dibeli!`)
                res.redirect('/')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static getHistory(req, res) {
        let idUser = +req.session.userId

        User.findByPk(idUser, {
            include: Product
        })
            .then(data => {
                res.render('history', { data })
                console.log(data.Products.length)
            })
            .catch(err => {
                res.send(err)
            })

    }
}

module.exports = {
    Controllers,
    AdminController
}
