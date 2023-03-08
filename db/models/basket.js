'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    static associate({ User, Basketlist }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(Basketlist, { foreignKey: 'basketId' });
    }
  }
  Basket.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Basket',
    },
  );
  return Basket;
};
