'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerFeedback extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CustomerFeedback.belongsToMany(models.Customer,{'foreignKey':'customer'})
      CustomerFeedback.belongsToMany(models.Orders,{'foreignKey':'order'})

    }
  }
  CustomerFeedback.init({
    customer_feedback: {
      type: Sequelize.STRING,
      allowNull: false,
      validate:{
        notEmpty:"Feedback can not be empty",
        notNull:"Feedback is must",
      }
    }
  }, {
    sequelize,
    tableName:'feedbacks',
    modelName: 'CustomerFeedback',
  });
  return CustomerFeedback;
};