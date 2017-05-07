'use strict';

let express = require('express');
let favoriteController = require("../controllers/favorite");
let api = express.Router();

api.get('/hello/:name?', favoriteController.hello);

module.exports = api;