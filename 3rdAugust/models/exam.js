'use strict';
const {
  Model
} = require('sequelize');
const {Student} = require('./index')
module.exports = (sequelize, DataTypes) => {
  class Exam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Exam.belongsTo(models.Student, {foreignKey:'student', as:'exams'})
    }
  }
  Exam.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    marks: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName:'Exam',
    modelName: 'exam',
  });
  return Exam;
};