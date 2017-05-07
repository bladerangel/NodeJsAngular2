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
        .then((favorite) => {
            if (favorite !== null)
                res.status(200).send({favorite});
            else
                res.status(404).send({message: 'Not found favorite'});
        })
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
    const favoriteId = req.params.id;
    const params = req.body;

    Favorite.findByIdAndUpdate(favoriteId, params)
        .then((favoriteUpdated) => {
            if (favoriteUpdated !== null)
                res.status(200).send({favoriteUpdated});
            else
                res.status(404).send({message: 'Not found favorite'});
        })
        .catch((err) =>
            res.status(404).send({message: 'Not found favorite'})
        );
}

function deleteFavorite(req, res) {
    const favoriteId = req.params.id;

    Favorite.findByIdAndRemove(favoriteId)
        .then((favoriteRemove) => {
            if (favoriteRemove !== null)
                res.status(200).send({favoriteRemove});
            else
                res.status(404).send({message: 'Not found favorite'});
        })
        .catch((err) =>
            res.status(404).send({message: 'Not found favorite'})
        );
}

module.exports = {
    hello,
    getFavorite,
    getFavorites,
    saveFavorite,
    updateFavorite,
    deleteFavorite
};
