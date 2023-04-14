var express = require("express");
var StatusCodes = require("http-status-codes");
const { Sequelize } = require("sequelize");
const { sequelize } = require("../models");
const resultat = require("../models/resultat");
const Resultat = require("../models/resultat")(sequelize, Sequelize.DataTypes,Sequelize.Model);
var router = express.Router();

/* GET home page. */
router.get("/", async function(req, res, next) {
    const top10 = await Resultat.findAll({order:[['totalscore','ASC']],limit: 10});
  res.status(StatusCodes.StatusCodes.OK).json(top10);
});

router.put("/add", async function(req, res, next) {
  if(req.body.prenom == null || req.body.nom == null || req.body.totalscore == null) {
    res.status(StatusCodes.StatusCodes.BAD_REQUEST).json("Missing nom, prenom or totalscore");
    return;
  }
  const newNom = req.body.nom;
  const newPrenom = req.body.prenom;
  const newTotalScore = req.body.totalscore;

  const playerExists = await Resultat.findOne({where: {nom: newNom, prenom: newPrenom}});
  if (playerExists) {
    res.status(StatusCodes.StatusCodes.BAD_REQUEST).json(newPrenom + " " + newNom + " is already on the leaderboard");
    return;
  }

  const newScore = Resultat.build({ prenom : newPrenom, nom : newNom, totalScore : newTotalScore });
  const result = await newScore.save();
  if (result) {
    res.status(StatusCodes.StatusCodes.OK).json(result);
  }
  else{
    res.status(StatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json("Error while saving the score");
  }
});

module.exports = router;
