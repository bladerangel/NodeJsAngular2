'use strict';

let express = require('express');
let favoriteController = require("../controllers/favorite");
let api = express.Router();

api.get('/hello/:name?', favoriteController.hello);
api.get('/favorite/:id', favoriteController.getFavorite);
api.get('/favorites', favoriteController.getFavorites);
api.post('/favorite', favoriteController.saveFavorite);
api.put('/favorite/:id', favoriteController.updateFavorite);
api.delete('/favorite/:id', favoriteController.deleteFavorite);

module.exports = api;