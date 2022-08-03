'use strict';
module.exports = {
  async up(queryInterface, DataType) {
    await queryInterface.createTable('students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER
      },
      roll: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
      },
      name:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataType.INTEGER
      },
      email: {
        type: DataType.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataType.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataType.DATE
      }
    });
  },
  async down(queryInterface, DataType) {
    await queryInterface.dropTable('students');
  }
};