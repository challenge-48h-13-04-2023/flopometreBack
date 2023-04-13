var express = require("express");
var StatusCodes = require("http-status-codes");
const { Sequelize } = require("sequelize");
const { sequelize } = require("../models");
const Question = require("../models/question")(sequelize, Sequelize.DataTypes,Sequelize.Model);
const QuestionDTO = require("../dto/questionDTO");
var router = express.Router();

/* GET home page. */
router.get("/serve10", async function(req, res, next) {
    const questions = await Question.findAll({order: Sequelize.literal('rand()'),limit: 10});

    const questionsRep = [];

    for(i = 0; i < questions.length; i++) {
        questDto = new QuestionDTO(questions[i])
        await questDto.loadReponses(questions[i].id)
        questionsRep.push(questDto);
    }
  res.status(StatusCodes.StatusCodes.OK).json(questionsRep);
});

module.exports = router;
