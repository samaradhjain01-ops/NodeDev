const { resolve } = require('path')
const dbCon = require('./MysqlConnection')


class ProductModel{

saveProduct=(data)=>{

    return new Promise(async resolve =>{
    const queryStr = `INSERT INTO  pataa_ecommerce.product (product_title, product_description, product_price , product_status, product_category) 
            VALUES  ('${data.name}', '${data.description}','${data.price}',  true,'${data.cate_id}')`
    console.log(queryStr)
    var result = await dbCon.query(queryStr)
    .catch(err =>{
        resolve({
            status:400,
            msg:"Product not saved",
            error:err.code
        })

    })
        console.log(result);
        resolve({
            status:200,
            msg:"Product saved",
        });
    });
}

    upateProd=(data, id)=>
    {
        return new Promise(async resolve=>{
            var queryString = "update product set "
            var columnMap = 
            {
                "name": "product_title",
                "desc": "product_description",
                "price": "product_price",
                "cate_id": "product_category",
                "status" : "product_status",
            }

/*
{
    "status":true,
    "name": "Hapus Mango",
    "desc": "Buy Lilyville Hapus Mango Plant for Rs.999 online."
}
*/

            var columns = []
            Object.keys(data).forEach(element => {
                console.log(element)
                if(columnMap
                    [element] === 'product_status')
                {
                    columns.push(`${columnMap
                        [element]} = ${data[element]}`)
                }
                else
                {
                    columns.push(`${columnMap
                        [element]} = '${data[element]}'`)
                }
            });
            queryString += columns.join(", ") 
            queryString += ` where product_id=${id}`      
            console.log(queryString)
            var result = await dbCon.query(queryString)
            .catch(err=>{
                resolve({
                    status:false, 
                    msg:err.code,
                    msg:"Product Not updated"
                })
            })
            resolve({
                status:true,
                msg:"Product Updated"
            })
        })
    }

    listAll=(id)=>
    {
        return new Promise(async resolve =>{
        var queryStr = ""

        if(id !== -1)
        {
            queryStr = `Select * from product where (product_status=true AND product_category='${id}')`
        }
        else{
            queryStr = `Select * from product where product_status=true`
        }
        console.log(queryStr)
        var result = await dbCon.query(queryStr)
        .catch(err =>{
            resolve({
                status:400,
                msg:"Product not Found",
                error:err.code
            })

        })

            if(result[0].length === 0)
            {
                resolve({
                    status:result[0],
                    msg:"Product Not Found",
                });
            }
            else
            {
                resolve({
                    status:result[0],
                    msg:"Product Found",
                });
            }

        });
    }

    deactivatProduct = (id) =>{
        return new Promise(async resolve=>{
            var queryString = `update product set product_status=false where product_id=${id}`      
            var result = await dbCon.query(queryString)
            .catch(err=>{
                resolve({
                    status:false, 
                    msg:err.code,
                    msg:"Product Deactivation not done"
                })
            })
            resolve({
                status:true,
                msg:"Product Deactivated"
            })
        })



    }

}

module.exports = new ProductModel()