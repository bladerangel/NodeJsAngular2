'use strict';

let mongoose = require('mongoose');
let schema = mongoose.Schema;

let favoriteSchema = schema({
    title: String,
    description: String,
    url: String
});

module.exports = mongoose.model('Favorite', favoriteSchema);