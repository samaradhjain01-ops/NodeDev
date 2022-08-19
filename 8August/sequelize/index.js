const express = require('express')
const apiRouter = require('./routers/ApiRouter')

const server = express()
server.use(express.json())

server.use("/api",apiRouter)

server.listen(8081,()=>{
    console.log("localhost is listining.....");
})













