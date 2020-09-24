'use strict'
const {Product} = require('../models')
const uploader = require('../helpers/uploader')


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
        try{
            const upload = uploader('SNEAKERSPRODUCT').fields([{name:'image'}])
            upload(req,res,err=>{
                if(err){
                    console.log('gagal upload',err)
                    return res.send(err)
                }
                const {name,description,price} = req.body
                const { image } = req.files
                const imagePath = image ? '/' + image[0].filename : null
                let newProduct = {
                    name,
                    description,
                    price:Number(price),
                    image:imagePath
                }
                Product.create(newProduct)
                    .then(()=>res.redirect('/admin'))
                    .catch((err)=>res.send(err))
            })
        }catch(err){
            res.send(err)
        }
    }

    static formEditProductHandler(req,res){
        let id = Number(req.params.id)
        Product.findByPk(id)
            .then(data=>res.render('formEditProduct',{data}))
            .catch(err=>res.send(err))
    }
    
    static editProductHandler(req,res){
        // const {name,description,price} = req.body
        // const editedProduct = {
        //     name,
        //     description,
        //     price:Number(price),
        //     image:'belum ada'
        // }

        // Product.update(editedProduct,{
        //     where:{id}
        // })
        // .then(()=>res.redirect('/admin'))
        // .catch(err=>res.send(err))
        try{
            const upload = uploader('SNEAKERSPRODUCT').fields([{name:'image'}])
            upload(req,res,err=>{
                if(err){
                    console.log('gagal upload',err)
                    return res.send(err)
                }
                const {name,description,price} = req.body
                let id = Number(req.params.id)
                console.log('masuk')
                const { image } = req.files
                const imagePath = image ? '/' + image[0].filename : null
                let editedProduct = {
                    name,
                    description,
                    price:Number(price),
                    image:imagePath
                }
                Product.update(editedProduct,{ where:{id}})
                .then(()=>{
                    res.redirect('/admin')
                })
                .catch(err=>{
                    console.log(err)
                    res.send(err)
                })
            })
        }catch(err){
            res.send(err)
        }

    }

    static deleteProductHandler(req,res){
        let id = Number(req.params.id)
        Product.destroy({where:{id}})
            .then(()=>res.redirect('/admin'))
            .catch(err=>res.send(err))
    }
}


module.exports = AdminController