'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.hasMany(models.CustomerFeedback,{'foreignKey':'customer'})
    }
  }
  Customer.init({
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate:{
        notEmpty:"Customer Name can not be empty",
        notNull:"Customer Name is must"
      }
    },
    phone: {
      type: Sequelize.STRING,
      validate:{
        notEmpty:"Customer Phone can not be empty",
      }
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique:true,
      validate:{
        notEmpty:"Email can not be empty",
        notNull:"Email is must",
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate:{
        notEmpty:"Password can not be empty",
        notNull:"Password is must"
      }
    }
  }, {
    sequelize,
    tableName:'customers',
    modelName: 'Customer',
  });
  return Customer;
};