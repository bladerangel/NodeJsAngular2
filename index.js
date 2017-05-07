'use strict';

let app = require('./app');
let port = process.env.PORT || 3678;
let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/favoritedb', (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log('Connected successfully');
        app.listen(3678, () => {
            console.log(`Api rest work in http://localhost:${port}`);
        });
    }
});


