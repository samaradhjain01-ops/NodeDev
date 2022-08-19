'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('feedbacks', {
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
      order:{
        type: DataTypes.INTEGER,
        references : { model : 'orders' , primaryKey: 'id'}
      },
      customer_feedback: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
          notEmpty:"Feedback can not be empty",
          notNull:"Feedback is must",
        }
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
    await queryInterface.dropTable('feedbacks');
  }
};