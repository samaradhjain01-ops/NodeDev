'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('orders_items_products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      product:{
        type: DataTypes.INTEGER,
        references : { model : 'products' , primaryKey: 'id'}
       },
       order:{
        type: DataTypes.INTEGER,
        references : { model : 'orders' , primaryKey: 'id'}
       },
      quantity: {
        type:DataTypes.INTEGER,
        defaultValue:1,
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
    await queryInterface.dropTable('orders_items_products');
  }
};