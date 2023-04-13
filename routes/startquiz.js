var express = require('express');
var StatusCodes = require('http-status-codes');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(StatusCodes.StatusCodes.OK).json("test");
});

module.exports = router;