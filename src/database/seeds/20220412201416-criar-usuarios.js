'use strict';
const bcryptjs = require('bcryptjs');

module.exports = {
  async up (queryInterface) {

      await queryInterface.bulkInsert(
        'users', 
        [
          {
            nome: 'Luiz',
            email: 'luiz@gmail.com',
            password_hash: await bcryptjs.hash('123456', 8),
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            nome: 'Luiz 1',
            email: 'luiz1@gmail.com',
            password_hash: await bcryptjs.hash('12345666', 8),
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            nome: 'Luiz 2',
            email: 'luiz2@gmail.com',
            password_hash: await bcryptjs.hash('1452345', 8),
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            nome: 'Luiz 3',
            email: 'luiz3@gmail.com',
            password_hash: await bcryptjs.hash('6345634', 8),
            created_at: new Date(),
            updated_at: new Date()
          },
        ],
        {});

  },

  async down (queryInterface, Sequelize) {

  }
};
