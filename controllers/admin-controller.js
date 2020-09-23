'use strict'
const {Product} = require('../models')


class AdminController{
    static getHomeAdminHandler(req,res){
        Product.findAll({order:[['id','asc']]})
        .then(data=>res.render('homeAdmin',{data}))
        .catch(err=>res.send(err))
    }

    static formAddProductHandler(req,res){
        res.render('formAddProduct')
    }

    static addProductHandler(req,res){
        const {name,description,price} = req.body
        const newProduct = {
            name,
            description,
            price:Number(price),
            image:'belum ada'
        }
        Product.create(newProduct)
            .then(()=>res.redirect('/admin'))
            .catch((err)=>res.send(err))
    }

    static formEditProductHandler(req,res){
        let id = Number(req.params.id)
        Product.findByPk(id)
            .then(data=>res.render('formEditProduct',{data}))
            .catch(err=>res.send(err))
    }
    
    static editProductHandler(req,res){
        let id = Number(req.params.id)
        const {name,description,price} = req.body
        const editedProduct = {
            name,
            description,
            price:Number(price),
            image:'belum ada'
        }

        Product.update(editedProduct,{
            where:{id}
        })
        .then(()=>res.redirect('/admin'))
        .catch(err=>res.send(err))

    }

    static deleteProductHandler(req,res){
        let id = Number(req.params.id)
        Product.destroy({where:{id}})
            .then(()=>res.redirect('/admin'))
            .catch(err=>res.send(err))
    }
}


module.exports = AdminController