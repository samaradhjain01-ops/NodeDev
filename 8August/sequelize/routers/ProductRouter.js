const express = require('express')
const {Product} = require("../models/index");
const router = express.Router();

router.post("/save", async (req, res) => {
    try {
      var product = await Product.create(res.body);
      res.json({ msg: "Product Saved !", status: true });
    } catch (error) {
      res.status(500).json({
          msg:"Product Not saved"
      })
    }
  });
  
  router.get("/listall", async (req, res) => {
      try {
          var response = await Product.findAll({})
          res.json(response)
      } catch (error) {
          res.status(500).json({
              msg:"Product Not saved"
          })
      }
  });
module.exports = router;