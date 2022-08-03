const expresss = require('express')
const dotenv = require('dotenv')
dotenv.config();
const server = expresss()

// Custom Module

const category = require('./routers/CategoryRouter');

server.use(expresss.urlencoded({extended:true}));
server.use(expresss.json());

server.use('/api/category', category);

server.listen(process.env.PORT,()=>{
    console.log(`localhost running :${process.env.PORT}`);
})
