var express = require("express");
var StatusCodes = require("http-status-codes");
const { Sequelize } = require("sequelize");
const { sequelize } = require("../models");
const Question = require("../models/question")(
  sequelize,
  Sequelize.DataTypes,
  Sequelize.Model
);
const QuestionDTO = require("../dto/questionDTO");
var router = express.Router();

/* GET home page. */
router.get("/serve10", async function (req, res, next) {
  const questions = await Question.findAll({
    order: Sequelize.literal("rand()"),
    limit: 10,
  });

  const questionsRep = [];

  for (i = 0; i < questions.length; i++) {
    questDto = new QuestionDTO(questions[i]);
    await questDto.loadReponses(questions[i].id);
    let cringeHighest = 0;
    for (j = 0; j < questDto.reponses.length; j++) {
      if (questDto.reponses[j].nbDePoints > cringeHighest) {
        cringeHighest = questDto.reponses[j].nbDePoints;
      }
    }
    questDto.cringeMax = cringeHighest;
    questionsRep.push(questDto);
  }

  res.status(StatusCodes.StatusCodes.OK).json(questionsRep);
});

router.get("/getbyid/:id", async function (req, res, next) {
  const id = req.params.id;
  const q = await Question.findOne({ where: { id: id } });
  if (q == null) {
    res.status(StatusCodes.StatusCodes.NOT_FOUND).json("No question found");
    return;
  }
  const questDto = new QuestionDTO(q);
  await questDto.loadReponses(q.id);

  let cringeHighest = 0;
  for (j = 0; j < questDto.reponses.length; j++) {
    if (questDto.reponses[j].nbDePoints > cringeHighest) {
      cringeHighest = questDto.reponses[j].nbDePoints;
    }
  }
  questDto.cringeMax = cringeHighest;
  res.status(StatusCodes.StatusCodes.OK).json(questDto);
});

module.exports = router;
