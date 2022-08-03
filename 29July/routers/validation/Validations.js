module.exports = (schema) => (req, res, next)=>{
    let data = req.method === "Get" ? req.query : req.body
    const {error} = schema.validate(data)
    if(error)
    {
        res.status(400).json({
            status:false,
            msg : error.details[0].message
        })
    }
    else{
        next(); 
    }
}