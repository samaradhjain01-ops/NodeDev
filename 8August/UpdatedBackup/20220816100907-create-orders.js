'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      customer:{
        type: DataTypes.INTEGER,
        references : { model : 'customers' , primaryKey: 'id'}
       },
      price: {
        type:DataTypes.FLOAT,
        allowNull:false,
        validate:{
          notEmpty:"Product price can not be ",
          notNull:"Product price is must"
        }
      },
      date: {
        type:DataTypes.DATE,
        allowNull:false,
        defaultValue: DataTypes.NOW,
      },
      delivery_status: {
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
      },
      delivery_address: {
        type:DataTypes.STRING,
        allowNull:false,
      },
      payment_status: {
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false,
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
    await queryInterface.dropTable('orders');
  }
};