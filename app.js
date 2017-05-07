'use strict';

let express = require('express');
let bodyParser = require('body-parser');

let app = express();
let api = require('./routes/favorite');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    res.header('Access-Control-Request-Methods', 'GET, POST, PUT, DELETE ,OPTIONS');
    res.header('Allow', 'GET, POST, PUT, DELETE ,OPTIONS');

    next();
});

app.use('/api', api);

module.exports = app;