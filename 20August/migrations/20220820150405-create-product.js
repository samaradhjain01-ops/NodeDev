'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      category:{
        type: DataTypes.INTEGER,
        references:{model:'categories',primaryKey:'id'}
      },
      product_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Product Name Can Not Be Empty !" },
          notNull: { msg: "Product Name Not Found !" }
        }
      },
      product_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          isNumeric: { msg: "Product Price Always Be Numeric !" },
          notNull: { msg: "Product Price Not Found !" }
        }
      },
      description: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Product Description Can Not Be Empty !" }
        }
      },
      product_image: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Product Image Can Not Be Empty !" }
        }
      },
      product_status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
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
    await queryInterface.dropTable('products');
  }
};