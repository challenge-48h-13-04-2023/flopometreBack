var express = require('express');
var StatusCodes = require('http-status-codes');
var router = express.Router();
const { Sequelize } = require("sequelize");
const { sequelize } = require("../models");
const Resultat = require("../models/resultat")(sequelize, Sequelize.DataTypes,Sequelize.Model);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(StatusCodes.StatusCodes.OK).json("test");
});

router.get('/startquiz', function(req, res, next) {
  res.status(StatusCodes.StatusCodes.OK).json("test");
});

router.get('/username_exists/:username', async function(req, res, next) {
  const username = req.params.username;
  const result = await Resultat.findOne({where: {username: username}});
  var found = false;
  if (result != null) {
    found = true;
  }
  res.status(StatusCodes.StatusCodes.OK).json(found);
});

module.exports = router;