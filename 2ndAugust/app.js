const { request, response } = require('express')
const express = require('express')
const {sequelize, Student} = require("./models/index")
const server = express()

server.post("/save",async (request, response)=>{
    try{
        let data = request.body
        var student = await Student.create(data)
        response.send(student)
    }
    catch(err){
        response.status(500).json(err)

    }
})

server.listen(8081, async ()=>{

    // await sequelize.sync({force:true})
    await sequelize.authenticate()

})


