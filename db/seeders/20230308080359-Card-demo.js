'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Cards',
      [
        {
          name: 'Shrine Keeper',
          img: 'https://cards.scryfall.io/large/front/6/f/6f2d3642-3eda-4b15-96dd-b0f0f9680bd7.jpg?1597376758',
          price: 600,
          newOrOld: 7,
          userId: 2,
          userCity: 'Красноярск',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Rienne, Angel of Rebirth',
          img: 'https://cards.scryfall.io/large/front/1/f/1fd040a8-b818-465b-a78b-d68402982abc.jpg?1563991325',
          price: 1100,
          newOrOld: 9,
          userId: 1,
          userCity: 'Санкт-Петербург',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Pearled Unicorn',
          img: 'https://cards.scryfall.io/large/front/6/d/6daf1aab-1e58-4a5a-bc66-cb3f7c86e0e8.jpg?1559591411',
          price: 500,
          newOrOld: 4,
          userId: 3,
          userCity: 'Тюмень',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Cards', null, {});
  },
};
