const expres = require('express')

const router = expres.Router()



//  update
router.put("/update", async (request, response) => {
    try {
      var data = request.body;
      let roll = request.body.roll;
      var student = await Student.findOne({ where: { roll } });
      if (student == null) {
        response.send({ status: false, msg: "No Student found" });
      } else {
      //   student.roll = data.roll;
        student.name = data.name;
        student.aga = data.aga;
        student.email = data.email;
        await student.save();
        response.send({ status: true });
      }
    } catch (err) {
      console.log(err);
      response.status(500).json(err);
    }
  });
  
  // get
  
  router.get("/listall", async (request, response) => {
    try {
      var result = await Student.findAll();
      response.json(result);
    } catch (err) {
      response.status(500).json({ msg: err });
    }
  });
  
  // delete
  
  router.get("/delete/:id", async (request, response) => {
    try {
      let roll = request.params.id;
      var result = await Student.findOne({ where: { roll } });
      result.destroy();
      response.json({ status: true });
    } catch (error) {
      response.json({ status: false });
    }
  });
  
  // delete
  router.post("/save", async (request, response) => {
    try {
      let data = request.body;
      console.log(data);
      var student = await Student.create(data);
      response.send(student);
    } catch (err) {
      response.status(500).json(err);
    }
  });

  module.exports = router;






