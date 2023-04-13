const { Sequelize, Model, DataTypes, TimeoutError } = require("sequelize");
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, 
  {
  dialect: 'mysql'
  }
)
const Reponse = require('../models/reponse')(sequelize, Sequelize.DataTypes,Sequelize.Model);

class QuestionDTO {
    id;
    value;
    reponses = [];

    constructor(Question){
        this.id = Question.id;
        this.value = Question.value;
    }

    async loadReponses(idQuestion){
        const reponses = await Reponse.findAll({where: {idQuestion : idQuestion}});
        this.reponses = reponses
    }
}
module.exports = QuestionDTO;
