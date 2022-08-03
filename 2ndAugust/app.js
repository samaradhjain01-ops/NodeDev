const { request, response } = require("express");
const express = require("express");
const { sequelize, Student } = require("./models/index");
const server = express();

server.use(express.urlencoded());
server.use(express.json());

//  update
server.put("/update", async (request, response) => {
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

server.get("/listall", async (request, response) => {
  try {
    var result = await Student.findAll();
    response.json(result);
  } catch (err) {
    response.status(500).json({ msg: err });
  }
});

// delete

server.get("/delete/:id", async (request, response) => {
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
server.post("/save", async (request, response) => {
  try {
    let data = request.body;
    console.log(data);
    var student = await Student.create(data);
    response.send(student);
  } catch (err) {
    response.status(500).json(err);
  }
});

server.listen(8081, async () => {
  // await sequelize.sync({force:true})
  await sequelize.authenticate();
});
