'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('order_items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      customer:
      {
        type:DataTypes.INTEGER,
        references:{model:'users', primaryKey:'id'}
      },
      product:
      {
        type:DataTypes.INTEGER,
        references:{model:'products', primaryKey:'id'}
      },
      qty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Quantity Can Not Be Empty !" },
          notNull: { msg: "Quantity Not Found !" }
        }
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Price Can Not Be Empty !" },
          notNull: { msg: "Price Not Found !" }
        }
      },
      discount: {
        type: DataTypes.FLOAT,
        allowNull: true,
        validate: {
          notEmpty: { msg: "Discount Can Not Be Empty !" }
        }
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Amount Can Not Be Empty !" },
          notNull: { msg: "Amount Not Found !" }
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
    await queryInterface.dropTable('order_items');
  }
};