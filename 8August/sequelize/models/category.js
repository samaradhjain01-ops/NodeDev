'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.Product, {'foreignKey':'category', as:'product'})
    }
  }
  Category.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:false,
      validate:{
        notEmpty:"Categoty can not be empty",
        notNull:"Categoty is must"
      }
    },
    status: {
      type:DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName:'categories',
    modelName: 'Category',
  });
  return Category;
};