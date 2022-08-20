'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Customer Name Not Found !" },
          notEmpty: { msg: "Customer Name Can Not Be Empty !" },
        }
      },
      phone: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Customer Phone Can Not Be Empty !" },
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: { msg: "Customer Email Not Found !" },
          notEmpty: { msg: "Customer Email Can Not Be Empty !" },
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Customer Password Not Found !" },
          notEmpty: { msg: "Customer Password Can Not Be Empty !" },
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
    await queryInterface.dropTable('users');
  }
};