'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, {'foreignKey':'category', as:'cate'})
      Product.hasMany(models.OrderItemsForProducts,{'foreignKey':'product'})
    }
  }
  Product.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:false,
      validate:{
        notEmpty:"Product can not be empty",
        notNull:"Product name is must"
      }
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
    image: DataTypes.STRING
  }, {
    sequelize,
    tableName:'products',
    modelName: 'Product',
  });
  return Product;
};