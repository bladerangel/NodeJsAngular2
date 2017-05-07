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
    Favorite.findById(favoriteId)
        .then((favorite) =>
            res.status(200).send({favorite})
        )
        .catch((err) =>
            res.status(404).send({message: 'Not found favorite'})
        );
}

function getFavorites(req, res) {
    Favorite.find().sort('-title').exec()
        .then((favorites) => {
            if (!favorites.length)
                res.status(404).send({message: 'Empty favorites'});
            else
                res.status(200).send({favorites});
        })
        .catch((err) =>
            res.status(500).send({message: 'Error get favorites'})
        );
}

function saveFavorite(req, res) {
    const params = req.body;

    let favorite = new Favorite();
    favorite.title = params.title;
    favorite.description = params.description;
    favorite.url = params.url;

    favorite.save()
        .then((favoriteStored) =>
            res.status(200).send({favoriteStored}))
        .catch((err) =>
            res.status(500).send({message: 'Error save favorite'})
        );
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
