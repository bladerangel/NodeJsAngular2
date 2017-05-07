'use strict';

let express = require('express');
let favoriteController = require("../controllers/favorite");
let api = express.Router();

api.get('/hello/:name?', favoriteController.hello);
api.get('/favorite/:id', favoriteController.getFavorite);
api.post('/favorite', favoriteController.saveFavorite);
api.put('/favorite', favoriteController.updateFavorite);
api.delete('/favorite/:id', favoriteController.deleteFavorite);

module.exports = api;