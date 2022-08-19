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
      name: {
        type:DataTypes.STRING,
        allowNull:false,
        unique:false,
        validate:{
          notEmpty:"Product can not be empty",
          notNull:"Product name is must"
        }
      },
      category:{
          type: DataTypes.INTEGER,
          references : { model : 'categories' , primaryKey: 'id'}
      },
      status: {
        type:DataTypes.BOOLEAN,
        defaultValue: false
      },
      description: {
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
          notEmpty:"Product Description can not be empty",
        }
      },
      price:{
        type:DataTypes.FLOAT,
        allowNull:false,
        validate:{
          isNumeric:"Invalid Price for this product",
          notNull:"Prodct price is must"
        }
      },
      image: DataTypes.STRING,
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