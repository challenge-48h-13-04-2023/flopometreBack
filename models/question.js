'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Question.hasMany(models.Reponse)
    }
  }
  Question.init({
    value: DataTypes.STRING,
    image_path: {type: DataTypes.STRING, allowNull: true}
  }, {
    sequelize,
    timestamps : false,
    modelName: 'Question',
  });
  return Question;
};