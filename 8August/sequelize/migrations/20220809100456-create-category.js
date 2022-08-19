'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('categories', {
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
          notEmpty:"Categoty can not be empty",
          notNull:"Categoty is must"
        }
      },
      status: {
        type:DataTypes.BOOLEAN,
        defaultValue: false
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
    await queryInterface.dropTable('categories');
  }
};