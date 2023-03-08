'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Basketlists',
      [
        {
          cardId: 1,
          count: 0,
          basketId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cardId: 2,
          count: 1,
          basketId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cardId: 3,
          count: 4,
          basketId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Basketlists', null, {});
  },
};
