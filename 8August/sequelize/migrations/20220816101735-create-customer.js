'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          notEmpty:"Customer Name can not be empty",
          notNull:"Customer Name is must"
        }
      },
      phone: {
        type: DataTypes.STRING,
        validate:{
          notEmpty:"Customer Phone can not be empty",
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true,
        validate:{
          notEmpty:"Email can not be empty",
          notNull:"Email is must",
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          notEmpty:"Password can not be empty",
          notNull:"Password is must"
        }
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
    await queryInterface.dropTable('customers');
  }
};