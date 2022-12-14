'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type : DataTypes.STRING,
        allowNull: false
      },
      email:{
        type : DataTypes.STRING,
        allowNull: false,
        unique : true
      },
      phone: {
        type : DataTypes.STRING,
        allowNull : true,
        unique : true
      },
      salary: {
        type  : DataTypes.FLOAT,
        allowNull  : false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('employees');
  }
};