const { rejects } = require('assert');
const mysql = require('mysql');
const { resolve } = require('path');

function getConnection()
{
    var pr = new Promise((resolve, reject)=>
    {
        var conObj = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'D!vit007',
            database:'pataa_ecommerce'
        })
        conObj.connect((err)=>{
            if(err)
            {
                console.log("Connection error")
                reject(err.code)
            }
            else{
                console.log("Db Connected")
                resolve(conObj)
            }
        })
    })
    return pr;
}


module.exports = getConnection;

