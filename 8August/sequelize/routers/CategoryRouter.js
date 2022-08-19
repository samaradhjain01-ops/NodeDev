const express = require("express");
const {Category} = require("../models/index");
const router = express.Router();



router.post("/save", async (req, res) => {
  try {
    var category = await Category.create(req.body);
    res.json({ msg: "Category Saved !", status: true });
  } catch (error) {
    console.log(error)
    res.status(500).json({
        msg:"Category Not saved"
    })
  }
});

router.get("/listall", async (req, res) => {
    try {
        var status = false
        var response = await Category.findAll({status})
        res.json(response)
    } catch (error) {
        res.status(500).json({
            msg:"Category Not saved"
        })
    }
});


router.get("/update/:id", async (req, res) => {
  try {
      var id = req.params.id
      var response = await Category.findOne({where:{id}})
      if(response !== null)
        res.json(response)
      else{
        res.status(500).json({
          msg:"Category Not Found"
      })
      }
  } catch (error) {
      res.status(500).json({
          msg:"Category Not saved"
      })
  }
});

router.get("/listall", async (req, res) => {
  try {
      var status = false
      var response = await Category.findAll({status})
      res.json(response)
  } catch (error) {
      res.status(500).json({
          msg:"Category Not saved"
      })
  }
});

module.exports = router;
