'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    queryInterface.changeColumn('users', 
      'email', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    });
  },

  async down (queryInterface, Sequelize) {

  }
};
