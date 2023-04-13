'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reponse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Reponse.belongsTo(models.Question)
    }
  }
  Reponse.init({
    value: DataTypes.STRING,
    isCorrect: DataTypes.BOOLEAN
  }, {
    sequelize,
    timestamps : false,
    modelName: 'Reponse',
  });
  return Reponse;
};