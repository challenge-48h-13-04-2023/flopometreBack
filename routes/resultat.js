var express = require("express");
var StatusCodes = require("http-status-codes");
const { Sequelize } = require("sequelize");
const { sequelize } = require("../models");
const Resultat = require("../models/resultat")(sequelize, Sequelize.DataTypes,Sequelize.Model);
var router = express.Router();

/* GET home page. */
router.get("/", async function(req, res, next) {
    const top10 = await Resultat.findAll({order:[['totalscore','DESC']],limit: 10});
  if (top10 == null) {
    res.status(StatusCodes.StatusCodes.NOT_FOUND).json("No result found");
  }
  res.status(StatusCodes.StatusCodes.OK).json({top10});
});

module.exports = router;
