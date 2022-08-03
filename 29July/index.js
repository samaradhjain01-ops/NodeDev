const expresss = require('express')
const fileUpload = require('express-fileupload')
const dotenv = require('dotenv')
dotenv.config();
const server = expresss()

// var bodyParser = require('body-parser');
// server.use(bodyParser.json());
// server.use(bodyParser.urlencoded());
// // in latest body-parser use like below.
// server.use(bodyParser.urlencoded({ extended: true }));


// Custom Module
// server.use(expresss.urlencoded({extended:true}));
server.use(expresss.json());
server.use(fileUpload());
const category = require('./routers/CategoryRouter');

const product = require('./routers/ProductRouter');



server.use('/api/category', category);

server.use('/api/product', product);

server.listen(process.env.PORT,()=>{
    console.log(`localhost running :${process.env.PORT}`);
})