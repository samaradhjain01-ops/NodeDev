const { request, response } = require('express');
const express = require('express')
const categoryModel = require('../models/CategoryModel')
const router = express.Router()

// Save Category
router.post("",(request,response)=>
{
    console.log(request.body);
    categoryModel.saveCategory(request.body).then((result)=>{
        response.send(result);
    }).catch((error)=>{
        response.send(error)
    })
})


// Update Category
router.get("/listall",(request,response)=>
{
    categoryModel.listAll().then((result)=>{
        response.send(result);
    })
    .catch((error)=>{
        response.send(error);
    })
})

// List Category
router.get("/delete/:id",(request,response)=>
{   

    console.log(request.url)
    console.log(request.params)

    categoryModel.deleteCat(request.params.id).then(result =>
        {
            response.send(result);
        }
    ).catch(error=>{
        response.send(error);
    })
})

// List Category
router.post("/update",(request,response)=>
{   
    categoryModel.upateCat(request.body.data,request.body.id).then(result =>
        {
            response.send(result);
        }
    ).catch(error=>{
        response.send(error);
    })
})


// router.get("/delete/",(request,response)=>
// {   

//     console.log(request.url)
//     console.log(request.params)

//     categoryModel.deleteCat(request.params.id).then(result =>
//         {
//             response.send(result);
//         }
//     ).catch(error=>{
//         response.send(error);
//     })
// })

// SoftDelete Category // Will change status of Category
router.get("",(request,response)=>
{

})







module.exports = router;