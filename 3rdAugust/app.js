const { request, response } = require("express");
const express = require("express");
const { sequelize, Student } = require("./models/index");
const studentRoter = require('./Routers/StudentRouter')
const server = express();

server.use(express.urlencoded());
server.use(express.json());


server.listen(8081, async () => {
  // await sequelize.sync({force:true})
  await sequelize.authenticate();
});
