const { request, response } = require('express');
const express = require('express');
const categoryModel = require('../models/CategoryModel')
const validator = require('express-joi-validation').createValidator({}); // use for Manual Validation
const Joi = require('joi');
const validation = require('./validation/Validations')
const {categorySchema} = require('./validation/Schemas')


const router = express.Router()
// Save Category
router.post("",validation(categorySchema),(request,response)=>
{
    console.log(request.body);
    categoryModel.saveCategory(request.body).then((result)=>{
        response.send(result);
    })
})


// Update Category
router.get("/listall",(request,response)=>
{
    categoryModel.listAll().then((result)=>{
        response.send(result);
    })
})

router.get("/getby/:id?",(request,response)=>
{
    if(request.params.id === undefined)
    {
        response.send(
                {
                    status:false,
                    msg:"invalid Param"
                }
            )
    }
    categoryModel.getCate(request.params.id).then((result)=>{
        response.send(result);
    })
})

// List Category
router.get("/delete/:id",(request,response)=>
{   
    console.log(request.url)
    console.log(request.params)

    categoryModel.deleteCat(request.params.id, false).then(result =>
        {
            response.send(result);
        }
    ).catch(error=>{
        response.send(error);
    })
})

// Uodate Category
router.put("/update/:id",(request,response)=>
{   
    console.log(request.params.id)
    console.log(request.body)
    // response.send("Test")
    categoryModel.upateCat(request.body,request.params.id).then(result =>
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




/*

npm i express-joi-validation joi --save
Joi Validation
CREATE PARSE
MIDDELWARE TO BE HANDEL RESPONSE OF ERROR
// Assignment =>

// 

express file upload via NPM

// Middel ware to be attach 



CREATE TABLE `product` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_title` varchar(100) NOT NULL UNIQUE,
  `product_description` varchar(500) DEFAULT NULL,
  `product_price` float NOT NULL,
  `product_image` varchar(100),
  `product_status` boolean default true,
  `product_category` int,
   FOREGIN KEY(product_category) REFERENCES pataa_ecommerce.category(cate_id)
  PRIMARY KEY (`cate_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


  

//

INSERT INTO  pataa_ecommerce.product (product_title, product_description, product_price , product_status, product_category)    
        VALUES  ('Mango', 'A mango is an edible stone fruit produced by the tropical tree', 100.0,  true, 77)


// Insert in to Product 




// Start from m

select * from procude where procue_cat in (select category_id from category where cate_title like M%)

*/