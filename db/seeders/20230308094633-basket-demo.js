'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Baskets',
      [
        {
          userId: 2,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Baskets', null, {});
  },
};
