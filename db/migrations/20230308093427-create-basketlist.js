"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Basketlists", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cardId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Cards",
          key: "id",
        },
      },
      count: {
        type: Sequelize.INTEGER,
      },
      basketId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Baskets",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Basketlists");
  },
};
