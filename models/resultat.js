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
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    prenom: DataTypes.STRING,
    nom: DataTypes.STRING,
    totalScore: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps : false,
    modelName: 'Resultat',
  });
  return Resultat;
};