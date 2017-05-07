'use strict';

let Favorite = require('../models/favorite');

function hello(req, res) {
    const name = req.params.name || 'not found';
    res.status(200).send({
        data: [1, 2, 3],
        text: `Hello Word ${name}!`
    })
}

function getFavorite(req, res) {
    const favoriteId = req.params.id;
    res.status(200).send({data: favoriteId});
}

function getFavorites(req, res) {

}

function saveFavorite(req, res) {
    const params = req.body;

    let favorite = new Favorite();
    favorite.title = params.title;
    favorite.description = params.description;
    favorite.url = params.url;

    favorite.save((err, favoriteStored) => {
        if (err) {
            res.status(500).send({message: 'Error save favorite'});
        }
        res.status(200).send({favorite: favoriteStored});
    });
}

function updateFavorite(req, res) {
    const params = req.body;
    res.status(200).send({update: true, favorite: params});
}

function deleteFavorite(req, res) {
    const favoriteId = req.params.id;
    res.status(200).send({delete: true, data: favoriteId});
}

module.exports = {
    hello,
    getFavorite,
    getFavorites,
    saveFavorite,
    updateFavorite,
    deleteFavorite
};
