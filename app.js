const express = require('express');
const app = express();

const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const router = require('./routes');
const cors = require('cors');

app.use(cookieParser());
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')));
// routes
app.use('/js', express.static(path.join(__dirname, 'dist', 'js')));
app.use('/css', express.static(path.join(__dirname, 'dist', 'css')));
app.use('/', router);

app.use(function(err,req,res,next) {
    console.log(err);
    // res.render(errpage)
});

module.exports = app;