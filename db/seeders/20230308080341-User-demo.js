"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Dima I.",
          email: "dima_thedima@mail.ru",
          password: "cards4life",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Max R.",
          email: "max_rom@gmail.ru",
          password: "dxfcgfhvb",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Eugene E.",
          email: "dima_thedima@mail.ru",
          password: "iAmCar",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
