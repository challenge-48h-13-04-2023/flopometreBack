'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Resultat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  Resultat.init({
    username: {type: DataTypes.STRING, primaryKey: true},
    totalScore: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps : false,
    modelName: 'Resultat',
  });
  return Resultat;
};