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
  const newUsername = req.body.username;
  const newTotalScore = req.body.totalscore;

  const newScore = Resultat.build({ username : newUsername, totalscore : newTotalScore });

  const result = await newScore.save();
  res.status(StatusCodes.StatusCodes.OK).json(result);
});

module.exports = router;
