'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItemsForProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrderItemsForProducts.belongsToMany(models.Orders,{'foreignKey':'order'})
      OrderItemsForProducts.belongsToMany(models.Product,{'foreignKey':'product'})
    }
  }
  OrderItemsForProducts.init({
    quantity: {
      type:DataTypes.INTEGER,
      defaultValue:1,
    }
  }, {
    sequelize,
    tableName:'orders_items_products',
    modelName: 'OrderItemsForProducts',
  });
  return OrderItemsForProducts;
};