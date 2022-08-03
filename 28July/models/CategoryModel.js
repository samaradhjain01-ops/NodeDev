const { rejects } = require('assert');
const { resolve } = require('path');
const dbCon = require('./MysqlConnection')


class CategoryModel
{
    saveCategory = (data)=>
    {
        return new Promise(async resolve =>{
            var queryString =  `insert into category(cate_title,cate_description,cate_status) values('${data.cate_title}','${data.cate_desc}',${data.cate_status})`;
            console.log(queryString)
            var result = await dbCon.query(queryString)
            .catch(err => {
                resolve({status:false, msg: "Category not saved", reason:err.code});
            })
            resolve({status:true, msg: "Category saved"});
        })
    }
   
    listAll=(status=true)=>
    {
        return new Promise(async resolve=>{

            var queryString = `Select * from category where cate_status = ${status}`;
            var result  = await dbCon.query(queryString)
            .catch(err => {
                resolve({ status:false, msg:"Data Not Found"})
            })
            resolve({data:result[0], status:true, msg:"Data Found"})
        })
    }

    deleteCat=(id, status = false)=>
    {
        return new Promise(async resolve=>{
        var queryString = `update category set cate_status=${status} where cate_id=${id}`;
        var result = await dbCon.query(queryString)
        .catch(err=>{
            resolve({
            status:false, msg:err.code
            })
        })
        resolve({status:(result[0].affectedRows == 0 ? false : true),
            result:result, 
            msg:(result[0].affectedRows == 0 ? "Category not found" : "Category deactivated")})
        })
    }

    getCate=(id)=>
    {
        return new Promise(async resolve=>{
            var queryString = `Select * from category where cate_id=${id}`;
            console.log(queryString)
            var result = await dbCon.query(queryString)
            .catch(err=>{
                resolve({
                    status:false, msg:err.code,
                    msg:"Not Deleted"
                })
            })
            var ob = result[0];
            if(ob.length > 0)
                resolve({data:ob[0], status:true, msg:"Data Found"})
            else
                resolve({ status:true, msg:"No Data Found"})
        })
    }


    upateCat=(data, id)=>
    {
        // var pr = new Promise((resolve, reject)=>
        // {
        //     dbCon().then(conn=>{
        //         let queryString = stringFormat("update category set cate_title='{}',cate_description='{}',cate_status={} where cate_id={}",data.cate_title,data.cate_desc,data.cate_status,id);
        //         console.log(queryString);
        //         conn.query(queryString, (err, result)=>{
        //             if(err){
        //                 reject(err.code)
        //             }
        //             else
        //             {
        //                 resolve(result);
        //             }
        //         })
        //     }).catch(error=>{
        //         reject(error.code)
        //     })
        // })
        // return pr;
    }

}

// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;

module.exports = new CategoryModel();