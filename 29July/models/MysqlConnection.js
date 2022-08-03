const { rejects } = require('assert');
const mysql = require('mysql2');
const { resolve } = require('path');


    const pool = mysql.createPool({
        connectionLimit:10,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database:process.env.DB_DATABASE,
    }).promise();



    // var pr = new Promise((resolve, reject)=>
    // {
    //     var conObj = mysql.createConnection({
    //         host: 'localhost',
    //         port: DB_PORT,
    //         user: DB_USER,
    //         password: DB_PASSWORD,
    //         database:DB_DATABASE,
    //     })
    //     conObj.connect((err)=>{
    //         if(err)
    //         {
    //             console.log("Connection error")
    //             reject(err.code)
    //         }
    //         else{
    //             console.log("Db Connected")
    //             resolve(conObj)
    //         }
    //     })
    // })
    // return pr;
// }


module.exports = pool;

