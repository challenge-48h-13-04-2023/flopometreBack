var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const cors = require('cors');

var indexRouter = require('./routes/index');
var resultat = require('./routes/resultat');
var question = require('./routes/question');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter, cors());
app.use('/resultat', resultat, cors());
app.use('/question', question, cors());

module.exports = app;
