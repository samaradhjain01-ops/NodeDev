'use strict';
const {
  Model
} = require('sequelize');
const {Exam} = require('./index')
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.hasMany(Exam)
    }
  }
  Student.init({
    roll: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: DataTypes.INTEGER,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }
  ,{
    sequelize,
    tableName: "students",
    modelName: 'Student',
  });
  return Student;
};