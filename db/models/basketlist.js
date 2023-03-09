"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Basketlist extends Model {
    static associate({ Basket, Card }) {
      this.belongsTo(Basket, { foreignKey: "basketId" });
      this.belongsTo(Card, { foreignKey: "cardId" });
    }
  }
  Basketlist.init(
    {
      cardId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Cards",
          key: "id",
        },
      },
      count: DataTypes.INTEGER,
      basketId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Baskets",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Basketlist",
    }
  );
  return Basketlist;
};
