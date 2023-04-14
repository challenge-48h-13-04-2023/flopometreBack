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
//   if (top10 || top10.keys(obj).length === 0) {
//     res.status(StatusCodes.StatusCodes.NOT_FOUND).json("No result found");
//   }
  res.status(StatusCodes.StatusCodes.OK).json(top10);
});

router.put("/add", async function(req, res, next) {
  if(req.body.username == null || req.body.totalscore == null) {
    res.status(StatusCodes.StatusCodes.BAD_REQUEST).json("Missing username or totalscore");
    return;
  }
  const usernameExists = await Resultat.findOne({where: {username: req.body.username}});
  if (usernameExists != null) {
    res.status(StatusCodes.StatusCodes.BAD_REQUEST).json("Username is already on the leaderboard");
    return;
  }
  const newUsername = req.body.username;
  const newTotalScore = req.body.totalscore;

  const newScore = Resultat.build({ username : newUsername, totalScore : newTotalScore });
  const result = await newScore.save();
  res.status(StatusCodes.StatusCodes.OK).json(result);
});

module.exports = router;
