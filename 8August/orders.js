'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Orders.hasMany(models.OrderItemsForProducts,{'foreignKey':'order'})
      Orders.hasMany(models.CustomerFeedback,{'foreignKey':'order'})

    }
  }
  Orders.init({
    price: {
      type:DataTypes.FLOAT,
      allowNull:false,
      validate:{
        notEmpty:"Product price can not be ",
      }
    },
    date: {
      type:DataTypes.DATE,
      allowNull:false,
      defaultValue: DataTypes.NOW,
      validate:{
        notEmpty:"Product price can not be ",
      }
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
      type:DataTypes.TINYINT,
      allowNull:false,
      defaultValue:DataTypes.TINYINT(0)
    }
  }, {
    sequelize,
    tableName: 'orders',
    modelName: 'Orders',
  });
  return Orders;
};