var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function() {

    var app = express();

    app.use(bodyParser.json());
    app.use(expressValidator());

    load('infra', {cwd : 'app'})
        .then('dao')
        .then('services')
        .then('controllers')
        .into(app);

    return app;
}