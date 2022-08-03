const { rejects } = require('assert');
const { resolve } = require('path');
const dbCon = require('./MysqlConnection')
const stringFormat = require('string-format')


class CategoryModel
{
    saveCategory = (data)=>
    {
       var pr = new Promise((resolve, reject)=>
            dbCon().then(conn=>{
                console.log("Connection Done")
                var queryString = 
                stringFormat("insert into category(cate_title,cate_description,cate_status) values('{}','{}',{})",data.cate_title, data.cate_desc,data.cate_status);
                console.log(queryString)
                conn.query(queryString,(err, result)=>{
                    if(err)
                    {
                        reject(err.code)
                    }
                    else
                    {
                        resolve("Saved")
                    }
                })
            })
            .catch((err)=>{
                reject("Connection failed")
            })
       )
       return pr;
    }

    listAll=()=>
    {
        var pr = new Promise((resolve,reject)=>
        {
            dbCon().then(conn =>
            {

                var queryString = stringFormat("Select * from category where cate_status = true");
                conn.query(queryString,(err, result)=>{
                    if(err)
                    {
                        reject(err.code);
                    }
                    else{
                        resolve(result);
                    }
                })
            }).catch(err =>
            {
                reject(err.code)
            })
        })
        return pr;
    }

    deleteCat=(id)=>
    {
        var pr = new Promise((resolve, reject)=>
        {
            dbCon().then(conn=>{
                let queryString = stringFormat("update category set cate_status=false where cate_id={}",id);
                console.log(queryString);
                conn.query(queryString, (err, result)=>{
                    if(err){
                        reject(err.code)
                    }
                    else
                    {
                        resolve(result);
                    }
                })
            }).catch(error=>{
                reject(error.code)
            })
        })
        return pr;
    }

    upateCat=(data, id)=>
    {
        var pr = new Promise((resolve, reject)=>
        {
            dbCon().then(conn=>{
                let queryString = stringFormat("update category set cate_title='{}',cate_description='{}',cate_status={} where cate_id={}",data.cate_title,data.cate_desc,data.cate_status,id);
                console.log(queryString);
                conn.query(queryString, (err, result)=>{
                    if(err){
                        reject(err.code)
                    }
                    else
                    {
                        resolve(result);
                    }
                })
            }).catch(error=>{
                reject(error.code)
            })
        })
        return pr;
    }

}

// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;

module.exports = new CategoryModel();