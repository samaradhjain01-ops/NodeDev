const { response } = require('express');
const express = require('express')
const path = require('path')
// const validator = require('express-joi-validation').createValidator({}); // use for Manual Validation

const {v4 : uuidv4} = require('uuid');
const validation = require('./validation/Validations')
const router = express.Router();
const {productSchema} = require('./validation/Schemas')
const productModel = require('../models/ProductModel');
const { request } = require('http');


router.post("/add",validation(productSchema),(request, response)=>{
    console.log(request.body)
    productModel.saveProduct(request.body).then(result =>{
        response.send(result)
    })
})

router.post("/addimage",(request, response)=>{
    var file = request.files.pic
    let filename = uuidv4() + path.extname(file.name)
    console.log(filename)
    let filePath = path.join(
        __dirname ,"../upload", filename
    )
    console.log(filePath)
    file.mv(filePath)
    response.send("Test2");
})

router.get("/get/:id",(request, response)=>{

})

router.get("/list/:id?",(request,response)=>{
    const id = request.params.id
    productModel.listAll(id === undefined ? -1 : id).then(result => 
    {
        response.send(result)
    })
})

router.post("/update/:id",(request, response)=>{
    productModel.upateProd(request.body, request.params.id).then(result =>
    {
        response.send(result)
    })
})

router.get("/delete/:id",(request, response)=>{
    productModel.deactivatProduct(request.params.id)
    .then(result =>{
        response.send(result);
    })
})


module.exports = router
