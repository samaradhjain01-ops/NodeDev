'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductComment.init({
    product_comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductComment',
  });
  return ProductComment;
};