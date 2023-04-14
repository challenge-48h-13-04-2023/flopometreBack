var express = require('express');
var StatusCodes = require('http-status-codes');
var router = express.Router();
const { Sequelize } = require("sequelize");
const { sequelize } = require("../models");
const Resultat = require("../models/resultat")(sequelize, Sequelize.DataTypes,Sequelize.Model);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(StatusCodes.StatusCodes.FORBIDDEN).json("TODO");
});

router.get('/startquiz', function(req, res, next) {
  res.status(StatusCodes.StatusCodes.FORBIDDEN).json("TODO");
});

module.exports = router;