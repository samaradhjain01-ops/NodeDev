const express = require('express')
const categoryRouter = require('./CategoryRouter')
const productRouter = require('./ProductRouter')

const router = express.Router();

router.get("",(req, res)=>{
    res.send("Hi")
})
router.use("/category",categoryRouter)
router.use("/product",productRouter)
module.exports = router;







