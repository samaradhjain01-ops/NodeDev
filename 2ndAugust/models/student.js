'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  student.init({
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
    email: DataTypes.STRING
  }, {
    sequelize,
    tableName: "students",
    modelName: 'Student',
  });
  return student;
};